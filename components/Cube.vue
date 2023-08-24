<template>
  <div ref="cubeContainer">
    <canvas ref="experience"/>
  </div>
</template>

<style scoped lang="postcss">
  div{
    @apply aspect-square w-full;
  }

  canvas{
    width: 100%;
  }
</style>

<script setup lang="js">
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {useGLTFModel} from "~/composables/useGLTFModel";

const cubeContainer = ref(null);
const experience = ref(null)
let scene, camera, renderer, controls;

const vertexShader = `
  varying vec3 vWorldPosition;
  varying vec3 vCameraSpacePosition;
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vCameraSpacePosition = (viewMatrix * modelMatrix * vec4(position, 1.0)).xyz;
  }
`;

const fragmentShader = `
  uniform vec3 topColor;
  uniform vec3 bottomColor;
  varying vec3 vWorldPosition;
  varying vec3 vCameraSpacePosition;

  vec3 overlay(vec3 base, vec3 blend) {
      vec3 result;
      if (base.r < 0.5) result.r = 2.0 * base.r * blend.r;
      else result.r = 1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r);

      if (base.g < 0.5) result.g = 2.0 * base.g * blend.g;
      else result.g = 1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g);

      if (base.b < 0.5) result.b = 2.0 * base.b * blend.b;
      else result.b = 1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b);

      return result;
  }

  float pseudoRandom(vec2 co) {
      return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
      float gradientFactor = (-vWorldPosition.x + 2.0) / 6.0;  // Assuming y ranges from -100 to 100 in your scene.
      vec3 gradientColor = mix(bottomColor, topColor, gradientFactor);

      vec2 screenPos = gl_FragCoord.xy / vec2(1280.0, 720.0); // Assuming a 1280x720 resolution, modify as per your setup
      vec3 noise = vec3(fract(sin(dot(screenPos, vec2(12.9898, 78.233))) * 43758.5453));

      //vec3 flooredSP = floor(vCameraSpacePosition * vec3(1000)) *vec3(0.001);
      //vec3 noise = vec3(fract(sin(dot(flooredSP, vec3(12.9898, 78.233, 53.52))) * 43758.5453));
      //vec3 colorWithNoise = overlay(gradientColor, noise);
      vec3 colorWithNoise = overlay(gradientColor, noise);
      gl_FragColor = vec4(colorWithNoise, 1.0);
  }
`;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(20, 1, 0.1, 1000);
camera.position.z = 33;

const gradientShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    topColor: {value: new THREE.Color(0xef00ff)},
    bottomColor: {value: new THREE.Color(0xffb31d)}
  }
});

const { load } = useGLTFModel();

const gltf = await load('/untitled.glb');

await scene.add(gltf.scene);

const tubeMaterial = new THREE.MeshBasicMaterial({color: 'black'});

await scene.traverse(function (child) {
  if (child instanceof THREE.Mesh) {
    child.material = gradientShaderMaterial;

    const edges = new THREE.EdgesGeometry(child.geometry, 1);

    for (let i = 0; i < edges.attributes.position.array.length - 1; i += 6) {
      const start = new THREE.Vector3(edges.attributes.position.array[i], edges.attributes.position.array[i + 1], edges.attributes.position.array[i + 2]);
      const end = new THREE.Vector3(edges.attributes.position.array[i + 3], edges.attributes.position.array[i + 4], edges.attributes.position.array[i + 5]);

      const lineCurve = new THREE.LineCurve3(start, end);
      const tubeGeometry = new THREE.TubeGeometry(lineCurve, 1, 0.02, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
      tubeMesh.position.copy(child.position);
      tubeMesh.rotation.copy(child.rotation);
      tubeMesh.scale.copy(child.scale);
      scene.add(tubeMesh);
    }
  }
});

function setRenderer(){
  if(experience.value){
    renderer = new THREE.WebGLRenderer({
      canvas: experience.value,
      antialias: true
    });
    renderer.setSize(cubeContainer.value.offsetWidth, cubeContainer.value.offsetWidth);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
  }
}

function animate() {
  scene.rotation.y += 0.005;
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function onWindowResize() {
  //camera.aspect = window.innerWidth / window.innerHeight;
  //camera.updateProjectionMatrix();
  if(experience.value){
    renderer.setSize(cubeContainer.value.offsetWidth, cubeContainer.value.offsetWidth);
    renderer.render(scene, camera);
  }
}

onMounted(async () => {
  await setRenderer();
  window.addEventListener('resize', onWindowResize, false);
  animate();
});
</script>