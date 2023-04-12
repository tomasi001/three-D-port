import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import { Suspense } from "react";

const Cars = () => {
  const car = useGLTF("./sci-fi_vehicle/scene.gltf");

  return (
    <group dispose={null}>
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight position={[-20, 50, 10]} />
        <primitive
          object={car.scene}
          scale={1}
          position={[0, -3.25, -0.5]}
          rotation={[0, 0.8, -0.2]}
        />
      </mesh>
    </group>
  );
};

const CarCanvas = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cars />

        <Preload all />
      </Canvas>
    </Suspense>
  );
};

export default CarCanvas;
