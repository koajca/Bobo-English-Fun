import { ArrowLeft } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { AnswerCard } from '../components/AnswerCard'
import { AudioButton } from '../components/AudioButton'
import { BigButton } from '../components/BigButton'
import { BoboMascot } from '../components/BoboMascot'
import { StarCounter } from '../components/StarCounter'
import { WordCard } from '../components/WordCard'
import { getTopic } from '../data/topics'
import { uiText } from '../data/uiText'
import { createSessionQuestions, isCorrectAnswer } from '../game/questionFactory'
import { recordAnswer } from '../game/progress'
import { playTone, speakEnglish } from '../utils/sound'
import type { BoboMood, GameMode, Progress, SessionResult, TopicId, VocabularyItem } from '../types'

type Props = {
  topicId: TopicId
  mode: GameMode
  progress: Progress
  onProgressChange: (progress: Progress) => void
  onComplete: (stars: number, total: number) => void
  onBack: () => void
}

export function GameplayScreen({ topicId, mode, progress, onProgressChange, onComplete, onBack }: Props) {
  const questions = useMemo(() => createSessionQuestions(topicId), [topicId, mode])
  const [index, setIndex] = useState(0)
  const [stars, setStars] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [mood, setMood] = useState<BoboMood>('idle')
  const [message, setMessage] = useState('Nghe kỹ rồi chọn hình đúng nhé!')
  const [showWord, setShowWord] = useState(false)
  const question = questions[index]
  const topic = getTopic(topicId)

  useEffect(() => {
    setSelectedId(null)
    setMood('idle')
    setShowWord(false)
    setMessage(mode === 'listen-and-choose' ? 'Nghe từ tiếng Anh rồi chọn hình nhé!' : `Tìm hình: ${question.prompt.word}`)
    if (mode === 'listen-and-choose') {
      window.setTimeout(() => speakEnglish(question.prompt.word), 250)
    }
  }, [index, mode, question.prompt.word])

  function handleListen() {
    playTone('click')
    speakEnglish(question.prompt.word)
  }

  function moveNext(nextStars: number) {
    if (index + 1 >= questions.length) {
      playTone('finish')
      onComplete(nextStars, questions.length)
      return
    }

    setIndex((current) => current + 1)
  }

  function handleSelect(item: VocabularyItem) {
    if (selectedId) return

    const correct = isCorrectAnswer(question, item.id)
    setSelectedId(item.id)
    onProgressChange(recordAnswer(progress, question, correct))

    if (correct) {
      const nextStars = stars + 1
      setStars(nextStars)
      setMood('happy')
      setMessage(`Giỏi lắm! ${question.prompt.word} là ${question.prompt.vietnamese}.`)
      setShowWord(true)
      playTone('correct')
      window.setTimeout(() => moveNext(nextStars), 1150)
      return
    }

    setMood('tryAgain')
    setMessage('Thử lại nhé, con gần đúng rồi!')
    playTone('wrong')
    window.setTimeout(() => {
      setSelectedId(null)
      setMood('idle')
    }, 800)
  }

  const promptText =
    mode === 'listen-and-choose'
      ? 'Con nghe thấy từ nào?'
      : `Tìm hình cho từ ${question.prompt.word}`

  return (
    <main className="screen gameplay-screen">
      <header className="gameplay-top">
        <BigButton variant="ghost" onClick={onBack} aria-label="Quay lại">
          <ArrowLeft aria-hidden="true" />
        </BigButton>
        <div>
          <p className="eyebrow">{topic?.titleVi}</p>
          <h1>{promptText}</h1>
        </div>
        <StarCounter stars={stars} />
      </header>

      <section className="gameplay-status">
        <BoboMascot mood={mood} message={message} />
        <div className="question-panel">
          <span className="progress-pill">
            {index + 1}/{questions.length}
          </span>
          <AudioButton label={uiText.listen} onClick={handleListen} />
          {mode === 'tap-the-word' && (
            <div className="word-prompt">
              <strong>{question.prompt.word}</strong>
              <span>{question.prompt.phonetic}</span>
            </div>
          )}
        </div>
      </section>

      <section className="answer-grid">
        {question.options.map((option) => (
          <AnswerCard
            key={option.id}
            item={option}
            disabled={Boolean(selectedId)}
            isSelected={selectedId === option.id}
            isCorrect={option.id === question.prompt.id}
            onSelect={handleSelect}
          />
        ))}
      </section>

      {showWord && <WordCard item={question.prompt} />}
    </main>
  )
}
