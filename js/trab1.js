/*Trabalho 1, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer;

var geometry, material, mesh;

function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));
}

function createCamera() {
    'use strict';
    camera = new THREE.OrthographicCamera(100,
                                         100,
                                         100,
                                         100);
}

function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createScene();
    createCamera();

    render();
}

function animate() {
    'use strict';

    render();

    requestAnimationFrame(animate);
}