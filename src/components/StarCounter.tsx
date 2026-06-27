type Props = {
  stars: number
  label?: string
}

export function StarCounter({ stars, label = 'Sao' }: Props) {
  return (
    <div className="star-counter" aria-label={`${stars} ${label}`}>
      <span className="star-counter__icon">★</span>
      <span>{stars}</span>
    </div>
  )
}
