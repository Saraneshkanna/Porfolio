import {React, useRef} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../styles/Home.css'
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, useHelper, Plane } from '@react-three/drei';
import Carousel from "../components/NoHorseCarousel3"
import { PointLight, PointLightHelper } from 'three';
import { useControls} from 'leva'




function Home() {
    const pointLightRef = useRef();
    // const pointLightHelper = new PointLightHelper(PointLight, 1, 'red');
    // const { intensity, x, y, z } = useControls({ intensity: { value: 1, min: 0, max: 20 }, x: { value: 1, min: -100, max: 100 }, y: { value: 1, min: -100, max: 100}, z: { value: 1, min: -100, max: 100 } });
    const intensity = 1.0;
  return (
    <div className='home'>
        <div className='about'>
            <div className='prompt'>
                <div className='textIntro'>
                    <h2>Hi, I'm Saranesh!</h2>
                    <p className='createText'> And I create</p>
                    <p>And much More</p>
                    <div className='socials'>
                        <p>Check me out on:</p>
                        <div className='icons'>
                            <LinkedInIcon />
                            <GitHubIcon />
                            <EmailIcon />
                        </div>
                    </div>
                </div>
                <div className='d'>
                <Canvas className='canvas'>
                    <OrbitControls enableZoom={false} />
                    {/* <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-1} /> */}
                    <pointLight ref={pointLightRef} intensity={intensity} position={[100, 50, 100]}  />
                    <pointLight ref={pointLightRef} intensity={intensity} position={[100,41,1]}  />
                    <pointLight ref={pointLightRef} intensity={intensity} position={[26,41,-30]}  />
                    <pointLight ref={pointLightRef} intensity={intensity} position={[-50, 41, -23]}  />
                    <pointLight ref={pointLightRef} intensity={intensity} position={[100,-41,20]}  />
                    <pointLight ref={pointLightRef} intensity={intensity} position={[-100, 41, 10]}  />

                    {/* <primitive object={PointLightHelper} /> */}
                    {/* useHelper(pointLightRef, pointLightHelper, 'red') */}

                   <Carousel />
                </Canvas>
                </div>
            </div>
           
        </div>
        <div className='skills'>
            <h1>Skills</h1>
        </div>
    </div>
  )
}

export default Home