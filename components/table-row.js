class TableRow extends HTMLElement {
  connectedCallback() {
    const label = this.getAttribute('label');
    this.innerHTML = `
      <tr>
        <td>${label}</td>
        <td><slot></slot></td>
      </tr>
    `;
  }
}
customElements.define('table-row', TableRow);