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

    root.innerHTML = milestones.map((m) => `
      <article class="milestone" data-id="${m.id || ''}">
        <div class="milestone-node">
          <div class="milestone-year">${m.year}</div>
          <div class="milestone-dot"></div>
        </div>
        <div class="milestone-title">${m.title}</div>
        <p class="milestone-desc">${m.description}</p>
        ${m.tag ? `
        <div class="milestone-meta" style="justify-content:center;">
          <span class="oer-badge">${m.tag}</span>
        </div>` : ''}
      </article>
    `).join("");
  }

  renderTimeline();
  window.addEventListener("storage", renderTimeline);
});
