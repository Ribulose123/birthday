/* eslint-disable react/no-unknown-property */
import  { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Man from "../component/Man";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  return (
    <section
      className="max-w-7xl mx-auto w-full h-screen flex flex-col items-center justify-center text-center relative"
     
    >
     

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 flex justify-center items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg bg-pink-500 px-6 py-3 rounded-xl">
          🎉 Happy Birthday My Love! 🎂💖
        </h2>
      </div>

      {/* 3D Canvas with Man */}
      <div className="w-full h-[500px] flex items-center justify-center">
        <Canvas className="w-full h-full">
          <ambientLight intensity={5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

          <Suspense fallback={null}>
            <Man scale={3} position={[-2, -3, 0]}  />
          </Suspense>
        </Canvas>
      </div>

      {/* Cute Birthday Message */}
      <button
        className="absolute bottom-10 px-6 py-2 bg-pink-500 text-white rounded-lg shadow-lg cursor-pointer"
       onClick={ ()=>navigate('/message')}
      >
        Make Her Dance! 💃
      </button>
    </section>
  );
};

export default Home;
