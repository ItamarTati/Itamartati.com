const template = document.createElement('template');
template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../../header/profile/profile.css">
                <title>Itamar Profile</title>
            </head>
            <body>
            <div id="itamar">
               <img src="../../public/assets/profile.jpg" alt="image of Itamar Tati"/>
               <h2>Itamar Tati | Software Engineer</h2>
            </div>
            </body>`;
class Profile extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("itamar-profile", Profile);