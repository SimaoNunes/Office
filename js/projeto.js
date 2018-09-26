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

    material = new THREE.MeshBasicMaterial({ color: 0x474747, wireframe: true });

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

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

}


function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));

    createTable(0, 0, 10);

}


function createCamera() {
    'use strict';
    camera = new THREE.OrthographicCamera(
        -50,
        50,
        40,
        -40,
        -1000,
        1000
    );
    
    camera.position.x = 35;
    camera.position.y = 20;
    camera.position.z = 60;    

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

    window.addEventListener("resize", onResize);

}

function animate() {
    'use strict';

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}