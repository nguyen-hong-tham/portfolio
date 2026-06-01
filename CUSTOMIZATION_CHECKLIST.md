# 📋 Portfolio Customization Checklist

Danh sách đầy đủ những thứ cần chỉnh sửa để chuyển portfolio từ Soumyajit sang thông tin của bạn.

---

## 1️⃣ THÔNG TIN CÁ NHÂN CƠ BẢN

- [ ] **Tên**: "SOUMYAJIT BEHERA" → Tên của bạn
  - `src/components/Home/Home.js` (line 33)
  - `src/components/About/AboutCard.js` (line 9)
  - `src/components/Footer.js` (line 17)

- [ ] **Vị trí địa lý**: "Bhubaneswar, India" → Thành phố của bạn
  - `src/components/About/AboutCard.js` (line 9)

- [ ] **Công ty hiện tại**: "Juspay" → Công ty của bạn
  - `src/components/About/AboutCard.js` (line 12)

- [ ] **Chức vụ**: "Software Developer" → Chức vụ của bạn
  - `src/components/About/AboutCard.js` (line 12)

- [ ] **Trường học**: "BIT Mesra" → Trường của bạn
  - `src/components/About/AboutCard.js` (line 14)

- [ ] **Ngành học**: "Mathematics and Computing" → Chuyên ngành của bạn
  - `src/components/About/AboutCard.js` (line 14)

---

## 2️⃣ MẠNG XÃ HỘI & LIÊN HỆ

### GitHub
- [ ] `https://github.com/soumyajit4419` → URL GitHub của bạn
  - `src/components/Home/Home.js` (line 58)
  - `src/components/Navbar.js`
  - `src/components/Footer.js` (line 19)

### Twitter
- [ ] `https://twitter.com/Soumyajit4419` → URL Twitter của bạn
  - `src/components/Home/Home.js` (line 68)
  - `src/components/Navbar.js`
  - `src/components/Footer.js` (line 28)

### LinkedIn
- [ ] `https://www.linkedin.com/in/soumyajit4419/` → URL LinkedIn của bạn
  - `src/components/Home/Home.js` (line 78)
  - `src/components/Footer.js`

### Instagram
- [ ] `https://www.instagram.com/soumyajit4419` → URL Instagram của bạn
  - `src/components/Home/Home.js` (line 88)
  - `src/components/Footer.js`

---

## 3️⃣ CÔNG VIỆC & CHUYÊN MÔN

### Typewriter Strings (Dòng gõ chữ động)
- [ ] Thay thế strings trong `src/components/Home/Type.js`
  - Hiện tại: "Software Developer", "Freelancer", "MERN Stack Developer", "Open Source Contributor"
  - Thành: Các công việc/vai trò của bạn

### Kỹ Năng Chuyên Môn (Techstack)
- [ ] Cập nhật `src/components/About/Techstack.js`
  - Thêm/xóa các công nghệ bạn biết
  - Ví dụ: React, JavaScript, Python, Node.js, v.v.

### Công Cụ (Toolstack)
- [ ] Cập nhật `src/components/About/Toolstack.js`
  - Thêm/xóa các tool bạn sử dụng
  - Ví dụ: VSCode, Git, Docker, v.v.

---

## 4️⃣ VỀ BẠN

### Giới Thiệu Cá Nhân
- [ ] Chỉnh sửa `src/components/About/AboutCard.js`
  - Thay toàn bộ đoạn text giới thiệu bản thân
  - Bao gồm: Tên, vị trí, công việc, học vấn

### Sở Thích Ngoài Lập Trình
- [ ] Cập nhật danh sách sở thích trong `src/components/About/AboutCard.js`
  - Hiện tại: 
    - Playing Games 🎮
    - Writing Tech Blogs ✍️
    - Traveling and Exploring New Places 🌍
  - Thành: Sở thích của bạn

### Câu Danh Ngôn / Quote
- [ ] Thay quote: "Strive to build things that make a difference!"
  - `src/components/About/AboutCard.js` (line 29)
  - Thành: Câu danh ngôn của bạn

### Tên Cuối Cùng
- [ ] Thay "Soumyajit" → Tên của bạn
  - `src/components/About/AboutCard.js` (footer)

---

## 5️⃣ DỰ ÁN

### Danh Sách 6 Dự Án
- [ ] Cập nhật `src/components/Projects/Projects.js`
  - **Project 1-6**: Title, Description, GitHub Link, Demo Link
  - Các dự án hiện tại:
    1. Chatify
    2. Bits-0f-C0de
    3. Editor.io
    4. Leaf
    5. Emotion Recognition
    6. Suicide Prevention Website
  - Thay bằng dự án của bạn hoặc chỉnh sửa thông tin

---

## 6️⃣ ẢNH & ASSETS

Thay thế các ảnh sau:

- [ ] `src/Assets/logo.png` → Logo của bạn
- [ ] `src/Assets/home-main.svg` → Ảnh avatar/main trang chủ
- [ ] `src/Assets/about.png` → Ảnh trang About

### Ảnh Dự Án (6 hình)
- [ ] `src/Assets/Projects/chatify.png`
- [ ] `src/Assets/Projects/blog.png`
- [ ] `src/Assets/Projects/codeEditor.png`
- [ ] `src/Assets/Projects/leaf.png`
- [ ] `src/Assets/Projects/emotion.png`
- [ ] `src/Assets/Projects/suicide.png`

---

## 7️⃣ FOOTER & BẢN QUYỀN

- [ ] **Tên tác giả**: "Soumyajit Behera" → Tên bạn
  - `src/components/Footer.js` (line 17)

- [ ] **Copyright viết tắt**: "SB" → Viết tắt tên bạn (ví dụ: "JD" cho John Doe)
  - `src/components/Footer.js` (line 19)

---

## 8️⃣ RESUME/CV

- [ ] Cập nhật file Resume
  - `src/components/Resume/ResumeNew.js`
  - Thay thế PDF link và nội dung CV của bạn

---

## 9️⃣ WEBSITE METADATA

### File: `public/index.html`
- [ ] **Tiêu đề trang**: Thay "React App" thành tên portfolio của bạn
- [ ] **Meta Description**: Thay mô tả mặc định thành mô tả về bạn
- [ ] **Favicon**: Thay `public/favicon.ico` bằng icon của bạn

### File: `public/manifest.json`
- [ ] **name**: "Portfolio" → Tên của bạn
- [ ] **short_name**: Viết tắt tên
- [ ] **description**: Mô tả bản thân

---

## 🔟 GITHUB CALENDAR

- [ ] Cập nhật GitHub username trong `src/components/About/Github.js`
  - Thay "soumyajit4419" bằng username GitHub của bạn

---

## 📝 NOTEPAD - README.md

- [ ] Cập nhật `README.md`
  - Thay thông tin về project
  - Thay link website (nếu có)
  - Thay tên tác giả

---

## ✅ QUY TRÌNH HOÀN THÀNH

1. Bắt đầu từ phần **1️⃣ Thông tin cá nhân cơ bản**
2. Sau đó là **2️⃣ Mạng xã hội**
3. Tiếp tục **3️⃣ Công việc & Chuyên môn**
4. Cập nhật **4️⃣ Về bạn**
5. Thay thế **5️⃣ Dự án**
6. Thêm **6️⃣ Ảnh & Assets**
7. Hoàn thiện **7️⃣ Footer & Bản quyền**
8. Thêm **8️⃣ Resume**
9. Sửa **9️⃣ Website metadata**
10. Cuối cùng là **🔟 GitHub Calendar**

---

## 🚀 TEST AFTER CHANGES

```bash
npm run dev
```

Truy cập: `http://localhost:3000`

---

## 💡 GHI CHÚ

- Một số file được sửa ở nhiều nơi (ví dụ: link GitHub)
- Hãy tìm tất cả occurrences của tên cũ trước khi deploy
- Không quên cập nhật ảnh (assets)
- Test kỹ trước khi push lên GitHub

