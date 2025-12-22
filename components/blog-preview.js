class BlogPreview extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const url = this.getAttribute('url');
    shadow.innerHTML = `
      <style>
        .card {height:100%;border-radius:12px;overflow:hidden;background:#f8f9fa;display:flex;align-items:center;justify-content:center;}
        a {text-decoration:none;color:#333;font-weight:600;}
      </style>
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="blog-card tmp-hover-link tmp-scroll-trigger tmp-fade-in card">
          <div class="og-preview" data-url="${url}"></div>
        </div>
      </div>
    `;
  }
  connectedCallback() {
    const url = this.getAttribute('url');
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          this.shadowRoot.querySelector('.og-preview').innerHTML = `
            <a href="${url}" target="_blank" class="og-card">
              <img src="${data.data.image.url}" alt="${data.data.title}" style="width:100%;height:200px;object-fit:cover;">
              <div style="padding:15px;">
                <h3 style="margin:0 0 10px;font-size:1.2rem;">${data.data.title}</h3>
                <p style="margin:0;color:#666;font-size:0.95rem;">${data.data.description}</p>
              </div>
            </a>
          `;
        }
      });
  }
}
customElements.define('blog-preview', BlogPreview);