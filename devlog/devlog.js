// Devlog 記事のデータ（必要に応じて追加）
const posts = [
  {
    title: "サイト公開しました！",
    date: "2025/01/10",
    body: `
      GitHub Pages を使って、自分のホームページを公開しました。  
      ここでは制作中のゲームやイラスト、日々の進捗を記録していきます。
    `
  },
  {
    title: "ゲーム構想メモ",
    date: "2025/01/20",
    body: `
      新作ゲームの世界観メモを作成中。  
      ダークで静かな空気感を重視した作品にしたいと考えています。
    `
  }
];

const list = document.getElementById("post-list");
const article = document.getElementById("post");

// 記事一覧バー生成
posts.forEach((p, i) => {
  const item = document.createElement("button");
  item.className = "post-btn";
  item.textContent = `${p.date} - ${p.title}`;
  item.onclick = () => load(i);
  list.appendChild(item);
});

// 記事読み込み
function load(i) {
  const p = posts[i];
  article.innerHTML = `
    <h2>${p.title}</h2>
    <p><small>${p.date}</small></p>
    <p>${p.body}</p>
  `;
}

// 初期記事を表示
load(0);
