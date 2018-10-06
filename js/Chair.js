class Chair extends THREE.Object3D{

    addChairTop(x, y, z) {
        'use strict';
        this.add(new ChairTop(0,0,0));
    }

    addChairBottom(x, y, z) {
        'use strict';
        this.add(new ChairBottom(0,0,0));
    }

    addChairWheel(x,y,z){
        'use strict';
        geometry = new THREE.TorusGeometry(1.5, 0.3, 8, 8)
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-23.5, z);
        mesh.rotation.y = Math.PI / 2;
        this.add(mesh);
    }

    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0x45bc8d, wireframe: true });
        
        this.addChairTop(0,0,0);
        this.addChairBottom(0,0,0);
        this.addChairWheel(10,0,0);
        this.addChairWheel(-10,0,0);
        this.addChairWheel(0,0,10);
        this.addChairWheel(0,0,-10);
    }
}

class ChairTop extends THREE.Object3D{
    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;

        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0x45bc8d, wireframe: true });
        
        this.addChairSeat(0,0,0);
        this.addChairBack(0,0,0);
    }

    addChairSeat(x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(30, 3, 30);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }

    addChairBack(x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(30, 45, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y+21, z+16.5);
        this.add(mesh);
    }
}

class ChairBottom extends THREE.Object3D{
    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        material = new THREE.MeshBasicMaterial({ color: 0x45bc8d, wireframe: true });
        
        this.addChairLeg(0,0,0);
        this.addChairStandHor(6.5, 0, 0);
        this.addChairStandHor(-6.5, 0, 0);
        this.addChairStandVer(0, 0, 6.5);
        this.addChairStandVer(0, 0, -6.5);
    }

    addChairLeg(x, y, z) {
        'use strict';
        geometry = new THREE.CubeGeometry(3, 20, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-11.5, z);
        this.add(mesh);
    }

    addChairStandHor(x, y, z){
        'use strict';
        geometry = new THREE.CubeGeometry(10, 2, 3);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-20.5, z);
        this.add(mesh);
    }

    addChairStandVer(x, y, z){
        'use strict';
        geometry = new THREE.CubeGeometry(3, 2, 10);
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y-20.5, z);
        this.add(mesh);
    }    
}