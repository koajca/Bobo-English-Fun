import { useEffect, useState } from 'react'
import { GameSelectScreen } from '../screens/GameSelectScreen'
import { GameplayScreen } from '../screens/GameplayScreen'
import { HomeScreen } from '../screens/HomeScreen'
import { ResultScreen } from '../screens/ResultScreen'
import { RewardsScreen } from '../screens/RewardsScreen'
import { TopicScreen } from '../screens/TopicScreen'
import { completeSession } from '../game/progress'
import { loadProgress, saveProgress } from '../utils/storage'
import type { GameMode, Progress, SessionResult, TopicId } from '../types'
import '../styles.css'

type Screen = 'home' | 'topics' | 'modes' | 'gameplay' | 'result' | 'rewards'

export function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [topicId, setTopicId] = useState<TopicId>('animals')
  const [mode, setMode] = useState<GameMode>('listen-and-choose')
  const [progress, setProgress] = useState<Progress>(() => loadProgress())
  const [result, setResult] = useState<SessionResult | null>(null)

  useEffect(() => {
    saveProgress(progress)
  }, [progress])

  function updateProgress(nextProgress: Progress) {
    setProgress(nextProgress)
  }

  function handleSessionComplete(starsEarned: number, totalQuestions: number) {
    const completed = completeSession(progress, topicId, mode, starsEarned, totalQuestions)
    setProgress(completed.progress)
    setResult(completed.result)
    setScreen('result')
  }

  function startMode(nextMode: GameMode) {
    setMode(nextMode)
    setResult(null)
    setScreen('gameplay')
  }

  function replay() {
    setResult(null)
    setScreen('gameplay')
  }

  return (
    <div className="app-shell">
      {screen === 'home' && (
        <HomeScreen stars={progress.stars} onPlay={() => setScreen('topics')} onRewards={() => setScreen('rewards')} />
      )}

      {screen === 'topics' && (
        <TopicScreen
          onBack={() => setScreen('home')}
          onSelectTopic={(selectedTopicId) => {
            setTopicId(selectedTopicId)
            setScreen('modes')
          }}
        />
      )}

      {screen === 'modes' && (
        <GameSelectScreen topicId={topicId} onBack={() => setScreen('topics')} onSelectMode={startMode} />
      )}

      {screen === 'gameplay' && (
        <GameplayScreen
          key={`${topicId}-${mode}-${result?.starsEarned ?? 'new'}`}
          topicId={topicId}
          mode={mode}
          progress={progress}
          onProgressChange={updateProgress}
          onComplete={handleSessionComplete}
          onBack={() => setScreen('modes')}
        />
      )}

      {screen === 'result' && result && (
        <ResultScreen
          result={result}
          onHome={() => setScreen('home')}
          onReplay={replay}
          onRewards={() => setScreen('rewards')}
        />
      )}

      {screen === 'rewards' && <RewardsScreen progress={progress} onBack={() => setScreen('home')} />}
    </div>
  )
}
