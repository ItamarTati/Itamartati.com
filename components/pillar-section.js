class PillarSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const content = this.innerHTML;

    this.innerHTML = `
      <div class="pillar-section tmp-scroll-trigger tmp-fade-in">
        <h2>${title}</h2>
        ${content}
      </div>
    `;
  }
}
customElements.define('pillar-section', PillarSection);