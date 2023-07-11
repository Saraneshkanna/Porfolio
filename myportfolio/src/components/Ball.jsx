import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame  } from "@react-three/fiber";
import {useSpring, animated} from '@react-spring/three'
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
  const [decal1] = useTexture([props.icon1]);
  const [decal2] = useTexture([props.icon2]);
  const[active, setActive] = useState(false);
  const {scale} = useSpring({scale: active ? 0.3: 0.2})
  const extrudeSettings = {
    steps: 1, // Number of divisions along the extrusion
    depth: 1, // Depth of the extrusion
    bevelEnabled: false, // Disable bevel
  };
  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={4} >
      <ambientLight intensity={2} />
      {/* <directionalLight position={[0, 0, 1]} /> */}
      {/* <directionalLight position={[0, 0, -0.1]} /> */}
      <animated.mesh scale={scale} rotation={[0,0,Math.PI]} onClick={()=> {setActive(!active)}}>
        <extrudeGeometry args={[getHeartShape(), extrudeSettings]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
        //   flatShading
        //   wireframe
          side={DoubleSide}
        />
        <Decal
            // debug
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, Math.PI]}
          scale={[10,10,1]}
          map={decal1}
          side={BackSide}
          flatShading
        />

        <Decal
            // debug
          position={[0, 0, -0.4]}
          rotation={[Math.PI, 0, 0]}
          scale={[10,10,1]}
          map={decal2}
          side={FrontSide}
          flatShading
        />
      </animated.mesh>
    </Float>
  );
};

export const BallCanvas = ( {icon1, icon2} ) => {

  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
      gl={{ preserveDrawingBuffer: false}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} />
        <Ball icon1={icon1} icon2={icon2} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};
