import { useLoader, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import earthClouds from "../images/earth-clouds.jpg";
import earthDaylight from "../images/earth-daylight.jpg";
import earthNight from "../images/earth-night.jpg";
import earthSpecular from "../images/earth-specular.jpg";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useRef } from "react";

export default function Earth() {
  const [normalMap, cloudMap, nightMap, specMap] = useLoader(TextureLoader, [
    earthDaylight,
    earthClouds,
    earthNight,
    earthSpecular,
  ]);
  const earth = useRef(null);
  const clouds = useRef(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earth.current.rotation.y = elapsedTime / 6;
    clouds.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <Stars
        radius={300}
        depth={100}
        count={20000}
        factor={6}
        saturation={20}
        fade
      />
      <pointLight position={[10, 5, 7]} />
      <mesh ref={clouds} position={[0, 0, 2.6]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earth} position={[0, 0, 2.6]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={normalMap} metalness={0.4} roughness={0.7} />
      </mesh>
    </>
  );
}
