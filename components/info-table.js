class InfoTable extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <table>
        <slot></slot>
      </table>
    `;
  }
}
customElements.define('info-table', InfoTable);