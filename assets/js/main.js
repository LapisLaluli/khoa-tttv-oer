document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".navlinks");
  menuBtn?.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "84px";
      navLinks.style.left = "0";
      navLinks.style.right = "0";
      navLinks.style.background = "#ffffff";
      navLinks.style.padding = "24px";
      navLinks.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)";
      navLinks.style.borderBottom = "2px solid var(--wine)";
    }
  });

  // Search Modal
  const searchBtn = document.querySelector(".search-btn");
  const searchPanel = document.querySelector(".search-panel");
  const closeSearch = document.querySelector(".close-search");
  const searchInput = document.querySelector("#siteSearch");
  const searchResults = document.querySelector("#searchResults");

  searchBtn?.addEventListener("click", () => {
    searchPanel?.classList.add("open");
    searchInput?.focus();
  });
  
  closeSearch?.addEventListener("click", () => {
    searchPanel?.classList.remove("open");
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchPanel?.classList.remove("open");
      document.querySelector(".doc-modal")?.classList.remove("open");
    }
  });

  // Dynamic Search Engine
  function getSearchableIndex() {
    const base = [
      { title: "Lịch sử Khoa Thông tin Thư viện", url: "history.html", text: "Quá trình hơn 60 năm xây dựng, các mốc 1961, 1990, 1991 đến nay." },
      { title: "Tài nguyên Giáo dục Mở (OER)", url: "resources.html", text: "Kho tài liệu số hóa, kỷ yếu truyền thống, giáo trình mở, bài giảng mở." },
      { title: "Góc học tập & Trắc nghiệm lịch sử", url: "learning.html", text: "Trắc nghiệm ôn tập kiến thức lịch sử hình thành và phát triển của Khoa." },
      { title: "Về dự án Tài nguyên Mở OER", url: "about.html", text: "Tiêu chuẩn Dublin Core, bản quyền mở Creative Commons CC-BY, trích dẫn học thuật." },
      { title: "Cổng Đăng Nhập Quản Trị", url: "admin.html", text: "Truy cập bảng điều khiển quản trị viên để thêm, sửa, xóa nội dung và cấu hình." }
    ];

    if (window.DataManager) {
      const milestones = window.DataManager.getMilestones();
      milestones.forEach(m => {
        base.push({
          title: `Mốc lịch sử: ${m.year} - ${m.title}`,
          url: `history.html#timeline`,
          text: `${m.description} ${m.details || ''}`
        });
      });
      const resources = window.DataManager.getResources();
      resources.forEach(r => {
        base.push({
          title: `Tài nguyên OER: ${r.title}`,
          url: `resources.html`,
          text: `${r.description}`
        });
      });
    }
    return base;
  }

  searchInput?.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      searchResults.innerHTML = "";
      return;
    }
    const index = getSearchableIndex();
    const matches = index.filter(item => 
      (item.title + " " + item.text).toLowerCase().includes(q)
    );
    if (matches.length > 0) {
      searchResults.innerHTML = matches.slice(0, 8).map(m => `
        <div class="search-item">
          <a href="${m.url}">${m.title}</a>
          <p>${m.text}</p>
        </div>
      `).join("");
    } else {
      searchResults.innerHTML = `<p style="padding:15px;color:var(--muted);text-align:center;">Không tìm thấy tư liệu nào khớp với từ khóa "${searchInput.value}".</p>`;
    }
  });

  // Document Viewer Modal function
  window.openDocumentModal = function(title, htmlContent) {
    let modal = document.querySelector(".doc-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "doc-modal";
      modal.innerHTML = `
        <div class="doc-modal-content">
          <button class="close-search close-doc-btn" style="top:15px;right:15px;" aria-label="Đóng">×</button>
          <div class="section-label" style="margin-bottom:6px;">Tài nguyên Giáo dục Mở (OER)</div>
          <h2 id="modalDocTitle" style="font-family:var(--serif);font-size:26px;color:var(--wine-dark);margin-bottom:18px;"></h2>
          <div id="modalDocBody"></div>
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector(".close-doc-btn").addEventListener("click", () => {
        modal.classList.remove("open");
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("open");
      });
    }
    modal.querySelector("#modalDocTitle").textContent = title;
    modal.querySelector("#modalDocBody").innerHTML = htmlContent;
    modal.classList.add("open");
  };

  // Activity Tabs Filter with DataManager
  const filterBtns = document.querySelectorAll(".filter-btn");
  const activityGrid = document.querySelector("#activityGrid");

  function renderActivities(category = "all") {
    if (!activityGrid) return;
    const allActivities = window.DataManager ? window.DataManager.getActivities() : [];
    const filtered = category === "all" 
      ? allActivities 
      : allActivities.filter(a => a.category === category);

    if (!filtered.length) {
      activityGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:30px;color:var(--muted);">Chưa có hoạt động nào trong danh mục này.</p>`;
      return;
    }

    activityGrid.innerHTML = filtered.map(act => `
      <article class="activity-card">
        <div class="activity-card-img">
          <img src="${act.image || 'assets/images/placeholder.svg'}" alt="${act.title}" loading="lazy">
        </div>
        <div class="activity-card-body">
          <div class="activity-card-tag">${act.tag || act.categoryName || 'Hoạt động'}</div>
          <h3 class="activity-card-title">${act.title}</h3>
          <p class="activity-card-desc">${act.description}</p>
        </div>
      </article>
    `).join("");
  }

  if (activityGrid) {
    let currentCat = "all";
    renderActivities(currentCat);
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCat = btn.getAttribute("data-category");
        renderActivities(currentCat);
      });
    });
    window.addEventListener("storage", () => renderActivities(currentCat));
  }

  // Bind Dynamic Site Settings & Images
  function applySiteSettings() {
    if (!window.DataManager) return;
    const settings = window.DataManager.getSettings();

    // Text bindings
    document.querySelectorAll(".dyn-slogan").forEach(el => el.textContent = settings.slogan || el.textContent);
    document.querySelectorAll(".dyn-hero-motto").forEach(el => el.textContent = settings.heroMotto || el.textContent);
    document.querySelectorAll(".dyn-quote-banner").forEach(el => el.textContent = settings.quoteBannerText || el.textContent);
    document.querySelectorAll(".dyn-quote-author").forEach(el => el.textContent = settings.quoteBannerAuthor || el.textContent);
    document.querySelectorAll(".dyn-footer-slogan").forEach(el => el.textContent = settings.footerSlogan || el.textContent);
    document.querySelectorAll(".dyn-address").forEach(el => el.textContent = settings.address || el.textContent);
    document.querySelectorAll(".dyn-email").forEach(el => el.textContent = settings.email || el.textContent);
    document.querySelectorAll(".dyn-website").forEach(el => el.textContent = settings.websiteUrl || el.textContent);

    // Image bindings
    if (settings.logoUrl) {
      document.querySelectorAll(".dyn-logo").forEach(el => el.src = settings.logoUrl);
    }
    if (settings.heroBgUrl) {
      const heroEl = document.querySelector(".hero");
      if (heroEl) {
        heroEl.style.backgroundImage = `linear-gradient(135deg, rgba(40, 12, 16, 0.94) 0%, rgba(60, 15, 22, 0.82) 50%, rgba(30, 8, 12, 0.9) 100%), url('${settings.heroBgUrl}')`;
      }
    }
    if (settings.quoteBgUrl) {
      const quoteEl = document.querySelector(".quote-band");
      if (quoteEl) {
        quoteEl.style.backgroundImage = `linear-gradient(135deg, rgba(35, 10, 15, 0.92), rgba(55, 14, 20, 0.95)), url('${settings.quoteBgUrl}')`;
      }
    }
    if (settings.aboutLargeImg) {
      const img = document.getElementById("aboutImgLarge");
      if (img) img.src = settings.aboutLargeImg;
    }
    if (settings.aboutStack1Img) {
      const img = document.getElementById("aboutImgStack1");
      if (img) img.src = settings.aboutStack1Img;
    }
    if (settings.aboutStack2Img) {
      const img = document.getElementById("aboutImgStack2");
      if (img) img.src = settings.aboutStack2Img;
    }

    // Stats
    const stat1El = document.querySelector(".dyn-stat1-num");
    if (stat1El && settings.stat1Num) stat1El.textContent = settings.stat1Num;
    const stat2El = document.querySelector(".dyn-stat2-num");
    if (stat2El && settings.stat2Num) stat2El.textContent = settings.stat2Num;
    const stat3El = document.querySelector(".dyn-stat3-num");
    if (stat3El && settings.stat3Num) stat3El.textContent = settings.stat3Num;
    const stat4El = document.querySelector(".dyn-stat4-num");
    if (stat4El && settings.stat4Num) stat4El.textContent = settings.stat4Num;
  }

  applySiteSettings();
  window.addEventListener("storage", applySiteSettings);

  // 4. Hero Carousel Slider Navigation
  const heroCarousel = document.getElementById("heroCarousel");
  if (heroCarousel) {
    const slides = heroCarousel.querySelectorAll(".hero-slide");
    const dots = heroCarousel.querySelectorAll(".dot-indicator");
    const prevBtn = document.getElementById("heroPrevBtn");
    const nextBtn = document.getElementById("heroNextBtn");
    let currentSlide = 0;
    let autoSlideTimer = null;

    const gradients = [
      "linear-gradient(135deg, rgba(42, 10, 16, 0.94) 0%, rgba(65, 14, 24, 0.85) 50%, rgba(28, 6, 10, 0.92) 100%)",
      "linear-gradient(135deg, rgba(14, 28, 52, 0.95) 0%, rgba(35, 18, 44, 0.88) 50%, rgba(18, 12, 32, 0.94) 100%)",
      "linear-gradient(135deg, rgba(52, 18, 10, 0.95) 0%, rgba(70, 16, 28, 0.88) 50%, rgba(32, 10, 14, 0.93) 100%)",
      "linear-gradient(135deg, rgba(32, 12, 45, 0.95) 0%, rgba(55, 15, 50, 0.88) 50%, rgba(22, 8, 30, 0.93) 100%)"
    ];

    function goToSlide(index) {
      if (slides.length === 0) return;
      if (index < 0) {
        currentSlide = slides.length - 1;
      } else if (index >= slides.length) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      slides.forEach((slide, i) => {
        if (i === currentSlide) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
      });

      // Update subtle ambient background gradient
      const bgUrl = (window.DataManager && window.DataManager.getSettings().heroBgUrl) || "assets/images/hero-bg.svg";
      const grad = gradients[currentSlide] || gradients[0];
      heroCarousel.style.backgroundImage = `${grad}, url('${bgUrl}')`;
    }

    prevBtn?.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
      resetAutoSlide();
    });

    nextBtn?.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
      resetAutoSlide();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoSlide();
      });
    });

    function startAutoSlide() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 5500);
    }

    function resetAutoSlide() {
      startAutoSlide();
    }

    heroCarousel.addEventListener("mouseenter", () => {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
    });

    heroCarousel.addEventListener("mouseleave", () => {
      startAutoSlide();
    });

    startAutoSlide();
  }

  // Quick History Document Modal Handler (Card 01 on Homepage)
  const openQuickDocBtn = document.getElementById("openQuickHistoryDocBtn");
  openQuickDocBtn?.addEventListener("click", () => {
    if (window.openDocumentModal) {
      window.openDocumentModal(
        "Tóm Tắt Dòng Chảy 60 Năm Lịch Sử",
        `
          <div style="font-size:15px; line-height:1.85; color:#334155; padding-top:4px;">
            <p><strong>1. Khởi nguồn (1961 - 1976):</strong> Năm 1961, Trường Cán bộ Văn hóa mở lớp đào tạo Thư viện khóa đầu tiên, đặt nền móng lịch sử cho đào tạo cán bộ thông tin - thư viện chính quy tại Việt Nam.</p>
            
            <p><strong>2. Xây dựng & Định hình (1977 - 1990):</strong> Thành lập Bộ môn Thư viện, xây dựng khung chương trình đại học tiêu chuẩn, đào tạo hàng trăm cán bộ cho hệ thống thư viện công cộng và đại học toàn quốc.</p>
            
            <p><strong>3. Thành lập Khoa Thư viện (1991):</strong> Quyết định số 41/TCCB ngày 28/01/1991 chính thức nâng cấp thành <em>Khoa Thư viện</em> trực thuộc Trường Đại học Văn hóa Hà Nội.</p>
            
            <p><strong>4. Đổi tên & Hiện đại hóa (2007 - 2015):</strong> Đổi tên thành <em>Khoa Thông tin - Thư viện</em>, tiên phong tích hợp công nghệ thông tin, thư viện điện tử và khoa học dữ liệu.</p>
            
            <p><strong>5. Chuyển đổi số & Hội nhập (2016 - Nay):</strong> Đổi mới chương trình đào tạo theo chuẩn kiểm định chất lượng, xây dựng dự án Tài nguyên Giáo dục Mở (OER), ứng dụng AI và chuyển giao tri thức vì cộng đồng.</p>
            
            <div style="margin-top:20px; padding:12px; background:#f8fafc; border-left:4px solid var(--wine); border-radius:4px;">
              <small style="color:var(--muted);">💡 <em>Để tra cứu từng văn bản số hóa, quyết định lịch sử và metadata kiểm chứng chi tiết, vui lòng xem <a href="history.html#timeline" style="color:var(--wine); font-weight:600;">Dòng Thời Gian Lịch Sử</a> hoặc <a href="resources.html" style="color:var(--wine); font-weight:600;">Kho Tư Liệu OER</a>.</em></small>
            </div>
          </div>
        `
      );
    }
  });
});
