class VideoCard extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src') || '';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';
    const order = this.getAttribute('order') || '1';

    this.innerHTML = `
      <div class="video-card tmp-scroll-trigger tmp-fade-in animation-order-${order}">
        <div class="video-wrapper">
          <iframe width="100%" height="315" src="${src}" title="${title}"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h3 class="video-title">${title}</h3>
        <p class="video-description">${description}</p>
      </div>
    `;
  }
}
customElements.define('video-card', VideoCard);