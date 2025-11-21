document.addEventListener('DOMContentLoaded', () => {
    
    // ------------------------------------------------
    // 1. 背景色のスクロール連動切り替え (Intersection Observer)
    // ------------------------------------------------
    const bgLayer = document.getElementById('bg-layer');
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // 画面の30%が見えたら切り替え
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // sectionタグの data-bg 属性を取得
                const bgClass = entry.target.getAttribute('data-bg');
                if (bgClass) {
                    // 既存のクラスを削除して新しいクラスを追加
                    bgLayer.className = ''; 
                    bgLayer.classList.add(bgClass);
                    
                    // ナビゲーションのハイライト更新
                    updateActiveNav(entry.target.id);
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // ------------------------------------------------
    // 2. ナビゲーションのハイライト機能
    // ------------------------------------------------
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav(id) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    // ------------------------------------------------
    // 3. スマホ用メニューの開閉 (Hamburger Menu)
    // ------------------------------------------------
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // メニュー内のリンクをクリックしたら閉じる
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });

    // ------------------------------------------------
    // 4. Lightboxの設定 (オプション)
    // ------------------------------------------------
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300
    });
});