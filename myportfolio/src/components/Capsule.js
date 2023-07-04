import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


function Capsule() {
  return (
    <mesh rotation={[0, 0, Math.PI/2]}>
        <capsuleGeometry attach='geometry' args={[0.5,2,64,64]}/>
        <meshLambertMaterial attach='material' color='blue' />
    </mesh>
  )
}

export default Capsule;
