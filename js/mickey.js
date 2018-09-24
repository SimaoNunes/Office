/*global THREE, requestAnimationFrame, console*/

var camera, scene, renderer;

var geometry, material, mesh;

var mickey;

function addEar(obj, x, y, z) {
    'use strict';

    geometry = new THREE.SphereGeometry(9, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y + 18, z);
    obj.add(mesh);
}

function addHead(obj, x, y, z) {
    'use strict';

    geometry = new THREE.SphereGeometry(20, 10, 10);
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    obj.add(mesh);
}

function createMickey(x, y, z) {
    'use strict';

    mickey = new THREE.Object3D();

    material = new THREE.MeshBasicMaterial({ color: 0xEA0DDA, wireframe: true });

    addHead(mickey, 0, 0, 0);
    addEar(mickey, 15, 0, 0);
    addEar(mickey, -15, 0, 0);

    scene.add(mickey);

    mickey.position.x = x;
    mickey.position.y = y;
    mickey.position.z = z;
}

function createScene() {
    'use strict';

    scene = new THREE.Scene();

    scene.add(new THREE.AxisHelper(10));

    createMickey(0, 0, 0);
}

function createCamera() {
    'use strict';
    camera = new THREE.PerspectiveCamera(70,
                                         window.innerWidth / window.innerHeight,
                                         1,
                                         1000);
    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;
    camera.lookAt(scene.position);
}

function onResize() {
    'use strict';

    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerHeight > 0 && window.innerWidth > 0) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }

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
    case 69:  //E
    case 101: //e
        scene.traverse(function (node) {
            if (node instanceof THREE.AxisHelper) {
                node.visible = !node.visible;
            }
        });
        break;
      case 37: //left arrow
      mickey.rotateY(0.1);
      break;
      case 39: //right arrow
      mickey.rotateY(-0.1);
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

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
}

function animate() {
    'use strict';

    render();

    requestAnimationFrame(animate);
}
