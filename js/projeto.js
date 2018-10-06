/*Primeira entrega, Cena Simples Interativa com Câmara Fixa*/

var camera, scene, renderer;

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

    scene.add(new THREE.AxisHelper(10));

    chair = new Chair(0,0,50);
    table = new Table(0,0,10);
    lamp  = new Lamp(0,0,0);
    
    scene.add(chair);
    scene.add(table);
    scene.add(lamp);
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
    case 53: // 5
        camera.position.x = 30;
        camera.position.y = 5;
        camera.position.z = 30;
    case 37: // left  
        chair.rotateY((-1)*3.14/100);
        break;
    case 39: // right
        chair.rotateY(3.14/100);
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