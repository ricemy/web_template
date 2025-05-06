// ページ内ジャンプ
document.addEventListener('DOMContentLoaded', () => {
    // HTML文書の読み込み（パース）が終わったタイミングで、中の処理を実行する。
    // これがないと、まだDOMが構築されていない段階でスクリプトが実行されてエラーになる。

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // href 属性が "#" で始まるすべての <a> タグを選択。
        // これは、ページ内リンク（アンカーリンク）を意味（例：<a href="#section1">）。

      anchor.addEventListener('click', function (e) {
        // 見つけたすべてのリンクに対して、クリック時のイベントを設定。
        e.preventDefault(); // 通常のリンク動作を止める
  
        const href = this.getAttribute('href');
        // クリックされたリンクの href 属性値（例：#section1）を取得。
        if (!href || href === '#') return;
  
        const target = document.querySelector(href);
        // href で指定されたIDを持つ要素（例：<section id="section1">）を取得。
        if (!target) return;
  
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
  
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        // ヘッダー要素の高さを取得して、スクロール位置から引くことで、内容が隠れないようにする。
  
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        });
      });
    });
  });
  