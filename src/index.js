// I'm manually including these globally atm
// import AFRAME from 'aframe';
// import 'aframe-physics-system';
// components
import CANNON from 'cannon';

let scene;
let ballSpawn;

window.onload = () => {
  scene = document.querySelector('a-scene');
  ballSpawn = document.querySelector('#ball-spawn');

  // PETER SHOULD CREATE A COMPONENT THAT APPLIES AN IMPULSE
  document.addEventListener('click', () => {
    const sphere = document.createElement('a-sphere');
    sphere.setAttribute('position', '0 0 -4');
    sphere.setAttribute('radius', 0.15);
    sphere.setAttribute('dynamic-body', 'shape: sphere;');
    // sphere.setAttribute('shadow', '');
    sphere.setAttribute('color', '#EF2D5E');
    ballSpawn.appendChild(sphere);


    requestAnimationFrame(() => {
      sphere.body.applyImpulse(new CANNON.Vec3(0, 24, 20), new CANNON.Vec3(0, 0, -4));
    });
    
  });

};
