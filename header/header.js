import './profile/profile.js'

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
                    <ul class="menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Articles</a></li>
                        <li><a href="#work">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#work">Videos</a></li>
                        <li><a href="#work">Volunteering</a></li>
                    </ul>
<!--                    <div class="menu-toggle">-->
<!--                        <img src="../public/assets/menu.svg" alt="menu" class="menu-icon">-->
<!--                        <div class="menu-dropdown">-->
<!--                            <ul>-->
<!--                                <li><a href="#about">About</a></li>-->
<!--                                <li><a href="#work">Work</a></li>-->
<!--                                <li><a href="#projects">Projects</a></li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
                </nav>
            </header>
            </body>`;

class Header extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("itamar-header", Header);
