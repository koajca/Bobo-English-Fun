const tones = {
  click: { frequency: 520, duration: 0.06 },
  correct: { frequency: 760, duration: 0.14 },
  wrong: { frequency: 220, duration: 0.12 },
  finish: { frequency: 920, duration: 0.18 },
}

export type SoundName = keyof typeof tones

export function playTone(name: SoundName) {
  const tone = tones[name]
  const AudioContextClass = window.AudioContext || window.webkitAudioContext

  if (!AudioContextClass) return

  const audioContext = new AudioContextClass()
  const oscillator = audioContext.createOscillator()
  const gain = audioContext.createGain()

  oscillator.frequency.value = tone.frequency
  oscillator.type = 'sine'
  gain.gain.value = 0.08
  oscillator.connect(gain)
  gain.connect(audioContext.destination)
  oscillator.start()
  oscillator.stop(audioContext.currentTime + tone.duration)
}

export function speakEnglish(word: string) {
  if (!('speechSynthesis' in window)) return

  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(word)
  utterance.lang = 'en-US'
  utterance.rate = 0.82
  utterance.pitch = 1.08
  window.speechSynthesis.speak(utterance)
}
