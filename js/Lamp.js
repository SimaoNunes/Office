class Lamp extends THREE.Object3D{
    
    addLampBase(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(5, 5, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
    
    addLampTorso(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(1, 1, 70);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
    
    addLampHead(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(1, 15, 20);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }
   

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

        this.addLampBase(55, -36, 0);
        this.addLampTorso(55, 0.5, 0);
        this.addLampHead(55, 26, 0)

    }
}