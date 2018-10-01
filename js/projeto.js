/*Primeira entrega, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer;

var geometry, material, mesh;

var table, chair, lamp;

function addLampBase(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(5, 5, 3);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampTorso(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(1, 1, 70);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampHead(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(1, 15, 15);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createLamp(x, y, z) {
    'use strict';

    lamp = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    addLampBase(lamp, 55, -36, 0);
    addLampTorso(lamp, 55, 0.5, 0);
    addLampHead(lamp, 55, 28, 0)

    scene.add(lamp);

    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}

function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(3, 20, 3);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(30, 3, 30);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(30, 45, 3);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairStandHor(obj, x, y, z){
    'use strict';
    geometry = new THREE.CubeGeometry(10, 2, 3);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairStandVer(obj, x, y, z){
    'use strict';
    geometry = new THREE.CubeGeometry(3, 2, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';

    chair = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0x45bc8d, wireframe: true });

    addChairSeat(chair, 0, -11.5, 0);
    addChairBack(chair, 0, 9.5, 16.5);  
    addChairLeg(chair, 0, -23, 0);
    addChairStandHor(chair, 6.5, -34, 0);
    addChairStandHor(chair, -6.5, -34, 0);
    addChairStandVer(chair, 0, -34, -5);
    addChairStandVer(chair, 0, -34, 5);

    scene.add(chair);

    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2.5, 2.5, 35);
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

    material = new THREE.MeshBasicMaterial({ color: 0x4c3000, wireframe: true });

    addTableTop(table, 0, -0.5, 0);
    addTableLeg(table, 37.5, -20, 17.5);
    addTableLeg(table, 37.5, -20, -17.5);
    addTableLeg(table, -37.5, -20, 17.5);
    addTableLeg(table, -37.5, -20, -17.5);

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
    createChair(0, 0, 50);
    createLamp(0, 0, 0);

}


function createCamera() {
    'use strict';
    camera = new THREE.OrthographicCamera(
        window.innerWidth / - 10, window.innerWidth/ 10, window.innerHeight / 10, window.innerHeight / - 10,
        -200,
        200
    );
    
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 30;    

    scene.add( camera );
}


function onKeyDown(e) {
    'use strict';
    
    switch (e.keyCode) {
    case 49: //1
        camera.position.x = 0;
        camera.position.y = 30;
        camera.position.z = 0;  
        break;
    case 50: //2
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.z = 30;  
        break;
    case 51: //3
        camera.position.x = 30;
        camera.position.y = 0;
        camera.position.z = 30;  
        break;    
    case 52: //4
        camera.position.x = 30;
        camera.position.y = 0;
        camera.position.z = 0;  
        break; 
    case 53: // up
        camera.position.x = 30;
        camera.position.y = 5;
        camera.position.z = 30;  
    }
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
    window.addEventListener("keydown", onKeyDown);
    


}

function animate() {
    'use strict';

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}