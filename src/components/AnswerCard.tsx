import type { VocabularyItem } from '../types'
import { VocabularyArt } from './VocabularyArt'

type Props = {
  item: VocabularyItem
  disabled?: boolean
  isSelected?: boolean
  isCorrect?: boolean
  onSelect: (item: VocabularyItem) => void
}

export function AnswerCard({ item, disabled, isSelected, isCorrect, onSelect }: Props) {
  const stateClass = isSelected ? (isCorrect ? 'answer-card--correct' : 'answer-card--wrong') : ''

  return (
    <button className={`answer-card ${stateClass}`} disabled={disabled} onClick={() => onSelect(item)}>
      <VocabularyArt item={item} />
      <span>{item.word}</span>
    </button>
  )
}
