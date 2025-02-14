/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Man from '../component/Man';

const Home = () => {
  return (
    <section className='max-w-7xl mx-auto w-full'>
      <div>
        <h2>Happy Birthday my love</h2>

        <div>
        <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={null}>
                    <Man scale={2.0}/>
              </Suspense>
            </Canvas>
        </div>
      </div>
    </section>
  );
}

export default Home;
