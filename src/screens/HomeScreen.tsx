import { BookOpen, Gift, Play, Settings } from 'lucide-react'
import { BigButton } from '../components/BigButton'
import { BoboMascot } from '../components/BoboMascot'
import { StarCounter } from '../components/StarCounter'
import { uiText } from '../data/uiText'

type Props = {
  stars: number
  onPlay: () => void
  onRewards: () => void
}

export function HomeScreen({ stars, onPlay, onRewards }: Props) {
  return (
    <main className="screen home-screen">
      <header className="top-bar">
        <div>
          <p className="eyebrow">Mini game học tiếng Anh</p>
          <h1>{uiText.appTitle}</h1>
        </div>
        <StarCounter stars={stars} />
      </header>

      <section className="home-hero">
        <BoboMascot mood="idle" message="Xin chào, mình là Bobo!" />
        <div className="home-hero__content">
          <h2>Cùng Bobo nghe, nhìn và học từ mới nhé.</h2>
          <BigButton onClick={onPlay}>
            <Play size={30} aria-hidden="true" />
            <span>{uiText.play}</span>
          </BigButton>
        </div>
      </section>

      <nav className="home-actions" aria-label="Điều hướng chính">
        <button onClick={onPlay}>
          <BookOpen aria-hidden="true" />
          <span>{uiText.vocabulary}</span>
        </button>
        <button onClick={onRewards}>
          <Gift aria-hidden="true" />
          <span>{uiText.rewards}</span>
        </button>
        <button type="button">
          <Settings aria-hidden="true" />
          <span>{uiText.settings}</span>
        </button>
      </nav>
    </main>
  )
}
