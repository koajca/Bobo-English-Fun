import { ArrowLeft, Ear, Hand } from 'lucide-react'
import { BigButton } from '../components/BigButton'
import { getTopic } from '../data/topics'
import { uiText } from '../data/uiText'
import type { GameMode, TopicId } from '../types'

type Props = {
  topicId: TopicId
  onBack: () => void
  onSelectMode: (mode: GameMode) => void
}

export function GameSelectScreen({ topicId, onBack, onSelectMode }: Props) {
  const topic = getTopic(topicId)

  return (
    <main className="screen">
      <header className="screen-header">
        <BigButton variant="ghost" onClick={onBack} aria-label="Quay lại">
          <ArrowLeft aria-hidden="true" />
        </BigButton>
        <div>
          <p className="eyebrow">{topic?.titleVi}</p>
          <h1>{uiText.chooseGame}</h1>
        </div>
      </header>

      <section className="mode-grid">
        <button className="mode-card" onClick={() => onSelectMode('listen-and-choose')}>
          <Ear size={44} aria-hidden="true" />
          <strong>{uiText.listenAndChoose}</strong>
          <span>Listen and Choose</span>
          <p>Nghe từ tiếng Anh rồi chọn hình đúng.</p>
        </button>
        <button className="mode-card" onClick={() => onSelectMode('tap-the-word')}>
          <Hand size={44} aria-hidden="true" />
          <strong>{uiText.tapTheWord}</strong>
          <span>Tap the Word</span>
          <p>Đọc gợi ý và chạm vào hình phù hợp.</p>
        </button>
      </section>
    </main>
  )
}
