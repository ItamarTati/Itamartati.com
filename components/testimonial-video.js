class TestimonialVideo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const src = this.getAttribute('src');
    shadow.innerHTML = `
      <style>
        iframe {width:100%;height:315px;border-radius:12px;}
      </style>
      <div class="testimonial-video">
        <iframe src="${src}" title="Testimonial" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
  }
}
customElements.define('testimonial-video', TestimonialVideo);