import { ArrowLeft } from 'lucide-react'
import { BigButton } from '../components/BigButton'
import { topics } from '../data/topics'
import { uiText } from '../data/uiText'
import type { TopicId } from '../types'

type Props = {
  onBack: () => void
  onSelectTopic: (topicId: TopicId) => void
}

export function TopicScreen({ onBack, onSelectTopic }: Props) {
  return (
    <main className="screen">
      <header className="screen-header">
        <BigButton variant="ghost" onClick={onBack} aria-label="Về nhà">
          <ArrowLeft aria-hidden="true" />
        </BigButton>
        <div>
          <p className="eyebrow">Bước 1</p>
          <h1>{uiText.chooseTopic}</h1>
        </div>
      </header>

      <section className="topic-grid">
        {topics.map((topic) => (
          <button
            className="topic-card"
            key={topic.id}
            style={{ '--topic-color': topic.color } as React.CSSProperties}
            onClick={() => onSelectTopic(topic.id)}
          >
            <span className="topic-card__orb" />
            <strong>{topic.titleVi}</strong>
            <em>{topic.titleEn}</em>
            <p>{topic.description}</p>
          </button>
        ))}
      </section>
    </main>
  )
}
