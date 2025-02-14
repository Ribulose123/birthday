/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Stars } from "@react-three/drei";
import Female from "../component/Female";

// Envelope Component
const Envelope = ({ onOpen, letterScale }) => {
  const topFlapRef = useRef();
  const letterRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useFrame(() => {
    if (isOpen && topFlapRef.current.rotation.x > -1.5) {
      topFlapRef.current.rotation.x -= 0.05; 
    }
    if (showLetter && letterRef.current.position.y < 1.2) {
      letterRef.current.position.y += 0.05; 
    }
  });

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowLetter(true), 500); 
    onOpen();
  };

  return (
    <group position={[4, -1, 0]} onClick={handleOpen}>
      {/* Envelope Base */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="pink" />
      </mesh>

      {/* Envelope Flap */}
      <mesh ref={topFlapRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3, 1.2]} />
        <meshStandardMaterial color="lightcoral" />
      </mesh>

      {/* Letter (Hidden Initially) */}
      {showLetter && (
        <mesh ref={letterRef} position={[0, -0.5, 0.1]} scale={[letterScale, letterScale, 1]}>
          <planeGeometry args={[2.5, 3]} />
          <meshStandardMaterial color="white" />
        </mesh>
      )}

      {/* Tap to Open Text */}
      {!isOpen && (
        <Text position={[0, 0.2, 0.2]} fontSize={0.3} color="white">
          Tap to Open 💌
        </Text>
      )}

      {/* Message on Letter */}
      {showLetter && (
        <Text position={[0, 1, 0.2]} fontSize={0.2 * letterScale} color="black" maxWidth={2}>
          Hey Babe, Happy Birthday! 🎉💖

          You are my happiness, my peace, my greatest love story.
          I can&apos;t wait to celebrate more birthdays together. 
          💕
        </Text>
      )}
    </group>
  );
};


// Floating Hearts Animation
const FloatingHearts = () => {
  const groupRef = useRef();
  useFrame(({ clock }) => {
    groupRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.3;
  });

  return (
    <group ref={groupRef}>
      <Text position={[-1, 2, -1]} fontSize={0.5} color="hotpink">
        💖
      </Text>
      <Text position={[1, 1.5, 0]} fontSize={0.5} color="red">
        ❤️
      </Text>
      <Text position={[0, 2.5, 1]} fontSize={0.5} color="pink">
        💕
      </Text>
    </group>
  );
};

const Message = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 10%, #fad0c4 100%)",
      }}
    >
      <Canvas camera={{ position: [0, 5, 3] }}>
        <ambientLight intensity={2} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} />
        <Stars radius={100} depth={50} count={500} factor={4} fade />

        
        <Envelope onOpen={() => {}} />

        {/* Floating Hearts */}
        <FloatingHearts />

        {/* 3D Female Model */}
        <Female scale={1.5} position={[-1.5, -2, 0]} />

        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default Message;
