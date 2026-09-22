document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#quizRoot");
  if (!root) return;

  function initQuiz() {
    const quizData = window.DataManager ? window.DataManager.getQuiz() : [];
    if (!quizData || !quizData.length) {
      root.innerHTML = `<p style="padding:20px;text-align:center;color:var(--muted);">Chưa có câu hỏi trắc nghiệm nào trong cơ sở dữ liệu.</p>`;
      return;
    }

    let current = 0;
    let score = 0;

    function renderQuestion() {
      const q = quizData[current];
      root.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <span class="section-label" style="margin:0;">Góc học tập OER</span>
          <span style="font-weight:600; color:var(--wine); font-size:14px;">Câu ${current + 1} / ${quizData.length}</span>
        </div>
        <h3 style="font-family:var(--serif); font-size:24px; color:var(--wine-dark); margin-bottom:20px; line-height:1.35;">${q.question}</h3>
        <div id="opts" style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
          ${q.options.map((opt, i) => `
            <button class="option" data-i="${i}" style="text-align:left; background:#fff; border:1px solid var(--line); padding:14px 18px; border-radius:6px; font-size:14.5px; cursor:pointer; transition:all 0.2s ease;">
              <strong style="color:var(--wine); margin-right:8px;">${String.fromCharCode(65 + i)}.</strong> ${opt}
            </button>
          `).join("")}
        </div>
        <div style="display:flex; gap:12px; align-items:center;">
          <button class="btn" id="checkBtn" style="padding:10px 24px;">Kiểm tra đáp án</button>
        </div>
        <div class="result" id="resultBox" style="margin-top:20px; padding:18px; background:var(--cream); border-left:4px solid var(--wine); border-radius:4px; display:none;"></div>
      `;

      let selected = null;
      const optionBtns = root.querySelectorAll(".option");

      optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          optionBtns.forEach(b => {
            b.style.borderColor = "var(--line)";
            b.style.background = "#fff";
          });
          btn.style.borderColor = "var(--wine)";
          btn.style.background = "#fcf2f4";
          selected = parseInt(btn.dataset.i, 10);
        });
      });

      root.querySelector("#checkBtn").addEventListener("click", () => {
        const resultBox = root.querySelector("#resultBox");
        if (selected === null) {
          resultBox.style.display = "block";
          resultBox.style.borderLeftColor = "#d97706";
          resultBox.innerHTML = `<span style="color:#d97706; font-weight:600;">⚠️ Vui lòng chọn một đáp án trước khi kiểm tra.</span>`;
          return;
        }

        const isCorrect = selected === Number(q.answer);
        if (isCorrect) score++;

        resultBox.style.display = "block";
        resultBox.style.borderLeftColor = isCorrect ? "#059669" : "#dc2626";
        resultBox.innerHTML = `
          <div style="font-size:16px; font-weight:700; color:${isCorrect ? '#059669' : '#dc2626'}; margin-bottom:6px;">
            ${isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác!'}
          </div>
          <div style="font-size:14px; color:#4a443e; line-height:1.65; margin-bottom:16px;">
            ${q.explanation || 'Không có giải thích bổ sung.'}
          </div>
          <button class="btn" id="nextBtn" style="padding:8px 20px; font-size:13.5px;">
            ${current === quizData.length - 1 ? 'Xem kết quả tổng kết →' : 'Câu hỏi tiếp theo →'}
          </button>
        `;

        root.querySelector("#nextBtn").addEventListener("click", () => {
          current++;
          if (current < quizData.length) {
            renderQuestion();
          } else {
            renderSummary();
          }
        });
      });
    }

    function renderSummary() {
      const percent = Math.round((score / quizData.length) * 100);
      root.innerHTML = `
        <div style="text-align:center; padding:30px 10px;">
          <div class="section-label">Hoàn thành bài trắc nghiệm OER</div>
          <h3 style="font-family:var(--serif); font-size:32px; color:var(--wine-dark); margin:10px 0 16px;">Kết Quả Ôn Tập Của Bạn</h3>
          <div style="font-size:46px; font-weight:700; font-family:var(--serif); color:var(--wine); margin-bottom:12px;">
            ${score} / ${quizData.length}
          </div>
          <p style="font-size:15.5px; color:var(--muted); max-width:500px; margin:0 auto 24px; line-height:1.6;">
            ${percent >= 75 ? 'Xuất sắc! Bạn đã nắm rất vững lịch sử và ý nghĩa của Khoa Thông tin Thư viện.' : 'Hãy tiếp tục khám phá thêm các tư liệu lịch sử trong kho tài nguyên giáo dục mở nhé!'}
          </p>
          <button class="btn" id="restartBtn">Làm lại bài trắc nghiệm ↺</button>
        </div>
      `;

      root.querySelector("#restartBtn")?.addEventListener("click", () => {
        current = 0;
        score = 0;
        renderQuestion();
      });
    }

    renderQuestion();
  }

  initQuiz();
  window.addEventListener("storage", initQuiz);
});
