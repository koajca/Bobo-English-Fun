import { Gift, Home, RotateCcw } from 'lucide-react'
import { BigButton } from '../components/BigButton'
import { BoboMascot } from '../components/BoboMascot'
import { StarCounter } from '../components/StarCounter'
import { uiText } from '../data/uiText'
import type { SessionResult } from '../types'

type Props = {
  result: SessionResult
  onHome: () => void
  onReplay: () => void
  onRewards: () => void
}

export function ResultScreen({ result, onHome, onReplay, onRewards }: Props) {
  return (
    <main className="screen result-screen">
      <BoboMascot mood="celebrate" message={uiText.sessionDone} />
      <section className="result-panel">
        <p className="eyebrow">{uiText.result}</p>
        <h1>Con nhận được {result.starsEarned} ngôi sao!</h1>
        <StarCounter stars={result.starsEarned} />
        {result.unlockedStickerIds.length > 0 && <p className="unlock-note">Bobo có sticker mới cho con!</p>}
      </section>

      <div className="result-actions">
        <BigButton onClick={onReplay}>
          <RotateCcw aria-hidden="true" />
          {uiText.playAgain}
        </BigButton>
        <BigButton variant="secondary" onClick={onRewards}>
          <Gift aria-hidden="true" />
          {uiText.rewards}
        </BigButton>
        <BigButton variant="ghost" onClick={onHome}>
          <Home aria-hidden="true" />
          {uiText.home}
        </BigButton>
      </div>
    </main>
  )
}
