class BlogPreview extends HTMLElement {
  connectedCallback() {
    const url = this.getAttribute('url');
    const order = this.getAttribute('order') || '1';

    this.innerHTML = `
      <div class="blog-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${order}">
        <div class="og-preview" data-url="${url}">
          <p>Loading preview...</p>
        </div>
      </div>
    `;

    // Re-use your original microlink logic
    const preview = this.querySelector('.og-preview');
    fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          preview.innerHTML = `
            <a href="${url}" target="_blank" class="og-card">
              <img src="${data.data.image?.url || ''}" alt="${data.data.title}" class="w-100" style="height:200px; object-fit:cover; border-radius:12px 12px 0 0;">
              <div style="padding:20px;">
                <h3 class="portfolio-card-title">${data.data.title || 'Untitled'}</h3>
                <p class="portfoli-card-para">${data.data.description || ''}</p>
              </div>
            </a>
          `;
        } else {
          preview.innerHTML = `<a href="${url}" target="_blank">Read Article →</a>`;
        }
      })
      .catch(() => {
        preview.innerHTML = `<a href="${url}" target="_blank">Read Article →</a>`;
      });
  }
}
customElements.define('blog-preview', BlogPreview);