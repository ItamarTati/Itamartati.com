class ExperienceCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const title = this.getAttribute('title') || '';
    const company = this.getAttribute('company') || '';
    const dates = this.getAttribute('dates') || '';
    const description = this.getAttribute('description') || '';
    const fullTitle = company ? `${title} - ${company}` : title;
    shadow.innerHTML = `
      <style>
        .card {background:#fff;border-radius:12px;padding:2rem;box-shadow:0 4px 20px rgba(0,0,0,.05);transition:transform .3s ease;}
        .card:hover {transform:translateY(-10px);}
        .sub-title {font-size:1.2rem;color:#555;margin-bottom:.5rem;}
        .title {font-size:1.5rem;font-weight:bold;margin-bottom:1rem;}
        .para {line-height:1.6;color:#666;}
        @media (max-width:768px) {.card {padding:1.5rem;}}
      </style>
      <div class="col-lg-6 col-sm-6">
        <div class="education-experience-card card tmp-scroll-trigger tmponhover tmp-fade-in">
          <h4 class="edu-sub-title sub-title">${fullTitle}</h4>
          <h2 class="edu-title title">${dates}</h2>
          <p class="edu-para para">${description}</p>
          <slot></slot>
        </div>
      </div>
    `;
  }
}
customElements.define('experience-card', ExperienceCard);