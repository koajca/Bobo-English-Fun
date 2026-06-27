import type { TopicId, VocabularyItem } from '../types'

export const vocabulary: VocabularyItem[] = [
  { id: 'cat', topic: 'animals', word: 'Cat', vietnamese: 'Con mèo', phonetic: '/kæt/', image: 'cat', color: '#f59e0b' },
  { id: 'dog', topic: 'animals', word: 'Dog', vietnamese: 'Con chó', phonetic: '/dɔːɡ/', image: 'dog', color: '#a16207' },
  { id: 'fish', topic: 'animals', word: 'Fish', vietnamese: 'Con cá', phonetic: '/fɪʃ/', image: 'fish', color: '#38bdf8' },
  { id: 'bird', topic: 'animals', word: 'Bird', vietnamese: 'Con chim', phonetic: '/bɝːd/', image: 'bird', color: '#fb7185' },
  { id: 'cow', topic: 'animals', word: 'Cow', vietnamese: 'Con bò', phonetic: '/kaʊ/', image: 'cow', color: '#78716c' },
  { id: 'duck', topic: 'animals', word: 'Duck', vietnamese: 'Con vịt', phonetic: '/dʌk/', image: 'duck', color: '#facc15' },
  { id: 'pig', topic: 'animals', word: 'Pig', vietnamese: 'Con heo', phonetic: '/pɪɡ/', image: 'pig', color: '#f9a8d4' },
  { id: 'rabbit', topic: 'animals', word: 'Rabbit', vietnamese: 'Con thỏ', phonetic: '/ˈræbɪt/', image: 'rabbit', color: '#c4b5fd' },
  { id: 'lion', topic: 'animals', word: 'Lion', vietnamese: 'Con sư tử', phonetic: '/ˈlaɪən/', image: 'lion', color: '#eab308' },
  { id: 'monkey', topic: 'animals', word: 'Monkey', vietnamese: 'Con khỉ', phonetic: '/ˈmʌŋki/', image: 'monkey', color: '#92400e' },

  { id: 'apple', topic: 'fruits', word: 'Apple', vietnamese: 'Quả táo', phonetic: '/ˈæpəl/', image: 'apple', color: '#ef4444' },
  { id: 'banana', topic: 'fruits', word: 'Banana', vietnamese: 'Quả chuối', phonetic: '/bəˈnænə/', image: 'banana', color: '#facc15' },
  { id: 'orange-fruit', topic: 'fruits', word: 'Orange', vietnamese: 'Quả cam', phonetic: '/ˈɔːrɪndʒ/', image: 'orange-fruit', color: '#fb923c' },
  { id: 'mango', topic: 'fruits', word: 'Mango', vietnamese: 'Quả xoài', phonetic: '/ˈmæŋɡoʊ/', image: 'mango', color: '#fbbf24' },
  { id: 'grape', topic: 'fruits', word: 'Grape', vietnamese: 'Quả nho', phonetic: '/ɡreɪp/', image: 'grape', color: '#8b5cf6' },
  { id: 'watermelon', topic: 'fruits', word: 'Watermelon', vietnamese: 'Dưa hấu', phonetic: '/ˈwɔːtərmelən/', image: 'watermelon', color: '#22c55e' },
  { id: 'lemon', topic: 'fruits', word: 'Lemon', vietnamese: 'Quả chanh', phonetic: '/ˈlemən/', image: 'lemon', color: '#fde047' },
  { id: 'strawberry', topic: 'fruits', word: 'Strawberry', vietnamese: 'Quả dâu', phonetic: '/ˈstrɔːberi/', image: 'strawberry', color: '#f43f5e' },

  { id: 'red', topic: 'colors', word: 'Red', vietnamese: 'Màu đỏ', phonetic: '/red/', image: 'red', color: '#ef4444' },
  { id: 'blue', topic: 'colors', word: 'Blue', vietnamese: 'Màu xanh dương', phonetic: '/bluː/', image: 'blue', color: '#3b82f6' },
  { id: 'green', topic: 'colors', word: 'Green', vietnamese: 'Màu xanh lá', phonetic: '/ɡriːn/', image: 'green', color: '#22c55e' },
  { id: 'yellow', topic: 'colors', word: 'Yellow', vietnamese: 'Màu vàng', phonetic: '/ˈjeloʊ/', image: 'yellow', color: '#eab308' },
  { id: 'pink', topic: 'colors', word: 'Pink', vietnamese: 'Màu hồng', phonetic: '/pɪŋk/', image: 'pink', color: '#ec4899' },
  { id: 'black', topic: 'colors', word: 'Black', vietnamese: 'Màu đen', phonetic: '/blæk/', image: 'black', color: '#18181b' },
  { id: 'white', topic: 'colors', word: 'White', vietnamese: 'Màu trắng', phonetic: '/waɪt/', image: 'white', color: '#e5e7eb' },
  { id: 'orange-color', topic: 'colors', word: 'Orange', vietnamese: 'Màu cam', phonetic: '/ˈɔːrɪndʒ/', image: 'orange-color', color: '#f97316' },
  { id: 'purple', topic: 'colors', word: 'Purple', vietnamese: 'Màu tím', phonetic: '/ˈpɝːpəl/', image: 'purple', color: '#9333ea' },
]

export function getVocabularyByTopic(topicId: TopicId) {
  return vocabulary.filter((item) => item.topic === topicId)
}
