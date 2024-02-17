import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


const template = document.createElement('template');
template.innerHTML = `
<style>
    #container3D {
        margin-top: -500px;
    }
</style>
<div id="container3D"></div>
`;


class Computer extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const scene = new THREE.Scene();
        const camera = new THREE
            .PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let object;
        let controls;
        const loader = new GLTFLoader();
        loader.load(
            '/public/cyberpunkLaptop/scene.gltf',
            function (gltf) {
                object = gltf.scene;
                scene.add(object);
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.error(error);
            }
        );

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize((window.innerWidth - 20), (window.innerHeight - 20) * (4 / 3));

        this.shadowRoot.getElementById("container3D").appendChild(renderer.domElement);
        this.shadowRoot.getElementById("container3D").style.cursor = 'grabbing'
        this.shadowRoot.getElementById("container3D").style.width = '100%'


        camera.position.set( 0, 1, 3)


        const topLight = new THREE.DirectionalLight(0xffffff, 1);
        topLight.position.set(500, 500, 500);
        scene.add(topLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
        scene.add(hemisphereLight);

        const pointLight1 = new THREE.PointLight(0xffffff, 2);
        pointLight1.position.set(0, 10, 0);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xffffff, 2);
        pointLight2.position.set(10, 0, 0);
        scene.add(pointLight2);

        const pointLight3 = new THREE.PointLight(0xffffff, 2);
        pointLight3.position.set(0, 0, 10);
        scene.add(pointLight3);


        controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 3;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.minPolarAngle = 1;
        controls.maxPolarAngle = 1;

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        window.addEventListener("resize", function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize((window.innerWidth - 20), (window.innerHeight - 20) * (4 / 3));
        });



        this.shadowRoot.onmousemove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }

        animate();
    }
}

customElements.define('itamar-computer', Computer)