/*Primeira entrega, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer;

var camera1, camera2, camera3, camera4, camera5;

var geometry, material, mesh;

var table, chair, lamp;

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

    scene.add(new THREE.AxisHelper(20));

    chair = new Chair(0, 25.5, 42);
    table = new Table(0, 37, 0);
    lamp  = new Lamp(53, 1.5, -8);
    
    createCamera1();
    createCamera2();
    createCamera3();
    createCamera4();
    createCamera5();

    camera = camera2;

    scene.add(camera);
    scene.add(chair);
    scene.add(table);
    scene.add(lamp);
}

function createCamera1() {
    'use strict';
    camera1 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) - 10,
        (window.innerHeight / - 10) - 10,
        -200,
        200
    );
    
    camera1.position.x = 0;
    camera1.position.y = 30;
    camera1.position.z = 0;
}

function createCamera2() {
    'use strict';
    camera2 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -200,
        200
    );
    
    camera2.position.x = 0;
    camera2.position.y = 0;
    camera2.position.z = 30;
}

function createCamera3() {
    'use strict';
    camera3 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -200,
        200
    );
    
    camera3.position.x = 30;
    camera3.position.y = 0;
    camera3.position.z = 0;
}

function createCamera4() {
    'use strict';
    camera4 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -200,
        200
    );
    
    camera4.position.x = 30;
    camera4.position.y = 0;
    camera4.position.z = 30; 
}

function createCamera5() {
    'use strict';
    camera5 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -200,
        200
    );
    
    camera5.position.x = 30;
    camera5.position.y = 5;
    camera5.position.z = 30;
}


function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 49: //1
        camera = camera1; 
        break;
    case 50: //2
        camera = camera2; 
        break;
    case 51: //3
        camera = camera3;
        break;    
    case 52: //4
        camera = camera4; 
        break; 
    case 53: // 5
        camera = camera5;
    case 37: // left  
        chair.rotateY(Math.PI/100);
        break;
    case 39: // right
        chair.rotateY((-1)*Math.PI/100);
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