/*Terceira entrega, Cena Simples com materiais e iluminacao*/

var camera, scene, renderer, clock; // variaveis gerais relativas a animacao

var camera1; // diferentes tipos de cameras

var geometry, material, mesh;

var airplane, lights; // diferentes objetos a desenhar


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

    airplane  = new Airplane(0, 0, 0);
    lights = new Lights(40,30,40);
    
    createCamera1();

    camera = camera1;

    scene.add(camera);
    scene.add(airplane);
    scene.add(lights)
}

function createCamera1() {
    'use strict';
    camera1 = new THREE.OrthographicCamera(
        window.innerWidth / - 10,
        window.innerWidth/ 10,
        (window.innerHeight / 10) + 50,
        (window.innerHeight / - 10) + 50,
        -1000,
        1000
    );
    
    camera1.position.x = 40;
    camera1.position.y = 10;
    camera1.position.z = 40;
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
    case 49: // 1
        camera = camera1;
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