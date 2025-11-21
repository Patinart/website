document.addEventListener('DOMContentLoaded', () => {
    
    // スマホ用メニューの開閉処理
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        const navItems = document.querySelectorAll('.nav-link');

        // ハンバーガーボタンを押したとき
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active'); // ボタンの×変形
            navMenu.classList.toggle('open');      // メニューのスライドイン
        });

        // メニュー内のリンクを押したとき（メニューを閉じる）
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }

    // Lightboxの設定 (ある場合のみ)
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'fadeDuration': 300
        });
    }
});