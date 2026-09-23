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
        <div class="milestone-badge-top">Giai đoạn 0${idx + 1}</div>
        <div class="milestone-node">
          <div class="milestone-year">${m.year}</div>
          <div class="milestone-dot"><span class="dot-inner"></span></div>
        </div>
        <div class="milestone-content">
          <h3 class="milestone-title">${m.title}</h3>
          <p class="milestone-desc">${m.description}</p>
        </div>
        ${m.tag ? `
        <div class="milestone-meta">
          <span class="oer-badge">${m.tag}</span>
        </div>` : ''}
      </article>
    `).join("");
  }

  renderTimeline();
  window.addEventListener("storage", renderTimeline);
});
