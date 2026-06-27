import type { StickerReward } from '../types'

export const rewards: StickerReward[] = [
  {
    id: 'animal-sticker',
    topic: 'animals',
    title: 'Bạn của Bobo',
    description: 'Hoàn thành chủ đề Con vật.',
    color: '#4f9d69',
  },
  {
    id: 'fruit-sticker',
    topic: 'fruits',
    title: 'Giỏ trái cây',
    description: 'Hoàn thành chủ đề Trái cây.',
    color: '#ef7b45',
  },
  {
    id: 'color-sticker',
    topic: 'colors',
    title: 'Ngôi sao màu sắc',
    description: 'Hoàn thành chủ đề Màu sắc.',
    color: '#5b7cfa',
  },
]

export function getRewardForTopic(topicId: string) {
  return rewards.find((reward) => reward.topic === topicId)
}
