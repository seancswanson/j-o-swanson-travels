import * as THREE from 'three';
import "@fontsource/unbounded"
import spaceTextureImg from "../public/jake-weirick-space-texture.jpg";
import earthDiffuseTextureImg from "../public/earth-textures/earthmap1k.jpg";

import './style.css'

// Create Scene
const scene = new THREE.Scene();

// Create Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

// Load and set background texture
const spaceTexture = new THREE.TextureLoader().load(spaceTextureImg);
scene.background = spaceTexture;

// Add canvas to DOM
const appContainer = document.querySelector<HTMLDivElement>('#app')!;
appContainer.appendChild(renderer.domElement);

// Create Light
scene.add(new THREE.AmbientLight(0x333333));

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,3,5);
scene.add(light);

// Create Sphere with Texture
const geometry = new THREE.SphereGeometry();
const sphereTexture = new THREE.TextureLoader().load(earthDiffuseTextureImg);
const material = new THREE.MeshStandardMaterial({ map: sphereTexture });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);


camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();


