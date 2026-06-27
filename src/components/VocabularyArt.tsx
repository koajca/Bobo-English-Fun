import type { VocabularyItem } from '../types'

type Props = {
  item: VocabularyItem
  size?: 'small' | 'large'
}

export function VocabularyArt({ item, size = 'large' }: Props) {
  const label = item.word.slice(0, 2).toUpperCase()
  const isColor = item.topic === 'colors'

  return (
    <svg
      className={`vocab-art vocab-art--${size}`}
      viewBox="0 0 140 140"
      role="img"
      aria-label={item.vietnamese}
    >
      <rect width="140" height="140" rx="30" fill="#fff8ea" />
      <circle cx="70" cy="68" r="44" fill={item.color} opacity={isColor ? 1 : 0.88} />
      {!isColor && <circle cx="54" cy="58" r="7" fill="#ffffff" />}
      {!isColor && <circle cx="86" cy="58" r="7" fill="#ffffff" />}
      {!isColor && <path d="M54 84 Q70 98 88 84" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />}
      {isColor && <circle cx="70" cy="68" r="25" fill="#ffffff" opacity="0.3" />}
      <text x="70" y="122" textAnchor="middle" fontSize="24" fontWeight="800" fill="#263047">
        {label}
      </text>
    </svg>
  )
}
