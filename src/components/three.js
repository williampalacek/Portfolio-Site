import React, { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function MyThree() {
  const refContainer = useRef(null);
  const [debugInfo, setDebugInfo] = useState({ position: {x: 0, y: 0, z: 0}, rotation: {x: 0, y: 0, z: 0} });

  useEffect(() => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // ...

    var x = 9.67, y = 0.71, z = 12.66;
    var rotX = 1.39, rotY = 62.35, rotZ = -1.23;

    camera.position.set(x, y, z); // Replace cam position with x, y, z 
    camera.rotation.set(
      THREE.MathUtils.degToRad(rotX),
      THREE.MathUtils.degToRad(rotY),
      THREE.MathUtils.degToRad(rotZ)
    ); // Replace cam position with rotX, rotY, rotZ 

    const softWhite = 0xf0f0f0;
    scene.background = new THREE.Color(softWhite);
    scene.fog = new THREE.Fog(0xBFF47B, 2, 100); // Start fading at 10 units, complete fade at 100 units

    // Load the GLTF model

    const loader = new GLTFLoader();
    loader.load(
      '/3d_models/monkeys.glb', // Replace with the path to your downloaded model
      (gltf) => {
        const model = gltf.scene;
        // Scale the model if needed
        //model.scale.set(1, 1, 1); // Adjust these values as needed
        // Position the model if needed
        model.position.set(0, 0, 0); // Adjust these values as needed

        scene.add(model);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.error('An error happened', error);
      }
    );

    // handles resizing the renderer when the window is resized
    const resizeHandler = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resizeHandler);

    // Update function to get camera position and rotation
    const updateDebugInfo = () => {
      setDebugInfo({
        position: {
          x: camera.position.x.toFixed(2),
          y: camera.position.y.toFixed(2),
          z: camera.position.z.toFixed(2)
        },
        rotation: {
          x: THREE.MathUtils.radToDeg(camera.rotation.x).toFixed(2),
          y: THREE.MathUtils.radToDeg(camera.rotation.y).toFixed(2),
          z: THREE.MathUtils.radToDeg(camera.rotation.z).toFixed(2)
        }
      });
    };

    // Modify your animate function
    const animate = function () {
      requestAnimationFrame(animate);
      //controls.update();
      //mangaShaderManager.update() 
      updateDebugInfo(); // Add this line
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeHandler);
      refContainer.current && refContainer.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div 
        ref={refContainer} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%',
          pointerEvents: 'auto'
        }}
      />
      <div style={{
        position: 'fixed',
        top: 10,
        left: 10,
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: 10,
        fontFamily: 'monospace',
        fontSize: 12,
        zIndex: 100,
      }}>
        <div>Camera Position:</div>
        <div>X: {debugInfo.position.x}</div>
        <div>Y: {debugInfo.position.y}</div>
        <div>Z: {debugInfo.position.z}</div>
        <div>Camera Rotation (degrees):</div>
        <div>X: {debugInfo.rotation.x}</div>
        <div>Y: {debugInfo.rotation.y}</div>
        <div>Z: {debugInfo.rotation.z}</div>
      </div>
    </>
  );
}

export default MyThree;