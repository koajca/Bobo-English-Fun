export type TopicId = 'animals' | 'fruits' | 'colors'

export type GameMode = 'listen-and-choose' | 'tap-the-word'

export type BoboMood = 'idle' | 'happy' | 'tryAgain' | 'celebrate'

export type Topic = {
  id: TopicId
  titleVi: string
  titleEn: string
  description: string
  color: string
}

export type VocabularyItem = {
  id: string
  topic: TopicId
  word: string
  vietnamese: string
  phonetic?: string
  image: string
  color: string
}

export type Question = {
  id: string
  prompt: VocabularyItem
  options: VocabularyItem[]
}

export type StickerReward = {
  id: string
  topic: TopicId
  title: string
  description: string
  color: string
}

export type WordStats = {
  seen: number
  correct: number
  wrong: number
}

export type Progress = {
  stars: number
  completedSessions: string[]
  unlockedStickers: string[]
  wordStats: Record<string, WordStats>
}

export type SessionResult = {
  topicId: TopicId
  mode: GameMode
  starsEarned: number
  totalQuestions: number
  unlockedStickerIds: string[]
}
