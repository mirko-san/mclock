export * from './lib/MClock.svelte';

// XXX
// 無理やり tailwind css が使えるようにしています。
// 参考
// https://developer.mozilla.org/ja/docs/Web/Web_Components/Using_shadow_DOM#%E5%86%85%E9%83%A8%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%A8%E5%A4%96%E9%83%A8%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB
const element = document.getElementById('m-clock');
const shadowRoot = element.shadowRoot;

// tailwind css を cdn で適用
const linkElem = document.createElement('link');

// XXX
// リンクはたまたまここで拾ったものを使っています。
// https://zenn.dev/chabatake_i/articles/tailwindcss_introduction#tailwindcss%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95
linkElem.setAttribute('href', 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
linkElem.setAttribute('rel', 'stylesheet');

shadowRoot.appendChild(linkElem);
