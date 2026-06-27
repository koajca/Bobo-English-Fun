import { getRewardForTopic } from '../data/rewards'
import type { GameMode, Progress, Question, SessionResult, TopicId } from '../types'

export const defaultProgress: Progress = {
  stars: 0,
  completedSessions: [],
  unlockedStickers: [],
  wordStats: {},
}

export function recordAnswer(progress: Progress, question: Question, isCorrect: boolean): Progress {
  const current = progress.wordStats[question.prompt.id] ?? { seen: 0, correct: 0, wrong: 0 }

  return {
    ...progress,
    wordStats: {
      ...progress.wordStats,
      [question.prompt.id]: {
        seen: current.seen + 1,
        correct: current.correct + (isCorrect ? 1 : 0),
        wrong: current.wrong + (isCorrect ? 0 : 1),
      },
    },
  }
}

export function completeSession(
  progress: Progress,
  topicId: TopicId,
  mode: GameMode,
  starsEarned: number,
  totalQuestions: number,
): { progress: Progress; result: SessionResult } {
  const sessionId = `${topicId}-${mode}-${Date.now()}`
  const reward = getRewardForTopic(topicId)
  const unlockedStickerIds =
    reward && !progress.unlockedStickers.includes(reward.id) && starsEarned > 0 ? [reward.id] : []

  const nextProgress: Progress = {
    ...progress,
    stars: progress.stars + starsEarned,
    completedSessions: [...progress.completedSessions, sessionId],
    unlockedStickers: [...progress.unlockedStickers, ...unlockedStickerIds],
  }

  return {
    progress: nextProgress,
    result: {
      topicId,
      mode,
      starsEarned,
      totalQuestions,
      unlockedStickerIds,
    },
  }
}
