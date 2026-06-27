import { getVocabularyByTopic, vocabulary } from '../data/vocabulary'
import type { Question, TopicId, VocabularyItem } from '../types'

const SESSION_LENGTH = 5
const OPTION_COUNT = 3

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5)
}

function makeOptions(answer: VocabularyItem, topicItems: VocabularyItem[]) {
  const pool = vocabulary.filter((item) => item.id !== answer.id)
  const sameTopicDistractors = topicItems.filter((item) => item.id !== answer.id)
  const mixedPool = shuffle([...sameTopicDistractors, ...pool])
  const seen = new Set<string>([answer.id])
  const distractors: VocabularyItem[] = []

  for (const item of mixedPool) {
    if (seen.has(item.id)) continue
    seen.add(item.id)
    distractors.push(item)
    if (distractors.length === OPTION_COUNT - 1) break
  }

  return shuffle([answer, ...distractors])
}

export function createSessionQuestions(topicId: TopicId): Question[] {
  const topicItems = getVocabularyByTopic(topicId)
  const prompts = shuffle(topicItems).slice(0, SESSION_LENGTH)

  return prompts.map((prompt, index) => ({
    id: `${topicId}-${prompt.id}-${index}`,
    prompt,
    options: makeOptions(prompt, topicItems),
  }))
}

export function isCorrectAnswer(question: Question, answerId: string) {
  return question.prompt.id === answerId
}

export function getSessionLength() {
  return SESSION_LENGTH
}
