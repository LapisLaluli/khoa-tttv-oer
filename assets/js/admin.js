/**
 * Admin Panel Controller - Khoa Thông Tin Thư Viện OER
 */

document.addEventListener("DOMContentLoaded", () => {
  const dm = window.DataManager;
  if (!dm) {
    alert("Không tìm thấy DataManager engine!");
    return;
  }

  // DOM Elements
  const loginScreen = document.getElementById("loginScreen");
  const adminLayout = document.getElementById("adminLayout");
  const loginForm = document.getElementById("loginForm");
  const loginUser = document.getElementById("loginUser");
  const loginPass = document.getElementById("loginPass");
  const loginError = document.getElementById("loginError");
  const logoutBtn = document.getElementById("logoutBtn");
  const toastEl = document.getElementById("toastMsg");

  // Tab Navigation
  const navItems = document.querySelectorAll(".nav-item[data-tab]");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const currentTabTitle = document.getElementById("currentTabTitle");

  function showToast(msg, isError = false) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.style.background = isError ? "#ef4444" : "#10b981";
    toastEl.classList.add("show");
    setTimeout(() => toastEl.classList.remove("show"), 3000);
  }

  // Helper to read file as Data URL
  function setupFileInputPreview(fileInputId, textInputId, previewImgId) {
    const fileInput = document.getElementById(fileInputId);
    const textInput = document.getElementById(textInputId);
    const previewImg = document.getElementById(previewImgId);

    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target.result;
          if (textInput) textInput.value = result;
          if (previewImg) previewImg.src = result;
        };
        reader.readAsDataURL(file);
      });
    }

    if (textInput && previewImg) {
      textInput.addEventListener("input", () => {
        if (textInput.value.trim()) {
          previewImg.src = textInput.value.trim();
        }
      });
    }
  }

  // Auth check
  function checkAuth() {
    if (dm.isLoggedIn()) {
      loginScreen.style.display = "none";
      adminLayout.style.display = "flex";
      renderAllData();
    } else {
      loginScreen.style.display = "flex";
      adminLayout.style.display = "none";
    }
  }

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const res = dm.login(loginUser.value, loginPass.value);
    if (res.success) {
      loginError.style.display = "none";
      checkAuth();
      showToast("Đăng nhập quản trị thành công!");
    } else {
      loginError.textContent = res.message;
      loginError.style.display = "block";
    }
  });

  logoutBtn?.addEventListener("click", () => {
    if (confirm("Bạn có chắc chắn muốn đăng xuất khỏi trang quản trị?")) {
      dm.logout();
      checkAuth();
      showToast("Đã đăng xuất thành công.");
    }
  });

  // Switch Tabs
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      const tabId = item.getAttribute("data-tab");
      tabPanes.forEach(pane => {
        pane.style.display = pane.id === tabId ? "block" : "none";
      });
      if (currentTabTitle) {
        currentTabTitle.textContent = item.querySelector("span")?.textContent || "Tổng quan";
      }
    });
  });

  // Render All Data
  function renderAllData() {
    renderDashboardOverview();
    populateUiImages();
    renderMilestonesTable();
    renderActivitiesTable();
    renderResourcesTable();
    renderQuizTable();
    populateSettingsForm();
  }

  // 1. Dashboard Overview
  function renderDashboardOverview() {
    const milestones = dm.getMilestones();
    const activities = dm.getActivities();
    const resources = dm.getResources();
    const quiz = dm.getQuiz();

    const countMs = document.getElementById("countMilestones");
    const countAct = document.getElementById("countActivities");
    const countRes = document.getElementById("countResources");
    const countQz = document.getElementById("countQuiz");

    if (countMs) countMs.textContent = milestones.length;
    if (countAct) countAct.textContent = activities.length;
    if (countRes) countRes.textContent = resources.length;
    if (countQz) countQz.textContent = quiz.length;
  }

  // 2. UI Images Management
  function populateUiImages() {
    const s = dm.getSettings();
    const logoInput = document.getElementById("inputLogoUrl");
    const logoPreview = document.getElementById("previewLogo");
    if (logoInput) logoInput.value = s.logoUrl || "assets/images/flis-logo.jpg";
    if (logoPreview) logoPreview.src = s.logoUrl || "assets/images/flis-logo.jpg";

    const heroBgInput = document.getElementById("inputHeroBgUrl");
    const heroBgPreview = document.getElementById("previewHeroBg");
    if (heroBgInput) heroBgInput.value = s.heroBgUrl || "assets/images/hero-bg.svg";
    if (heroBgPreview) heroBgPreview.src = s.heroBgUrl || "assets/images/hero-bg.svg";

    const abLargeInput = document.getElementById("inputAboutLargeUrl");
    const abLargePreview = document.getElementById("previewAboutLarge");
    if (abLargeInput) abLargeInput.value = s.aboutLargeImg || "assets/images/placeholder.svg";
    if (abLargePreview) abLargePreview.src = s.aboutLargeImg || "assets/images/placeholder.svg";

    const abStack1Input = document.getElementById("inputAboutStack1Url");
    const abStack1Preview = document.getElementById("previewAboutStack1");
    if (abStack1Input) abStack1Input.value = s.aboutStack1Img || "assets/images/placeholder.svg";
    if (abStack1Preview) abStack1Preview.src = s.aboutStack1Img || "assets/images/placeholder.svg";

    const abStack2Input = document.getElementById("inputAboutStack2Url");
    const abStack2Preview = document.getElementById("previewAboutStack2");
    if (abStack2Input) abStack2Input.value = s.aboutStack2Img || "assets/images/placeholder.svg";
    if (abStack2Preview) abStack2Preview.src = s.aboutStack2Img || "assets/images/placeholder.svg";

    const quoteBgInput = document.getElementById("inputQuoteBgUrl");
    const quoteBgPreview = document.getElementById("previewQuoteBg");
    if (quoteBgInput) quoteBgInput.value = s.quoteBgUrl || "assets/images/hero-bg.svg";
    if (quoteBgPreview) quoteBgPreview.src = s.quoteBgUrl || "assets/images/hero-bg.svg";
  }

  // Setup file uploads for UI images
  setupFileInputPreview("uploadLogoFile", "inputLogoUrl", "previewLogo");
  setupFileInputPreview("uploadHeroBgFile", "inputHeroBgUrl", "previewHeroBg");
  setupFileInputPreview("uploadAboutLargeFile", "inputAboutLargeUrl", "previewAboutLarge");
  setupFileInputPreview("uploadAboutStack1File", "inputAboutStack1Url", "previewAboutStack1");
  setupFileInputPreview("uploadAboutStack2File", "inputAboutStack2Url", "previewAboutStack2");
  setupFileInputPreview("uploadQuoteBgFile", "inputQuoteBgUrl", "previewQuoteBg");

  // Clear / Delete single image file handlers
  function setupClearImageButton(btnId, fileInputId, textInputId, previewImgId, defaultUrl, settingKey, labelName) {
    document.getElementById(btnId)?.addEventListener("click", () => {
      const fileIn = document.getElementById(fileInputId);
      const textIn = document.getElementById(textInputId);
      const prevImg = document.getElementById(previewImgId);
      if (fileIn) fileIn.value = "";
      if (textIn) textIn.value = defaultUrl;
      if (prevImg) prevImg.src = defaultUrl;
      if (settingKey) {
        const s = dm.getSettings();
        s[settingKey] = defaultUrl;
        dm.saveSettings(s);
      }
      showToast(`Đã xóa tệp và đặt lại ${labelName} về mặc định!`);
    });
  }

  setupClearImageButton("clearLogoBtn", "uploadLogoFile", "inputLogoUrl", "previewLogo", "assets/images/flis-logo.jpg", "logoUrl", "Logo");
  setupClearImageButton("clearHeroBgBtn", "uploadHeroBgFile", "inputHeroBgUrl", "previewHeroBg", "assets/images/hero-bg.svg", "heroBgUrl", "Ảnh nền Hero");
  setupClearImageButton("clearAboutLargeBtn", "uploadAboutLargeFile", "inputAboutLargeUrl", "previewAboutLarge", "assets/images/placeholder.svg", "aboutLargeImg", "Ảnh lớn Về Chúng Tôi");
  setupClearImageButton("clearAboutStack1Btn", "uploadAboutStack1File", "inputAboutStack1Url", "previewAboutStack1", "assets/images/placeholder.svg", "aboutStack1Img", "Ảnh Thư viện");
  setupClearImageButton("clearAboutStack2Btn", "uploadAboutStack2File", "inputAboutStack2Url", "previewAboutStack2", "assets/images/placeholder.svg", "aboutStack2Img", "Ảnh Sách & Văn hóa");
  setupClearImageButton("clearQuoteBgBtn", "uploadQuoteBgFile", "inputQuoteBgUrl", "previewQuoteBg", "assets/images/hero-bg.svg", "quoteBgUrl", "Ảnh nền Trích dẫn");

  // Modal clear file handlers
  document.getElementById("clearMsImgBtn")?.addEventListener("click", () => {
    const fileIn = document.getElementById("msUploadFile");
    const textIn = document.getElementById("msImage");
    if (fileIn) fileIn.value = "";
    if (textIn) textIn.value = "assets/images/placeholder.svg";
    showToast("Đã xóa tệp ảnh đính kèm mốc lịch sử!");
  });

  document.getElementById("clearActImgBtn")?.addEventListener("click", () => {
    const fileIn = document.getElementById("actUploadFile");
    const textIn = document.getElementById("actImage");
    if (fileIn) fileIn.value = "";
    if (textIn) textIn.value = "assets/images/placeholder.svg";
    showToast("Đã xóa tệp ảnh đính kèm hoạt động!");
  });

  // Clear all custom files & cleanup memory
  document.getElementById("clearUploadedFilesBtn")?.addEventListener("click", () => {
    if (confirm("Thao tác này sẽ xóa toàn bộ các tệp ảnh tùy chỉnh lưu tạm và đưa tất cả ảnh giao diện về mặc định. Bạn có muốn tiếp tục?")) {
      const s = dm.getSettings();
      s.logoUrl = "assets/images/flis-logo.jpg";
      s.heroBgUrl = "assets/images/hero-bg.svg";
      s.aboutLargeImg = "assets/images/placeholder.svg";
      s.aboutStack1Img = "assets/images/placeholder.svg";
      s.aboutStack2Img = "assets/images/placeholder.svg";
      s.quoteBgUrl = "assets/images/hero-bg.svg";
      dm.saveSettings(s);
      populateUiImages();
      showToast("Đã xóa toàn bộ tệp tùy chỉnh & giải phóng bộ nhớ!");
    }
  });

  document.getElementById("saveUiImagesBtn")?.addEventListener("click", () => {
    const current = dm.getSettings();
    const updated = {
      ...current,
      logoUrl: document.getElementById("inputLogoUrl").value.trim() || "assets/images/flis-logo.jpg",
      heroBgUrl: document.getElementById("inputHeroBgUrl").value.trim() || "assets/images/hero-bg.svg",
      aboutLargeImg: document.getElementById("inputAboutLargeUrl").value.trim() || "assets/images/placeholder.svg",
      aboutStack1Img: document.getElementById("inputAboutStack1Url").value.trim() || "assets/images/placeholder.svg",
      aboutStack2Img: document.getElementById("inputAboutStack2Url").value.trim() || "assets/images/placeholder.svg",
      quoteBgUrl: document.getElementById("inputQuoteBgUrl").value.trim() || "assets/images/hero-bg.svg"
    };
    dm.saveSettings(updated);
    showToast("Đã cập nhật toàn bộ hình ảnh giao diện thành công!");
  });

  // 3. Milestones Management
  const milestoneTableBody = document.getElementById("milestoneTableBody");
  const milestoneModal = document.getElementById("milestoneModal");
  const milestoneForm = document.getElementById("milestoneForm");
  const addMilestoneBtn = document.getElementById("addMilestoneBtn");

  // Setup milestone file input
  setupFileInputPreview("msUploadFile", "msImage", null);

  function renderMilestonesTable() {
    if (!milestoneTableBody) return;
    const list = dm.getMilestones();
    if (!list.length) {
      milestoneTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--admin-muted);">Chưa có mốc lịch sử nào.</td></tr>`;
      return;
    }
    milestoneTableBody.innerHTML = list.map((m, idx) => `
      <tr>
        <td style="font-weight:700;color:var(--admin-primary);">${m.year}</td>
        <td style="font-weight:600;">${m.title}</td>
        <td style="max-width:280px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${m.description}</td>
        <td><span class="badge-role" style="background:#fef3c7;color:#92400e;">${m.tag || 'Tư liệu OER'}</span></td>
        <td style="font-size:12px;color:var(--admin-muted);">${m.source || 'Lưu trữ'}</td>
        <td>
          <div class="action-btns">
            <button class="btn-edit btn-sm edit-ms-btn" data-id="${m.id || idx}">Sửa</button>
            <button class="btn-danger btn-sm del-ms-btn" data-id="${m.id || idx}">Xóa</button>
          </div>
        </td>
      </tr>
    `).join("");

    milestoneTableBody.querySelectorAll(".edit-ms-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const item = dm.getMilestones().find(m => m.id === id) || dm.getMilestones()[id];
        if (item) openMilestoneModal(item);
      });
    });

    milestoneTableBody.querySelectorAll(".del-ms-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (confirm("Bạn có chắc chắn muốn xóa mốc lịch sử này?")) {
          dm.deleteMilestone(id);
          renderMilestonesTable();
          renderDashboardOverview();
          showToast("Đã xóa mốc lịch sử thành công!");
        }
      });
    });
  }

  function openMilestoneModal(item = null) {
    if (!milestoneModal) return;
    document.getElementById("msEditId").value = item ? (item.id || "") : "";
    document.getElementById("msYear").value = item ? item.year : "";
    document.getElementById("msTitle").value = item ? item.title : "";
    document.getElementById("msTag").value = item ? (item.tag || "") : "Tư liệu OER";
    document.getElementById("msImage").value = item ? item.image : "assets/images/placeholder.svg";
    document.getElementById("msDesc").value = item ? item.description : "";
    document.getElementById("msDetails").value = item ? (item.details || "") : "";
    document.getElementById("msSource").value = item ? (item.source || "") : "";
    document.getElementById("msSourceUrl").value = item ? (item.sourceUrl || "") : "https://flis.huc.edu.vn";
    document.getElementById("msModalTitle").textContent = item ? "Chỉnh sửa Mốc Lịch Sử" : "Thêm Mốc Lịch Sử Mới";
    milestoneModal.classList.add("open");
  }

  addMilestoneBtn?.addEventListener("click", () => openMilestoneModal());

  milestoneForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("msEditId").value;
    const newItem = {
      year: document.getElementById("msYear").value.trim(),
      title: document.getElementById("msTitle").value.trim(),
      tag: document.getElementById("msTag").value.trim(),
      image: document.getElementById("msImage").value.trim() || "assets/images/placeholder.svg",
      description: document.getElementById("msDesc").value.trim(),
      details: document.getElementById("msDetails").value.trim(),
      source: document.getElementById("msSource").value.trim(),
      sourceUrl: document.getElementById("msSourceUrl").value.trim()
    };

    if (id) {
      dm.updateMilestone(id, newItem);
      showToast("Cập nhật mốc lịch sử thành công!");
    } else {
      dm.addMilestone(newItem);
      showToast("Thêm mốc lịch sử mới thành công!");
    }
    milestoneModal.classList.remove("open");
    renderMilestonesTable();
    renderDashboardOverview();
  });

  // 4. Activities Management
  const activityTableBody = document.getElementById("activityTableBody");
  const activityModal = document.getElementById("activityModal");
  const activityForm = document.getElementById("activityForm");
  const addActivityBtn = document.getElementById("addActivityBtn");

  // Setup activity file input
  setupFileInputPreview("actUploadFile", "actImage", null);

  function renderActivitiesTable() {
    if (!activityTableBody) return;
    const list = dm.getActivities();
    if (!list.length) {
      activityTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--admin-muted);">Chưa có hoạt động nào.</td></tr>`;
      return;
    }
    activityTableBody.innerHTML = list.map((a, idx) => `
      <tr>
        <td style="font-weight:700;color:var(--admin-primary);">${a.title}</td>
        <td><span class="badge-role" style="background:#e0e7ff;color:#3730a3;">${a.categoryName || a.category}</span></td>
        <td style="max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a.description}</td>
        <td style="font-size:12px;color:var(--admin-muted);">${a.date || 'Thường niên'}</td>
        <td>
          <div class="action-btns">
            <button class="btn-edit btn-sm edit-act-btn" data-id="${a.id || idx}">Sửa</button>
            <button class="btn-danger btn-sm del-act-btn" data-id="${a.id || idx}">Xóa</button>
          </div>
        </td>
      </tr>
    `).join("");

    activityTableBody.querySelectorAll(".edit-act-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const item = dm.getActivities().find(a => a.id === id) || dm.getActivities()[id];
        if (item) openActivityModal(item);
      });
    });

    activityTableBody.querySelectorAll(".del-act-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (confirm("Bạn có chắc chắn muốn xóa hoạt động này?")) {
          dm.deleteActivity(id);
          renderActivitiesTable();
          renderDashboardOverview();
          showToast("Đã xóa hoạt động thành công!");
        }
      });
    });
  }

  function openActivityModal(item = null) {
    if (!activityModal) return;
    document.getElementById("actEditId").value = item ? (item.id || "") : "";
    document.getElementById("actTitle").value = item ? item.title : "";
    document.getElementById("actCategory").value = item ? item.category : "daotao";
    document.getElementById("actTag").value = item ? (item.tag || "") : "Hoạt động chuyên môn";
    document.getElementById("actImage").value = item ? item.image : "assets/images/placeholder.svg";
    document.getElementById("actDate").value = item ? (item.date || "") : "Hằng năm";
    document.getElementById("actDesc").value = item ? item.description : "";
    document.getElementById("actModalTitle").textContent = item ? "Chỉnh sửa Hoạt Động" : "Thêm Hoạt Động Mới";
    activityModal.classList.add("open");
  }

  addActivityBtn?.addEventListener("click", () => openActivityModal());

  activityForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("actEditId").value;
    const catSelect = document.getElementById("actCategory");
    const newItem = {
      title: document.getElementById("actTitle").value.trim(),
      category: catSelect.value,
      categoryName: catSelect.options[catSelect.selectedIndex].text,
      tag: document.getElementById("actTag").value.trim(),
      image: document.getElementById("actImage").value.trim() || "assets/images/placeholder.svg",
      date: document.getElementById("actDate").value.trim(),
      description: document.getElementById("actDesc").value.trim()
    };

    if (id) {
      dm.updateActivity(id, newItem);
      showToast("Cập nhật hoạt động thành công!");
    } else {
      dm.addActivity(newItem);
      showToast("Thêm hoạt động mới thành công!");
    }
    activityModal.classList.remove("open");
    renderActivitiesTable();
    renderDashboardOverview();
  });

  // 5. Resources Management
  const resourceTableBody = document.getElementById("resourceTableBody");
  const resourceModal = document.getElementById("resourceModal");
  const resourceForm = document.getElementById("resourceForm");
  const addResourceBtn = document.getElementById("addResourceBtn");

  function renderResourcesTable() {
    if (!resourceTableBody) return;
    const list = dm.getResources();
    if (!list.length) {
      resourceTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--admin-muted);">Chưa có tài nguyên OER nào.</td></tr>`;
      return;
    }
    resourceTableBody.innerHTML = list.map((r, idx) => `
      <tr>
        <td style="font-weight:700;color:var(--admin-primary);">${r.title}</td>
        <td><span class="badge-role" style="background:#ecfdf5;color:#047857;">${r.tag || r.type}</span></td>
        <td style="max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r.description}</td>
        <td><span class="badge-role" style="background:#f1f5f9;color:#475569;">${r.license || 'CC BY 4.0'}</span></td>
        <td>
          <div class="action-btns">
            <button class="btn-edit btn-sm edit-res-btn" data-id="${r.id || idx}">Sửa</button>
            <button class="btn-danger btn-sm del-res-btn" data-id="${r.id || idx}">Xóa</button>
          </div>
        </td>
      </tr>
    `).join("");

    resourceTableBody.querySelectorAll(".edit-res-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const item = dm.getResources().find(r => r.id === id) || dm.getResources()[id];
        if (item) openResourceModal(item);
      });
    });

    resourceTableBody.querySelectorAll(".del-res-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (confirm("Bạn có chắc chắn muốn xóa tài nguyên OER này?")) {
          dm.deleteResource(id);
          renderResourcesTable();
          renderDashboardOverview();
          showToast("Đã xóa tài nguyên thành công!");
        }
      });
    });
  }

  function openResourceModal(item = null) {
    if (!resourceModal) return;
    document.getElementById("resEditId").value = item ? (item.id || "") : "";
    document.getElementById("resTitle").value = item ? item.title : "";
    document.getElementById("resType").value = item ? item.type : "reading";
    document.getElementById("resTag").value = item ? (item.tag || "") : "Bài đọc OER";
    document.getElementById("resLicense").value = item ? (item.license || "CC BY 4.0") : "CC BY 4.0";
    document.getElementById("resDesc").value = item ? item.description : "";
    document.getElementById("resContent").value = item ? item.content : "";
    document.getElementById("resModalTitle").textContent = item ? "Chỉnh sửa Tài Nguyên OER" : "Thêm Tài Nguyên OER Mới";
    resourceModal.classList.add("open");
  }

  addResourceBtn?.addEventListener("click", () => openResourceModal());

  resourceForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("resEditId").value;
    const newItem = {
      title: document.getElementById("resTitle").value.trim(),
      type: document.getElementById("resType").value,
      tag: document.getElementById("resTag").value.trim(),
      license: document.getElementById("resLicense").value.trim(),
      description: document.getElementById("resDesc").value.trim(),
      content: document.getElementById("resContent").value.trim()
    };

    if (id) {
      dm.updateResource(id, newItem);
      showToast("Cập nhật tài nguyên OER thành công!");
    } else {
      dm.addResource(newItem);
      showToast("Thêm tài nguyên OER mới thành công!");
    }
    resourceModal.classList.remove("open");
    renderResourcesTable();
    renderDashboardOverview();
  });

  // 6. Quiz Management
  const quizTableBody = document.getElementById("quizTableBody");
  const quizModal = document.getElementById("quizModal");
  const quizForm = document.getElementById("quizForm");
  const addQuizBtn = document.getElementById("addQuizBtn");

  function renderQuizTable() {
    if (!quizTableBody) return;
    const list = dm.getQuiz();
    if (!list.length) {
      quizTableBody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--admin-muted);">Chưa có câu hỏi trắc nghiệm nào.</td></tr>`;
      return;
    }
    quizTableBody.innerHTML = list.map((q, idx) => `
      <tr>
        <td style="font-weight:700;color:var(--admin-primary);">Câu ${idx + 1}</td>
        <td style="max-width:320px;font-weight:600;">${q.question}</td>
        <td><span class="badge-role" style="background:#ecfdf5;color:#059669;">Đáp án ${String.fromCharCode(65 + Number(q.answer))}</span></td>
        <td style="max-width:260px;font-size:12px;color:var(--admin-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${q.explanation || ''}</td>
        <td>
          <div class="action-btns">
            <button class="btn-edit btn-sm edit-qz-btn" data-id="${q.id || idx}">Sửa</button>
            <button class="btn-danger btn-sm del-qz-btn" data-id="${q.id || idx}">Xóa</button>
          </div>
        </td>
      </tr>
    `).join("");

    quizTableBody.querySelectorAll(".edit-qz-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        const item = dm.getQuiz().find(q => q.id === id) || dm.getQuiz()[id];
        if (item) openQuizModal(item);
      });
    });

    quizTableBody.querySelectorAll(".del-qz-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        if (confirm("Bạn có chắc chắn muốn xóa câu hỏi này?")) {
          dm.deleteQuizQuestion(id);
          renderQuizTable();
          renderDashboardOverview();
          showToast("Đã xóa câu hỏi thành công!");
        }
      });
    });
  }

  function openQuizModal(item = null) {
    if (!quizModal) return;
    document.getElementById("qzEditId").value = item ? (item.id || "") : "";
    document.getElementById("qzQuestion").value = item ? item.question : "";
    document.getElementById("qzOptA").value = item ? (item.options[0] || "") : "";
    document.getElementById("qzOptB").value = item ? (item.options[1] || "") : "";
    document.getElementById("qzOptC").value = item ? (item.options[2] || "") : "";
    document.getElementById("qzOptD").value = item ? (item.options[3] || "") : "";
    document.getElementById("qzAnswer").value = item ? item.answer : "0";
    document.getElementById("qzExplain").value = item ? (item.explanation || "") : "";
    document.getElementById("qzModalTitle").textContent = item ? "Chỉnh sửa Câu Hỏi Trắc Nghiệm" : "Thêm Câu Hỏi Mới";
    quizModal.classList.add("open");
  }

  addQuizBtn?.addEventListener("click", () => openQuizModal());

  quizForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("qzEditId").value;
    const newItem = {
      question: document.getElementById("qzQuestion").value.trim(),
      options: [
        document.getElementById("qzOptA").value.trim(),
        document.getElementById("qzOptB").value.trim(),
        document.getElementById("qzOptC").value.trim(),
        document.getElementById("qzOptD").value.trim()
      ],
      answer: parseInt(document.getElementById("qzAnswer").value, 10),
      explanation: document.getElementById("qzExplain").value.trim()
    };

    if (id) {
      dm.updateQuizQuestion(id, newItem);
      showToast("Cập nhật câu hỏi thành công!");
    } else {
      dm.addQuizQuestion(newItem);
      showToast("Thêm câu hỏi mới thành công!");
    }
    quizModal.classList.remove("open");
    renderQuizTable();
    renderDashboardOverview();
  });

  // 7. Settings Form
  const settingsForm = document.getElementById("settingsForm");

  function populateSettingsForm() {
    if (!settingsForm) return;
    const s = dm.getSettings();
    document.getElementById("setFacultyName").value = s.facultyName || "";
    document.getElementById("setUniversityName").value = s.universityName || "";
    document.getElementById("setSlogan").value = s.slogan || "";
    document.getElementById("setHeroMotto").value = s.heroMotto || "";
    document.getElementById("setQuoteBanner").value = s.quoteBannerText || "";
    document.getElementById("setQuoteAuthor").value = s.quoteBannerAuthor || "";
    document.getElementById("setFooterSlogan").value = s.footerSlogan || "";
    document.getElementById("setAddress").value = s.address || "";
    document.getElementById("setEmail").value = s.email || "";
    document.getElementById("setWebsite").value = s.websiteUrl || "";

    // Stats
    document.getElementById("setStat1Num").value = s.stat1Num || "60+";
    document.getElementById("setStat1Label").value = s.stat1Label || "Năm hình thành";
    document.getElementById("setStat2Num").value = s.stat2Num || "Hàng nghìn";
    document.getElementById("setStat2Label").value = s.stat2Label || "Cựu sinh viên";
    document.getElementById("setStat3Num").value = s.stat3Num || "Nhiều";
    document.getElementById("setStat3Label").value = s.stat3Label || "Công trình nghiên cứu";
    document.getElementById("setStat4Num").value = s.stat4Num || "Đa dạng";
    document.getElementById("setStat4Label").value = s.stat4Label || "Đối tác chiến lược";
  }

  settingsForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const current = dm.getSettings();
    const updated = {
      ...current,
      facultyName: document.getElementById("setFacultyName").value.trim(),
      universityName: document.getElementById("setUniversityName").value.trim(),
      slogan: document.getElementById("setSlogan").value.trim(),
      heroMotto: document.getElementById("setHeroMotto").value.trim(),
      quoteBannerText: document.getElementById("setQuoteBanner").value.trim(),
      quoteBannerAuthor: document.getElementById("setQuoteAuthor").value.trim(),
      footerSlogan: document.getElementById("setFooterSlogan").value.trim(),
      address: document.getElementById("setAddress").value.trim(),
      email: document.getElementById("setEmail").value.trim(),
      websiteUrl: document.getElementById("setWebsite").value.trim(),
      stat1Num: document.getElementById("setStat1Num").value.trim(),
      stat1Label: document.getElementById("setStat1Label").value.trim(),
      stat2Num: document.getElementById("setStat2Num").value.trim(),
      stat2Label: document.getElementById("setStat2Label").value.trim(),
      stat3Num: document.getElementById("setStat3Num").value.trim(),
      stat3Label: document.getElementById("setStat3Label").value.trim(),
      stat4Num: document.getElementById("setStat4Num").value.trim(),
      stat4Label: document.getElementById("setStat4Label").value.trim()
    };
    dm.saveSettings(updated);
    showToast("Đã lưu các cài đặt website thành công!");
  });

  // 8. Backup & Export / Import
  const exportBtn = document.getElementById("exportBackupBtn");
  const importFile = document.getElementById("importBackupFile");
  const resetBtn = document.getElementById("resetDefaultBtn");

  exportBtn?.addEventListener("click", () => {
    dm.exportAllJSON();
    showToast("Đã xuất file dữ liệu sao lưu thành công!");
  });

  importFile?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = dm.importAllJSON(event.target.result);
      if (res.success) {
        renderAllData();
        showToast("Đã nhập và khôi phục dữ liệu thành công!");
      } else {
        alert(res.message);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  resetBtn?.addEventListener("click", () => {
    if (confirm("Thao tác này sẽ khôi phục toàn bộ hình ảnh, mốc lịch sử và hoạt động về trạng thái ban đầu. Bạn có muốn tiếp tục?")) {
      dm.resetToDefault();
      renderAllData();
      showToast("Đã khôi phục dữ liệu mặc định!");
    }
  });

  // Password Change
  const changePassForm = document.getElementById("changePassForm");
  changePassForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const oldP = document.getElementById("oldPassword").value;
    const newP = document.getElementById("newPassword").value;
    const res = dm.changePassword(oldP, newP);
    if (res.success) {
      showToast("Đổi mật khẩu quản trị thành công!");
      document.getElementById("changePassModal").classList.remove("open");
      changePassForm.reset();
    } else {
      alert(res.message);
    }
  });

  // Close modals
  document.querySelectorAll(".close-modal-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".admin-modal")?.classList.remove("open");
    });
  });

  document.querySelectorAll(".admin-modal").forEach(m => {
    m.addEventListener("click", (e) => {
      if (e.target === m) m.classList.remove("open");
    });
  });

  document.getElementById("openChangePassBtn")?.addEventListener("click", () => {
    document.getElementById("changePassModal")?.classList.add("open");
  });

  // Run Auth check on load
  checkAuth();
});
