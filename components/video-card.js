class VideoCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const src = this.getAttribute('src');
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    shadow.innerHTML = `
      <style>
        .card {margin-bottom:30px;}
        iframe {width:100%;height:315px;border-radius:12px;}
        .title {margin:20px 0 10px;font-size:1.3rem;}
        .desc {color:#777;line-height:1.6;}
      </style>
      <div class="video-card tmp-scroll-trigger tmp-fade-in card">
        <div class="video-wrapper">
          <iframe src="${src}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3 class="video-title title">${title}</h3>
        <p class="video-description desc">${description}</p>
      </div>
    `;
  }
}
customElements.define('video-card', VideoCard);