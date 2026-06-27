import { ArrowLeft, LockKeyhole, Star } from 'lucide-react'
import { BigButton } from '../components/BigButton'
import { rewards } from '../data/rewards'
import { uiText } from '../data/uiText'
import type { Progress } from '../types'

type Props = {
  progress: Progress
  onBack: () => void
}

export function RewardsScreen({ progress, onBack }: Props) {
  return (
    <main className="screen">
      <header className="screen-header">
        <BigButton variant="ghost" onClick={onBack} aria-label="Về nhà">
          <ArrowLeft aria-hidden="true" />
        </BigButton>
        <div>
          <p className="eyebrow">{uiText.rewards}</p>
          <h1>{uiText.stickerAlbum}</h1>
        </div>
      </header>

      <section className="reward-grid">
        {rewards.map((reward) => {
          const unlocked = progress.unlockedStickers.includes(reward.id)
          return (
            <article className={`reward-card ${unlocked ? 'reward-card--unlocked' : ''}`} key={reward.id}>
              <div className="reward-card__badge" style={{ '--reward-color': reward.color } as React.CSSProperties}>
                {unlocked ? <Star aria-hidden="true" /> : <LockKeyhole aria-hidden="true" />}
              </div>
              <strong>{reward.title}</strong>
              <p>{reward.description}</p>
              <span>{unlocked ? uiText.unlocked : uiText.locked}</span>
            </article>
          )
        })}
      </section>
    </main>
  )
}
