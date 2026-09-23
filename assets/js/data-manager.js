/**
 * DataManager - Centralized State & Storage Engine for Khoa Thông Tin Thư Viện OER
 * Supports LocalStorage caching, Real-time sync, JSON Export/Import, Image Uploads, and Admin Auth.
 */

const SEED_MILESTONES = [
  {
    id: "ms-1",
    year: "1961 – 1976",
    title: "Khởi Nguồn & Thành Lập",
    description: "Khoa thành lập năm 1961 theo Quyết định của Ủy ban Kế hoạch Nhà nước và Phủ thủ tướng. Là đơn vị đầu tiên của Trường ĐH Văn hóa Hà Nội và là cơ sở đầu tiên của cả nước đào tạo cán bộ thư viện bậc đại học và trung học.",
    tag: "1961 – 1976"
  },
  {
    id: "ms-2",
    year: "1976 – 1992",
    title: "Đào Tạo Đại Học Chính Quy",
    description: "Đào tạo cán bộ thư viện bậc đại học, cung cấp nguồn nhân lực thư viện chính quy phục vụ sự nghiệp xây dựng và phát triển đất nước.",
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
    year: "2004 – 2010",
    title: "Khoa Thư Viện – Thông Tin & Cao Đẳng",
    description: "Khoa đổi tên thành Khoa Thư viện – Thông tin. Mở hệ đào tạo cử nhân cao đẳng và chương trình liên thông cao đẳng – đại học.",
    tag: "2004 – 2010"
  },
  {
    id: "ms-5",
    year: "2010 – 2018",
    title: "Mở Chuyên Ngành Thông Tin Học",
    description: "Khoa Thư viện – Thông tin tập trung đổi mới chương trình đào tạo và mở thêm chuyên ngành Thông tin học đáp ứng nhu cầu thực tiễn.",
    tag: "2010 – 2018"
  },
  {
    id: "ms-6",
    year: "2018 – Nay",
    title: "Đổi Mới Hiện Đại & Hội Nhập",
    description: "Khoa đổi tên thành Khoa Thông tin, Thư viện; đổi tên Ngành Thư viện thành Ngành Khoa học Thông tin thư viện và Ngành Thông tin học thành Ngành Quản lý thông tin. Đổi mới chương trình đào tạo sát thị trường lao động.",
    tag: "2018 – Nay"
  }
];

const SEED_ACTIVITIES = [
  {
    id: "act-1",
    category: "nghiencuu",
    categoryName: "Nghiên cứu",
    title: "Hội thảo khoa học",
    description: "Tổ chức các hội thảo chuyên ngành, chia sẻ kết quả nghiên cứu và phương pháp ứng dụng công nghệ thông tin trong thư viện hiện đại.",
    image: "assets/images/placeholder.svg",
    date: "Hằng năm",
    tag: "Nghiên cứu khoa học"
  },
  {
    id: "act-2",
    category: "sinhvien",
    categoryName: "Hoạt động sinh viên",
    title: "Hoạt động tình nguyện",
    description: "Đoàn kết, xung kích trong các chiến dịch tình nguyện, mang sách và lan tỏa tri thức đến các điểm trường vùng sâu vùng xa.",
    image: "assets/images/placeholder.svg",
    date: "Thường niên",
    tag: "Phong trào sinh viên"
  },
  {
    id: "act-3",
    category: "daotao",
    categoryName: "Đào tạo",
    title: "Triển lãm sách",
    description: "Giới thiệu các ấn phẩm quý, giáo trình, công trình nghiên cứu học thuật của cán bộ giảng viên và sinh viên Khoa.",
    image: "assets/images/placeholder.svg",
    date: "Ngày Sách VN",
    tag: "Văn hóa đọc"
  },
  {
    id: "act-4",
    category: "hoptac",
    categoryName: "Hợp tác",
    title: "Tham quan thực tế",
    description: "Chương trình thực tập, trải nghiệm thực tế tại Thư viện Quốc gia, các trung tâm thông tin lớn và thư viện đại học uy tín.",
    image: "assets/images/placeholder.svg",
    date: "Hằng kỳ",
    tag: "Thực tập nghề nghiệp"
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
  aboutLargeImg: "assets/images/placeholder.svg",
  aboutStack1Img: "assets/images/placeholder.svg",
  aboutStack2Img: "assets/images/placeholder.svg",
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
    if (!localStorage.getItem(this.KEYS.MILESTONES)) {
      this.saveMilestones(SEED_MILESTONES);
    }
    if (!localStorage.getItem(this.KEYS.ACTIVITIES)) {
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
      // Merge new fields
      const current = this.getSettings();
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
