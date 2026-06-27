import { defaultProgress } from '../game/progress'
import type { Progress } from '../types'

const PROGRESS_KEY = 'bobo-english-fun-progress'

export function loadProgress(): Progress {
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY)
    if (!raw) return defaultProgress
    return { ...defaultProgress, ...JSON.parse(raw) }
  } catch {
    return defaultProgress
  }
}

export function saveProgress(progress: Progress) {
  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}
