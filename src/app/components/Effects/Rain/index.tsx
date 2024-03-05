"use client";

import React, { useRef, useEffect, ReactNode } from "react";
import * as THREE from "three";

// Extend the Vector3 class to include a velocity property
class CustomVector3 extends THREE.Vector3 {
  velocity: number;

  constructor(x?: number, y?: number, z?: number) {
    super(x, y, z);
    this.velocity = 0;
  }
}

const RainScene = ({ shouldRender }: { shouldRender: boolean }) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let rainMaterial: THREE.ShaderMaterial;
  let rainGeo: THREE.BufferGeometry;
  const rainDropVelocities: number[] = [];

  useEffect(() => {
    if(!shouldRender) return;

    // SCENE
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x11111f, 0.002);

    // CAMERA
    // eslint-disable-next-line react-hooks/exhaustive-deps
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    // RENDERER
    // eslint-disable-next-line react-hooks/exhaustive-deps
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (sceneRef.current) {
      sceneRef.current.appendChild(renderer.domElement);
    }

    // Ambient Light
    const ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);

    // Rain Drop Texture
    const positions: number[] = [];
    const rainCount = 7000;
    for (let i = 0; i < rainCount; i++) {
      positions.push(
        Math.random() * 400 - 200,
        Math.random() * 500 - 250,
        Math.random() * 400 - 200
      );
      rainDropVelocities.push(0);
    }

    rainGeo = new THREE.BufferGeometry();
    rainGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const customShader = {
      uniforms: {
        color: { value: new THREE.Color(0xCCCCCC) },
        size: { value: 0.3 },
        time: { value: 0 }, // You can use time to animate the effect if needed
      },
      vertexShader: `
        uniform float size;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
          gl_PointSize = size * ( 300.0 / -mvPosition.z );
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
          if(dist > 0.5){
            discard;
          }
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    };

    // Create the material using the custom shader
    // eslint-disable-next-line react-hooks/exhaustive-deps
    rainMaterial = new THREE.ShaderMaterial(customShader);

    const rain = new THREE.Points(rainGeo, rainMaterial);
    scene.add(rain);

    function render() {
      renderer.render(scene, camera);
      requestAnimationFrame(render);

      // RainDrop Animation
      const positionsArray = rainGeo.getAttribute("position")!
        .array as Float32Array;
      for (let i = 0; i < positionsArray.length; i += 3) {
        // Apply velocity to simulate rain falling
        positionsArray[i + 1] -= Math.random() * 0.5;

        // Reset position if it goes below a certain threshold
        if (positionsArray[i + 1] < -100) {
          positionsArray[i] = Math.random() * 400 - 200; // x
          positionsArray[i + 1] = 200; // y
          positionsArray[i + 2] = Math.random() * 400 - 200; // z
        }
      }

      // Notify Three.js that the positions have been updated
      rainGeo.attributes.position.needsUpdate = true;

      rain.rotation.y += 0.002;
    }

    // Update Camera Aspect Ratio and Renderer ScreenSize on Window resize
    const handleResize = () => {
      if (!camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      if (renderer) {
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    if(window){
      render();
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up Three.js resources if needed
    };
  }, [shouldRender]);

  return <div ref={sceneRef} style={{ display: shouldRender ? "block" : "none" }} className="fixed top-0 -z-50" />;
};

export default RainScene;
