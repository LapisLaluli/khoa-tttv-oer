/**
 * DataManager - Centralized State & Storage Engine for Khoa Thông Tin Thư Viện OER
 * Supports LocalStorage caching, Real-time sync, JSON Export/Import, Image Uploads, and Admin Auth.
 */

const SEED_MILESTONES = [
  {
    id: "ms-1",
    year: "1961 – 1976",
    title: "Khởi Nguồn & Thành Lập",
    description: "Khoa được thành lập năm 1961 theo Quyết định của Ủy ban Kế hoạch Nhà nước và Phủ thủ tướng. Là đơn vị đầu tiên của Trường ĐH Văn hóa Hà Nội và là cơ sở đầu tiên của cả nước đào tạo cán bộ thư viện bậc đại học và trung học.",
    tag: "1961 – 1976"
  },
  {
    id: "ms-2",
    year: "1976 – 1992",
    title: "Đào Tạo Đại Học Chính Quy",
    description: "Tập trung đào tạo cán bộ thư viện bậc đại học, cung cấp nguồn nhân lực thư viện chính quy phục vụ sự nghiệp xây dựng và phát triển đất nước trong giai đoạn thống nhất và đổi mới.",
    tag: "1976 – 1992"
  },
  {
    id: "ms-3",
    year: "1992 – 2004",
    title: "Khoa Thông Tin – Thư Viện",
    description: "Khoa Thư viện đổi tên thành Khoa Thông tin – Thư viện. Mục tiêu: Đào tạo cán bộ Thông tin – Thư viện ở bậc đại học có trình độ lý luận và nghiệp vụ về tổ chức các hoạt động trong các thư viện hoặc cơ quan thông tin tư liệu.",
    tag: "1992 – 2004"
  },
  {
    id: "ms-4",
    year: "2004 – 2018",
    title: "Mở Rộng Quy Mô & Đổi Mới Đào Tạo",
    description: "Khoa đổi tên thành Khoa Thư viện – Thông tin, mở hệ đào tạo cử nhân cao đẳng, liên thông cao đẳng – đại học và mở thêm chuyên ngành Thông tin học, đáp ứng nhu cầu nhân lực trong kỷ nguyên số.",
    tag: "2004 – 2018"
  },
  {
    id: "ms-5",
    year: "2018 – Nay",
    title: "Khoa Thông Tin, Thư Viện & Hội Nhập",
    description: "Khoa đổi tên thành Khoa Thông tin, Thư viện; đổi tên Ngành Thư viện thành Ngành Khoa học Thông tin thư viện và Ngành Thông tin học thành Ngành Quản lý thông tin. Đặc biệt, từ khóa K65, Khoa đã chính thức chia tách ngành Thông tin – Thư viện thành hai chuyên ngành đào tạo chuyên sâu: Quản trị thư viện và Thư viện và Thiết bị trường học, đáp ứng nhu cầu thực tiễn của thị trường lao động và chuyển đổi số.",
    tag: "2018 – Nay"
  }
];

window.SEED_MILESTONES = SEED_MILESTONES;

const SEED_ACTIVITIES = [
  {
    "id": "act-1",
    "category": "daotao",
    "categoryName": "Đào tạo",
    "title": "Chương Trình “Tiệc Trà & Sách” Nhân Ngày Sách Và Văn Hóa Đọc Việt Nam",
    "description": "Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2025, sáng ngày 21/4/2025, tại Sảnh Trung tâm Thông tin - Thư viện đã diễn ra chương trình “Tiệc trà & Sách”. Đây là dịp đặc biệt để tôn vinh giá trị của sách, tri thức ...",
    "image": "assets/images/event_tiec_tra_sach.png",
    "date": "21/04/2025",
    "tag": "Văn hóa đọc",
    "location": "Sảnh Trung tâm Thông tin - Thư viện, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Trung tâm Thông tin Thư viện - Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "Chương trình _Tiệc trà & Sách_ nhân Ngày sách và Văn hóa đọc Việt Nam.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam năm 2025, sáng ngày 21/4/2025, tại Sảnh Trung tâm Thông tin - Thư viện đã diễn ra chương trình “Tiệc trà & Sách”. Đây là dịp đặc biệt để tôn vinh giá trị của sách, tri thức và văn hóa đọc trong đời sống học đường.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Chương trình là một trong những chuỗi hoạt động của Trung tâm Thông tin Thư viện trong tháng hành động phát triển văn hoá đọc, nhằm hưởng ứng lời kêu gọi của Bộ Văn hóa, Thể thao và Du lịch tới các tổ chức, doanh nghiệp và bạn đọc cả nước “cùng nhau lan toả tình yêu sách, để mỗi người dân là một đại sứ văn hoá đọc, mỗi gia đình, cộng đồng là một không gian văn hoá đọc, để cùng sách bước vào kỷ nguyên mới, kỷ nguyên vươn mình của dân tộc”; và cùng vui niềm vui chung của sự kiện 50 năm thống nhất đất nước.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Không gian trưng bày sách tại Trung tâm khoa học Thông tin - Thư viện Sự kiện cũng là dịp để chúng ta đến gần hơn với sách, với trà: những hoạt động tĩnh lặng và an lành giúp người đọc dễ dàng hòa mình vào thực tại, cảm nhận được sâu sắc nhất những tinh hoa mà trà mang lại, những thông điệp ý nghĩa mà sách muốn truyền tải; để gắn kết hơn nữa tình cảm chân thành, nồng hậu giữa các cơ quan, đơn vị trong và ngoài trường.</em></p>
<p style="margin-bottom: 14px; line-height: 1.85;">Các tiết mục văn nghệ đặc sắc đến từ sinh viên Khoa Quản lý Văn hoá nghệ thuật Chương trình "Tiệc trà & Sách" đã nhận được sự góp mặt quý báu của các Quý vị đại biểu khách mời ngoài trường: TS.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Nguyễn Huy Chương - Chủ tịch NaLa, Viện trưởng IDK; ThS. Nguyễn Việt Tiến - Giám đốc Thư viện Học viện Tài Chính; TS.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Nguyễn Thanh Thủy - Phó Giám đốc Thư viện Trường Đại học Giao thông Vận tải; ThS. Nguyễn Thị Thu Điệp - Giám đốc Thư viện Trường Đại học Thương mại; Cô Mai Thị Trang - Thư viện Trường Đại học Kinh tế - Kỹ thuật Công nghiệp; Ông Hoàng Dũng - Tổng Giám đốc Công ty D&L, Phó Viện trưởng IDK...</p>
<p style="margin-bottom: 14px; line-height: 1.85;"><strong>Đại biểu tham dự:</strong> Về phía Trường Đại học Văn hóa Hà Nội, có sự tham gia của PGS.TS. Đinh Công Tuấn - Phó Hiệu trưởng Nhà trường; PGS.TS. Trương Đại Lượng - Trưởng phòng Quản lý Đào tạo, ThS. Phùng Quốc Hiếu - Trưởng phòng Công tác Chính trị và Quản lý Sinh viên; ThS. Hoàng Trung Thanh - Trưởng phòng Khảo thí và ĐBCL; TS. Lê Tuấn Anh - Trưởng Khoa QTDL&NNQT; TS. Nguyễn Văn Thiên - Trưởng khoa Thông tin Thư viện; TS. Nguyễn Khánh Ngọc - Phó Trưởng Khoa phụ trách khoa QLVHNT; TS. Trần Đức Nguyên - Trưởng khoa Di sản văn hóa; TS. Đỗ Trần Phương - Phó Trưởng khoa Du lịch; ThS. Phạm Văn Phê - Phó Trưởng khoa XB, PH; TS. Nguyễn Thị Huệ - Phó Trưởng khoa Kiến thức cơ bản cùng đông đảo các thầy cô giáo các khoa, phòng và các bạn sinh viên trong Nhà trường...</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Khách mời thưởng thức không gian trà đạo Đặc biệt, Chương trình cũng đã nhận được sự góp mặt quý báu, chân tình của Nghệ nhân Nguyễn Tuấn Linh - Đông Lai Trà, TS. Phạm Lê Trung - Khoa Du lịch – Trường Đại học Văn hóa Hà Nội cùng những vị khách mời đã mang lại những tách trà đặc sắc, thơm ngon cho mọi người tham dự sự kiện. Sự góp mặt quý báu và những tình cảm chân thành của mọi người dành cho Trung tâm tại sự kiện đã là nguồn động viên, chia sẻ và khích lệ lớn lao đối với những người làm công tác thư viện chúng tôi trên hành trình lưu trữ, kết nối, đổi mới và sáng tạo phát triển văn hóa đọc trong cộng đồng.</p>
<p style="padding-left: 8px; margin-bottom: 10px;"><strong>•</strong> PGS.TS Đinh Công Tuấn - Phó Hiệu trưởng Nhà trường cùng LĐ các đơn vị thưởng thức trà đạo trong không gian chương trình Tại chương trình, nhiều hoạt động sôi nổi được diễn ra như cùng nhau thư giãn, thưởng trà, đọc sách, chiêm ngưỡng không gian trưng bày và chia sẻ cảm hứng đọc.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Không gian trưng bày sách về 50 năm Ngày giải phóng miền Nam, thống Nhất đất nước Với hành trình tri thức với hoạt động tham quan không gian trưng bày sách với những đầu sách đặc sắc được lựa chọn cho dịp đặc biệt này. Trong đó, điểm nhấn ý nghĩa nhất là khu vực trưng bày sách chủ đề 30/4, kỷ niệm 50 năm Ngày Giải phóng miền Nam, thống nhất đất nước. Nơi lưu giữ những trang sử hào hùng qua sách và hình ảnh tư liệu quý giá.</em></p>
<p style="margin-bottom: 14px; line-height: 1.85;">Tập thể cán bộ Trung tâm khoa học Thông tin - Thư viện chụp ảnh lưu niệm</p>`
  },
  {
    "id": "act-2",
    "category": "hoptac",
    "categoryName": "Hợp tác",
    "title": "Tọa Đàm Chuyên Đề: “Định Hướng Nghề Nghiệp Trong Lĩnh Vực Quản Lý Văn Hóa Trước Bối Cảnh Mới”",
    "description": "Sáng ngày 15/5/2025, tại Trường Đại học Văn hóa Hà Nội đã diễn ra buổi tọa đàm chuyên đề “Định hướng nghề nghiệp trong lĩnh vực Quản lý văn hóa trước bối cảnh mới” với sự tham gia của các chuyên gia, nhà quản lý, nghệ...",
    "image": "assets/images/event_dinh_huong_nghe_nghiep.png",
    "date": "15/05/2025",
    "tag": "Hướng nghiệp & Đổi mới",
    "location": "Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Quản lý Văn hóa, Nghệ thuật & Các đơn vị đối tác",
    "pdfSource": "Toạ đàm chuyên đề_ _Định hướng nghề nghiệp trong lĩnh vực Quản lý văn hóa trước bối cảnh mới_.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Sáng ngày 15/5/2025, tại Trường Đại học Văn hóa Hà Nội đã diễn ra buổi tọa đàm chuyên đề “Định hướng nghề nghiệp trong lĩnh vực Quản lý văn hóa trước bối cảnh mới” với sự tham gia của các chuyên gia, nhà quản lý, nghệ sĩ và doanh nhân trong lĩnh vực văn hóa, nghệ thuật.</p>
<p style="margin-bottom: 14px; line-height: 1.85;"><strong>Đại biểu khách mời:</strong> Tham dự tọa đàm về phía khách mời có Ông Nguyễn Anh Tuấn – Trưởng khoa Thiết kế tạo dáng công nghiệp – Trường Đại học Mỹ thuật công nghiệp; Ông Chu Anh Hùng – Phó giám đốc Nhà hát lớn Hà Nội; Nhà sản xuất phim Nguyễn Thanh Tùng; Nhà thiết kế Nguyễn Đức Lộc - Giám đốc Công ty cổ phần Ỷ Vân Hiên; Ông Trần Anh Tú - Giám đốc Không gian sáng tạo ứng tác liên ngành; Ông Trần Hoàng Long – chuyên gia sưu tập và kinh doanh tranh.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Về phía Trường Đại học Văn hóa Hà Nội có TS. Nguyễn Thị Ngọc Lâm - Phó trưởng phòng Quản lý đào tạo; TS. Nguyễn Khánh Ngọc - Phó trưởng khoa phụ trách khoa Quản lý Văn hóa, Nghệ thuật; TS. Trần Thị Thu Nhung - Phó trưởng khoa Quản lý văn hóa nghệ thuật; PGS.TS. Nguyễn Thị Anh Quyên - Trưởng bộ môn Phát triển công nghiệp văn hóa; TS. Nguyễn Thanh Xuân - Trưởng bộ môn Tổ chức sự kiện văn hoá cùng đông đảo sinh viên, giảng viên và những người quan tâm đến ngành Quản lý văn hóa trong thời đại chuyển đổi số và toàn cầu hóa.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Mở đầu tọa đàm, các diễn giả đã chỉ ra những chuyển biến sâu sắc trong bối cảnh phát triển văn hóa hiện nay: từ xu hướng số hóa và ứng dụng công nghệ trong sản xuất, truyền thông văn hóa đến sự nổi lên của các mô hình kinh tế sáng tạo, không gian văn hóa mở và nghệ thuật tương tác. Trong khi đó, những biến động về xã hội, thị trường và thị hiếu công chúng cũng đang đặt ra yêu cầu cấp thiết cho sự thay đổi trong tư duy và năng lực của người làm công tác quản lý văn hóa.</p>
<p style="padding-left: 8px; margin-bottom: 10px;"><strong>•</strong> TS. Trần Thị Thu Nhung - Phó trưởng khoa Quản lý văn hóa nghệ thuật phát biểu tại Toạ đàm Tại toạ đàm, các diễn giả như ông Trần Hoàng Long (chuyên gia sưu tập và kinh doanh tranh) và Nhà thiết kế Nguyễn Đức Lộc (Giám đốc Ỷ Vân Hiên) đã chia sẻ những câu chuyện nghề nghiệp gắn với thị trường nghệ thuật đương đại, nơi mà người làm quản lý văn hóa không chỉ cần am hiểu nghệ thuật mà còn phải giỏi tổ chức, truyền thông, và có tư duy kinh doanh.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Nhà thiết kế Nguyễn Đức Lộc (Giám đốc Ỷ Vân Hiên) chia sẻ tại Toạ đàm Đặc biệt, nhà sản xuất phim Nguyễn Thanh Tùng nhấn mạnh cơ hội nghề nghiệp trong các lĩnh vực sản xuất nội dung, phát triển dự án văn hóa, tổ chức sự kiện, truyền thông nghệ thuật, cũng như vai trò ngày càng lớn của các nhà quản lý trong việc kết nối nghệ sĩ - công chúng - thị trường.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Các khách mời đều nhất trí rằng sinh viên ngành Quản lý văn hóa cần được trang bị một cách toàn diện: từ kiến thức chuyên môn về văn hóa – nghệ thuật, kỹ năng tổ chức, quản trị dự án, đến khả năng sáng tạo, thích ứng công nghệ và ngoại ngữ.</p>
<p style="padding-left: 8px; margin-bottom: 10px;"><strong>•</strong> Ông Trần Anh Tú – Giám đốc Không gian sáng tạo Ứng tác liên ngành – nhấn mạnh: “Sinh viên cần chủ động va chạm thực tế, dám nghĩ dám làm, và hình thành cho mình tư duy liên ngành – điều đặc biệt quan trọng trong môi trường sáng tạo ngày nay.”</p>
<p style="padding-left: 8px; margin-bottom: 10px;"><strong>•</strong> PGS.TS. Nguyễn Thị Anh Quyên - Trưởng bộ môn Phát triển công nghiệp văn hóa chia sẻ tại Toạ đàm Buổi tọa đàm không chỉ mang đến kiến thức và kinh nghiệm thực tiễn mà còn truyền cảm hứng mạnh mẽ cho sinh viên về vai trò của người làm công tác quản lý văn hóa trong việc kiến tạo giá trị và lan tỏa bản sắc trong kỷ nguyên mới.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Với tinh thần kết nối giữa đào tạo và thực tiễn, Khoa Quản lý Văn hóa, nghệ thuật - Trường Đại học Văn hóa Hà Nội tiếp tục khẳng định vai trò tiên phong trong việc định hướng, dẫn dắt thế hệ sinh viên ngành Quản lý văn hóa trở thành những hạt nhân năng động, sáng tạo, sẵn sàng chinh phục những thách thức mới của thời đại.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Ảnh lưu niệm tại Toạ đàm</em></p>`
  },
  {
    "id": "act-3",
    "category": "sinhvien",
    "categoryName": "Hoạt động sinh viên",
    "title": "Chương Trình Tình Nguyện “Đông Ấm Vùng Cao 2024”",
    "description": "Ngày 20/01/2024, chương trình tình nguyện \"Đông ấm vùng cao 2024\" tại Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai đã diễn ra thành công tốt đẹp, trao gửi những phần quà ấm áp và ý nghĩa đến các ...",
    "image": "assets/images/event_dong_am_vung_cao.png",
    "date": "20/01/2024",
    "tag": "Tình nguyện vì cộng đồng",
    "location": "Trường Tiểu học xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai",
    "organizer": "Đoàn Thanh niên - Hội Sinh viên Trường ĐH Văn hóa Hà Nội & Liên chi đoàn",
    "pdfSource": "CHƯƠNG TRÌNH TÌNH NGUYỆN ĐÔNG ẤM VÙNG 2024.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Ngày 20/01/2024, chương trình tình nguyện "Đông ấm vùng cao 2024" tại Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai đã diễn ra thành công tốt đẹp, trao gửi những phần quà ấm áp và ý nghĩa đến các em nhỏ.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Chương trình tình nguyện "Đông ấm vùng cao 2024" diễn ra tại Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai Vừa qua, Đoàn Thanh niên - Hội Sinh viên Việt Nam Trường Đại học Văn hoá Hà Nội kết hợp cùng liên chi đoàn - liên chi hội khoa quản trị dịch vụ và ngôn ngữ quốc tế tích cực khởi động chương trình tình nguyện "Đông ấm vùng cao 2024" tại Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Khởi động Chương trình tình nguyện "Đông ấm vùng cao 2024"</em></p>
<p style="margin: 14px 0; font-style: italic; color: #475569; line-height: 1.85;">"Đông ấm vùng cao 2024" là chương trình tình nguyện giàu tính nhân văn, được Đoàn viên, Hội viên và sinh viên Trường Đại học Văn hoá Hà Nội định hình tổ chức, hưởng ứng tham gia, khởi nguồn cho một năm mới tràn đầy tình thương với những trái tim nhân ái hướng tới cộng đồng.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Đoàn viên, Hội viên trao tặng học bổng đến các em học sinh Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai Đoàn viên, Hội viên tham gia vẽ tranh tường tại Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai Trong chuyến đi, các Đoàn viên, Hội viên đã gửi đến các em nhỏ nơi miền núi những phần quà ý nghĩa bao gồm vở viết, sách giáo khoa, đồ dùng học tập, học bổng khuyến học, chăn, quần áo mới, bánh kẹo và các thực phẩm thiết yếu cùng hoạt động vẽ tranh tường, góp phần xoa dịu cái lạnh nơi Tây Bắc. Những món quà mang gia trị vật chất không quá lớn nhưng sưởi ấm tâm hồn những em bé trong khó khăn về cả vật chất lẫn tinh thần, từ đó hình thành ý chí quyết tâm, nỗ lực học tập vì tương lai tươi sáng.</em></p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Đoàn viên, Hội viên tham gia giao lưu cùng các em học sinh Trường Tiểu học xã Tả Phìn, xã Tả Phìn, Thị xã Sa Pa, Tỉnh Lào Cai Chương trình tạo cơ hội giao lưu, học hỏi và phát huy tinh thần tương thân tương ái đối với mỗi cá nhân tham gia. Đây là động lực giúp Đoàn Thanh niên - Hội Sinh viên đẩy mạnh các phong trào mang giá trọ hữu ích cho cộng đồng, phát huy tinh thần trách nhiệm vì một xã hội giàu mạnh văn minh.</em></p>`
  },
  {
    "id": "act-4",
    "category": "nghiencuu",
    "categoryName": "Nghiên cứu",
    "title": "Triển Lãm Sách Văn Hóa Nghệ Thuật & Nói Chuyện Chuyên Đề: “Văn Hóa Nghệ Thuật Và Thị Trường”",
    "description": "ĐHVHHN - Sáng ngày 19/4/2021, Trung tâm Thông tin Thư viện phối hợp cùng Khoa Quản lý Văn hoá Nghệ thuật đã tổ chức buổi . Buổi triển lãm và nói chuyện của Nhà nghiên cứu Phan Cẩm Thượng & Nhà sưu tầm tác phẩm nghệ th...",
    "image": "assets/images/event_trien_lam_sach_nghe_thuat.png",
    "date": "19/04/2021",
    "tag": "Triển lãm & Học thuật",
    "location": "Trung tâm Thông tin - Thư viện, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Trung tâm Thông tin Thư viện & Khoa Quản lý Văn hoá Nghệ thuật",
    "pdfSource": "Triển lãm sách Văn hoá Nghệ thuật & Nói chuyện chuyên đề_ Văn hoá nghệ thuật và Thị trường.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">ĐHVHHN - Sáng ngày 19/4/2021, Trung tâm Thông tin Thư viện phối hợp cùng Khoa Quản lý Văn hoá Nghệ thuật đã tổ chức buổi . Buổi triển lãm và nói chuyện của Nhà nghiên cứu Phan Cẩm Thượng & Nhà sưu tầm tác phẩm nghệ thuật Đinh Vân Vi đã thu hút được đông đảo sự quan tâm từ cán bộ, giảng viên và sinh viên Nhà trường – những người yêu sách và đam mê về sách.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Đây là hoạt động có ý nghĩa, là món quà vô giá mà cán bộ, giảng viên cùng sinh viên Nhà trường dành tặng nhân ngày Ngày Sách Việt Nam 21/4; Ngày Sách và Bản quyền Thế giới 23/4. Tham dự sự kiện ngoài hai vị diễn giả còn có các cán bộ, giảng viên các Phòng, Khoa và Trung tâm cùng đông đảo các bạn sinh viên Trường Đại học Văn hóa Hà Nội - đặc biệt là sinh viên Khoa Quản lý Văn hoá Nghệ thuật.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sự kiện thu hút đông đảo tập thể cán bộ, giảng viên, sinh viên Trường Đại học Văn hoá Hà Nội tham dự Trong buổi nói chuyện chuyên đề, Nhà nghiên cứu Phan Cẩm Thượng và nhà sưu tầm tác phẩm nghệ thuật Đinh Vân Vi đã cung cấp thông tin khái quát cho sinh viên về nền văn hoá nghệ thuật Việt Nam trước đây khi đang được Nhà nước bao cấp hoàn toàn và gần như ít có lợi ích với nền kinh tế. Khi nền kinh tế chuyển sang cơ chế thị trường, Nhà nước không bao cấp một số lĩnh vực văn hoá nữa dẫn đến nhiều khó khăn trong hoạt động phát triển văn hóa nghệ thuật. Từ đó hai diễn giả đã chia sẻ những vấn đề xoay quanh nội dung văn hoá nghệ thuật trong nền kinh tế thị trường.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Hai diễn giả: Nhà nghiên cứu Phan Cẩm Thượng & Nhà sưu tầm tác phẩm nghệ thuật Đinh Vân Vi trong buổi nói chuyện chuyên đề Buổi triển lãm không chỉ trưng bày những ấn phẩm sách văn hoá nghệ thuật hấp dẫn mà còn đem đến cho các các thầy cô cùng các bạn sinh viên trải nghiệm đọc sách, tìm hiểu về sách. Hai diễn giả đã có buổi trao đổi cởi mở khi thảo luận, nghiên cứu về thị trường văn hoá nghệ thuật hiện nay, nhiều kiến thức và thông tin do các khách mời cung cấp được thầy cô và các bạn sinh viên hào hứng tiếp nhận và trao đổi. Có thể thấy đây không chỉ là một buổi nói chuyện chuyên đề mà còn là giờ học ngoại khoá lý thú, bổ ích dành cho các bạn sinh viên.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sự kiện thu hút đông đảo tập thể cán bộ, giảng viên, sinh viên Trường Đại học Văn hoá Hà Nội tham dự Một số hình ảnh của buổi Triển lãm Sách Văn hoá Nghệ thuật Một số hình ảnh của buổi Triển lãm Sách Văn hoá Nghệ thuật Sau hơn 2 giờ đồng hồ chia sẻ và trao đổi vô cùng tích cực, sự kiện “” đã diễn ra thành công, góp phần nâng cao nhận thức, hiểu biết của sinh viên về tầm quan trọng của sách và văn hoá nghệ thuật trong thị trường. Đây là một trong những hoạt động rất thiết thực hưởng ứng Ngày Sách Việt Nam & Ngày Sách và Bản quyền Thế giới, đồng thời góp phần nâng cao kiến thức về sách cũng như thị trường văn hoá nghệ thuật của thầy và trò Trường Đại học Văn hoá Hà Nội.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Một số hình ảnh lưu niệm giữa các diễn giả khách mời và cán bộ, giảng viên, sinh viên Truờng Đại học Văn hoá Hà Nội Một số hình ảnh lưu niệm giữa các diễn giả khách mời và cán bộ, giảng viên, sinh viên Truờng Đại học Văn hoá Hà Nội Bài: Đặng Liên, Kiều Đức Mạnh Ảnh: Trần Phụng</p>`
  },
  {
    "id": "act-5",
    "category": "nghiencuu",
    "categoryName": "Nghiên cứu",
    "title": "Tọa Đàm Khoa Học: “Khai Thác Nguồn Tư Liệu Về Văn Hóa Dân Tộc Thiểu Số Trong Các Tài Liệu Cổ”",
    "description": "Sáng ngày 8.3.2023, Khoa văn hóa dân tộc thiểu số đã tổ chức tọa đàm khoa học “Khai thác nguồn tư liệu về văn hóa dân tộc trong các tư liệu cổ phục vụ giảng dạy, học tập của giảng viên và sinh viên”. Buổi tọa đàm đã t...",
    "image": "assets/images/event_tu_lieu_dan_toc_thieu_so.png",
    "date": "08/03/2023",
    "tag": "Di sản & Tư liệu cổ",
    "location": "Khoa Văn hóa Dân tộc Thiểu số, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Văn hóa Dân tộc Thiểu số - Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "Tọa đàm khoa học _khai thác nguồn tư liệu về văn hóa dân tộc thiểu số trong các tài liệu cổ để phục vụ giảng dạy, học tập của giảng viên và sinh viên_.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Sáng ngày 8.3.2023, Khoa văn hóa dân tộc thiểu số đã tổ chức tọa đàm khoa học “Khai thác nguồn tư liệu về văn hóa dân tộc trong các tư liệu cổ phục vụ giảng dạy, học tập của giảng viên và sinh viên”. Buổi tọa đàm đã thu hút nhiều giảng viên và sinh viên trong khoa cùng tham gia.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Tại buổi tọa đàm PGS.TS. Trần Bình đã giới thiệu và phân tích một số tư liệu cổ. Đây là những tư liệu rất cần thiết đối với những người tìm hiểu về văn hóa dân tộc. PGS.TS. Trần Bình cũng giới thiệu về nguồn lưu trữ tư liệu để giảng viên và sinh viên có thể tra cứu và tham khảo.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Tọa đàm khoa học “khai thác nguồn tư liệu về văn hóa dân tộc thiểu số trong các tài liệu cổ để phục vụ giảng dạy, học tập của giả… Tọa đàm khoa học “khai thác nguồn tư liệu về văn hóa dân tộc thiểu số trong các tài liệu cổ để phục vụ giảng dạy, học tập của giả… Tọa đàm khoa học “khai thác nguồn tư liệu về văn hóa dân tộc thiểu số trong các tài liệu cổ để phục vụ giảng dạy, học tập của giả… Tọa đàm khoa học “khai thác nguồn tư liệu về văn hóa dân tộc thiểu số trong các tài liệu cổ để phục vụ giảng dạy, học tập của giả…</p>`
  },
  {
    "id": "act-6",
    "category": "hoptac",
    "categoryName": "Hợp tác",
    "title": "Tọa Đàm Khoa Học: “Văn Hóa Tộc Người Từ Góc Nhìn Về Nhà Ở”",
    "description": "Sáng ngày 05/4/2023, Trường Đại học Văn hóa Hà Nội phối hợp với Công ty TNHH Quốc tế Mai Hà (MaiHaBooks) cùng với sự đồng hành của Nhà xuất bản Khoa học và xã hội; Hội Dân tộc học và Nhân học Việt Nam tổ chức",
    "image": "assets/images/event_van_hoa_toc_nguoi_nha_o.png",
    "date": "05/04/2023",
    "tag": "Tọa đàm khoa học liên ngành",
    "location": "Phòng Hội thảo Quốc tế, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Trường Đại học Văn hóa Hà Nội, MaiHaBooks, NXB Khoa học Xã hội & Hội Dân tộc học và Nhân học Việt Nam",
    "pdfSource": "Tọa đàm khoa học_ _Văn hóa tộc người từ góc nhìn về nhà ở__.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Sáng ngày 05/4/2023, Trường Đại học Văn hóa Hà Nội phối hợp với Công ty TNHH Quốc tế Mai Hà (MaiHaBooks) cùng với sự đồng hành của Nhà xuất bản Khoa học và xã hội; Hội Dân tộc học và Nhân học Việt Nam tổ chức</p>
<p style="margin-bottom: 14px; line-height: 1.85;"><strong>Đại biểu tham dự:</strong> Tham dự tọa đàm, về phía các nhà khoa học có GS.TS.KTS. Doãn Minh Khôi – Viện trưởng Viện Quy hoạch và Kiến trúc đô thị (Trường Đại học Xây dựng Hà Nội); PGS.TS. Vương Xuân Tình – Nguyên Viện trưởng Viện Dân tộc học Việt Nam; PGS.TS. Lâm Bá Nam – Chủ tịch Hội Dân tộc học và Nhân học Việt Nam.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Về phía khách mời ngoài trường có: PGS.TS Phạm Minh Phúc - Quyền Giám đốc, Tổng Biên tập NXB Khoa học xã hội; TS.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Phan Tân - Phó Giám đốc NXB Khoa học xã hội; PGS.TS Bùi Xuân Đính - Viện dân tộc học; PGS.TS Phạm Văn Lợi - Viện Việt Nam học và Khoa học phát triển Việt Nam; TS. Nguyễn Thanh Sơn - Vụ Pháp chế, Bộ VHTTDL; TS. Nguyễn Công Thảo - Viện Dân tộc học.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Về phía các đơn vị đối tác, có sự tham gia của bà Hà Thị Hương Mai - GĐ Công ty TNHH Quốc tế Mai Hà (MaiHaBooks); Bà Nguyễn Thị Hương - Trưởng Ban Biên tập Công ty CP sách Omega Việt Nam (Omega+); Ông Đặng Hồng Quân - Trưởng phòng Hợp tác Công ty CP sách Omega Việt Nam (Omega+).</p>
<p style="margin-bottom: 14px; line-height: 1.85;"><strong>Đại biểu tham dự:</strong> Về phía trường Đại học Văn hóa Hà Nội có sự tham gia của PGS.TS Đặng Hoài Thu - Phó Hiệu trưởng Nhà trường; PGS.TS Trương Đại Lượng - Trưởng phòng Đào tạo, QLKH&HTQT; TS. Nguyễn Anh Cường - Trưởng khoa Văn hóa dân tộc thiểu số; TS. Đỗ Thị Thu Thủy - Trưởng khoa Viết văn, Báo chí; TS. Nguyễn Tiến Dũng - Phó Viện trưởng Viện Văn hóa cùng tập thể cán bộ, giảng viên và sinh viên Nhà trường tham dự.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Phát biểu khai mạc tọa đàm, PGS.TS. Đặng Hoài Thu - Phó Hiệu trưởng Nhà trường khẳng định ý nghĩa, tầm quan trọng của văn hóa tộc người từ góc nhìn về nhà ở và bày tỏ kỳ vọng các đại biểu tham dự sẽ có nhiều đóng góp, thảo luận góp phần xây dựng hoàn thiện hơn trong tọa đàm.</p>
<p style="padding-left: 8px; margin-bottom: 10px;"><strong>•</strong> PGS.TS. Đặng Hoài Thu - Phó Hiệu trưởng Nhà trường phát biểu khai mạc tọa đàm Tại tọa đàm khoa học này, nhiều báo cáo tham luận chuyên sâu như: “Nhà Dân tộc học Nguyễn Khắc Tụng - Người mở hướng nghiên cứu về nhà ở cổ truyền của các dân tộc Việt Nam” của PGS.TS Vương Xuân Tình; “Kiến trúc hiện đại - bản địa và Nhà Dân tộc học Nguyễn Khắc Tụng” của PGS.TS.KTS Doãn Minh Khôi đã khai thác được những nguồn tư liệu mới, đặc biệt là sự tiếp cận dưới góc nhìn đa chiều và liên ngành... Tất cả đều nhằm mục tiêu tiếp tục làm sáng tỏ giá trị truyền thống của nhà ở, thực trạng sự biến đổi của nhà ở trong quá trình đô thị hóa và giao lưu văn hóa. Từ đó đưa ra được những giải pháp nhằm giữ gìn và phát huy giá trị của nhà ở cổ truyền trong xã hội đương đại hiện nay.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Các Nhà khoa học trình bày chia sẻ của mình tại tọa đàm Như vậy, tọa đàm lần này đã mang đến nhiều ý kiến, nội dung mới nhằm trao đổi học thuật của những chuyên gia đầu ngành về dân tộc học, nhân học, văn hóa các dân tộc thiểu số nói chung, nhà cổ truyền của các dân tộc thiểu số nói riêng, chỉ ra những giá trị về văn hóa, kiến trúc,… của nhà ở cổ truyền, qua đó bàn luận về giải pháp phát huy giá trị nhà cổ truyền các dân tộc trong văn hóa, xã hội đương đại.</p>
<p style="font-size: 13.5px; font-style: italic; color: var(--muted); margin: 8px 0 16px; text-align: center;">📷 <em>Các nhà khoa học, đại biểu tham dự và lãnh đạo, cán bộ, giảng viên Nhà trường chụp ảnh lưu niệm tọa đàm</em></p>`
  },
  {
    "id": "act-7",
    "category": "daotao",
    "categoryName": "Đào tạo",
    "title": "Hoạt Động Trưng Bày & Giới Thiệu Sách Chuyên Đề Định Kỳ",
    "description": "“Thế giới là một cuốn sách, và ai không đi chỉ đọc được một trang.”",
    "image": "assets/images/event_trung_bay_sach_dinh_ky.png",
    "date": "Thường niên",
    "tag": "Học liệu chuyên ngành & Thư viện",
    "location": "Phòng đọc 2, Trung tâm Thông tin - Thư viện",
    "organizer": "Trung tâm Thông tin - Thư viện, Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "Hoạt động trưng bày sách định kỳ.pdf",
    "details": `<p style="margin: 14px 0; font-style: italic; color: #475569; line-height: 1.85;">“Thế giới là một cuốn sách, và ai không đi chỉ đọc được một trang.”</p>
<p style="margin: 14px 0; font-style: italic; color: #475569; line-height: 1.85;">– St. Augustine Để việc đọc sách đạt hiệu quả cao nhất, mỗi người hãy lựa chọn cho mình những quyển sách tốt nhất, phù hợp nhất để có thể nghiên cứu, thực hành và vận dụng những điều đọc được từ sách giúp cho việc học tập luôn được tốt hơn.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Năm học mới đã bắt đầu, để hỗ trợ cho việc tìm tài liệu phục vụ môn học của các em Sinh viên trong Nhà trường nói chung cũng như sinh viên Khoa Du lịch nói riêng, Trung tâm Thông tin, Thư viện tổ chức trưng bày và giới thiệu những tài liệu chuyên ngành Du lịch, những tài liệu tham khảo liên quan đến các môn học về văn hóa du lịch.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Địa điểm: Phòng đọc 2, Trung tâm Thông tin, Thư viện.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Thời gian từ ngày 19/09/2022 – 25/09/2022 Xin trân trọng kính mời Quý Bạn đọc đến tham quan và tham khảo tài liệu.</p>`
  }
];

window.SEED_ACTIVITIES = SEED_ACTIVITIES;

const SEED_RESOURCES = [
  {
    id: "res-1",
    type: "reading",
    tag: "Tài liệu đọc OER",
    title: "Tóm Lược Lịch Sử 60 Năm",
    description: "Bản tóm tắt ngắn gọn, mạch lạc các mốc son 1961, 1991 và kỷ nguyên thông tin số, phù hợp tra cứu nhanh.",
    content: "<p><strong>1. Bối cảnh 1961:</strong> Trường Đại học Văn hóa Hà Nội mở ngành đào tạo cán bộ thư viện đại học đầu tiên của cả nước.</p><p><strong>2. Mở rộng 1990:</strong> Đón đầu xu thế công nghệ và xã hội thông tin, mở rộng đào tạo ngành Thông tin học.</p><p><strong>3. Thành lập Khoa 1991:</strong> Quyết định số 41/TCCB ngày 13/3/1991 chính thức nâng cấp thành Khoa Thông tin Thư viện.</p><p><strong>4. Hiện đại hóa:</strong> Đào tạo cử nhân, thạc sĩ, tiến sĩ chuyên ngành; phát triển thư viện số và Tài nguyên Giáo dục Mở (OER).</p>",
    license: ""
  },
  {
    id: "res-2",
    type: "infographic",
    tag: "Infographic · Đồ họa số",
    title: "Dòng Thời Gian Trực Quan",
    description: "Infographic tóm tắt sơ đồ phát triển của Khoa qua từng thập kỷ với đầy đủ dữ liệu thống kê then chốt.",
    content: "<div style='text-align:center;'><img src='assets/images/placeholder.svg' style='max-width:100%;border-radius:6px;margin-bottom:12px;'><p>Sơ đồ dòng thời gian trực quan hóa hơn 60 năm xây dựng và phát triển.</p></div>",
    license: ""
  },
  {
    id: "res-3",
    type: "pdf",
    tag: "Tài liệu PDF · Kỷ yếu",
    title: "Kỷ Yếu Khoa Thông Tin Thư Viện",
    description: "Tập hợp các bài viết kỷ niệm, tư liệu ảnh cán bộ giảng viên các thời kỳ và danh sách đề tài khoa học tiêu biểu.",
    content: "<p>Kỷ yếu lưu trữ toàn bộ các bài viết nghiên cứu lịch sử, hình ảnh tư liệu và danh sách cán bộ, giảng viên, sinh viên các khóa của Khoa Thông tin Thư viện.</p>",
    license: ""
  },
  {
    id: "res-4",
    type: "gallery",
    tag: "Ảnh tư liệu · Metadata",
    title: "Bộ Sưu Tập Ảnh Lịch Sử",
    description: "Kho ảnh số hóa thầy trò qua các thời kỳ, mỗi ảnh được gắn metadata Dublin Core và thông tin chú thích rõ ràng.",
    content: "<div style='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0;'><img src='assets/images/placeholder.svg' style='border-radius:4px;'><img src='assets/images/placeholder.svg' style='border-radius:4px;'></div><p>Mỗi tư liệu được định danh chuẩn theo tiêu chuẩn Dublin Core Metadata.</p>",
    license: ""
  }
];

const SEED_QUIZ = [
  {
    id: "q-1",
    question: "Ngành đào tạo chuyên ngành Thư viện trình độ đại học tại Trường Đại học Văn hóa Hà Nội bắt đầu từ năm nào?",
    options: [
      "Năm 1959",
      "Năm 1961",
      "Năm 1975",
      "Năm 1991"
    ],
    answer: 1,
    explanation: "Năm 1961, Trường Đại học Văn hóa Hà Nội chính thức bắt đầu đào tạo chuyên ngành Thư viện bậc đại học đầu tiên."
  },
  {
    id: "q-2",
    question: "Khoa Thông tin Thư viện được chính thức thành lập theo Quyết định nào của Hiệu trưởng?",
    options: [
      "Quyết định số 12/GD-ĐT ngày 10/1/1990",
      "Quyết định số 41/TCCB ngày 13/3/1991",
      "Quyết định số 88/TTg ngày 15/5/1995",
      "Quyết định số 05/BGDĐT ngày 20/2/2000"
    ],
    answer: 1,
    explanation: "Khoa Thông tin Thư viện chính thức được thành lập theo Quyết định số 41/TCCB ngày 13/3/1991 của Hiệu trưởng Trường Đại học Văn hóa Hà Nội."
  },
  {
    id: "q-3",
    question: "Khoa bắt đầu mở rộng đào tạo chuyên ngành Thông tin vào khoảng thời gian nào?",
    options: [
      "Từ năm 1970",
      "Từ năm 1980",
      "Từ năm 1990",
      "Từ năm 2005"
    ],
    answer: 2,
    explanation: "Từ năm 1990, nắm bắt nhu cầu đổi mới và hội nhập, Khoa đã mở rộng đào tạo thêm chuyên ngành Thông tin học."
  },
  {
    id: "q-4",
    question: "Mục tiêu và đặc trưng cốt lõi của Tài nguyên Giáo dục Mở (OER) là gì?",
    options: [
      "Chỉ cho phép xem nhưng không được phép chia sẻ",
      "Tài nguyên số được cấp phép bản quyền mở (như Creative Commons), cho phép truy cập, sử dụng và chia sẻ tự do",
      "Bắt buộc phải trả phí duy trì hằng tháng",
      "Chỉ dành riêng cho nội bộ một lớp học"
    ],
    answer: 1,
    explanation: "Tài nguyên Giáo dục Mở (OER) mang bản quyền mở (như Creative Commons), cho phép cộng đồng tiếp cận, học tập, tái sử dụng và lan tỏa tri thức tự do."
  }
];

const SEED_SETTINGS = {
  facultyName: "KHOA THÔNG TIN THƯ VIỆN",
  universityName: "Trường Đại học Văn hóa Hà Nội",
  slogan: "Tri thức – Kết nối – Phát triển",
  heroMotto: "“Tri thức hôm nay – Kiến tạo giá trị ngày mai”",
  heroQuoteBoxTitle: "VĂN HÓA LÀ NỀN TẢNG CỦA SỰ PHÁT TRIỂN BỀN VỮNG",
  heroQuoteBoxDesc: "Hơn 60 năm đồng hành cùng sự nghiệp giáo dục, nghiên cứu khoa học và phát triển ngành Thông tin – Thư viện Việt Nam.",
  quoteBannerText: "",
  quoteBannerAuthor: "",
  footerSlogan: "“Vì một xã hội tri thức và nhân văn hơn”",
  address: "Số 418 Đường La Thành, Ô Chợ Dừa, Đống Đa, Hà Nội",
  email: "flis@huc.edu.vn",
  websiteUrl: "https://flis.huc.edu.vn",
  // UI Custom Images
  logoUrl: "assets/images/flis-logo.jpg",
  heroBgUrl: "assets/images/hero-bg.svg",
  aboutLargeImg: "assets/images/truong-dai-hoc-van-hoa-ha-noi-1.jpg",
  aboutStack1Img: "assets/images/anh-toa-nha-5.jpg",
  aboutStack2Img: "assets/images/cac-nganh-cua-truong-dai-hoc-van-hoa-ha-noi.jpg",
  quoteBgUrl: "assets/images/hero-bg.svg",
  // Stats
  stat1Num: "60+",
  stat1Label: "Năm hình thành",
  stat1Sub: "Đồng hành & phát triển bền vững",
  stat2Num: "Hàng nghìn",
  stat2Label: "Cựu sinh viên",
  stat2Sub: "Đang công tác trên mọi miền đất nước",
  stat3Num: "Nhiều",
  stat3Label: "Công trình nghiên cứu",
  stat3Sub: "Đóng góp học thuật có giá trị thực tiễn",
  stat4Num: "Đa dạng",
  stat4Label: "Đối tác chiến lược",
  stat4Sub: "Trong nước và mạng lưới quốc tế"
};

const DataManager = {
  KEYS: {
    MILESTONES: "flis_oer_milestones",
    ACTIVITIES: "flis_oer_activities",
    RESOURCES: "flis_oer_resources",
    QUIZ: "flis_oer_quiz",
    SETTINGS: "flis_oer_settings",
    ADMIN_AUTH: "flis_oer_admin_auth",
    ADMIN_PASS: "flis_oer_admin_password"
  },

  safeGet(key) {
    try {
      return localStorage.getItem(key);
    } catch(e) {
      return null;
    }
  },
  safeSet(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch(e) {}
  },

  init() {
    try {
      const storedMilestones = this.safeGet(this.KEYS.MILESTONES);
      let parsedMilestones = null;
      try { parsedMilestones = storedMilestones ? JSON.parse(storedMilestones) : null; } catch(e){}
      if (!parsedMilestones || !Array.isArray(parsedMilestones) || parsedMilestones.length !== SEED_MILESTONES.length || !storedMilestones.includes("K65")) {
        this.saveMilestones(SEED_MILESTONES);
      }
    } catch(e) {
      this.saveMilestones(SEED_MILESTONES);
    }

    try {
      this.saveActivities(SEED_ACTIVITIES);
    } catch(e) {}

    try {
      const storedResources = this.safeGet(this.KEYS.RESOURCES);
      if (!storedResources || storedResources.includes("5–10 phút") || storedResources.includes("CC BY")) {
        this.saveResources(SEED_RESOURCES);
      }
      if (!this.safeGet(this.KEYS.QUIZ)) {
        this.saveQuiz(SEED_QUIZ);
      }
      if (!this.safeGet(this.KEYS.SETTINGS)) {
        this.saveSettings(SEED_SETTINGS);
      } else {
        const current = this.getSettings();
        if (!current.logoUrl || current.logoUrl.includes("placeholder") || current.logoUrl.includes("huc-logo.svg") || current.logoUrl.includes("Logo-Truong")) {
          current.logoUrl = SEED_SETTINGS.logoUrl;
        }
        if (!current.aboutLargeImg || current.aboutLargeImg.includes("placeholder.svg")) {
          current.aboutLargeImg = SEED_SETTINGS.aboutLargeImg;
        }
        if (!current.aboutStack1Img || current.aboutStack1Img.includes("placeholder.svg")) {
          current.aboutStack1Img = SEED_SETTINGS.aboutStack1Img;
        }
        if (!current.aboutStack2Img || current.aboutStack2Img.includes("placeholder.svg")) {
          current.aboutStack2Img = SEED_SETTINGS.aboutStack2Img;
        }
        this.saveSettings({ ...SEED_SETTINGS, ...current });
      }
      if (!this.safeGet(this.KEYS.ADMIN_PASS)) {
        this.safeSet(this.KEYS.ADMIN_PASS, "flis@2026");
      }
    } catch(e) {}
  },

  // Auth Methods
  login(username, password) {
    const validUser = "admin";
    const storedPass = localStorage.getItem(this.KEYS.ADMIN_PASS) || "flis@2026";
    if (username.trim().toLowerCase() === validUser && password === storedPass) {
      sessionStorage.setItem(this.KEYS.ADMIN_AUTH, "true");
      return { success: true };
    }
    return { success: false, message: "Tên đăng nhập hoặc mật khẩu không chính xác!" };
  },

  logout() {
    sessionStorage.removeItem(this.KEYS.ADMIN_AUTH);
  },

  isLoggedIn() {
    return sessionStorage.getItem(this.KEYS.ADMIN_AUTH) === "true";
  },

  changePassword(oldPass, newPass) {
    const currentPass = localStorage.getItem(this.KEYS.ADMIN_PASS) || "flis@2026";
    if (oldPass !== currentPass) {
      return { success: false, message: "Mật khẩu hiện tại không đúng!" };
    }
    if (!newPass || newPass.length < 6) {
      return { success: false, message: "Mật khẩu mới phải từ 6 ký tự trở lên!" };
    }
    localStorage.setItem(this.KEYS.ADMIN_PASS, newPass);
    return { success: true };
  },

  // Milestones CRUD
  getMilestones() {
    try {
      const data = this.safeGet(this.KEYS.MILESTONES);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch(e) {}
    return SEED_MILESTONES;
  },
  saveMilestones(data) {
    this.safeSet(this.KEYS.MILESTONES, JSON.stringify(data));
  },
  addMilestone(item) {
    const list = this.getMilestones();
    item.id = "ms-" + Date.now();
    list.push(item);
    this.saveMilestones(list);
    return item;
  },
  updateMilestone(id, updatedItem) {
    let list = this.getMilestones();
    list = list.map(m => (m.id === id ? { ...m, ...updatedItem } : m));
    this.saveMilestones(list);
  },
  deleteMilestone(id) {
    let list = this.getMilestones();
    list = list.filter(m => m.id !== id);
    this.saveMilestones(list);
  },

  // Activities CRUD
  getActivities() {
    try {
      const data = this.safeGet(this.KEYS.ACTIVITIES);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch(e) {}
    return SEED_ACTIVITIES;
  },
  saveActivities(data) {
    this.safeSet(this.KEYS.ACTIVITIES, JSON.stringify(data));
  },
  addActivity(item) {
    const list = this.getActivities();
    item.id = "act-" + Date.now();
    list.push(item);
    this.saveActivities(list);
    return item;
  },
  updateActivity(id, updatedItem) {
    let list = this.getActivities();
    list = list.map(a => (a.id === id ? { ...a, ...updatedItem } : a));
    this.saveActivities(list);
  },
  deleteActivity(id) {
    let list = this.getActivities();
    list = list.filter(a => a.id !== id);
    this.saveActivities(list);
  },

  // Resources CRUD
  getResources() {
    try {
      const data = localStorage.getItem(this.KEYS.RESOURCES);
      return data ? JSON.parse(data) : SEED_RESOURCES;
    } catch(e) {
      return SEED_RESOURCES;
    }
  },
  saveResources(data) {
    localStorage.setItem(this.KEYS.RESOURCES, JSON.stringify(data));
  },
  addResource(item) {
    const list = this.getResources();
    item.id = "res-" + Date.now();
    list.push(item);
    this.saveResources(list);
    return item;
  },
  updateResource(id, updatedItem) {
    let list = this.getResources();
    list = list.map(r => (r.id === id ? { ...r, ...updatedItem } : r));
    this.saveResources(list);
  },
  deleteResource(id) {
    let list = this.getResources();
    list = list.filter(r => r.id !== id);
    this.saveResources(list);
  },

  // Quiz CRUD
  getQuiz() {
    try {
      const data = localStorage.getItem(this.KEYS.QUIZ);
      return data ? JSON.parse(data) : SEED_QUIZ;
    } catch(e) {
      return SEED_QUIZ;
    }
  },
  saveQuiz(data) {
    localStorage.setItem(this.KEYS.QUIZ, JSON.stringify(data));
  },
  addQuizQuestion(item) {
    const list = this.getQuiz();
    item.id = "q-" + Date.now();
    list.push(item);
    this.saveQuiz(list);
    return item;
  },
  updateQuizQuestion(id, updatedItem) {
    let list = this.getQuiz();
    list = list.map(q => (q.id === id ? { ...q, ...updatedItem } : q));
    this.saveQuiz(list);
  },
  deleteQuizQuestion(id) {
    let list = this.getQuiz();
    list = list.filter(q => q.id !== id);
    this.saveQuiz(list);
  },

  // Settings & Images
  getSettings() {
    try {
      const data = localStorage.getItem(this.KEYS.SETTINGS);
      return data ? JSON.parse(data) : SEED_SETTINGS;
    } catch(e) {
      return SEED_SETTINGS;
    }
  },
  saveSettings(data) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(data));
  },

  // Export / Import / Reset
  exportAllJSON() {
    const exportBundle = {
      exportDate: new Date().toISOString(),
      milestones: this.getMilestones(),
      activities: this.getActivities(),
      resources: this.getResources(),
      quiz: this.getQuiz(),
      settings: this.getSettings()
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportBundle, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `flis_oer_data_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importAllJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.milestones) this.saveMilestones(parsed.milestones);
      if (parsed.activities) this.saveActivities(parsed.activities);
      if (parsed.resources) this.saveResources(parsed.resources);
      if (parsed.quiz) this.saveQuiz(parsed.quiz);
      if (parsed.settings) this.saveSettings(parsed.settings);
      return { success: true };
    } catch (err) {
      return { success: false, message: "File JSON không hợp lệ hoặc bị lỗi định dạng!" };
    }
  },

  resetToDefault() {
    this.saveMilestones(SEED_MILESTONES);
    this.saveActivities(SEED_ACTIVITIES);
    this.saveResources(SEED_RESOURCES);
    this.saveQuiz(SEED_QUIZ);
    this.saveSettings(SEED_SETTINGS);
  }
};

// Expose to window immediately
window.DataManager = DataManager;

try {
  DataManager.init();
} catch(e) {
  console.warn("DataManager initialization warning:", e);
}
