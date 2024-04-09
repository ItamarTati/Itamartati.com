const template = document.createElement('template');
template.innerHTML = `
            <head>
                <link rel="stylesheet" href="../../header/profile/profile.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
                <title>Itamar Profile</title>
            </head>
            <body>
                <div id="itamar">
                   <img src="../../public/assets/profile2.jpg" alt="image of Itamar Tati"/>
                   <h2>Itamar Tati<span> | Software Engineer</span></h2>
                </div>
                <div id="contacts">
                    <a href="tel:+44756-848-8047">
                        <p><i class="fa fa-phone"></i>  +44 756 848 8047</p>                   
                    </a>
                    <a href="mailto:itamar.softwaredeveloper@gmail.com" target="_blank">
                        <p><i class="fa fa-envelope"></i> itamar.softwaredeveloper@gmail.com</p>
                    </a>                   
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