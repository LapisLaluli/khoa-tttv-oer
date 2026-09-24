// Document Viewer Modal Engine - Globally available immediately
window.openDocumentModal = function(title, htmlContent, label) {
  let modal = document.querySelector(".doc-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "doc-modal";
    modal.id = "globalDocModal";
    modal.innerHTML = `
      <div class="doc-modal-content">
        <button class="close-search close-doc-btn" style="top:18px;right:18px;width:38px;height:38px;display:flex;align-items:center;justify-content:center;font-size:24px;border:none;background:#fbf7f0;border-radius:50%;cursor:pointer;color:#7b1d28;font-weight:bold;z-index:10;" aria-label="Đóng">×</button>
        <div class="section-label modal-doc-label" style="margin-bottom:8px;font-size:12px;font-weight:700;color:#7b1d28;letter-spacing:0.08em;text-transform:uppercase;"></div>
        <h2 id="modalDocTitle" style="font-family:Georgia,serif;font-size:24px;color:#4e0f17;margin-bottom:18px;line-height:1.35;padding-right:40px;"></h2>
        <div id="modalDocBody"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const labelEl = modal.querySelector(".modal-doc-label");
  if (labelEl) labelEl.textContent = label || "Hoạt Động & Sự Kiện Nổi Bật";
  const titleEl = modal.querySelector("#modalDocTitle");
  if (titleEl) titleEl.textContent = title || "";
  const bodyEl = modal.querySelector("#modalDocBody");
  if (bodyEl) bodyEl.innerHTML = htmlContent || "";

  modal.classList.add("open");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";

  const closeModal = () => {
    modal.classList.remove("open");
    modal.style.display = "none";
    document.body.style.overflow = "";
  };

  const closeBtn = modal.querySelector(".close-doc-btn");
  if (closeBtn) closeBtn.onclick = closeModal;
  modal.onclick = (e) => {
    if (e.target === modal) closeModal();
  };
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && (modal.classList.contains("open") || modal.style.display === "flex")) {
      closeModal();
    }
  });
};

window.openActivityModalById = function(id) {
  const allActs = (window.DataManager && window.DataManager.getActivities)
    ? window.DataManager.getActivities()
    : (window.SEED_ACTIVITIES || []);
  let act = allActs.find(a => a.id === id);
  if (!act) {
    act = (window.SEED_ACTIVITIES || []).find(a => a.id === id);
  }
  if (!act) return;
  const content = `
    ${act.image ? `<div style="margin-bottom:20px; border-radius:8px; overflow:hidden; max-height:420px; box-shadow:0 4px 14px rgba(0,0,0,0.08);"><img src="${act.image}" alt="${act.title}" style="width:100%; height:100%; object-fit:cover; display:block;"></div>` : ''}
    <div style="font-size:15.5px; line-height:1.85; color:#334155; margin-bottom:24px;">
      ${act.details || `<p>${act.description}</p>`}
    </div>
    <div class="modal-event-meta" style="margin-top:32px; padding-top:20px; border-top:1px dashed #cbd5e1; display:flex; flex-direction:column; gap:12px; font-size:14.5px; color:#334155; line-height:1.6;">
      ${act.date ? `
      <div style="display:flex; align-items:flex-start; gap:10px;">
        <span style="font-weight:700; color:#7b1d28; min-width:140px; display:inline-flex; align-items:center; gap:6px;">
          <span>📅</span> Thời gian:
        </span>
        <span style="flex:1; color:#1e293b;">${act.date}</span>
      </div>` : ''}
      ${act.location ? `
      <div style="display:flex; align-items:flex-start; gap:10px;">
        <span style="font-weight:700; color:#7b1d28; min-width:140px; display:inline-flex; align-items:center; gap:6px;">
          <span>📍</span> Địa điểm:
        </span>
        <span style="flex:1; color:#1e293b;">${act.location}</span>
      </div>` : ''}
      ${act.organizer ? `
      <div style="display:flex; align-items:flex-start; gap:10px;">
        <span style="font-weight:700; color:#7b1d28; min-width:140px; display:inline-flex; align-items:center; gap:6px;">
          <span>🏛️</span> Đơn vị tổ chức:
        </span>
        <span style="flex:1; color:#1e293b; font-weight:500;">${act.organizer}</span>
      </div>` : ''}
    </div>
  `;
  window.openDocumentModal(act.title, content, "Hoạt Động & Sự Kiện Nổi Bật");
};

// Global click event listener active immediately
document.addEventListener("click", (e) => {
  const card = e.target.closest(".activity-card");
  if (card) {
    e.preventDefault();
    const id = card.getAttribute("data-id");
    if (id && window.openActivityModalById) {
      window.openActivityModalById(id);
      return;
    }
    const titleEl = card.querySelector(".activity-card-title");
    const title = titleEl ? titleEl.textContent.trim() : "";
    const allActs = (window.DataManager && window.DataManager.getActivities)
      ? window.DataManager.getActivities()
      : (window.SEED_ACTIVITIES || []);
    const found = allActs.find(a => a.title && (a.title.includes(title) || title.includes(a.title)));
    if (found && window.openActivityModalById) {
      window.openActivityModalById(found.id);
    }
    return;
  }

  const milestone = e.target.closest(".milestone");
  if (milestone) {
    e.preventDefault();
    const id = milestone.getAttribute("data-id");
    const allMilestones = (window.DataManager && window.DataManager.getMilestones)
      ? window.DataManager.getMilestones()
      : (window.SEED_MILESTONES || []);
    const m = allMilestones.find(item => item.id === id) || {
      title: milestone.querySelector(".milestone-title")?.textContent || "Giai đoạn lịch sử",
      year: milestone.querySelector(".milestone-year")?.textContent || "",
      description: milestone.querySelector(".milestone-desc")?.textContent || ""
    };
    if (m && window.openDocumentModal) {
      const content = `
        <div style="font-size:16px; line-height:1.9; color:#334155; padding:10px 0 20px;">
          <div style="display:inline-block; padding:4px 14px; background:rgba(123,29,40,0.08); color:#7b1d28; border-radius:4px; font-weight:700; margin-bottom:14px; font-size:14.5px;">
            Giai đoạn: ${m.year}
          </div>
          <p style="font-size:16px; line-height:1.85; margin-bottom:18px;">${m.description}</p>
          <div style="background:#f8fafc; border-left:4px solid #b45309; padding:16px 20px; border-radius:0 6px 6px 0; font-size:14px; color:#475569; line-height:1.75;">
            Trích nguồn: Văn khố và Kỷ yếu Truyền thống hơn 60 năm Khoa Thông tin Thư viện – Trường Đại học Văn hóa Hà Nội (1961 – Nay).
          </div>
        </div>
      `;
      window.openDocumentModal(m.title, content, `Dòng Thời Gian Lịch Sử · ${m.year}`);
    }
  }
});

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

  // Activity Tabs Filter with DataManager
  const filterBtns = document.querySelectorAll(".filter-btn");
  const activityGrid = document.querySelector("#activityGrid");

  function bindActivityCards(container, acts) {
    if (!container) return;
    container.querySelectorAll(".activity-card").forEach(card => {
      const showDetails = (e) => {
        if (e) e.preventDefault();
        const id = card.getAttribute("data-id");
        if (id && window.openActivityModalById) {
          window.openActivityModalById(id);
        }
      };

      card.style.cursor = "pointer";
      card.onclick = showDetails;
      card.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          showDetails(e);
        }
      };
    });
  }

  function renderActivities(category = "all") {
    if (!activityGrid) return;
    const allActivities = (window.DataManager && window.DataManager.getActivities)
      ? window.DataManager.getActivities()
      : (window.SEED_ACTIVITIES || []);

    const filtered = category === "all" 
      ? allActivities 
      : allActivities.filter(a => a.category === category);

    if (!filtered.length) {
      if (allActivities.length > 0) {
        activityGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:30px;color:var(--muted);">Chưa có hoạt động nào trong danh mục này.</p>`;
      }
      return;
    }

    activityGrid.innerHTML = filtered.map(act => `
      <article class="activity-card" data-id="${act.id}" style="cursor:pointer; display:flex; flex-direction:column;" tabindex="0" role="button" aria-label="Xem chi tiết ${act.title}">
        <div class="activity-card-img">
          <img src="${act.image || 'assets/images/placeholder.svg'}" alt="${act.title}" loading="lazy">
        </div>
        <div class="activity-card-body" style="display:flex; flex-direction:column; flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div class="activity-card-tag">${act.tag || act.categoryName || 'Hoạt động'}</div>
            ${act.date ? `<small style="color:var(--muted); font-size:11.5px; font-weight:600;">📅 ${act.date}</small>` : ''}
          </div>
          <h3 class="activity-card-title">${act.title}</h3>
          <p class="activity-card-desc">${act.description}</p>
          <div style="margin-top:auto; padding-top:12px; color:var(--wine); font-size:13px; font-weight:600; display:flex; align-items:center; gap:6px;">
            <span>Xem chi tiết hoạt động</span> <span style="transition:transform 0.2s;">→</span>
          </div>
        </div>
      </article>
    `).join("");

    bindActivityCards(activityGrid, allActivities);
  }

  if (activityGrid) {
    const allActs = (window.DataManager && window.DataManager.getActivities)
      ? window.DataManager.getActivities()
      : (window.SEED_ACTIVITIES || []);
    bindActivityCards(activityGrid, allActs);

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
});
