/*Primeira entrega, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer;

var geometry, material, mesh;

var table, chair, lamp;

function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2.5, 2.5, 25);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addTableTop(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(80, 4, 40);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createTable(x, y, z) {
    'use strict';

    table = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0x7c5100, wireframe: true });

    addTableTop(table, 0, 0, 0);
    addTableLeg(table, 37.5, -14, 17.5);
    addTableLeg(table, 37.5, -14, -17.5);
    addTableLeg(table, -37.5, -14, 17.5);
    addTableLeg(table, -37.5, -14, -17.5);

    scene.add(table);

    table.position.x = x;
    table.position.y = y;
    table.position.z = z;
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));

    createTable(0, 0, 0);

}

function createCamera() {
    'use strict';
    camera = new THREE.OrthographicCamera(
        -40,
        40,
        40,
        -40,
        -20,
        20
    );
    scene.add( camera );
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