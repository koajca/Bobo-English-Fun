# Bobo English Fun - Game Design

## 1. Purpose

File này mô tả cách game **Bobo English Fun** sẽ được chơi, nhìn, phản hồi và mở rộng trong MVP. Tài liệu này đứng sau `requirements.md` và trước `tasks.md`.

Vai trò của từng file:

- `concept.txt`: ý tưởng gốc và cảm hứng sản phẩm.
- `requirements.md`: yêu cầu sản phẩm, phạm vi, điều kiện hoàn thành.
- `game-design.md`: thiết kế gameplay, MVP play loop, content, UI/UX.
- `tasks.md`: checklist implement từ thiết kế.

## 2. Design Goals

Game cần đạt các mục tiêu sau:

- Trẻ 5-10 tuổi có thể tự hiểu cách chơi mà không cần đọc nhiều chữ.
- Tiếng Việt là ngôn ngữ mặc định cho chỉ dẫn và UI.
- Tiếng Anh là nội dung học chính: từ vựng, phát âm, câu lệnh ngắn.
- Mỗi màn chỉ có một nhiệm vụ rõ ràng.
- Sai không gây áp lực, đúng tạo cảm giác vui và muốn chơi tiếp.
- Nội dung, hình ảnh, âm thanh và rewards phải dễ mở rộng sau MVP.

## 3. Core Experience

Trẻ đi cùng Bobo qua các khu học tiếng Anh nhỏ. Mỗi khu tương ứng một chủ đề từ vựng. Trẻ nghe, nhìn, chạm và chọn đáp án đúng để nhận sao, sticker và lời khen từ Bobo.

Trải nghiệm trong một lượt chơi nên ngắn, vui, không quá 2-4 phút.

## 4. Core Loop

```text
Vào game
-> Chọn chủ đề
-> Chọn minigame
-> Chơi 5 câu
-> Nhận phản hồi từng câu
-> Xem kết quả
-> Nhận sao hoặc sticker
-> Chơi tiếp hoặc về màn chính
```

## 5. MVP Game Scope

### Topics

MVP gồm 3 chủ đề:

- Animals.
- Fruits.
- Colors.

### Minigames

MVP gồm 2 minigame:

- Listen and Choose.
- Tap the Word.

### Session Rules

- Mỗi lượt chơi có 5 câu.
- Mỗi câu có 3 đáp án ở nhóm 5-7 tuổi.
- Có thể mở rộng thành 4 đáp án cho nhóm 8-10 tuổi.
- Trẻ được thử lại khi chọn sai.
- Mỗi câu đúng tính 1 sao.
- Hoàn thành session hiển thị tổng sao.
- Sticker có thể mở khóa khi trẻ hoàn thành một chủ đề hoặc đạt số sao nhất định.

## 6. Language Design

### Default Language

Tiếng Việt là ngôn ngữ mặc định của game.

Dùng tiếng Việt cho:

- Nút điều hướng.
- Hướng dẫn chơi.
- Feedback đúng/sai.
- Kết quả.
- Rewards.
- Settings.

Dùng tiếng Anh cho:

- Từ vựng cần học.
- Âm thanh phát âm.
- Prompt ngắn liên quan đến từ vựng.

### Sample UI Text

```text
Chơi
Nghe lại
Tiếp tục
Chơi lại
Chọn chủ đề
Chọn trò chơi
Giỏi lắm!
Thử lại nhé!
Con nhận được 5 ngôi sao!
```

### Sample Learning Text

```text
Apple
/ˈæp.əl/
Quả táo
```

### Sample Bobo Lines

```text
Cùng chơi nào!
Tìm con mèo nhé!
Nghe lại từ này nào!
Giỏi lắm! Cat là con mèo.
Thử lại nhé, con gần đúng rồi!
```

## 7. Minigame 1: Listen and Choose

### Goal

Trẻ nghe hoặc nhìn một từ tiếng Anh, sau đó chọn đúng hình tương ứng.

### Flow

```text
Start question
-> Bobo nói hướng dẫn bằng tiếng Việt
-> Game phát âm từ tiếng Anh
-> Hiển thị 3 hình đáp án
-> Trẻ chọn hình
-> Game kiểm tra đáp án
-> Phản hồi đúng/sai
-> Next question
```

### UI Elements

- Bobo mascot.
- Prompt area.
- Large listen button.
- 3 image answer cards.
- Star counter.
- Progress indicator, for example `3/5`.

### Correct Feedback

- Âm thanh đúng ngắn.
- Sao bay hoặc nhấp sáng.
- Bobo vui.
- Hiển thị word card ngắn: `Cat - Con mèo`.

### Wrong Feedback

- Âm thanh sai nhẹ.
- Bobo động viên.
- Không trừ sao trong MVP.
- Cho trẻ chọn lại.

## 8. Minigame 2: Tap the Word

### Goal

Trẻ đọc hoặc nghe yêu cầu rồi chạm vào hình đúng.

### Flow

```text
Start question
-> Prompt: "Tìm Apple"
-> Hiển thị 3 hình
-> Trẻ chạm hình đúng
-> Phản hồi đúng/sai
-> Next question
```

### Difference From Listen and Choose

- Prompt có thể hiển thị chữ tiếng Anh rõ hơn.
- Listen button vẫn có thể xuất hiện để trẻ nghe lại.
- Logic chọn đáp án dùng chung với Listen and Choose.

## 9. Content Plan

### Animals

- Cat - Con mèo.
- Dog - Con chó.
- Fish - Con cá.
- Bird - Con chim.
- Cow - Con bò.
- Duck - Con vịt.
- Pig - Con heo.
- Rabbit - Con thỏ.
- Lion - Con sư tử.
- Monkey - Con khỉ.

### Fruits

- Apple - Quả táo.
- Banana - Quả chuối.
- Orange - Quả cam.
- Mango - Quả xoài.
- Grape - Quả nho.
- Watermelon - Quả dưa hấu.
- Lemon - Quả chanh.
- Strawberry - Quả dâu.

### Colors

- Red - Màu đỏ.
- Blue - Màu xanh dương.
- Green - Màu xanh lá.
- Yellow - Màu vàng.
- Pink - Màu hồng.
- Black - Màu đen.
- White - Màu trắng.
- Orange - Màu cam.
- Purple - Màu tím.

## 10. Reward Design

### Stars

- Mỗi câu đúng nhận 1 sao.
- Một session tối đa 5 sao.
- Result screen hiển thị tổng số sao của session.

### Stickers

MVP chỉ cần sticker đơn giản:

- Hoàn thành Animals lần đầu: Animal Sticker.
- Hoàn thành Fruits lần đầu: Fruit Sticker.
- Hoàn thành Colors lần đầu: Color Sticker.

Sticker nên xuất hiện trong Rewards screen.

## 11. UI/UX Direction

### General Rules

- Nút lớn, dễ chạm.
- Ít chữ, ưu tiên hình và icon.
- Một màn chỉ có một hành động chính.
- Không dùng menu phức tạp.
- Không dùng feedback tiêu cực mạnh.
- Mọi thao tác quan trọng phải rõ ràng trên mobile.

### Screen Design

Home:

- Nút Chơi là hành động chính.
- Có lối vào Từ vựng, Phần thưởng, Cài đặt.

Topic Screen:

- Hiển thị 3 chủ đề bằng card lớn.
- Mỗi card có hình minh họa rõ.

Game Select Screen:

- Hiển thị 2 minigame MVP.
- Mỗi minigame có icon và mô tả rất ngắn.

Gameplay Screen:

- Bobo ở vị trí dễ thấy nhưng không che đáp án.
- Prompt ở phía trên.
- Đáp án là card lớn.
- Listen button phải nổi bật.

Result Screen:

- Hiển thị sao nhận được.
- Có nút Chơi lại, Tiếp tục, Về nhà.

Rewards Screen:

- Hiển thị sticker đã mở khóa.
- Sticker chưa mở khóa có thể mờ nhẹ.

## 12. Art Direction

Phong cách hình ảnh:

- 2D cartoon cute.
- Màu sáng, pastel, không quá chói.
- Hình khối bo tròn.
- Mắt lớn, biểu cảm thân thiện.
- Chi tiết vừa đủ, không rối.
- Object giống sticker, dễ nhận biết.

Bobo states:

- Idle.
- Happy.
- Try again.
- Celebrate.

Asset style cần nhất quán giữa mascot, vocabulary images, stickers và background.

## 13. Audio Direction

Audio MVP cần có:

- Click sound.
- Correct sound.
- Wrong sound nhẹ.
- Finish sound.
- Phát âm từ tiếng Anh.

Nếu chưa có audio thật, MVP có thể dùng Web Speech API cho phát âm tiếng Anh. Sau đó có thể thay bằng audio file chất lượng tốt.

## 14. Vertical Slice

Vertical slice đầu tiên nên là:

```text
Home
-> Chọn Animals
-> Chọn Listen and Choose
-> Chơi 5 câu
-> Result
-> Lưu sao vào localStorage
```

Mục tiêu của vertical slice:

- Chứng minh flow chạy end-to-end.
- Chứng minh data vocabulary hoạt động.
- Chứng minh question generation hoạt động.
- Chứng minh UI phù hợp mobile.
- Chứng minh progress save/load hoạt động.

Sau khi vertical slice ổn mới mở rộng sang Fruits, Colors và Tap the Word.

## 15. Design Acceptance Criteria

MVP đạt yêu cầu thiết kế khi:

- Trẻ có thể bắt đầu chơi trong tối đa 2 thao tác từ Home.
- Hướng dẫn chính hiển thị bằng tiếng Việt.
- Từ tiếng Anh cần học luôn rõ ràng.
- Mỗi câu có đáp án hình ảnh dễ hiểu.
- Feedback đúng/sai hoạt động rõ và nhẹ nhàng.
- Một session hoàn thành được trong 2-4 phút.
- Trẻ có thể chơi lại mà không cần reset app.
- Progress không mất sau khi reload.

