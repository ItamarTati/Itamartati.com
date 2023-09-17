const template = document.createElement('template');

template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../../header/menu/menu.css">
                <title>Itamar Menu</title>
            </head>
            <body>
                    <ul class="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Articles</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#work">Videos</a></li>
                        <li><a href="#work">Volunteering</a></li>
                    </ul>
                    <div class="menu-toggle">
                        <img src="../../public/assets/menu.svg" alt="menu" class="menu-icon">
                        <div class="menu-dropdown">
                            <ul class="menu">
                                <li><a href="#about">About</a></li>
                                <li><a href="#work">Articles</a></li>
                                <li><a href="#work">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#work">Videos</a></li>
                                <li><a href="#work">Volunteering</a></li>
                            </ul>
                        </div>
                    </div>
            </body>`;

class Menu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        this.menuDropdown = this.shadowRoot.querySelector('.menu-dropdown');
        this.menuIcon = this.shadowRoot.querySelector('.menu-icon');

        this.menuVisible = false;

        this.menuToggle.addEventListener('click', () => {
            this.menuVisible = !this.menuVisible;

            if (this.menuVisible) {
                this.menuDropdown.style.display = 'block';
                this.menuIcon.src = "../../public/assets/close.svg"
            } else {
                this.menuDropdown.style.display = 'none';
                this.menuIcon.src = "../../public/assets/menu.svg"
            }
        });

        const updateMenuVisibility = () => {
            const mediaQuery = window.matchMedia('(min-width: 1050px)');

            if (mediaQuery.matches) {
                this.menuVisible = false;
                this.menuDropdown.style.display = 'none';
                this.menuIcon.src = "../../public/assets/menu.svg"
            }
        };

        updateMenuVisibility();

        window.addEventListener('resize', updateMenuVisibility);

        window.addEventListener('click', (event) => {
            const target = event.target;
            const itamarHeader = document.querySelector('itamar-header');
            if (
                target !== this.menuToggle &&
                target !== this.menuDropdown &&
                !this.menuDropdown.contains(target) &&
                !itamarHeader.contains(target)
            ) {
                this.menuVisible = false;
                this.menuDropdown.style.display = 'none';
            }
        });

        this.menuDropdown.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }
}

customElements.define('itamar-menu', Menu);






