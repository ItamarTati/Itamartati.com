import '../header/profile/profile.js'

const template = document.createElement('template');
template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../header/header.css">
                <title>Itamar Header</title>
            </head>
            <body>
            <header class="top-navigation">
                <itamar-profile>
                </itamar-profile>
                <nav>
                    <ul>  
                        <li>  
                            <a href="#"> Home </a>  
                        </li>  
                        <li>  
                            <a href="#"> About </a>  
                        </li>  
                        <li>  
                            <a href="#"> Contact </a>  
                        </li>  
                        <li> 
                            <a href="#"> Terms of use </a>  
                        </li>  
                        <li>  
                            <a href="#"> Join Us </a>  
                        </li>  
                    </ul>  
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
