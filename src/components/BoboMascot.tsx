import type { BoboMood } from '../types'

type Props = {
  mood: BoboMood
  message?: string
}

const moodText: Record<BoboMood, string> = {
  idle: 'Cùng học với Bobo nào!',
  happy: 'Giỏi lắm!',
  tryAgain: 'Thử lại nhé!',
  celebrate: 'Tuyệt vời!',
}

export function BoboMascot({ mood, message }: Props) {
  const mouth = mood === 'tryAgain' ? 'M58 82 Q70 75 82 82' : 'M55 78 Q70 94 88 78'
  const arm = mood === 'celebrate' || mood === 'happy' ? 'M38 67 L19 48 M102 67 L121 48' : 'M38 72 L22 82 M102 72 L118 82'

  return (
    <div className={`bobo bobo--${mood}`} aria-live="polite">
      <svg className="bobo__art" viewBox="0 0 140 140" role="img" aria-label="Bobo">
        <circle cx="44" cy="35" r="21" fill="#8a5a32" />
        <circle cx="96" cy="35" r="21" fill="#8a5a32" />
        <circle cx="70" cy="72" r="48" fill="#b77946" />
        <circle cx="70" cy="80" r="28" fill="#ffd7a8" />
        <circle cx="54" cy="62" r="6" fill="#263047" />
        <circle cx="86" cy="62" r="6" fill="#263047" />
        <path d={mouth} fill="none" stroke="#263047" strokeWidth="5" strokeLinecap="round" />
        <path d={arm} fill="none" stroke="#8a5a32" strokeWidth="9" strokeLinecap="round" />
        <circle cx="70" cy="72" r="4" fill="#263047" />
      </svg>
      <div className="bobo__bubble">{message ?? moodText[mood]}</div>
    </div>
  )
}
