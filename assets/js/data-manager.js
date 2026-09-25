const SEED_TEAM = [
  {
    "stt": 1,
    "name": "Phạm Hoàng Kim Chi",
    "role": "Trưởng nhóm / Điều phối",
    "tasks": "Phân công công việc, hỗ trợ và tư vấn, viết báo cáo",
    "avatar": "KC",
    "color": "#7b1d28"
  },
  {
    "stt": 2,
    "name": "Nguyễn Thế Quân",
    "role": "Nghiên cứu & Biên tập",
    "tasks": "Tìm kiếm thông tin, chỉnh sửa báo cáo",
    "avatar": "TQ",
    "color": "#1e3a8a"
  },
  {
    "stt": 3,
    "name": "Nguyễn Ngọc Khánh",
    "role": "Thuyết trình & Biên tập",
    "tasks": "Thuyết trình, chỉnh sửa báo cáo, tìm kiếm thông tin",
    "avatar": "NK",
    "color": "#047857"
  },
  {
    "stt": 4,
    "name": "Vũ Thị Nhung",
    "role": "Thu thập & Sự kiện",
    "tasks": "Thu thập thông tin, sự kiện khoa",
    "avatar": "VN",
    "color": "#b45309"
  },
  {
    "stt": 5,
    "name": "Nguyễn Công Minh",
    "role": "Kỹ thuật & Website",
    "tasks": "Thiết kế và tạo website, đưa ra định hướng và hoàn thành sản phẩm",
    "avatar": "CM",
    "color": "#6b21a8"
  }
];
window.SEED_TEAM = SEED_TEAM;

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
  },
  {
    "id": "act-8",
    "category": "sinhvien",
    "categoryName": "Sinh viên & NCKH",
    "title": "Hội Thảo Sinh Viên Nghiên Cứu Khoa Học Năm 2024",
    "description": "Ngày 29/11/2024, Khoa Thông tin, Thư viện đã tổ chức thành công “Hội thảo Sinh viên nghiên cứu Khoa học” nhằm khuyến khích phong trào học thuật, sáng tạo và tạo diễn đàn chia sẻ ý tưởng nghiên cứu của sinh viên trong khoa.",
    "image": "assets/images/event_sv_nckh_2024_0_0.png",
    "date": "29/11/2024",
    "tag": "Nghiên cứu sinh viên",
    "location": "Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Thông tin, Thư viện – Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">Phát biểu tại Hội thảo, TS. Nguyễn Văn Thiên đã đánh giá cao những nỗ lực, sáng tạo của các nhóm nghiên cứu, đồng thời khẳng định vai trò quan trọng của nghiên cứu khoa học trong việc phát triển kỹ năng, tư duy của sinh viên, giúp các em tự tin hơn trong hành trình học tập và làm việc sau này. HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Hội thảo Sinh viên nghiên cứu khoa học năm 2024 không chỉ là cơ hội để sinh viên thể hiện bản thân, mà còn là động lực thúc đẩy phong trào học thuật trong toàn Khoa. Thành công của Hội thảo là minh chứng cho tinh thần học tập, sáng tạo và khát khao chinh phục tri thức của các bạn sinh viên. Một số hình ảnh của chương trình: HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sinh viên Nguyễn Thế Quân trình bày đề tài nghiên cứu Sinh viên Bùi Đình Trọng đại diện nhóm tác giả trình bày đề tài nghiên cứu HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sinh viên Phạm Hoàng Kim Chi trình bày đề tài nghiên cứu Sinh viên Phạm Thị Ngát đại diện nhóm tác giả trình bày đề tài nghiên cứu HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Ảnh: CLB Truyền thông số, CLB Công nghệ số Bài: N.T.Yên HỘI THẢO SINH VIÊN NGHIÊN CỨU KHOA HỌC NĂM 2024</p>`
  },
  {
    "id": "act-9",
    "category": "daotao",
    "categoryName": "Đào tạo",
    "title": "Hội Thảo “Xây Dựng Chuẩn Đầu Ra, Chương Trình Đào Tạo Ngành Thông Tin Thư Viện Và Ngành Quản Lý Thông Tin”",
    "description": "Khoa Thông tin, Thư viện tổ chức hội thảo lấy ý kiến các chuyên gia đầu ngành, nhà tuyển dụng lao động và các nhà khoa học nhằm rà soát, cập nhật chuẩn đầu ra và khung chương trình đào tạo đáp ứng nhu cầu thực tiễn.",
    "image": "assets/images/event_chuan_dau_ra_ctdt_1_0.png",
    "date": "07/08/2024",
    "tag": "Chuẩn đầu ra & Đào tạo",
    "location": "Phòng Hội thảo Quốc tế, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Thông tin, Thư viện – Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "Hội thảo _Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin_.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">TS Lê Thị Thành Huế- Giám đốc Trung tâm TTTV- Đại học Hà Nội phát biểu Đại diện Hội Thư viện Việt Nam, Th.S Nguyễn Hữu Giới nhân xét: trong nội dung mô tả chuẩn đầu ra ngành Thông tin Thư viện, Khoa cần bổ sung thêm nội dung: cử nhân sẽ nắm được kiến thức cơ bản về quản lý nhà nước trong thư viện, đồng thời mô tả về vị trí việc làm sau tốt nghiệp, cần thêm chức danh: chuyên viên quản lý nhà nước về thông tin và thư viện. Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Th.s Nguyễn Hữu Giới- Hội Thư viện Việt Nam phát biểu PGS.TS Đoàn Phan Tân - Nguyên Phó Hiệu trưởng Trường ĐHVHHN là nhà giáo rất tâm huyết với hoạt động đào tạo của Khoa Thông tin Thư viện. Phó giáo sư góp ý chuẩn đầu ra cần nhấn mạnh mục tiêu chung là nắm được các kiến thức chuyên sâu về chuyên ngành, đồng thời góp ý trong chương trình đào tạo ngành Thông tin thư viện cần nhấn mạnh tới nội dung chuyển đổi số trong hoạt động thông tin thư viện. Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">PGS.TS Đoàn Phan Tân - Nguyên Phó Hiệu trưởng Trường ĐHVHHN phát biểu TS. Vũ Dương Thúy Ngà - Nguyên Vụ Trưởng Vụ Thư viện Bộ VHTTDL đánh giá sự ra đời của chuyên ngành Thư viện và thiết bị trường học thể hiện sự nhanh nhạy của Khoa trong quá trình đào tạo, bắt kịp xu thế và nhu cầu của xã hội hiện nay. Tiến sĩ cũng đề xuất môn học Thiết kế website nên tăng thời lượng giảng dạy và thực hành. Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">TS. Vũ Dương Thúy Ngà - Nguyên Vụ Trưởng Vụ Thư viện Bộ VHTTDL phát biểu Đại diện khối doanh nghiệp sử dụng lao động, Ông Bùi Tiên Phong - PGĐ Công ty Cổ phần tích hợp công nghệ D&L khẳng định hiện nay kỹ năng tìm tin là rất quan trọng với tất cả mọi người trong bối cảnh bùng nổ thông tin, do đó Khoa cần bổ sung, cập nhật nội dung trong các môn học liên quan tới công nghệ, ưu tiên giới thiệu các giải pháp và công nghệ mới. Ông cũng nhấn mạnh hiện nay không chỉ thư viện mà tất cả các tổ chức, doanh nghiệp đều cần quản lý thông tin, do đó các vị trí việc làm của sinh viên sau khi tốt nghiệp ngành này rất nhiều và rộng. Ông đề xuất cần tăng thêm thời lượng cho môn học Dịch vụ thư viện trường học. Đại diện Nhà tuyển dụng khối thư viện trường học, Bà Nguyễn Thị Thái Hòa - Phụ trách Thư viện Trường Phổ thông liên cấp Olympia, Hà Nội đề cập tới tình trạng các trường phổ thông đang thiếu nhiều nhân viên thư viện, đồng thời nhận định để đảm nhận chức vụ quản lý thư viện trường học, người làm việc cần kiêm nhiệm nhiều công việc, đồng thời có các kỹ năng về ứng xử và giảng dạy đối với thanh thiếu niên. Bà đề xuất trong chuyên ngành Thư viện và thiết bị trường học cần có thêm môn học về nghiệp vụ sư phạm và kỹ năng mềm với người học trong các trường phổ thông và tiểu học. Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Th.s Nguyễn Xuân Dũng- Giám đốc Thư viện Quốc gia Việt Nam phát biểu Hội thảo còn nhận được những ý kiến nhận xét, đóng góp của các chuyên gia : PGS.TS. Trần Thị Quý- Nguyên Trưởng Khoa TTTV Đại học KHXHNV – ĐHQG HN - Ủy viên Hội đồng KH Viện Nghiên cứu và phát triển tri thức số, TS. Nguyễn Thu Thảo - Cục Thông tin Khoa học và Công nghệ Quốc gia, ThS. Hoàng Văn Dưỡng - PGĐ Trung tâm Thư viện và Tri thức số ĐHQG HN,Th.s Nguyễn Xuân Dũng- Giám đốc Thư viện Quốc gia Việt Nam, PGS.TS. Đặng Hoài Thu - Phó Hiệu trưởng Trường ĐHVHHN, PGS.TS. Nguyễn Thị Lan Thanh - Nguyên Phó Hiệu trưởng Trường ĐHVHHN. Các chuyên gia đều khẳng định tầm quan trong của việc rà soát, cập nhật chuẩn đầu ra và chương trình đào tạo, nội dung chương trình cần gắn kết với thực tiễn yêu cầu hiện nay của từng lĩnh vực. Các chuyên gia cũng có những góp ý về mặt chuyên môn trong việc xây dựng chương trình đào tạo cũng như những vấn đề cần khắc phục để chương trình được hoàn thiện, đáp ứng được yêu cầu của xã hội hiện đại. Đây đều là những nhận xét, góp Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">ý tâm huyết của những chuyên gia có nhiều năm trực tiếp tham gia công tác quản lý cũng như sử dụng lao động trong ngành Thông tin Thư viện và Quản lý Thông tin. Đặc biệt các đơn vị đều nhấn mạnh cần tăng cường kỹ năng thực hành nghiệp vụ cho sinh viên để có được tay nghề vững khi ra trường, tránh bị bỡ ngỡ trong quá trình làm việc. Đại biểu tham dự hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin” Sau hơn 3 tiếng trao đổi, thảo luận sôi nổi, Hội thảo kết thúc với rất nhiều những góp ý, tư vấn mang tính thực tiễn và định hướng cho việc cập nhật và điều chỉnh chươn trình đào tạo cho hai ngành học của Khoa Thông tin Thư viện. Kết thúc hội thảo, TS. Nguyễn Văn Thiên tổng hợp những ý kiến đóng góp của các vị đại biểu, đồng thời khẳng định Khoa sẽ cân nhắc để có sự sửa đổi, hoàn thiện chương trình cho ngành Thông tin Thư viện và Quản lý Thông tin. Về phía Nhà trường, PGS, TS Trương Đại Lượng – trưởng phòng Đào tạo, Quản lý khoa học và Hợp tác quốc tế gửi lời cảm ơn đến các đại biểu đã nhiệt tình tham gia tọa đàm và có những tham vấn rất ý nghĩa cho Nhà trường và cho Khoa Thông tin Thư viện. Tin và bài: Khoa TT, TV Photo: CLB Truyền thông số Hội thảo “Xây dựng chuẩn đầu ra, chương trình đào tạo ngành Thông tin thư viện và ngành Quản lý thông tin”</p>`
  },
  {
    "id": "act-10",
    "category": "daotao",
    "categoryName": "Đào tạo",
    "title": "Khoa Thông Tin, Thư Viện: Đổi Mới Chương Trình Đào Tạo – Khẳng Định Vị Thế Trong Kỷ Nguyên Số",
    "description": "Hội thảo rà soát, đánh giá và cập nhật chương trình đào tạo trình độ đại học ngành Thông tin - Thư viện và Quản lý thông tin, tăng cường kỹ năng thực hành, năng lực số và ứng dụng trí tuệ nhân tạo.",
    "image": "assets/images/event_doi_moi_ky_nguyen_so_1_0.png",
    "date": "11/05/2026",
    "tag": "Đổi mới đào tạo & Kỷ nguyên số",
    "location": "Phòng Hội đồng, Tầng 1 Nhà A, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Thông tin, Thư viện – Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "KHOA THÔNG TIN, THƯ VIỆN_ ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO - KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">PGS. TS. Trần Thị Minh Nguyệt, Nguyên Trưởng khoa Sau Đại học – Trường ĐH Văn hóa Hà Nội phát biểu tại Hội thảo PGS. TS. Nguyễn Thị Lan Thanh, Nguyên Phó Hiệu trưởng Trường ĐH Văn hóa Hà Nội góp ý cho chương trình đào tạo của Khoa KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>
<p style="margin-bottom: 14px; line-height: 1.85;">PGS. TS. Trần Thị Quý, Nguyên Trưởng khoa Thông tin - Thư viện, Trường ĐH KHXH&NV, ĐHQGHN góp ý cho chương trình đào tạo TS. Nguyễn Thu Thảo, Cục Thông tin, Thống kê, Bộ KH&CN góp ý cho chương trình đào tạo của Khoa KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>
<p style="margin-bottom: 14px; line-height: 1.85;">TS. Vũ Dương Thúy Ngà, Nguyên Vụ trưởng Vụ Thư viện, Bộ VHTT&DL góp ý cho chương trình đào tạo ThS. Nguyễn Thị Thu Hiền, Phó Cục trưởng Cục Văn hóa cơ sở, Gia đình và Thư viện, Bộ VHTT&DL phát biểu tại Hội thảo KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>
<p style="margin-bottom: 14px; line-height: 1.85;">ThS. Nguyễn Hữu Giới, Chủ tịch Hội Thư viện Việt Nam trao đổi trong Hội thảo Ý kiến từ ThS. Nguyễn Xuân Dũng, Giám đốc Thư viện Quốc gia Việt Nam KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>
<p style="margin-bottom: 14px; line-height: 1.85;">ThS. Hoàng Văn Dưỡng, Phó Giám đốc Trung tâm Thư viện - Tri thức số, ĐHQGHN trao đổi trong Hội thảo Ông Hoàng Dũng, Giám đốc Công ty Cổ phần Tư vấn & Tích hợp công nghệ D&L KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Bài: N.T.Yên Ảnh: Nhóm truyền thông KHOA THÔNG TIN, THƯ VIỆN: ĐỔI MỚI CHƯƠNG TRÌNH ĐÀO TẠO – KHẲNG ĐỊNH VỊ THẾ TRONG KỶ NGUYÊN SỐ</p>`
  },
  {
    "id": "act-11",
    "category": "daotao",
    "categoryName": "Đào tạo",
    "title": "Nghiệm Thu Chương Trình Đào Tạo Ngành Quản Lý Thông Tin Và Ngành Khoa Học Thông Tin, Thư Viện",
    "description": "Trường ĐH Văn hóa Hà Nội tổ chức hội đồng thẩm định, nghiệm thu cấp trường chương trình đào tạo hai ngành trọng điểm của Khoa Thông tin, Thư viện với sự đánh giá cao về tính khoa học và thực tiễn.",
    "image": "assets/images/event_nghiem_thu_ctdt_0_0.png",
    "date": "24/09/2024",
    "tag": "Nghiệm thu đào tạo",
    "location": "Phòng Truyền thống, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Hội đồng Thẩm định Trường ĐHVHHN & Khoa Thông tin, Thư viện",
    "pdfSource": "Nghiệm thu chương trình đào tạo ngành Quản lý Thông tin và ngành khoa học Thông tin, Thư viện.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">PGS.TS. Phạm Thị Thu Hương - Chủ tịch Hội đồng chủ trì buổi thẩm định, nghiệm thu TS. Nguyễn Văn Thiên - Trưởng Khoa TTTV, thay mặt Ban biên soạn báo cáo tóm tắt nội dung chương trình đào tạo. Nghiệm thu chương trình đào tạo ngành Quản lý Thông tin và ngành khoa học Thông tin, Thư viện</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Hội đồng tiến hành thảo luận và đóng góp ý kiến Nghiệm thu chương trình đào tạo ngành Quản lý Thông tin và ngành khoa học Thông tin, Thư viện</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Hội đồng thẩm định, nghiệm thu chụp ảnh lưu niệm cùng Ban biên soạn Nghiệm thu chương trình đào tạo ngành Quản lý Thông tin và ngành khoa học Thông tin, Thư viện</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Hội đồng thẩm định, nghiệm thu chụp ảnh lưu niệm cùng lãnh đạo, giảng viên Khoa TTTV Tin và ảnh: Khoa TT, TV Nghiệm thu chương trình đào tạo ngành Quản lý Thông tin và ngành khoa học Thông tin, Thư viện</p>`
  },
  {
    "id": "act-12",
    "category": "hoptac",
    "categoryName": "Hợp tác & Hội thảo",
    "title": "Thành Công Rực Rỡ Của Workshop: “Sử Dụng AI - Dẫn Lối Tương Lai”",
    "description": "Workshop thu hút hơn 400 sinh viên cùng các chuyên gia hàng đầu từ ĐH Bách Khoa Hà Nội và Khoa Thông tin, Thư viện, trang bị kiến thức và kỹ năng thực tiễn về ứng dụng AI trong học tập và nghiên cứu.",
    "image": "assets/images/event_workshop_ai_tuong_lai_0_0.png",
    "date": "13/11/2024",
    "tag": "Trí tuệ nhân tạo & Kỹ năng số",
    "location": "Hội trường Nhà Văn hóa, Trường Đại học Văn hóa Hà Nội",
    "organizer": "Khoa Thông tin, Thư viện – Trường Đại học Văn hóa Hà Nội",
    "pdfSource": "THÀNH CÔNG RỰC RỠ CỦA WORKSHOP _SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI_.pdf",
    "details": `<p style="margin-bottom: 14px; line-height: 1.85;">THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI” Ngày 13/11/2024, tại Hội trường Nhà Văn hóa, Trường Đại học Văn hóa Hà Nội, workshop với chủ đề "Sử dụng AI - Dẫn Lối Tương Lai" đã diễn ra thành công với sự tham gia của hơn 400 sinh viên cùng nhiều khách mời là các chuyên gia, giảng viên và đại diện lãnh đạo đến từ các khoa trong trường. Buổi workshop không chỉ mang đến kiến thức về trí tuệ nhân tạo (AI) mà còn giúp các bạn sinh viên tìm thấy hướng đi đúng đắn trong việc ứng dụng AI vào học tập và nghiên cứu, cũng như nhận diện những cơ hội và thách thức mà công nghệ này mang lại trong tương lai. THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Buổi workshop vinh dự được đón tiếp các diễn giả uy tín trong lĩnh vực công nghệ và giáo dục: TS. Vũ Đình Minh - Giảng viên trường Đại học Bách Khoa Hà Nội, chia sẻ về các xu hướng AI trong thời đại số. TS. Lê Thị Cẩm Bình - Trưởng bộ môn CNTT, Khoa Thông tin, Thư viện - Trường Đại học Văn hóa Hà Nội, tập trung vào những cơ hội và thách thức khi áp dụng AI trong các lĩnh vực. Ths. Ngô Văn Tháp - Giảng viên Khoa Thông tin, Thư viện, Trường Đại học Văn hóa Hà Nội, mang đến cái nhìn thực tiễn về AI trong nghiên cứu và học thuật.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sự kiện còn nhận được sự quan tâm đặc biệt từ các thầy cô là lãnh đạo các đơn vị trong trường, các thầy giáo, cô giáo và đặc biệt có sự tham gia của hơn 400 sinh viên trường ĐH Văn Hóa Hà Nội .</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Chương trình workshop xoay quanh các nội dung hấp dẫn như: Ứng dụng AI hiệu quả trong học tập và nghiên cứu: Các diễn giả chia sẻ cách sinh viên có thể tận dụng công nghệ AI để tăng hiệu quả và chất lượng học tập. Thời cơ và thách thức của AI trong các lĩnh vực: AI mở ra cơ hội mới nhưng cũng mang đến không ít thách thức trong bối cảnh toàn cầu hóa. Góc nhìn thực tiễn khi áp dụng AI vào việc học tập, nghiên cứu. Giúp sinh viên khám phá sức mạnh của AI và vận dụng AI trong học tập, nghiên cứu cũng như trong cuộc sống một cách hiệu quả. Đồng thời giúp sinh viên nhận thức rõ hơn về cơ hội nghề nghiệp trong lĩnh vực AI, những thách thức mà AI mang lại cho thị trường lao động và cách thức để thích nghi với sự thay đổi này.</p>
<p style="margin-bottom: 14px; line-height: 1.85;">TS. Vũ Đình Minh là một chuyên gia về lĩnh vực công nghệ thông tin. Với bề dày kinh nghiệm và kiến thức chuyên sâu về lĩnh vực công nghệ thông tin, đặc biệt là trí tuệ nhân tạo, thầy đã chia sẻ với sinh viên về các xu hướng AI trong thời đại số. THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">TS Vũ Đình Minh đến từ Đại học Bách Khoa Hà Nội THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">TS. Lê Thị Cẩm Bình chia sẻ về những cơ hội và thách thức khi áp dụng AI trong các lĩnh vực. Ths. Ngô Văn Tháp mang đến cái nhìn thực tiễn về AI trong nghiên cứu và học thuật. Thầy chia sẻ với sinh viên làm sao để sử dụng AI có hiệu quả và trách nhiệm. Ngoài ra, chương trình còn có sự chia sẻ từ góc nhìn của sinh viên khi sử dụng AI. THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Sinh viên Thành Thị Thúy Hiền, lớp QLTT11, khoa Thông tin, Thư viện đã trình bày những góc nhìn thực tiễn khi áp dụng AI vào việc học tập và nghiên cứu đối với sinh viên. Buổi workshop nhận được sự hưởng ứng nồng nhiệt từ các bạn sinh viên với những câu hỏi thú vị và ý tưởng sáng tạo trong phần thảo luận. Đây thực sự là sân chơi bổ ích, giúp sinh viên hiểu rõ hơn về AI, từ đó chuẩn bị tốt hơn cho sự nghiệp trong tương lai. THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">Khoa Thông tin, Thư viện xin gửi lời cảm ơn chân thành đến các diễn giả, đại biểu, giảng viên, và đặc biệt là các bạn sinh viên đã tham gia, tạo nên một sự kiện thành công tốt đẹp. THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="margin-bottom: 14px; line-height: 1.85;">THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</p>
<p style="font-size: 13.5px; font-style: italic; color: #64748b; margin: 16px 0; text-align: right;"><em>Photo: CLB Truyền thông số N.T.Yên THÀNH CÔNG RỰC RỠ CỦA WORKSHOP “SỬ DỤNG AI - DẪN LỐI TƯƠNG LAI”</em></p>`
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

  // Team Methods
  getTeam() {
    return SEED_TEAM;
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
