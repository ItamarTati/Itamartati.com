import './profile/profile.js'
import './menu/menu.js'

const template = document.createElement('template');
template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../header/header.css">
                <title>Itamar Header</title>
            </head>
            <body>
            <header id="header">
                <nav class="navbar">
                    <a href="/">
                        <itamar-profile id="profile">
                        </itamar-profile>
                    </a>
                    <itamar-menu id="menu">
                    </itamar-menu>
                </nav>
            </header>
            </body>`;

class Header extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const checkOverlap = () => {
            const navbar = this.shadowRoot.querySelector('.navbar');
            const restPage = document.querySelector('#main');

            const navbarRect = navbar.getBoundingClientRect();
            const otherDivRect = restPage.getBoundingClientRect();

            if (navbarRect.bottom > otherDivRect.top) {
                navbar.classList.add('navbar-overlap');
            } else {
                navbar.classList.remove('navbar-overlap');
            }
        }

        window.addEventListener('scroll', checkOverlap);

        window.addEventListener('load', checkOverlap);
    }
}

customElements.define("itamar-header", Header);
