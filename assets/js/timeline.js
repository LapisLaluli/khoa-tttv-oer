/**
 * Timeline loader using DataManager for dynamic real-time rendering
 */
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#timelineData");
  if (!root) return;

  function renderTimeline() {
    const milestones = window.DataManager ? window.DataManager.getMilestones() : [];
    if (!milestones.length) {
      root.innerHTML = `<p style="padding:20px;text-align:center;color:var(--muted);">Chưa có dữ liệu mốc lịch sử.</p>`;
      return;
    }

    root.innerHTML = milestones.map((m, idx) => `
      <article class="milestone" data-id="${m.id || ''}">
        <div class="milestone-node">
          <div class="milestone-year">${m.year}</div>
          <div class="milestone-dot"></div>
        </div>
        <div class="milestone-title">${m.title}</div>
        <div class="milestone-img-wrap">
          <img src="${m.image || 'assets/images/placeholder.svg'}" alt="${m.title}" loading="lazy">
        </div>
        <p class="milestone-desc">${m.description}</p>
        <div class="milestone-meta">
          <span class="oer-badge">${m.tag || "Tư liệu OER"}</span>
          <button class="view-milestone-btn btn" style="padding: 4px 10px; font-size: 11px;" data-idx="${idx}">Chi tiết →</button>
        </div>
      </article>
    `).join("");

    // Attach modal click
    root.querySelectorAll(".view-milestone-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-idx");
        const item = milestones[idx];
        if (item && window.openDocumentModal) {
          window.openDocumentModal(
            `Dấu mốc lịch sử: ${item.year} - ${item.title}`,
            `
              <div style="margin-bottom:16px;">
                <span class="oer-badge" style="font-size:13px;padding:4px 10px;">${item.tag || "Tư liệu số hóa"}</span>
              </div>
              <p style="font-size:16px;line-height:1.75;margin-bottom:16px;">${item.details || item.description}</p>
              <div style="background:var(--cream);padding:18px;border:1px solid var(--line);border-radius:6px;margin:20px 0;">
                <strong>Thông tin kiểm chứng & Trích dẫn OER:</strong><br>
                <ul style="margin:8px 0 0 20px;font-size:13.5px;color:var(--muted);line-height:1.7;">
                  <li><strong>Nguồn tư liệu:</strong> ${item.source || "Kho tư liệu truyền thống Khoa Thông tin Thư viện"}</li>
                  <li><strong>Giấy phép bản quyền:</strong> Creative Commons Ghi nhận công của tác giả 4.0 (CC BY 4.0)</li>
                  <li><strong>Đơn vị lưu trữ:</strong> Khoa Thông tin Thư viện - Trường Đại học Văn hóa Hà Nội</li>
                </ul>
              </div>
            `
          );
        }
      });
    });
  }

  renderTimeline();
  window.addEventListener("storage", renderTimeline);
});
