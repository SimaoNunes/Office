/*Primeira entrega, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var camera1, camera2, camera3, camera4, camera5; // diferentes tipos de cameras

var geometry, material, mesh;

var table, chair, lamp; // diferentes objetos a desenhar

var direction, directionalAxis, angle, angleSum; // variaveis relativas a rotacao da cadeira

var turnLeft, turnRight = false;

var vcc, newVcc, vccMax, vccMin, acc, accelerating; // variaveis relativas ao movimento da cadeira

var delta; // variavel relativa a passagem do tempo

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
        -1000,
        1000
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
        -1000,
        1000
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
        -1000,
        1000
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
        -1000,
        1000
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
        -1000,
        1000
    );
    
    camera5.position.x = 30;
    camera5.position.y = 5;
    camera5.position.z = 30;
}


function onKeyDown(e) {
    'use strict';
    switch (e.keyCode) {
    case 65: //A
    case 97: //a
        scene.traverse(function (node) {
            if (node instanceof THREE.Mesh) {
                node.material.wireframe = !node.material.wireframe;
            }
        });
        break;
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
        break;
    case 37: // left
        turnLeft = true;
        break;
    case 39: // right
        turnRight = true;
        break;
    case 38:  //up
        acc = 1;
        accelerating = true;
        break;
    case 40: // down
        acc = -1;
        accelerating = true;
        break;
    }
}

function onKeyUp(e) {
    'use strict';
    switch (e.keyCode) {
    case 37: // left
        turnLeft = false;
        break;
    case 39: // right
        turnRight = false;
        break;
    case 38:  //up
        acc = -1;
        accelerating = false;
        break;
    case 40: // down
        acc = 1;
        accelerating = false;
        break;
    }
}


function render() {
    'use strict';
    renderer.render(scene, camera);
}

function init() {
    'use strict';
    vcc = 0;
    vccMax = 1;
    vccMin = -1;
    acc = 0;
    accelerating = false;

    clock = new THREE.Clock();
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    direction           = new THREE.Vector3(0,0,-1);
    directionalAxis     = new THREE.Vector3(0,1,0);

    angle               = Math.PI / 75;
    angleSum            = 0;

    
    createScene();

    render();

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);    
}

function animate() {
    'use strict';

    delta = clock.getDelta();

    newVcc = vcc + acc*(delta);

    if(accelerating == true && newVcc < vccMax && newVcc > vccMin){
        vcc = newVcc;
    }

    else if(accelerating == false){
        if(acc == 1 && newVcc < 0){
            vcc = newVcc;
        }
        if(acc == 1 && newVcc >= 0){
            vcc = 0
            acc = 0;
        }
        if(acc == -1 && newVcc > 0){
            vcc = newVcc;
        }
        if(acc == -1 && newVcc <= 0){
            vcc = 0;
            acc = 0;
        }
    }

    if(vcc!=0){
        chair.position.x += vcc * direction.getComponent(0);
        chair.position.z += vcc * direction.getComponent(2);
        chair.children[2].rotateY(angleSum);
        chair.children[3].rotateY(angleSum);
        chair.children[4].rotateY(angleSum);
        chair.children[5].rotateY(angleSum);
        angleSum = 0;
    }



    if(turnLeft == true){
        chair.children[0].rotateY(angle);
        angleSum += angle;
        direction.applyAxisAngle( directionalAxis, angle );
    }

    if(turnRight == true){
        chair.children[0].rotateY(-angle);
        angleSum -= angle;
        direction.applyAxisAngle( directionalAxis, -angle );
    }

    render();

    camera.lookAt( scene.position );

    requestAnimationFrame(animate);
}