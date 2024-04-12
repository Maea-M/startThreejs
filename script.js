import * as THREE from 'three';
/*Créer une div pour ajouter notre dessin 3d*/
const canvas = document.querySelector('.js-canvas')

/*Créer notre espace*/
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

/*Créer le point de vue*/
const aspectRatio = window.innerWidth / window.innerHeight
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000 );

/*Créer une render pour afficher la scène*/
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );

/*faire une rendu*/
/*renderer.render(scene, camera);*/

/*faire une cube*/
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x000099 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

/* faire une rotation*/
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();