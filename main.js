// Devlog 記事データ
const posts = {
  "2025-01-10": {
    title: "初めてのDevlog",
    content: "サイト構築を開始しました！"
  },
  "2025-01-15": {
    title: "ゲームプロトタイプ開始",
    content: "簡単なシステムを実装しました。"
  },
  "2025-01-20": {
    title: "UIデザイン調整",
    content: "メニュー構成を試行錯誤中です。"
  }
};

// カレンダー表示
const calendar = document.getElementById("calendar");
const post = document.getElementById("post");

Object.keys(posts).forEach(date => {
  const item = document.createElement("div");
  item.className = "calendar-item";
  item.textContent = date;
  item.onclick = () => loadPost(date);
  calendar.appendChild(item);
});

// 記事ロード
function loadPost(date) {
  const p = posts[date];
  post.innerHTML = `
    <h2>${p.title}</h2>
    <p>${p.content}</p>
  `;
}

// 初期表示
loadPost(Object.keys(posts)[0]);
