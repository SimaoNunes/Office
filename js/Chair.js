class Chair extends THREE.Object3D{
    
    addChairLeg( x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(3, 20, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addChairSeat( x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(30, 3, 30);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addChairBack( x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(30, 45, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addChairStandHor( x, y, z){
        'use strict';
        geometry = new THREE.CubeGeometry(10, 2, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addChairStandVer( x, y, z){
        'use strict';
        geometry = new THREE.CubeGeometry(3, 2, 10);
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

        material = new THREE.MeshBasicMaterial({ color: 0x45bc8d, wireframe: true });
        
        this.addChairSeat(0, -11.5, 0);
        this.addChairBack(0, 9.5, 16.5);  
        this.addChairLeg(0, -23, 0);
        this.addChairStandHor(6.5, -34, 0);
        this.addChairStandHor(-6.5, -34, 0);
        this.addChairStandVer(0, -34, -5);
        this.addChairStandVer(0, -34, 5);           
    }
}