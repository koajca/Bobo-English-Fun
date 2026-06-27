import type { Topic } from '../types'

export const topics: Topic[] = [
  {
    id: 'animals',
    titleVi: 'Con vật',
    titleEn: 'Animals',
    description: 'Nghe và tìm các bạn động vật.',
    color: '#4f9d69',
  },
  {
    id: 'fruits',
    titleVi: 'Trái cây',
    titleEn: 'Fruits',
    description: 'Học tên những loại trái cây quen thuộc.',
    color: '#ef7b45',
  },
  {
    id: 'colors',
    titleVi: 'Màu sắc',
    titleEn: 'Colors',
    description: 'Nhận biết màu sắc bằng tiếng Anh.',
    color: '#5b7cfa',
  },
]

export function getTopic(topicId: string) {
  return topics.find((topic) => topic.id === topicId)
}
