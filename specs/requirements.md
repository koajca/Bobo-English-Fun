# Bobo English Fun - Requirements

## 1. Product Vision

**Bobo English Fun** is a mini English learning game for children from 5 to 10 years old. The game helps children learn basic English vocabulary through images, sounds, simple interactions, and positive rewards.

The experience should feel cute, clear, friendly, and easy to play. Children should not feel like they are taking a test. They should feel like they are playing with Bobo and discovering English words step by step.

The default game language is **Vietnamese**. Vietnamese is used for navigation, instructions, settings, rewards, parent-facing text, and most UI labels. English is the main learning content and appears in vocabulary words, pronunciation, listening prompts, and simple English phrases.

The game may show bilingual text where it helps learning, but Vietnamese should always make the task clear for the child.

## 2. Target Users

### Primary Users

- Preschool children, around 5-6 years old.
- Early primary school students, around 7-10 years old.

### Secondary Users

- Parents who want a simple English learning game for their children.
- Teachers who may use the game as a light vocabulary practice activity.

## 3. Learning Goals

The first version should focus on:

- Recognizing common English words.
- Connecting English sounds with images.
- Connecting English words with Vietnamese meanings.
- Understanding game instructions in Vietnamese by default.
- Building confidence through repeated positive feedback.
- Encouraging children to continue learning through stars, stickers, and mascot reactions.

## 4. Core Concept

Children travel with **Bobo**, a cute mascot, through small learning areas such as:

- **Animal Farm** - animals.
- **Fruit Shop** - fruits.
- **Color Garden** - colors.
- Future areas: Toy Room, My Body, Family House, Number Train, School Bag.

Each area contains vocabulary and minigames. Completing activities gives children stars, stickers, badges, or unlockable rewards.

## 5. MVP Scope

The MVP must stay small and focused.

### MVP Topics

The first version includes 3 topics:

- Animals.
- Fruits.
- Colors.

Each topic should contain around 10 vocabulary items.

### MVP Minigames

The first version includes 2 minigames:

1. **Listen and Choose**
   - The game plays or shows a word.
   - The child chooses the correct image from 3 or 4 options.

2. **Tap the Word**
   - The game asks the child to find a word.
   - The child taps the matching image.

### MVP Systems

The first version includes:

- Home screen.
- Topic selection screen.
- Minigame selection screen.
- Gameplay screen.
- Result screen.
- Rewards screen.
- Bobo mascot.
- Correct and wrong feedback.
- Star reward system.
- Basic sticker unlock system.
- Local progress saving with `localStorage`.
- Vietnamese-first UI with English learning content.
- Optional bilingual English-Vietnamese labels where helpful.
- Responsive layout for desktop, tablet, and mobile.

## 6. Non-Goals For MVP

The MVP should not include these features yet:

- Backend server.
- User accounts.
- Online leaderboard.
- Parent dashboard.
- Payment system.
- Complex story mode.
- Advanced speech recognition.
- Multiplayer.
- Too many topics or minigames.

These can be added later after the MVP is stable.

## 7. Vocabulary Data

Vocabulary should be stored as structured data, not hard-coded into screens.

All vocabulary items must include Vietnamese meanings. UI text should be managed separately from vocabulary data so the app can keep Vietnamese as the default language and support future localization if needed.

Recommended type:

```ts
type VocabularyItem = {
  id: string
  topic: 'animals' | 'fruits' | 'colors'
  word: string
  vietnamese: string
  phonetic?: string
  image: string
  audio?: string
}
```

Recommended UI text type:

```ts
type UiText = {
  vi: string
  en?: string
}
```

Recommended files:

```text
src/data/vocabulary.ts
src/data/topics.ts
src/data/rewards.ts
src/data/uiText.ts
```

### Initial Vocabulary

Animals:

- Cat - meo.
- Dog - cho.
- Fish - ca.
- Bird - chim.
- Cow - bo.
- Duck - vit.
- Pig - heo.
- Rabbit - tho.
- Lion - su tu.
- Monkey - khi.

Fruits:

- Apple - tao.
- Banana - chuoi.
- Orange - cam.
- Mango - xoai.
- Grape - nho.
- Watermelon - dua hau.
- Lemon - chanh.
- Strawberry - dau.

Colors:

- Red - do.
- Blue - xanh duong.
- Green - xanh la.
- Yellow - vang.
- Pink - hong.
- Black - den.
- White - trang.
- Orange - cam.
- Purple - tim.

Vietnamese text can be stored with proper accents in the final app data.

## 8. Recommended App Structure

The project should separate UI, game logic, data, and utilities.

```text
src/
  app/
    App.tsx
    routes.ts
  screens/
    HomeScreen.tsx
    TopicScreen.tsx
    GameSelectScreen.tsx
    GameplayScreen.tsx
    ResultScreen.tsx
    RewardsScreen.tsx
  game/
    gameEngine.ts
    questionFactory.ts
    scoring.ts
    progress.ts
  components/
    BoboMascot.tsx
    BigButton.tsx
    AudioButton.tsx
    StarCounter.tsx
    WordCard.tsx
  data/
    vocabulary.ts
    topics.ts
    rewards.ts
    uiText.ts
  utils/
    storage.ts
    sound.ts
```

### Architecture Rules

- Screens should handle layout and user flow.
- Components should be reusable and visual.
- Game logic should live in `src/game`.
- Static content should live in `src/data`.
- UI copy should come from `src/data/uiText.ts` or a similar centralized text source.
- Storage helpers should live in `src/utils`.
- New topics should be added through data when possible.
- New minigames should reuse the shared question and scoring logic.

## 9. User Flow

### Main Flow

1. Home screen.
2. Choose topic.
3. Choose minigame.
4. Play 5 questions.
5. See result.
6. Receive stars or sticker.
7. Continue, replay, or go home.

### Example Gameplay Flow

1. Bobo says: "Tìm con mèo nào! Find the cat!"
2. The screen shows Cat, Dog, and Fish.
3. The child taps Cat.
4. Correct:
   - Stars appear.
   - Positive sound plays.
   - Bobo celebrates.
   - The word card appears briefly.
5. Wrong:
   - Gentle feedback plays.
   - Bobo says "Try again!"
   - The child can choose again.

## 10. Feedback Rules

Feedback must be positive and gentle.

Correct answer:

- Play short success sound.
- Show star animation.
- Show happy Bobo.
- Say "Giỏi lắm!" and optionally repeat the English word.

Wrong answer:

- Play soft wrong sound.
- Show Bobo gently encouraging.
- Say "Thử lại nhé!"
- Do not punish heavily.
- Do not use scary visuals or loud negative sounds.

## 11. Reward System

The MVP reward system should be simple.

- Each correct answer gives 1 star.
- Completing a session gives a result summary.
- Completing enough questions in a topic can unlock a sticker.
- Stickers are shown in the Rewards screen.

Recommended progress type:

```ts
type Progress = {
  stars: number
  completedSessions: string[]
  unlockedStickers: string[]
  wordStats: Record<string, {
    seen: number
    correct: number
    wrong: number
  }>
}
```

This structure allows future review features, such as showing words the child often gets wrong.

## 12. UI/UX Requirements

The UI must be designed for young children.

- Large buttons.
- Clear icons.
- Few words per screen.
- One main task per screen.
- Bright but not harsh colors.
- Friendly rounded font.
- Big image cards.
- Large listen button.
- No complex menus.
- No dense text blocks inside gameplay.
- No strong competitive pressure.

### Language And Bilingual UI

Vietnamese is the default UI language.

Use Vietnamese for:

- Main navigation.
- Game instructions.
- Rewards.
- Settings.
- Result summaries.
- Parent-facing text.

Use English for:

- Vocabulary words.
- Pronunciation practice.
- Listening prompts.
- Simple repeated learning phrases.

When showing bilingual labels, Vietnamese should be first or visually clearer for young children. English can appear smaller below or beside it when it supports learning.

Examples:

```text
Chơi
Play

Nghe lại
Listen

Giỏi lắm!
Great job!

Thử lại nhé
Try again

Tiếp tục
Next
```

Vocabulary learning cards can prioritize the English word while still showing Vietnamese meaning clearly:

```text
Apple
/ˈæp.əl/
Quả táo
```

Final UI text must use proper Vietnamese accents.

## 13. Asset Requirements

Recommended asset structure:

```text
public/
  images/
    mascot/
    vocabulary/
      animals/
      fruits/
      colors/
    stickers/
  sounds/
    correct.mp3
    wrong.mp3
    click.mp3
    finish.mp3
```

Asset naming rules:

- Use lowercase.
- Use kebab-case.
- Keep names descriptive.

Examples:

```text
red-apple.png
bobo-happy.png
animal-sticker-cat.png
```

## 14. Development Process

### Step 1: Finalize MVP

Create or update specs for:

- MVP scope.
- Topics.
- Vocabulary.
- Minigames.
- Rewards.
- UI flow.

### Step 2: Prepare Project Structure

Set up:

- `src/screens`.
- `src/components`.
- `src/game`.
- `src/data`.
- `src/utils`.
- `public/images`.
- `public/sounds`.

### Step 3: Build Static UI Prototype

Create screens without full logic first:

- Home.
- Topic selection.
- Minigame selection.
- Gameplay.
- Result.
- Rewards.

### Step 4: Build Core Game Logic

Implement:

- Topic filtering.
- Question generation.
- Answer randomization.
- Answer checking.
- Score calculation.
- Session result.

### Step 5: Build Minigame 1

Implement **Listen and Choose**:

- Prompt word.
- Listen button.
- 3 or 4 answer images.
- Correct/wrong feedback.
- Next question.

### Step 6: Build Minigame 2

Implement **Tap the Word**:

- Prompt text or voice.
- Image options.
- Shared answer checking.
- Shared scoring.

### Step 7: Add Progress Saving

Implement:

- Save stars.
- Save completed sessions.
- Save unlocked stickers.
- Save word stats.
- Load progress on app start.

### Step 8: Add Polish

Add:

- Mascot states.
- Sounds.
- Small animations.
- Sticker unlock effect.
- Mobile-friendly layout.

### Step 9: Test

Run manual and automated checks.

### Step 10: Build For Production

Run production build and preview.

### Step 11: Deploy

Deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

## 15. Testing Checklist

Manual test cases:

- First app launch works.
- Home screen loads.
- Topic selection works.
- Minigame selection works.
- Listen button works.
- Correct answer gives star.
- Wrong answer allows retry.
- Result screen shows correct score.
- Reward screen shows unlocked stickers.
- Default UI text is Vietnamese.
- English learning words still display clearly.
- Progress remains after refresh.
- App works on mobile viewport.
- App works on desktop viewport.
- Build has no missing image or sound assets.

Logic tests should cover:

- Question generation.
- Answer randomization.
- Correct answer detection.
- Score calculation.
- Progress save and load.
- Sticker unlock rules.

## 16. Deployment Process

Recommended hosting:

- Vercel.
- Netlify.
- Cloudflare Pages.
- GitHub Pages.

Recommended production steps:

```bash
npm run build
npm run preview
```

Deployment configuration:

```text
Build command: npm run build
Output directory: dist
```

Recommended Git flow:

```text
main        production
develop     development
feature/*   new features
fix/*       bug fixes
```

Each feature should go through:

1. Update related spec.
2. Implement data and logic.
3. Implement UI.
4. Run tests.
5. Run build.
6. Deploy preview.
7. Merge when stable.

## 17. Roadmap

### Phase 1: MVP

- 3 topics.
- 30 vocabulary items.
- 2 minigames.
- Bobo mascot.
- Stars.
- Basic stickers.
- Local progress.
- Vietnamese-first UI.

### Phase 2: Polish

- Better animation.
- Better sound effects.
- Sticker album.
- More mascot expressions.
- Improved mobile layout.

### Phase 3: Learning Improvements

- Review words the child often gets wrong.
- Add short sentences.
- Add better pronunciation audio.
- Add session history.

### Phase 4: More Minigames

- Match Picture.
- Color the Object.
- Feed Bobo.
- Yes or No.

### Phase 5: Parent Mode

- Parent dashboard.
- Learning progress summary.
- Words learned.
- Words that need review.
- Optional cloud sync.

## 18. Maintenance Principles

- Keep content in data files.
- Keep UI text centralized and Vietnamese-first.
- Keep gameplay logic separate from UI.
- Avoid hard-coding vocabulary inside screens.
- Add new topics by adding data and assets.
- Add new minigames by reusing shared question logic.
- Keep each screen focused on one responsibility.
- Test core game logic before changing it.
- Avoid adding large features before the MVP is stable.

## 19. Definition Of Done For MVP

The MVP is done when:

- Children can choose a topic.
- Children can play both MVP minigames.
- The default UI language is Vietnamese.
- English words and listening prompts are still clear.
- Each session has 5 questions.
- Correct and wrong feedback works.
- Stars are awarded correctly.
- At least one sticker can be unlocked.
- Progress is saved after page refresh.
- The app works on desktop and mobile.
- Production build succeeds.
- The app is deployed to a public URL.
