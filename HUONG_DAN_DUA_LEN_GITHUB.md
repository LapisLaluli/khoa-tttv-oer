# HƯỚNG DẪN CHI TIẾT CÁC BƯỚC XUẤT BẢN WEBSITE LÊN GITHUB PAGES
**DỰ ÁN:** Website Tài Nguyên Giáo Dục Mở (OER) - Khoa Thông tin Thư viện (ĐH Văn hóa Hà Nội)  
**Địa chỉ mã nguồn:** `D:\ProjectA\khoa-tttv-oer-website\`

---

## 🌐 CÁCH 1: KÉO THẢ TRỰC TIẾP TRÊN WEB GITHUB (ĐƠN GIẢN NHẤT - KHÔNG CẦN CÀI ĐẶT LỆNH)

### 📌 Bước 1: Đăng ký tài khoản & Tạo Kho chứa (Repository)
1. Mở trình duyệt web và truy cập: [https://github.com](https://github.com).
2. Đăng ký một tài khoản miễn phí (nếu chưa có) hoặc Đăng nhập.
3. Ở góc trên bên phải trang web, bấm vào dấu cộng **`+`** -> Chọn **New repository**.
4. Điền các thông tin sau:
   - **Repository name:** Điền tên viết liền không dấu, ví dụ: `khoa-tttv-oer`
   - **Description:** Điền mô tả (tùy chọn), ví dụ: `Website Tai nguyen Giao duc Mo Khoa TT-TV`
   - **Public / Private:** Chọn **Public** (bắt buộc chọn Public để dùng GitHub Pages miễn phí).
5. Cuộn xuống dưới cùng và bấm nút màu xanh **Create repository**.

---

### 📌 Bước 2: Tải toàn bộ file dự án lên GitHub
1. Sau khi tạo repository xong, bạn sẽ thấy một trang hướng dẫn. Tìm dòng chữ:  
   👉 **`uploading an existing file`** (nằm ở ô giữa màn hình) và bấm vào đó.
2. Mở File Explorer trên máy tính, đi tới thư mục:  
   📁 `D:\ProjectA\khoa-tttv-oer-website\`
3. **Bôi đen chọn toàn bộ** các file và thư mục bên trong:
   - File: `index.html`, `admin.html`, `history.html`, `resources.html`, `learning.html`, `about.html`
   - Thư mục: `assets`, `data`
4. **Kéo thả toàn bộ** vào vùng hình chữ nhật trên trang web GitHub.
5. Chờ khoảng 15 - 30 giây để trình duyệt tải toàn bộ các file lên.
6. Khi tải xong, cuộn xuống dưới cùng bấm nút màu xanh **Commit changes**.

---

### 📌 Bước 3: Kích hoạt địa chỉ Website công khai (GitHub Pages)
1. Ở phía trên trang repository của bạn, bấm vào tab **Settings** (biểu tượng bánh răng ⚙️).
2. Ở thanh menu cột bên trái, bấm chọn mục **Pages**.
3. Tại ô **Build and deployment**:
   - Mục **Branch**: Đổi từ `None` thành **`main`** (hoặc `master`).
   - Ô thư mục kế bên: Giữ nguyên **`/(root)`**.
   - Bấm nút **Save** màu xám bên cạnh.
4. Chờ khoảng 1 đến 2 phút, sau đó **tải lại trang (F5)**.
5. Bạn sẽ thấy một ô màu xanh hiện lên ở đầu trang với đường link chính thức của bạn:  
   🎉 **`Your site is live at https://[tên-tài-khoản-github].github.io/khoa-tttv-oer/`**

---

## 💻 CÁCH 2: DÙNG LỆNH GIT TRÊN MÁY TÍNH (NẾU MÁY BẠN CÓ GIT)

Nếu bạn đã cài Git trên máy tính, mở **PowerShell** tại thư mục `D:\ProjectA\khoa-tttv-oer-website` và gõ 4 lệnh sau:

```powershell
git init
git add .
git commit -m "Public website Khoa TT-TV OER"
git branch -M main
git remote add origin https://github.com/[tên-tài-khoản-github]/khoa-tttv-oer.git
git push -u origin main
```
Sau đó làm tiếp **Bước 3** ở trên để kích hoạt GitHub Pages.

---

### 💡 LƯU Ý QUAN TRỌNG KHI SỬ DỤNG WEBSITE ONLINE:
- Đường link chính thức của bạn có dạng: `https://[tên-tài-khoản].github.io/khoa-tttv-oer/`
- Trang quản trị online: `https://[tên-tài-khoản].github.io/khoa-tttv-oer/admin.html`
- **Mật khẩu quản trị:** `flis@2026`
- Bạn có thể chỉnh sửa hình ảnh, nội dung, mốc lịch sử trực tiếp trên trang Admin online, sau đó bấm nút **"Xuất file sao lưu (.json)"** bất kỳ lúc nào để lưu trữ dữ liệu!
