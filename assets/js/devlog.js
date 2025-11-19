// 読み込みたい記事一覧（新しい順）
const posts = [
  { id: "2025-11-19", title: "ゲーム企画の初期メモ" },
  { id: "2024-12", title: "進捗まとめ（12月）" },
  { id: "2024-11", title: "背景デザインの研究" }
];

// 記事一覧バーを作成
const list = document.getElementById("post-list");

posts.forEach(post => {
  const btn = document.createElement("button");
  btn.className = "post-btn";
  btn.textContent = post.title;

  btn.addEventListener("click", () => {
    loadPost(post.id);
  });

  list.appendChild(btn);
});

// 記事読み込み処理
function loadPost(id) {
  const postArea = document.getElementById("post");
  fetch(`./posts/${id}.html`)
    .then(res => res.text())
    .then(html => {
      postArea.innerHTML = `<div class="post-box">${html}</div>`;
    })
    .catch(() => {
      postArea.innerHTML = `<p>記事が見つかりません。</p>`;
    });
}

// ページ読み込み時に最新記事を表示
window.onload = () => {
  loadPost(posts[0].id);
};
