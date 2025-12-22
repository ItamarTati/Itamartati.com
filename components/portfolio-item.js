class PortfolioItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const link = this.getAttribute('link');
    const image = this.getAttribute('image');
    const title = this.getAttribute('title');
    const type = this.getAttribute('type');
    shadow.innerHTML = `
      <style>
        .card {margin-bottom:30px;}
        .img-box img {width:100%;border-radius:12px;transition:transform .4s ease;}
        .content {display:flex;justify-content:space-between;align-items:center;margin-top:20px;}
        .title {margin:0;font-size:1.4rem;}
        .type {color:#777;font-size:1rem;}
        a {text-decoration:none;color:inherit;}
      </style>
      <div class="col-lg-6 col-sm-6">
        <div class="latest-portfolio-card tmp-hover-link card tmp-scroll-trigger tmp-fade-in">
          <div class="img-box v2">
            <a href="${link}" target="_blank">
              <img class="w-100" src="${image}" alt="${title}">
            </a>
          </div>
          <div class="portfolio-card-content-wrap content">
            <div class="content-left">
              <h3 class="portfolio-card-title"><a class="link" href="${link}" target="_blank">${title}</a></h3>
              <p class="portfoli-card-para type">${type}</p>
            </div>
            <a href="${link}" target="_blank" class="tmp-arrow-icon-btn">
              <div class="btn-inner">
                <i class="tmp-icon fa-solid fa-arrow-up-right"></i>
                <i class="tmp-icon-bottom fa-solid fa-arrow-up-right"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('portfolio-item', PortfolioItem);