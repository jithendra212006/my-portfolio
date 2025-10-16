// app/components/Hero3D.jsx
'use client'; 

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero3D = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#3B82F6"
          attach="material"
          distort={0.55}
          speed={2}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default Hero3D;