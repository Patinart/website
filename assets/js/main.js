document.addEventListener('DOMContentLoaded', () => {
    /*
    // ==================================================
    // 1. 背景色のスクロール連動 (bg-layerがあるページのみ実行)
   // ==================================================

    const bgLayer = document.getElementById('bg-layer');
    const sections = document.querySelectorAll('.section');

    // bgLayerが存在する場合のみ実行（エラー防止）
    if (bgLayer && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bgClass = entry.target.getAttribute('data-bg');
                    if (bgClass) {
                        bgLayer.className = ''; 
                        bgLayer.classList.add(bgClass);
                        updateActiveNav(entry.target.id);
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }
*/
 
    // ==================================================
    // 2. ナビゲーションのハイライト (現在のページ位置を表示)
    // ==================================================
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav(id) {
        if (!navLinks.length) return; // リンクがない場合は終了

        navLinks.forEach(link => {
            link.classList.remove('active');
            // ページ内リンク（#homeなど）の場合のみ判定
            const href = link.getAttribute('href');
            if (href && href === `#${id}`) {
                link.classList.add('active');
            }
        });
    }

    // ==================================================
    // 3. スマホ用メニューの開閉 (メニューがあるページのみ実行)
    // ==================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // ボタンとメニューの両方が存在する場合のみ実行
    if (menuToggle && navMenu) {
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
    }

    // ==================================================
    // 4. Lightboxの設定 (オプション)
    // ==================================================
    // lightboxが読み込まれている場合のみ設定
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'fadeDuration': 300,
            'imageFadeDuration': 300,
            'albumLabel': "Image %1 of %2"
        });
    }
});