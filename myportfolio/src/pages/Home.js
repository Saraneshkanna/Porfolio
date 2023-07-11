import {React, useRef} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ForwardIcon from '@mui/icons-material/Forward';
import InstagramIcon from '@mui/icons-material/Instagram'
import '../styles/Home.css'
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, useHelper, Plane } from '@react-three/drei';
import Carousel from "../components/NoHorseCarousel3"
import { PointLight, PointLightHelper } from 'three';
import { useControls} from 'leva'
import myImage from "../images/Me(1).jpg"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Arrow, { DIRECTION } from 'react-arrows'
import {FaLongArrowAltRight} from 'react-icons/fa'



function Home() {
    const pointLightRef = useRef();
    // const pointLightHelper = new PointLightHelper(PointLight, 1, 'red');
    // const { intensity, x, y, z } = useControls({ intensity: { value: 1, min: 0, max: 20 }, x: { value: 1, min: -100, max: 100 }, y: { value: 1, min: -100, max: 100}, z: { value: 1, min: -100, max: 100 } });
    const intensity = 1.0;
  return (
    <div className='home'>
        <div>
            <Navbar />
        </div> 
        {/* <Arrow
            className='arrow'
            from={{
            direction: DIRECTION.RIGHT,
            node: () => document.getElementById('createText'),
            translation: [0.5, 1],
            }}
            to={{
            direction: DIRECTION.LEFT,
            node: () => document.getElementById('canvas'),
            translation: [-0.4, 2.5],
            }}
        /> */}
        <div className='about'>
            <div className='prompt'>
                    <div className='Intro'>
                        <div className='socials'>
                            <div className='icons'>
                                <LinkedInIcon />
                                <GitHubIcon />
                                <InstagramIcon />
                                <EmailIcon />
                            </div>
                            <div className='photDiv'>
                                <img className='photo' src={myImage}></img>
                            </div>
                        </div>     
                        <div className='textIntro'>
                            <h2>Hi, I'm Saranesh!</h2>

                            <div className='createDiv'>
                                <p>I'm a final year undergrad </p>
                                <p className='createText' id='createText'> student who likes to create </p>
                                <p>And Much More!</p>
                            </div>
                            {/* <p className='more'>And everything in between!</p> */}
                        </div>
                        <div className='carousel'>
                            <Canvas className='canvas' id='canvas'>
                                {/* <OrbitControls enableZoom={false} /> */}
                                {/* <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-1} /> */}
                                <pointLight ref={pointLightRef} intensity={intensity} position={[100, 50, 100]}  />
                                <pointLight ref={pointLightRef} intensity={intensity} position={[100,41,1]}  />
                                <pointLight ref={pointLightRef} intensity={intensity} position={[26,41,-30]}  />
                                <pointLight ref={pointLightRef} intensity={intensity} position={[-50, 41, -23]}  />
                                <pointLight ref={pointLightRef} intensity={intensity} position={[100,-41,20]}  />
                                <pointLight ref={pointLightRef} intensity={intensity} position={[-100, 41, 10]}  />
                                <Carousel />
                            </Canvas>
                        </div>
                    </div>
                    <div className='aboutText'>
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sapien non ex pharetra consectetur. Vestibulum non gravida lectus. Proin commodo malesuada enim, ut convallis eros viverra sit amet. Ut consectetur lacinia nulla in rutrum. Maecenas convallis mi nec orci scelerisque, ac scelerisque lectus ultrices. Curabitur et dolor nec nunc sagittis finibus.</p>
                    </div>
                    <div className='buttonDiv'>
                        <button className='skillsButton'>See my skills &rarr;</button>
                    </div> 
            </div>          
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home