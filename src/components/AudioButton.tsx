import { Volume2 } from 'lucide-react'
import { BigButton } from './BigButton'

type Props = {
  onClick: () => void
  label: string
}

export function AudioButton({ onClick, label }: Props) {
  return (
    <BigButton variant="secondary" className="audio-button" onClick={onClick} aria-label={label}>
      <Volume2 size={28} aria-hidden="true" />
      <span>{label}</span>
    </BigButton>
  )
}
