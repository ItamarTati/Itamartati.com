import './computer/computer.js'
const template = document.createElement('template');
template.innerHTML =`
            <head>
                <link rel="stylesheet" href="../hero/hero.css">
                <title>Itamar Header</title>
            </head>
        <body>
            <section id="hero">
                <div id="hero-introduction">
                    <div id="hero-cover">
                        <div class="ball"></div>
                        <div class="line"></div>
                    </div>
                    <div class="bio" id="main">
                        <h1>
                            Hello, I'm <span>Itamar</span></h1>
                            <p>a customer-oriented software engineer
                            <br>with a focus on developing performant software</p>
                    </div>
                </div>
                <itamar-computer></itamar-computer>
            </section>
        </body>`

class Hero extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('itamar-hero', Hero)