const template = document.createElement('template');
template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../../header/profile/profile.css">
                <title>Itamar Profile</title>
            </head>
            <body>
            <div id="itamar">
               <h1>ItamarTati</h1>
               <h3>Software Engineer</h3>
               <img src="../../header/profile/profile.jpg" alt="image of Itamar Tati"/>
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