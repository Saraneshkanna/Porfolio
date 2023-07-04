import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'
import * as THREE from 'three';
import Capsule from '../components/Capsule';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


// const scene = new THREE.Scene();

// const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 ); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff83} );
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const camera = new THREE.PerspectiveCamera(45);

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, I'm Saranesh!</h2>
            <div className='prompt'>
                {/* <p> And I am a Game Developer, App Developer, Blockchain Developer</p> */}
                <div style={{ width: '1000px', height: '1000px' }}>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[-2,5,2]} intensity={1} />
                   <Capsule /> 
                </Canvas>
                </div>
                <LinkedInIcon />
                <GitHubIcon />
                <EmailIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
        </div>
    </div>
  )
}

export default Home