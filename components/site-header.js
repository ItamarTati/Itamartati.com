class SiteHeader extends HTMLElement {
  connectedCallback() {
    const profileImage = this.getAttribute('profile-image');
    const mobileLogo = this.getAttribute('mobile-logo');

    this.innerHTML = `
      <div class="d-none d-xl-block header-style-2">
        <header class="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
          <div class="inner-wrapper">
            <div class="logo-area">
              <a href="index.html">
                <img src="${profileImage}" alt="personal-logo">
              </a>
            </div>
            <nav id="sideNavs" class="mainmenu-nav navbar-example2 onepagenav">
              <ul class="primary-menu nav nav-pills">
                <li class="nav-item current"><a class="nav-link smoth-animation" href="#home"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#resume"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>Resume</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>Portfolio</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#testimonials"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Testimonials</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#videos"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>Videos</a></li>
                <li class="nav-item"><a class="nav-link smoth-animation" href="#blog"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>Blog</a></li>
              </ul>
            </nav>
            <div class="footer">
              <div class="social-share-style-1">
                <span class="title">Connect With Me On</span>
                <div class="social-link">
                  <a href="https://www.youtube.com/@ItamarTati" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                  <a href="https://www.linkedin.com/in/itamar-tati-51b781243/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a href="https://www.tiktok.com/@itamartati007" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div class="tmp-responsive-header-style d-block d-xl-none header--sticky">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="logo">
              <a href="index.html">
                <img src="${mobileLogo}" alt="Logo" class="logo-header">
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="header-right text-end">
              <div class="tmp-side-collups-area d-flex justify-content-end">
                <button class="tmp-menu-bars humberger_menu_active"><i class="fa-regular fa-bars-staggered"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tmp-popup-mobile-menu">
        <div class="inner">
          <div class="header-top">
            <div class="close-menu">
              <button class="close-button tmp-round-action-btn">
                <i class="fa-sharp fa-light fa-xmark"></i>
              </button>
            </div>
          </div>
          <ul class="tmp-mainmenu onepagenav-click">
            <li><a class="smoth-animation" href="#home">Home</a></li>
            <li><a class="smoth-animation" href="#resume">Resume</a></li>
            <li><a class="smoth-animation" href="#portfolio">Portfolio</a></li>
            <li><a class="smoth-animation" href="#testimonials">Testimonials</a></li>
            <li><a class="smoth-animation" href="#videos">Videos</a></li>
            <li><a class="smoth-animation" href="#blog">Blog</a></li>
          </ul>
          <div class="social-share-style-1 mt--40">
            <span class="title">Connect With Me On</span>
            <div class="social-link">
              <a href="https://www.youtube.com/@ItamarTati" target="_blank"><i class="fa-brands fa-youtube"></i></a>
              <a href="https://www.linkedin.com/in/itamar-tati-51b781243/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.tiktok.com/@itamartati007" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('site-header', SiteHeader);