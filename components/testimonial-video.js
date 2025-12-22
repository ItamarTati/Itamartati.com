class TestimonialVideo extends HTMLElement {
  connectedCallback() {
    const src = this.getAttribute('src') || '';

    this.innerHTML = `
      <div class="testimonial-video">
        <iframe width="100%" height="315" src="${src}"
          title="Testimonial" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  }
}
customElements.define('testimonial-video', TestimonialVideo);