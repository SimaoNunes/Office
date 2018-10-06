class Lamp extends THREE.Object3D{
    
    addLampBase(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(5, 5, 3, 20);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
    
    addLampTorso(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(1, 1, 70);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+36.5, z);
        this.add(mesh);
    }
    
    addLampHead(x, y, z) {
        'use strict';
        geometry = new THREE.ConeGeometry(15, 20, 20);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+63, z);
        this.add(mesh);
    }
   
    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

        this.addLampBase(0, 0, 0);
        this.addLampTorso(0, 0, 0);
        this.addLampHead(0, 0, 0)
    }
}