class Table extends THREE.Object3D{
    
    addTableLeg(x, y, z) {
        'use strict';
        geometry = new THREE.CylinderGeometry(2.5, 2.5, 35, 10);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-19.5, z);
        this.add(mesh);
    }
    
    addTableTop(x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(80, 4, 40);
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

        material = new THREE.MeshBasicMaterial({ color: 0x4c3000, wireframe: true });

        this.addTableTop(0, 0, 0);
        this.addTableLeg(37.5, 0, 17.5);
        this.addTableLeg(37.5, 0, -17.5);
        this.addTableLeg(-37.5, 0, 17.5);
        this.addTableLeg(-37.5, 0, -17.5);
    }
}