class PortfolioItem extends HTMLElement {
  connectedCallback() {
    const link = this.getAttribute('link') || '#';
    const image = this.getAttribute('image') || '';
    const title = this.getAttribute('title') || '';
    const type = this.getAttribute('type') || '';
    const order = this.getAttribute('order') || '1';

    this.innerHTML = `
      <div class="latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${order}">
        <div>
          <div class="img-box v2">
            <a class="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="${link}" target="_blank">
              <img class="w-100" src="${image}" alt="${title}">
            </a>
          </div>
        </div>
        <div class="portfolio-card-content-wrap">
          <div class="content-left">
            <h3 class="portfolio-card-title"><a class="link" href="${link}" target="_blank">${title}</a></h3>
            <p class="portfoli-card-para">${type}</p>
          </div>
          <a href="${link}" target="_blank" class="tmp-arrow-icon-btn">
            <div class="btn-inner">
              <i class="tmp-icon fa-solid fa-arrow-up-right"></i>
              <i class="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
            </div>
          </a>
        </div>
      </div>
    `;
  }
}
customElements.define('portfolio-item', PortfolioItem);