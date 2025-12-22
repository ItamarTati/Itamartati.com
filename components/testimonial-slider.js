// components/testimonial-slider.js
class TestimonialSlider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="swiper testimonial-slider">
        <div class="swiper-wrapper">
          <slot></slot>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    `;

    this.swiper = new Swiper(this.querySelector('.testimonial-slider'), {
      loop: true,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true }
    });
  }
}
customElements.define('testimonial-slider', TestimonialSlider);