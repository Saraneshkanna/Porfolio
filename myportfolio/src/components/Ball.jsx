import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { FrontSide, BackSide, DoubleSide, Shape, ExtrudeGeometry } from "three";
import CanvasLoader from "./Loader";

const getHeartShape = () => {
    const x = -5, y = -10;

    const heartShape = new Shape();

    heartShape.moveTo( x + 5, y + 5 );
    heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    // heartShape.rotateZ(Math.PI);

    return heartShape;
};

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2} rotation={[0,0,Math.PI]}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={0.3}>
        {/* <shapeGeometry args={[getHeartShape()]}/> */}
        <extrudeGeometry args={[getHeartShape(), 3]} />
        {/* <icosahedronGeometry args={[1, 1]} /> */}
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          side={DoubleSide}
        />
        <Decal
            debug
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, Math.PI]}
          scale={13.5}
          map={decal}
          side={BackSide}
          flatShading
        />
      </mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};