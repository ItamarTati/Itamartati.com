class ArticleContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container"><slot></slot></div>`;
  }
}
customElements.define('article-content', ArticleContent);