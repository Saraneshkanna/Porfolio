/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 NoHorseCarousel3.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/NoHorseCarousel3.gltf')
  const groupRef = useRef();

  useFrame(() => {
    // Update the rotation in each frame
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004; // Adjust the rotation speed as needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={26.5} position={[6.616, 3.56, 7.113]} rotation={[-0.433, 0.71, 0.294]} />
      <mesh geometry={nodes.pedestal_3.geometry} material={materials.pedestal_1} rotation={[0, 0.243, 0]} scale={[1.183, 0.171, 1.183]}>
        <group position={[0, 2.16, 0]} scale={[0.222, 1.534, 0.222]}>
          <mesh geometry={nodes.Cylinder004.geometry} material={materials.gold_2} />
          <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.mirror_2} />
        </group>
        <mesh geometry={nodes.column_1.geometry} material={materials.columns} position={[0, 12.884, 0]} scale={[1.36, 2.333, 1.36]} />
        <mesh geometry={nodes.column_2.geometry} material={materials.columns} position={[0, 12.884, 0]} rotation={[0, -1.567, 0]} scale={[1.36, 2.333, 1.36]} />
        <mesh geometry={nodes.column_3.geometry} material={materials.columns} position={[0, 12.884, 0]} rotation={[Math.PI, -0.002, Math.PI]} scale={[1.36, 2.333, 1.36]} />
        <mesh geometry={nodes.column_4.geometry} material={materials.columns} position={[0, 12.884, 0]} rotation={[-Math.PI, 1.566, -Math.PI]} scale={[1.36, 2.333, 1.36]} />
        <mesh geometry={nodes.pedestal_1.geometry} material={materials.columns} position={[0, -2.297, 0]} scale={[1.264, 0.635, 1.264]} />
        <mesh geometry={nodes.pedestal_2.geometry} material={materials.pedestal_2} position={[0, -1.343, 0]} scale={[1.111, 0.558, 1.111]} />
        <mesh geometry={nodes.roof.geometry} material={materials.roof} position={[0, 11.196, 0]} scale={[0.993, 1.359, 0.993]} />
        <mesh geometry={nodes.roof_decor.geometry} material={materials.gold} position={[0, 9.206, 0]} scale={[0.927, 6.395, 0.927]} />
        <mesh geometry={nodes.roof_decor_2.geometry} material={materials.gold} position={[0, 17.694, 0]} scale={[0.052, 0.357, 0.052]} />
        <mesh geometry={nodes.roof_decor_3.geometry} material={materials.gold} position={[0, 17.225, 0]} scale={[-0.053, -0.168, -0.053]} />
        <mesh geometry={nodes.roof_decor_4.geometry} material={materials.gold} position={[0, 17.385, 0]} scale={[-0.043, -0.111, -0.043]} />
        <mesh geometry={nodes.roof_mirrors.geometry} material={materials.mirror} position={[0, 9.206, 0]} scale={[0.927, 6.395, 0.927]} />
      </mesh>
      <mesh geometry={nodes.Text.geometry} material={nodes.Text.material} position={[0.855, 0.692, 0.606]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.437} />
      <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[0.236, 0.683, -0.851]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.437} />
      <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-0.845, 0.681, -0.429]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.437} />
      <mesh geometry={nodes.Text004.geometry} material={nodes.Text004.material} position={[-0.069, 0.67, 0.88]} rotation={[Math.PI / 2, 0, 0]} scale={0.437} />
      <mesh geometry={nodes.Cube.geometry} material={materials.BlackBG} position={[0.324, 0.579, 0.808]} scale={[0.512, 0.48, 0.014]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials.BlackBG} position={[-0.173, 0.767, -0.814]} scale={[0.465, 0.255, 0.014]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.BlackBG} position={[-0.785, 0.819, 0.143]} rotation={[0, -Math.PI / 2, 0]} scale={[0.601, 0.255, 0.014]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.BlackBG} position={[0.82, 0.819, -0.159]} rotation={[0, -Math.PI / 2, 0]} scale={[0.812, 0.255, 0.014]} />
    </group>
  )
}

useGLTF.preload('/NoHorseCarousel3.gltf')
