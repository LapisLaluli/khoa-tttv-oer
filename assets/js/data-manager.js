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
    description: "Khoa đổi tên thành Khoa Thông tin, Thư viện; đổi tên Ngành Thư viện thành Ngành Khoa học Thông tin thư viện và Ngành Thông tin học thành Ngành Quản lý thông tin. Đổi mới chương trình đào tạo sát thị trường lao động.",
    tag: "2018 – Nay"
  }
];

const SEED_ACTIVITIES = [
  {
    id: "act-1",
    category: "daotao",
    categoryName: "Đào tạo",
    title: "Chương Trình “Tiệc Trà & Sách” Nhân Ngày Sách Việt Nam",
    description: "Hưởng ứng Ngày Sách và Văn hóa đọc Việt Nam, Trung tâm Thông tin - Thư viện tổ chức chương trình nhằm tôn vinh giá trị của sách, tri thức và lan tỏa thói quen đọc trong đời sống học đường.",
    image: "assets/images/event_tiec_tra_sach.png",
    date: "21/04/2025",
    tag: "Văn hóa đọc"
  },
  {
    id: "act-2",
    category: "hoptac",
    categoryName: "Hợp tác",
    title: "Tọa Đàm: Định Hướng Nghề Nghiệp Trong Lĩnh Vực Văn Hóa",
    description: "Tọa đàm chuyên đề quy tụ các chuyên gia, nhà quản lý, nghệ sĩ và doanh nhân trao đổi xu hướng thị trường lao động và định hướng kỹ năng số trong lĩnh vực văn hóa - thông tin cho sinh viên.",
    image: "assets/images/event_dinh_huong_nghe_nghiep.png",
    date: "15/05/2025",
    tag: "Hướng nghiệp"
  },
  {
    id: "act-3",
    category: "sinhvien",
    categoryName: "Hoạt động sinh viên",
    title: "Chương Trình Tình Nguyện “Đông Ấm Vùng Cao 2024”",
    description: "Chi đoàn và sinh viên tổ chức chương trình tình nguyện tại Trường Tiểu học Tả Phìn (Sa Pa, Lào Cai), trao tặng những phần quà ấm áp, sách vở và học liệu cho các em nhỏ vùng cao.",
    image: "assets/images/event_dong_am_vung_cao.png",
    date: "20/01/2024",
    tag: "Tình nguyện"
  },
  {
    id: "act-4",
    category: "nghiencuu",
    categoryName: "Nghiên cứu",
    title: "Triển Lãm Sách & Chuyên Đề “Văn Hóa Nghệ Thuật & Thị Trường”",
    description: "Trung tâm Thông tin Thư viện phối hợp tổ chức triển lãm sách tư liệu quý và buổi nói chuyện học thuật của Nhà nghiên cứu Phan Cẩm Thượng về bảo tồn và phát triển giá trị văn hóa.",
    image: "assets/images/event_trien_lam_sach_nghe_thuat.png",
    date: "19/04/2021",
    tag: "Triển lãm & Học thuật"
  },
  {
    id: "act-5",
    category: "nghiencuu",
    categoryName: "Nghiên cứu",
    title: "Tọa Đàm: Khai Thác Nguồn Tư Liệu Cổ Về Văn Hóa Dân Tộc Thiểu Số",
    description: "Tọa đàm khoa học do PGS.TS. Trần Bình chia sẻ phương pháp khai thác, tra cứu và sử dụng các nguồn tư liệu cổ quý hiếm phục vụ hiệu quả công tác giảng dạy, học tập và nghiên cứu.",
    image: "assets/images/event_tu_lieu_dan_toc_thieu_so.png",
    date: "08/03/2023",
    tag: "Tư liệu cổ"
  },
  {
    id: "act-6",
    category: "hoptac",
    categoryName: "Hợp tác",
    title: "Tọa Đàm Khoa Học: “Văn Hóa Tộc Người Từ Góc Nhìn Về Nhà Ở”",
    description: "Hội thảo liên ngành phối hợp cùng NXB Khoa học Xã hội, Hội Dân tộc học và MaiHaBooks thảo luận giải pháp phát huy giá trị kiến trúc nhà ở cổ truyền các dân tộc trong xã hội đương đại.",
    image: "assets/images/event_van_hoa_toc_nguoi_nha_o.png",
    date: "05/04/2023",
    tag: "Tọa đàm khoa học"
  },
  {
    id: "act-7",
    category: "daotao",
    categoryName: "Đào tạo",
    title: "Hoạt Động Trưng Bày & Giới Thiệu Sách Chuyên Đề Định Kỳ",
    description: "Hoạt động định kỳ trưng bày sách chuyên ngành, giáo trình số và tài liệu nghiên cứu mới nhất, hỗ trợ tối ưu nhu cầu tra cứu và nghiên cứu học thuật của cán bộ, giảng viên và sinh viên.",
    image: "assets/images/event_trung_bay_sach_dinh_ky.png",
    date: "Thường niên",
    tag: "Học liệu chuyên ngành"
  }
];

const SEED_RESOURCES = [
  {
    id: "res-1",
    type: "reading",
    tag: "Bài đọc OER · 5–10 phút",
    title: "Tóm Lược Lịch Sử 60 Năm",
    description: "Bản tóm tắt ngắn gọn, mạch lạc các mốc son 1961, 1991 và kỷ nguyên thông tin số, phù hợp tra cứu nhanh.",
    content: "<p><strong>1. Bối cảnh 1961:</strong> Trường Đại học Văn hóa Hà Nội mở ngành đào tạo cán bộ thư viện đại học đầu tiên của cả nước.</p><p><strong>2. Mở rộng 1990:</strong> Đón đầu xu thế công nghệ và xã hội thông tin, mở rộng đào tạo ngành Thông tin học.</p><p><strong>3. Thành lập Khoa 1991:</strong> Quyết định số 41/TCCB ngày 13/3/1991 chính thức nâng cấp thành Khoa Thông tin Thư viện.</p><p><strong>4. Hiện đại hóa:</strong> Đào tạo cử nhân, thạc sĩ, tiến sĩ chuyên ngành; phát triển thư viện số và Tài nguyên Giáo dục Mở (OER).</p>",
    license: "CC BY 4.0"
  },
  {
    id: "res-2",
    type: "infographic",
    tag: "Infographic · Đồ họa số",
    title: "Dòng Thời Gian Trực Quan",
    description: "Infographic tóm tắt sơ đồ phát triển của Khoa qua từng thập kỷ với đầy đủ dữ liệu thống kê then chốt.",
    content: "<div style='text-align:center;'><img src='assets/images/placeholder.svg' style='max-width:100%;border-radius:6px;margin-bottom:12px;'><p>Sơ đồ dòng thời gian trực quan hóa hơn 60 năm xây dựng và phát triển.</p></div>",
    license: "CC BY-NC 4.0"
  },
  {
    id: "res-3",
    type: "pdf",
    tag: "Tài liệu PDF · Kỷ yếu",
    title: "Kỷ Yếu Khoa Thông Tin Thư Viện",
    description: "Tập hợp các bài viết kỷ niệm, tư liệu ảnh cán bộ giảng viên các thời kỳ và danh sách đề tài khoa học tiêu biểu.",
    content: "<p>Kỷ yếu lưu trữ toàn bộ các bài viết nghiên cứu lịch sử, hình ảnh tư liệu và danh sách cán bộ, giảng viên, sinh viên các khóa của Khoa Thông tin Thư viện.</p><div style='background:var(--cream);padding:14px;border-radius:4px;margin-top:10px;'><strong>Bản quyền:</strong> Creative Commons Ghi nhận công của tác giả 4.0 (CC BY 4.0)</div>",
    license: "CC BY-NC-SA 4.0"
  },
  {
    id: "res-4",
    type: "gallery",
    tag: "Ảnh tư liệu · Metadata",
    title: "Bộ Sưu Tập Ảnh Lịch Sử",
    description: "Kho ảnh số hóa thầy trò qua các thời kỳ, mỗi ảnh được gắn metadata Dublin Core và thông tin giấy phép rõ ràng.",
    content: "<div style='display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:12px 0;'><img src='assets/images/placeholder.svg' style='border-radius:4px;'><img src='assets/images/placeholder.svg' style='border-radius:4px;'></div><p>Mỗi tư liệu được định danh chuẩn theo tiêu chuẩn Dublin Core Metadata.</p>",
    license: "CC BY 4.0"
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
  logoUrl: "assets/images/huc-logo.svg",
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

  init() {
    const storedMilestones = localStorage.getItem(this.KEYS.MILESTONES);
    if (!storedMilestones || JSON.parse(storedMilestones).length !== SEED_MILESTONES.length) {
      this.saveMilestones(SEED_MILESTONES);
    }
    const storedActivities = localStorage.getItem(this.KEYS.ACTIVITIES);
    if (!storedActivities || JSON.parse(storedActivities).length !== SEED_ACTIVITIES.length) {
      this.saveActivities(SEED_ACTIVITIES);
    }
    if (!localStorage.getItem(this.KEYS.RESOURCES)) {
      this.saveResources(SEED_RESOURCES);
    }
    if (!localStorage.getItem(this.KEYS.QUIZ)) {
      this.saveQuiz(SEED_QUIZ);
    }
    if (!localStorage.getItem(this.KEYS.SETTINGS)) {
      this.saveSettings(SEED_SETTINGS);
    } else {
      // Merge new fields & upgrade placeholder images
      const current = this.getSettings();
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
    if (!localStorage.getItem(this.KEYS.ADMIN_PASS)) {
      localStorage.setItem(this.KEYS.ADMIN_PASS, "flis@2026");
    }
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
      const data = localStorage.getItem(this.KEYS.MILESTONES);
      return data ? JSON.parse(data) : SEED_MILESTONES;
    } catch(e) {
      return SEED_MILESTONES;
    }
  },
  saveMilestones(data) {
    localStorage.setItem(this.KEYS.MILESTONES, JSON.stringify(data));
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
      const data = localStorage.getItem(this.KEYS.ACTIVITIES);
      return data ? JSON.parse(data) : SEED_ACTIVITIES;
    } catch(e) {
      return SEED_ACTIVITIES;
    }
  },
  saveActivities(data) {
    localStorage.setItem(this.KEYS.ACTIVITIES, JSON.stringify(data));
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

// Initialize immediately
DataManager.init();
window.DataManager = DataManager;
