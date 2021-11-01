import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppContainer>
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <HeroSection />
        <Canvas>
          <Earth />
        </Canvas>
      </Suspense>
    </AppContainer>
  );
}

export default App;
