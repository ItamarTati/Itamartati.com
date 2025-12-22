class SectionHeading extends HTMLElement {
  connectedCallback() {
    const subtitle = this.getAttribute('subtitle') || '';
    const title = this.getAttribute('title') || '';
    const description = this.getAttribute('description') || '';

    this.innerHTML = `
      <div class="section-head mb--50 text-center">
        ${subtitle ? `<div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1"><span class="subtitle">${subtitle}</span></div>` : ''}
        <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">${title} ${subtitle ? `<span><img src="assets/images/custom-line/custom-line.png" alt="custom-line"></span>` : ''}</h2>
        ${description ? `<p class="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">${description}</p>` : ''}
      </div>
    `;
  }
}
customElements.define('section-heading', SectionHeading);