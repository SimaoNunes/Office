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
    geometry = new THREE.CylinderGeometry(1, 1, 25);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addLampArm(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(1, 1, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.x=1;
    mesh.rotation.z=1;
    obj.add(mesh);
}

function addLampHead(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(6, 1, 5);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.rotation.x=1;
    mesh.rotation.y=1;
    mesh.rotation.z=1;
    obj.add(mesh);
}

function createLamp(x, y, z) {
    'use strict';

    lamp = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    addLampBase(lamp, 30, 4, 0);
    addLampTorso(lamp, 30, 18, 0);
    addLampArm(lamp, 21.5, 33, 5);
    addLampHead(lamp, 11, 35, 10.5);


    scene.add(lamp);

    lamp.position.x = x;
    lamp.position.y = y;
    lamp.position.z = z;
}

function addChairLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(1.5, 1.5, 30);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairSeat(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(20, 3, 20);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function addChairBack(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CubeGeometry(20, 50, 3);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createChair(x, y, z) {
    'use strict';

    chair = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xeddd36, wireframe: true });

    addChairSeat(chair, 0, -20, 0);
    addChairBack(chair, 0, 4, 11.5)   
    addChairLeg(chair, 0, -37, 0);

    scene.add(chair);

    chair.position.x = x;
    chair.position.y = y;
    chair.position.z = z;
}

function addTableLeg(obj, x, y, z) {
    'use strict';
    geometry = new THREE.CylinderGeometry(2.5, 2.5, 50);
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
    addTableLeg(table, 37.5, -27, 17.5);
    addTableLeg(table, 37.5, -27, -17.5);
    addTableLeg(table, -37.5, -27, 17.5);
    addTableLeg(table, -37.5, -27, -17.5);

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
        -80,
        80,
        80,
        -80,
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