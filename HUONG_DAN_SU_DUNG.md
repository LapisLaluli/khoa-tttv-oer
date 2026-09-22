# HƯỚNG DẪN SỬ DỤNG VÀ QUẢN TRỊ WEBSITE
**DỰ ÁN:** Website Tài Nguyên Giáo Dục Mở (OER) - Khoa Thông tin Thư viện (ĐH Văn hóa Hà Nội)  
**Địa chỉ thư mục:** `D:\ProjectA\khoa-tttv-oer-website\`

---

## 1. BỘ PHÔNG CHỮ TIẾNG VIỆT HIỆN ĐẠI & HỌC THUẬT
Website sử dụng bộ phông chữ trang nhã, tương thích tiếng Việt trọn vẹn 100%:
- **`Lora` (Serif):** Dành cho tiêu đề chính, tên Khoa, tên Trường và các mốc lịch sử.
- **`Be Vietnam Pro` (Sans):** Phông chữ thiết kế tối ưu riêng cho dấu thanh tiếng Việt, hiển thị sắc nét và hiện đại trên mọi thiết bị.
- **`Dancing Script` (Script):** Dành cho câu slogan nghệ thuật ở chân trang.

---

## 2. HỆ THỐNG ĐĂNG NHẬP VÀ QUẢN TRỊ (ADMIN DASHBOARD)

### 2.1. Đăng nhập quản trị:
- **Đường dẫn quản trị:** [admin.html](file:///D:/ProjectA/khoa-tttv-oer-website/admin.html) *(Hoặc bấm nút **"Đăng nhập"** ở góc phải thanh menu trên bất kỳ trang nào)*.
- **Tên đăng nhập (Username):** `admin`
- **Mật khẩu (Password):** `flis@2026`
*(Bạn có thể đổi mật khẩu bất kỳ lúc nào tại nút **"Đổi mật khẩu"** trong trang Admin)*.

### 2.2. Tính năng Quản lý Hình ảnh Giao diện (Mới):
Trong trang Admin, tab **"Hình ảnh & Giao diện"** cho phép bạn thay đổi toàn bộ ảnh trên website:
1. **Logo Khoa & Trường:** Tải trực tiếp file logo từ máy tính của bạn.
2. **Ảnh nền Hero Banner:** Tải ảnh trường hoặc thư viện làm nền cho banner chính.
3. **Bộ 3 ảnh khối Về Chúng Tôi:**
   - Khung lớn bên trái (Ảnh học tập & nghiên cứu).
   - Khung phía trên bên phải (Ảnh không gian kết nối tri thức).
   - Khung phía dưới bên phải (Ảnh sách và văn hóa).
4. **Ảnh nền Quote Banner:** Tùy biến ảnh nền dải trích dẫn.
*(Sau khi chọn ảnh từ máy tính, bấm nút **"Lưu thay đổi hình ảnh"** để áp dụng ngay lên toàn bộ website)*.

### 2.3. Các phân hệ quản trị nội dung khác:
1. **Quản lý Mốc lịch sử (Milestones):**
   - Thêm mới mốc lịch sử (hỗ trợ tải file ảnh trực tiếp từ máy tính), sửa hoặc xóa bất kỳ mốc nào. Dòng thời gian tự động đồng bộ ngay lập tức.
2. **Quản lý Hoạt động nổi bật (Activities):**
   - Thêm/Sửa/Xóa hoạt động theo 4 nhóm: *Đào tạo, Nghiên cứu, Sinh viên, Hợp tác* (hỗ trợ tải ảnh từ máy tính).
3. **Quản lý Tài nguyên OER (Resources):**
   - Thêm/Sửa/Xóa bài đọc ngắn, Infographic, Kỷ yếu PDF, Thư viện ảnh số hóa.
4. **Quản lý Góc học tập & Quiz:**
   - Thêm/Sửa/Xóa các câu hỏi trắc nghiệm, các phương án A/B/C/D, đáp án đúng và lời giải thích.
5. **Cài đặt chung & Slogan:**
   - Thay đổi Tên Khoa/Trường, Khẩu hiệu (Slogan), Câu trích dẫn, Thông tin liên hệ và 4 con số thống kê.
6. **Sao lưu & Xuất dữ liệu (Backup JSON):**
   - Nút **"Tải file sao lưu (.json)"** xuất toàn bộ hình ảnh và dữ liệu đã chỉnh sửa.
   - Nút **"Nhập file dữ liệu (.json)"** nạp lại dữ liệu backup.

---

## 3. VỊ TRÍ CÁC FILE CHÍNH CỦA DỰ ÁN

- 🏠 **Trang chủ chính:** [index.html](file:///D:/ProjectA/khoa-tttv-oer-website/index.html) *(Mở trực tiếp bằng trình duyệt)*
- 🔐 **Trang Quản trị Admin:** [admin.html](file:///D:/ProjectA/khoa-tttv-oer-website/admin.html)
- 📜 **Trang Lịch sử 6 mốc:** [history.html](file:///D:/ProjectA/khoa-tttv-oer-website/history.html)
- 📚 **Trang Kho tài nguyên OER:** [resources.html](file:///D:/ProjectA/khoa-tttv-oer-website/resources.html)
- ✍️ **Trang Góc học tập / Quiz:** [learning.html](file:///D:/ProjectA/khoa-tttv-oer-website/learning.html)
- ℹ️ **Trang Giới thiệu OER:** [about.html](file:///D:/ProjectA/khoa-tttv-oer-website/about.html)
- 🚀 **File lối vào từ thư mục gốc:** [D:\ProjectA\index.html](file:///D:/ProjectA/index.html)

---

## 4. HƯỚNG DẪN XUẤT BẢN LÊN INTERNET MIỄN PHÍ (GITHUB PAGES)

1. Đăng ký tài khoản miễn phí tại [https://github.com](https://github.com).
2. Tạo một Repository mới (ví dụ: `khoa-tttv-oer`).
3. Tải toàn bộ các file trong thư mục `D:\ProjectA\khoa-tttv-oer-website` lên GitHub.
4. Vào mục **Settings** -> **Pages** -> Chọn **Branch: main** -> Bấm **Save**.
5. Sau khoảng 1 phút, website sẽ hoạt động chính thức với đường dẫn:  
   `https://[ten-tai-khoan-github].github.io/khoa-tttv-oer/`
