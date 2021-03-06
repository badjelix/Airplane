class Airplane extends THREE.Object3D{
    
    addAirplaneFuselage(x,y,z) {
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push(   new THREE.Vector3(-40,0,10),        //Parte de baixo da fuselagem
                                new THREE.Vector3(-40,0,-10),
                                new THREE.Vector3(40,0,-10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.vertices.push(   new THREE.Vector3(-40,0,10),
                                new THREE.Vector3(40,0,-10),
                                new THREE.Vector3(40,0,10));
        geometry.faces.push(new THREE.Face3(3,4,5));
        geometry.vertices.push(  new THREE.Vector3(40,0,10),     //Parte de cima da fuselagem
                            new THREE.Vector3(40,0,-10),
                            new THREE.Vector3(-40,20,-10));
        geometry.faces.push(new THREE.Face3(6,7,8)); 
        geometry.vertices.push(  new THREE.Vector3(-40,20,-10),
                            new THREE.Vector3(-40,20,10),
                            new THREE.Vector3(40,0,10));
        geometry.faces.push(new THREE.Face3(9,10,11));
        geometry.vertices.push( new THREE.Vector3(-40,0,10),    //Lado direito da fuselagem
                            new THREE.Vector3(-40,20,10),
                            new THREE.Vector3(40,0,10));
        geometry.faces.push(new THREE.Face3(13,12,14));            //Lado esquerdo da fuselagem
        geometry.vertices.push( new THREE.Vector3(-40,0,-10),
                                new THREE.Vector3(-40,20,-10),
                                new THREE.Vector3(40,0,-10));
        geometry.faces.push(new THREE.Face3(15,16,17));
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }


    addWingRight(x,y,z){
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(15,4,10),          //Asa de cima
                                new THREE.Vector3(-5,4,10),
                                new THREE.Vector3(-20,4,60));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.vertices.push( new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-5,4,10),
                                new THREE.Vector3(-20,4,60));
        geometry.faces.push(new THREE.Face3(4,3,5));
        geometry.vertices.push( new THREE.Vector3(15,2,10),         //Asa de baixo
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(7,6,8));
        geometry.vertices.push( new THREE.Vector3(-25,2,60),
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(9,10,11));
        geometry.vertices.push( new THREE.Vector3(-20,4,60),        //Ponta da asa
                                new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(12,13,14));
        geometry.vertices.push( new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-25,2,60),
                                new THREE.Vector3(-20,2,60));
        geometry.faces.push(new THREE.Face3(15,16,17));
        geometry.vertices.push( new THREE.Vector3(15,4,10),        //Lados
                                new THREE.Vector3(-20,4,60),
                                new THREE.Vector3(15,2,10));
        geometry.faces.push(new THREE.Face3(18,19,20));
        geometry.vertices.push( new THREE.Vector3(-20,4,60),
                                new THREE.Vector3(-20,2,60),
                                new THREE.Vector3(15,2,10));
        geometry.faces.push(new THREE.Face3(21,22,23));
        geometry.vertices.push( new THREE.Vector3(-5,4,10),
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-25,4,60));
        geometry.faces.push(new THREE.Face3(24,25,26));
        geometry.vertices.push( new THREE.Vector3(-25,4,60),
                                new THREE.Vector3(-5,2,10),
                                new THREE.Vector3(-25,2,60));
        geometry.faces.push(new THREE.Face3(27,28,29));

        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addWingLeft(x,y,z){
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(15,4,-10),            //Asa de cima
                                new THREE.Vector3(-5,4,-10),
                                new THREE.Vector3(-20,4,-60));
        geometry.faces.push(new THREE.Face3(0,2,1));
        geometry.vertices.push( new THREE.Vector3(-5,4,-10),
                                new THREE.Vector3(-20,4,-60),
                                new THREE.Vector3(-25,4,-60));
        geometry.faces.push(new THREE.Face3(3,4,5));
        geometry.vertices.push( new THREE.Vector3(15,2,-10),            //Asa de baixo
                                new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(8,6,7));
        geometry.vertices.push( new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-20,2,-60),
                                new THREE.Vector3(-25,2,-60));
        geometry.faces.push(new THREE.Face3(10,9,11));
        geometry.vertices.push( new THREE.Vector3(-20,4,-60),           //Ponta da asa
                                new THREE.Vector3(-25,4,-60),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(13,12,14));
        geometry.vertices.push( new THREE.Vector3(-25,4,-60),
                                new THREE.Vector3(-25,2,-60),
                                new THREE.Vector3(-20,2,-60));
        geometry.faces.push(new THREE.Face3(16,15,17));
        geometry.vertices.push( new THREE.Vector3(15,4,-10),            //Lados
                                new THREE.Vector3(-20,4,-60),
                                new THREE.Vector3(15,2,-10));
        geometry.faces.push(new THREE.Face3(19,18,20));
        geometry.vertices.push( new THREE.Vector3(-20,4,-60),
                                new THREE.Vector3(-20,2,-60),
                                new THREE.Vector3(15,2,-10));
        geometry.faces.push(new THREE.Face3(22,21,23));
        geometry.vertices.push( new THREE.Vector3(-5,4,-10),
                                new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-25,4,-60));
        geometry.faces.push(new THREE.Face3(25,24,26));
        geometry.vertices.push( new THREE.Vector3(-25,4,-60),
                                new THREE.Vector3(-5,2,-10),
                                new THREE.Vector3(-25,2,-60));
        geometry.faces.push(new THREE.Face3(28,27,29));
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addVerticalStabilizer(x,y,z){
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-40,20,10),            //Paralelipipedo traseiro
                                new THREE.Vector3(-50,4,3),
                                new THREE.Vector3(-40,0,10));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.vertices.push( new THREE.Vector3(-50,4,3),
                                new THREE.Vector3(-40,20,10),
                                new THREE.Vector3(-50,20,3));
        geometry.faces.push(new THREE.Face3(3,4,5));
        geometry.vertices.push( new THREE.Vector3(-40,20,-10),
                                new THREE.Vector3(-50,4,-3),
                                new THREE.Vector3(-40,0,-10));
        geometry.faces.push(new THREE.Face3(7,6,8));
        geometry.vertices.push( new THREE.Vector3(-50,4,-3),
                                new THREE.Vector3(-40,20,-10),
                                new THREE.Vector3(-50,20,-3));
        geometry.faces.push(new THREE.Face3(10,9,11));
        geometry.vertices.push( new THREE.Vector3(-50,20,3),
                                new THREE.Vector3(-50,4,-3),
                                new THREE.Vector3(-50,4,3));
        geometry.faces.push(new THREE.Face3(12,13,14));
        geometry.vertices.push( new THREE.Vector3(-50,20,3),
                                new THREE.Vector3(-50,20,-3),
                                new THREE.Vector3(-50,4,-3));
        geometry.faces.push(new THREE.Face3(15,16,17));
        geometry.vertices.push( new THREE.Vector3(-50,4,-3),
                                new THREE.Vector3(-40,0,-10),
                                new THREE.Vector3(-40,0,10));
        geometry.faces.push(new THREE.Face3(18,19,20));
        geometry.vertices.push( new THREE.Vector3(-50,4,3),
                                new THREE.Vector3(-50,4,-3),
                                new THREE.Vector3(-40,0,10));
        geometry.faces.push(new THREE.Face3(21,22,23));
        geometry.vertices.push( new THREE.Vector3(-50,35,3),            //Parte 1 do estabilizador
                                new THREE.Vector3(-50,20,3),
                                new THREE.Vector3(-40,20,10));
        geometry.faces.push(new THREE.Face3(24,25,26));
        geometry.vertices.push( new THREE.Vector3(-50,35,3),
                                new THREE.Vector3(-53,35,3),
                                new THREE.Vector3(-50,20,3));
        geometry.faces.push(new THREE.Face3(27,28,29));
        geometry.vertices.push( new THREE.Vector3(-50,35,-3),            //Parte 2 do estabilizador
                                new THREE.Vector3(-50,20,-3),
                                new THREE.Vector3(-40,20,-10));
        geometry.faces.push(new THREE.Face3(31,30,32));
        geometry.vertices.push( new THREE.Vector3(-50,35,-3),
                                new THREE.Vector3(-53,35,-3),
                                new THREE.Vector3(-50,20,-3));
        geometry.faces.push(new THREE.Face3(34,33,35));
        geometry.vertices.push( new THREE.Vector3(-50,35,-3),           //Ponta do estabilizador
                                new THREE.Vector3(-53,35,-3),
                                new THREE.Vector3(-50,35,3));
        geometry.faces.push(new THREE.Face3(36,37,38));
        geometry.vertices.push( new THREE.Vector3(-53,35,-3),
                                new THREE.Vector3(-53,35,3),
                                new THREE.Vector3(-50,35,3));
        geometry.faces.push(new THREE.Face3(39,40,41));
        geometry.vertices.push( new THREE.Vector3(-40,20,-10),           //Lados
                                new THREE.Vector3(-50,35,-3),
                                new THREE.Vector3(-50,35,3));
        geometry.faces.push(new THREE.Face3(42,43,44));
        geometry.vertices.push( new THREE.Vector3(-50,35,3),
                                new THREE.Vector3(-40,20,10),
                                new THREE.Vector3(-40,20,-10));
        geometry.faces.push(new THREE.Face3(45,46,47));
        geometry.vertices.push( new THREE.Vector3(-50,20,3),
                                new THREE.Vector3(-53,35,3),
                                new THREE.Vector3(-53,35,-3));
        geometry.faces.push(new THREE.Face3(48,49,50));
        geometry.vertices.push( new THREE.Vector3(-53,35,-3),
                                new THREE.Vector3(-50,20,-3),
                                new THREE.Vector3(-50,20,3));
        geometry.faces.push(new THREE.Face3(51,52,53));
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add( mesh );
    }


    addRightStabilizer(x,y,z){
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-40,12,10),          //Asa de cima
                                new THREE.Vector3(-50,12,3),
                                new THREE.Vector3(-50,12,20));
        geometry.faces.push(new THREE.Face3(0,1,2));
        geometry.vertices.push( new THREE.Vector3(-50,12,3),
                                new THREE.Vector3(-53,12,20),
                                new THREE.Vector3(-50,12,20));
        geometry.faces.push(new THREE.Face3(3,4,5));
        geometry.vertices.push( new THREE.Vector3(-40,8,10),             //Asa de baixo
                                new THREE.Vector3(-50,8,3),
                                new THREE.Vector3(-50,8,20));
        geometry.faces.push(new THREE.Face3(7,6,8));
        geometry.vertices.push( new THREE.Vector3(-50,8,3),
                                new THREE.Vector3(-53,8,20),
                                new THREE.Vector3(-50,8,20));
        geometry.faces.push(new THREE.Face3(10,9,11));
        geometry.vertices.push( new THREE.Vector3(-50,12,20),            //Ponta da asa
                                new THREE.Vector3(-53,12,20),
                                new THREE.Vector3(-50,8,20));
        geometry.faces.push(new THREE.Face3(12,13,14));
        geometry.vertices.push( new THREE.Vector3(-53,12,20),
                                new THREE.Vector3(-53,8,20),
                                new THREE.Vector3(-50,8,20));
        geometry.faces.push(new THREE.Face3(15,16,17));
        geometry.vertices.push( new THREE.Vector3(-40,12,10),             //Lados
                                new THREE.Vector3(-50,8,20),
                                new THREE.Vector3(-40,8,10));
        geometry.faces.push(new THREE.Face3(18,19,20));
        geometry.vertices.push( new THREE.Vector3(-40,12,10),
                                new THREE.Vector3(-50,12,20),
                                new THREE.Vector3(-50,8,20));
        geometry.faces.push(new THREE.Face3(21,22,23));
        geometry.vertices.push( new THREE.Vector3(-53,12,20),
                                new THREE.Vector3(-50,12,3),
                                new THREE.Vector3(-50,8,3));
        geometry.faces.push(new THREE.Face3(24,25,26));
        geometry.vertices.push( new THREE.Vector3(-53,12,20),
                                new THREE.Vector3(-50,8,3),
                                new THREE.Vector3(-53,8,20));
        geometry.faces.push(new THREE.Face3(27,28,29));
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }


    addLeftStabilizer(x,y,z){
        'use strict';
        var material = currentMaterial;
        var geometry = new THREE.Geometry();
        geometry.vertices.push( new THREE.Vector3(-40,12,-10),          //Asa de cima
                                new THREE.Vector3(-50,12,-3),
                                new THREE.Vector3(-50,12,-20));
        geometry.faces.push(new THREE.Face3(1,0,2));
        geometry.vertices.push( new THREE.Vector3(-50,12,-3),
                                new THREE.Vector3(-53,12,-20),
                                new THREE.Vector3(-50,12,-20));
        geometry.faces.push(new THREE.Face3(4,3,5));
        geometry.vertices.push( new THREE.Vector3(-40,8,-10),             //Asa de baixo
                                new THREE.Vector3(-50,8,-3),
                                new THREE.Vector3(-50,8,-20));
        geometry.faces.push(new THREE.Face3(6,7,8));
        geometry.vertices.push( new THREE.Vector3(-50,8,-3),
                                new THREE.Vector3(-53,8,-20),
                                new THREE.Vector3(-50,8,-20));
        geometry.faces.push(new THREE.Face3(9,10,11));
        geometry.vertices.push( new THREE.Vector3(-50,12,-20),            //Ponta da asa
                                new THREE.Vector3(-53,12,-20),
                                new THREE.Vector3(-50,8,-20));
        geometry.faces.push(new THREE.Face3(13,12,14));
        geometry.vertices.push( new THREE.Vector3(-53,12,-20),
                                new THREE.Vector3(-53,8,-20),
                                new THREE.Vector3(-50,8,-20));
        geometry.faces.push(new THREE.Face3(16,15,17));
        geometry.vertices.push( new THREE.Vector3(-40,12,-10),             //Lados
                                new THREE.Vector3(-50,8,-20),
                                new THREE.Vector3(-40,8,-10));
        geometry.faces.push(new THREE.Face3(19,18,20));
        geometry.vertices.push( new THREE.Vector3(-40,12,-10),
                                new THREE.Vector3(-50,12,-20),
                                new THREE.Vector3(-50,8,-20));
        geometry.faces.push(new THREE.Face3(22,21,23));
        geometry.vertices.push( new THREE.Vector3(-53,12,-20),
                                new THREE.Vector3(-50,12,-3),
                                new THREE.Vector3(-50,8,-3));
        geometry.faces.push(new THREE.Face3(25,24,26));
        geometry.vertices.push( new THREE.Vector3(-53,12,-20),
                                new THREE.Vector3(-50,8,-3),
                                new THREE.Vector3(-53,8,-20));
        geometry.faces.push(new THREE.Face3(28,27,29));
        geometry.computeFaceNormals();
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(x, y, z);
        this.add(mesh);
    }    


    addCockpit(x,y,z){
        'use strict'
        var material = currentMaterial;
        var cockpit = new THREE.Geometry();
        cockpit.vertices.push( new THREE.Vector3(10,15,10),             //Parte de tras
                                new THREE.Vector3(10,15,-10),
                                new THREE.Vector3(10,7,-10));
        cockpit.faces.push(new THREE.Face3(0,1,2));
        cockpit.vertices.push(  new THREE.Vector3(10,15,10),
                                new THREE.Vector3(10,7,10),
                                new THREE.Vector3(10,7,-10));
        cockpit.faces.push(new THREE.Face3(4,3,5));
        cockpit.vertices.push(  new THREE.Vector3(10,15,10),             //Parte da frente
                                new THREE.Vector3(10,15,-10),
                                new THREE.Vector3(25,3.5,-10));
        cockpit.faces.push(new THREE.Face3(7,6,8));
        cockpit.vertices.push(  new THREE.Vector3(25,3.5,-10),
                                new THREE.Vector3(10,15,10),
                                new THREE.Vector3(25,3.5,10));
        cockpit.faces.push(new THREE.Face3(9,10,11));
        cockpit.vertices.push(  new THREE.Vector3(10,15,10),
                                new THREE.Vector3(10,7,10),
                                new THREE.Vector3(25,3.5,10));
        cockpit.faces.push(new THREE.Face3(12,13,14));
        cockpit.vertices.push(  new THREE.Vector3(10,15,-10),
                                new THREE.Vector3(10,7,-10),
                                new THREE.Vector3(25,3.5,-10));
        cockpit.faces.push(new THREE.Face3(16,15,17));
        cockpit.computeFaceNormals();
        mesh = new THREE.Mesh(cockpit, material);
        mesh.position.set(x, y, z);
        this.add(mesh);

    }


    constructor(x, y, z){
        super();

        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
    
        'use strict';

        this.add(new THREE.AxisHelper(60));

        this.children[0].rotateX(-Math.PI/2);

        this.addAirplaneFuselage(0, 0, 0);
        this.addWingRight(0,0,0);
        this.addWingLeft(0,0,0);
        this.addVerticalStabilizer(0,0,0);
        this.addRightStabilizer(0,0,0);
        this.addLeftStabilizer(0,0,0);
        this.addCockpit(0,0,0);
    }
}