import type { VocabularyItem } from '../types'
import { VocabularyArt } from './VocabularyArt'

type Props = {
  item: VocabularyItem
}

export function WordCard({ item }: Props) {
  return (
    <div className="word-card">
      <VocabularyArt item={item} size="small" />
      <div>
        <strong>{item.word}</strong>
        {item.phonetic && <span>{item.phonetic}</span>}
        <p>{item.vietnamese}</p>
      </div>
    </div>
  )
}
