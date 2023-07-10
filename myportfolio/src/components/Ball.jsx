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
  const [decal] = useTexture([props.imgUrl]);
  const[active, setActive] = useState(false);
  const {scale} = useSpring({scale: active ? 0.3: 0.2})


  const [springProps, setSpringProps] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 120, friction: 20, precision: 0.001 },
  }));
  
  useEffect(() => {
    setSpringProps({ position: [0, 1, 0], immediate: true });
    const interval = setInterval(() => {
      setSpringProps({ position: [0, -1, 0], immediate: false });
      setSpringProps({ position: [0, 1, 0], immediate: false });
    }, 3000);
    return () => clearInterval(interval);
  }, [setSpringProps]);
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={3} >
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 0.1]} />
      <directionalLight position={[0, 0, -0.1]} />
      <animated.mesh  castShadow receiveShadow scale={scale} rotation={[0,0,Math.PI]} onClick={()=> {setActive(!active)}}>
        <extrudeGeometry args={[getHeartShape(), 1]} />
        <meshStandardMaterial
          color='#ffffff'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        //   wireframe
          side={DoubleSide}
        />
        <Decal
            // debug
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, Math.PI]}
          scale={[10,10,1]}
          map={decal}
          side={BackSide}
          flatShading
        />
      </animated.mesh>
    </Float>
  );
};

export const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }}
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
