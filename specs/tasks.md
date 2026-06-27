# Bobo English Fun - Implementation Tasks

File này breakdown công việc implement từ `requirements.md` và `game-design.md`.

Trạng thái đề xuất:

- `[ ]` Chưa làm.
- `[~]` Đang làm.
- `[x]` Hoàn thành.

## 1. Project Setup

- [x] Kiểm tra app chạy được ở local.
- [x] Xác nhận tech stack React + Vite + TypeScript.
- [x] Tạo cấu trúc thư mục theo requirements.
- [x] Tạo thư mục asset trong `public/images` và `public/sounds`.
- [x] Xác nhận build command `npm run build` chạy được.

Done khi:

- App chạy local không lỗi.
- Build production thành công.
- Folder structure sẵn sàng cho MVP.

## 2. Data Foundation

- [x] Tạo `src/data/topics.ts`.
- [x] Tạo `src/data/vocabulary.ts`.
- [x] Tạo `src/data/rewards.ts`.
- [x] Tạo `src/data/uiText.ts`.
- [x] Nhập vocabulary cho Animals.
- [x] Nhập vocabulary cho Fruits.
- [x] Nhập vocabulary cho Colors.
- [x] Đảm bảo mỗi vocabulary item có English word và Vietnamese meaning.

Done khi:

- Có đủ data cho 3 topic MVP.
- UI text mặc định tiếng Việt.
- Không hard-code vocabulary trong screen.

## 3. Core Game Logic

- [x] Tạo `src/game/questionFactory.ts`.
- [x] Tạo logic lấy vocabulary theo topic.
- [x] Tạo logic random câu hỏi.
- [x] Tạo logic random đáp án nhiễu.
- [x] Đảm bảo đáp án đúng luôn có trong options.
- [x] Tạo logic kiểm tra đúng/sai.
- [x] Tạo logic session 5 câu.
- [x] Tạo logic tính sao.

Done khi:

- Có thể tạo một session 5 câu từ một topic.
- Mỗi câu có 3 đáp án.
- Check answer trả về đúng/sai ổn định.

## 4. Progress And Storage

- [x] Tạo `src/game/progress.ts`.
- [x] Tạo `src/utils/storage.ts`.
- [x] Lưu tổng sao.
- [x] Lưu completed sessions.
- [x] Lưu unlocked stickers.
- [x] Lưu word stats: seen, correct, wrong.
- [x] Load progress khi mở app.
- [x] Có fallback progress mặc định nếu localStorage rỗng.

Done khi:

- Reload trang không mất sao.
- Sticker đã mở khóa vẫn được giữ.
- Không lỗi nếu localStorage chưa có dữ liệu.

## 5. Shared UI Components

- [x] Tạo `BigButton`.
- [x] Tạo `BoboMascot`.
- [x] Tạo `AudioButton`.
- [x] Tạo `StarCounter`.
- [x] Tạo `WordCard`.
- [x] Tạo `AnswerCard`.
- [x] Tạo component layout responsive cơ bản.

Done khi:

- Các screen có thể dùng lại component.
- Button/card đủ lớn cho mobile.
- Component không chứa logic game phức tạp.

## 6. Screens

- [x] Build Home screen.
- [x] Build Topic selection screen.
- [x] Build Game select screen.
- [x] Build Gameplay screen shell.
- [x] Build Result screen.
- [x] Build Rewards screen.
- [x] Thêm navigation giữa các screen.

Done khi:

- Có thể đi từ Home đến Gameplay và Result.
- Có thể quay về Home.
- UI text chính là tiếng Việt.

## 7. Vertical Slice

Implement lát cắt đầu tiên:

```text
Home
-> Animals
-> Listen and Choose
-> 5 câu
-> Result
-> Lưu sao
```

Tasks:

- [x] Kết nối Home với Topic screen.
- [x] Kết nối Animals với Listen and Choose.
- [x] Sinh 5 câu từ Animals.
- [x] Hiển thị prompt và 3 đáp án.
- [x] Xử lý chọn đáp án.
- [x] Hiển thị feedback đúng/sai.
- [x] Cập nhật sao.
- [x] Hiển thị Result.
- [x] Lưu progress.

Done khi:

- Vertical slice chơi được end-to-end.
- Không cần reload hoặc thao tác dev để hoàn thành session.
- Sao được lưu sau reload.

## 8. Minigame: Listen And Choose

- [x] Tạo mode Listen and Choose.
- [x] Tự phát âm hoặc có nút nghe từ.
- [x] Hiển thị 3 image answers.
- [x] Cho phép nghe lại.
- [x] Đúng thì hiện feedback vui.
- [x] Sai thì cho thử lại.
- [x] Sau khi đúng chuyển câu tiếp theo.

Done khi:

- Chơi được Listen and Choose cho cả 3 topic.
- Feedback và scoring đúng.

## 9. Minigame: Tap The Word

- [x] Tạo mode Tap the Word.
- [x] Hiển thị prompt tiếng Việt kèm từ tiếng Anh.
- [x] Hiển thị 3 image answers.
- [x] Dùng lại answer checking logic.
- [x] Dùng lại scoring logic.
- [x] Dùng lại Result screen.

Done khi:

- Chơi được Tap the Word cho cả 3 topic.
- Không duplicate logic không cần thiết với Listen and Choose.

## 10. Rewards

- [x] Tạo rule mở khóa sticker theo topic.
- [x] Mở khóa Animal Sticker.
- [x] Mở khóa Fruit Sticker.
- [x] Mở khóa Color Sticker.
- [x] Hiển thị sticker trong Rewards screen.
- [x] Hiển thị trạng thái locked/unlocked.

Done khi:

- Hoàn thành topic có thể mở sticker.
- Sticker không mất sau reload.

## 11. Audio And Feedback

- [x] Thêm click sound.
- [x] Thêm correct sound.
- [x] Thêm wrong sound nhẹ.
- [x] Thêm finish sound.
- [x] Thêm helper trong `src/utils/sound.ts`.
- [x] Thêm fallback nếu trình duyệt chặn autoplay.
- [x] Dùng Web Speech API hoặc audio file để phát âm từ tiếng Anh.

Done khi:

- Âm thanh phản hồi hoạt động sau tương tác đầu tiên.
- Không có âm thanh sai quá gắt hoặc quá dài.

## 12. Responsive Polish

- [x] Kiểm tra mobile viewport.
- [x] Kiểm tra tablet viewport.
- [x] Kiểm tra desktop viewport.
- [x] Đảm bảo button/card không vỡ chữ.
- [x] Đảm bảo Bobo không che đáp án.
- [x] Đảm bảo gameplay không cần scroll nhiều trên mobile.

Done khi:

- Gameplay rõ ràng trên mobile và desktop.
- Text không bị tràn khỏi button/card.

## 13. Testing

- [x] Test first launch.
- [x] Test chọn từng topic.
- [x] Test từng minigame.
- [x] Test trả lời đúng.
- [x] Test trả lời sai.
- [x] Test nghe lại.
- [x] Test result score.
- [x] Test sticker unlock.
- [x] Test reload giữ progress.
- [x] Test production build.

Done khi:

- Checklist test chính pass.
- Không có lỗi console nghiêm trọng.
- Build production thành công.

## 14. Deploy Preview

- [x] Chạy `npm run build`.
- [x] Chạy preview local nếu có.
- [ ] Deploy preview lên Vercel, Netlify, Cloudflare Pages hoặc GitHub Pages.
- [ ] Test link preview trên điện thoại thật.
- [ ] Ghi nhận issue từ preview.

Done khi:

- Có public preview URL.
- Game chơi được trên điện thoại thật.

## 15. MVP Completion

- [x] Có 3 topic: Animals, Fruits, Colors.
- [x] Có 2 minigame: Listen and Choose, Tap the Word.
- [x] Có 5 câu mỗi session.
- [x] Có sao thưởng.
- [x] Có sticker unlock.
- [x] Có progress localStorage.
- [x] UI mặc định tiếng Việt.
- [x] Từ tiếng Anh và phát âm rõ ràng.
- [x] Responsive ổn.
- [x] Production build pass.
- [ ] Có preview hoặc production URL.

Done khi:

- MVP thỏa Definition of Done trong `requirements.md`.
- Có thể gửi link cho người khác chơi thử mà không cần hướng dẫn kỹ thuật.
