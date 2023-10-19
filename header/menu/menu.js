const template = document.createElement('template');

template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../../header/menu/menu.css">
                <title>Itamar Menu</title>
            </head>
            <body>
                    <ul class="nav-links">
                        <li><a href="../../pages/about.html">About</a></li>
                        <li><a href="../../pages/articles.html">Articles</a></li>
                        <li><a href="../../pages/experience.html">Experience</a></li>
                        <li><a href="../../pages/projects.html">Projects</a></li>
                        <li><a href="../../pages/videos.html">Videos</a></li>
                        <li><a href="../../pages/courses.html">Courses</a></li>
                    </ul>
                    <div class="menu-toggle">
                        <img src="../../public/assets/menu.svg" alt="menu" class="menu-icon">
                        <div class="menu-dropdown">
                            <ul class="menu">
                                <li><a href="../../pages/about.html">About</a></li>
                                <li><a href="../../pages/articles.html">Articles</a></li>
                                <li><a href="../../pages/experience.html">Experience</a></li>
                                <li><a href="../../pages/projects.html">Projects</a></li>
                                <li><a href="../../pages/videos.html">Videos</a></li>
                                <li><a href="../../pages/courses.html">Courses</a></li>
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

        let index = 0

        let urlLink = window.location.href

        for(let i = urlLink.length; i > 0; i--) {
            let character = urlLink[i];
            if(character === '/') {
                index = i;
                break;
            }
        }

        let pageName = urlLink.slice(index + 1, -5);


        const checkForMatchAndChangeColor = (pageName) => {
            const links = this.shadowRoot.querySelectorAll('.nav-links li a, .menu-toggle ul.menu li a');
            for (const link of links) {
                if (link.textContent.toLowerCase() === pageName.toLowerCase()) {
                    link.style.color = 'white';
                }
            }
            return "No match found";
        }

        checkForMatchAndChangeColor(pageName);

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
                this.menuIcon.src = "../../public/assets/menu.svg"
            }
        });

        this.menuDropdown.addEventListener('click', (event) => {
            event.stopPropagation();
        });

    }
}

customElements.define('itamar-menu', Menu);






