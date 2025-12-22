class ExperienceCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const company = this.getAttribute('company') || '';
    const dates = this.getAttribute('dates') || '';
    const description = this.getAttribute('description') || '';
    const order = this.getAttribute('order') || '1';

    const subTitle = title && company ? `${title} - ${company}` : (title || company);

    // Match EXACT original structure: no extra col wrapper here
    this.innerHTML = `
      <div class="education-experience-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${order}">
        <h4 class="edu-sub-title">${subTitle}</h4>
        <h2 class="edu-title">${dates}</h2>
        <p class="edu-para">${description}</p>
      </div>
    `;
  }
}
customElements.define('experience-card', ExperienceCard);