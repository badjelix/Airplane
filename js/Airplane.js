class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage(x,y,z) {
        'use strict';
        var material = new THREE.MeshBasicMaterial({ color: 0x6286f4});
        var i;
        var c = 0;

        var bottom = new THREE.Geometry();
        for(i=-40; i<40; i+=2){
            bottom.vertices.push(   new THREE.Vector3(i,0,10),
                                    new THREE.Vector3(i,0,-10),
                                    new THREE.Vector3(i+2,0,-10));
            bottom.faces.push(new THREE.Face3(c,c+1,c+2));
            bottom.vertices.push(   new THREE.Vector3(i,0,10),
                                    new THREE.Vector3(i+2,0,-10),
                                    new THREE.Vector3(i+2,0,10));
            bottom.faces.push(new THREE.Face3(c+3,c+4,c+5));
            bottom.computeFaceNormals();
            c+=6;
        }
        mesh = new THREE.Mesh(bottom, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


        var back = new THREE.Geometry();
        c = 0;
        for(i=-10; i<10; i+=2){
            back.vertices.push( new THREE.Vector3(-40,0,i),
                                new THREE.Vector3(-40,20,i),
                                new THREE.Vector3(-40,0,i+2));
            back.faces.push(new THREE.Face3(c,c+1,c+2));
            back.vertices.push( new THREE.Vector3(-40,20,i+2),
                                new THREE.Vector3(-40,20,i),
                                new THREE.Vector3(-40,0,i+2));
            back.faces.push(new THREE.Face3(c+3,c+4,c+5));
            back.computeFaceNormals();
            c+=6;
        }
        mesh = new THREE.Mesh(back, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


        var top = new THREE.Geometry();
        top.vertices.push(  new THREE.Vector3(-40,20,10),
                            new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(40,0,10));
        top.faces.push(new THREE.Face3(0,1,2));
        top.vertices.push(  new THREE.Vector3(40,0,-10),
                            new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(40,0,10));
        top.faces.push(new THREE.Face3(3,4,5));
        top.computeFaceNormals();
        mesh = new THREE.Mesh(top, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
        

        var side = new THREE.Geometry();
        c = 0;
        for(i=-1;i<2;i+=2){
            side.vertices.push( new THREE.Vector3(-40,0,10*i),
                                new THREE.Vector3(-40,20,10*i),
                                new THREE.Vector3(40,0,10*i));
            side.faces.push(new THREE.Face3(c,c+1,c+2));
            side.computeFaceNormals();
            c+=3;
        }
        mesh = new THREE.Mesh(side, material);
        mesh.position.set(x, y, z);
        this.add(mesh);


    }


    addWing1(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(10,-5,10),
                                new THREE.Vector3(-10,-5,10),
                                new THREE.Vector3(-25,-5,60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeFaceNormals();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    addWing2(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(10,-5,-10),
                                new THREE.Vector3(-10,-5,-10),
                                new THREE.Vector3(-25,-5,-60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeFaceNormals();
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }

    addFrontLine(x,y,z){
        'use strict';
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(50,-10,-10),
                                new THREE.Vector3(50,-10,10),
                                new THREE.Vector3(50,-10,10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.computeFaceNormals();
        
        var material = new THREE.MeshBasicMaterial({ color: 0x4286f4, wireframe: true });
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

        this.add(new THREE.AxisHelper(10));

        this.addAirplaneFuselage(0, 0, 0);

        // this.addWing1(0,0,0);
        // this.addWing2(0,0,0);

        // this.addFrontLine(0,0,0);


    }
}