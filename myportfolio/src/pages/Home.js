import { React, useRef } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ForwardIcon from '@mui/icons-material/Forward';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Home.css';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useHelper, Plane } from '@react-three/drei';
import Carousel from '../components/NoHorseCarousel3';
import { PointLight, PointLightHelper } from 'three';
import { useControls } from 'leva';
import myImage from '../images/Me(1).jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Arrow, { DIRECTION } from 'react-arrows';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aws from '../images/tech/aws.png';
import C from '../images/tech/C.png';
import firebase from '../images/tech/firebase.png';
import flutter from '../images/tech/flutter.png';
import git from '../images/tech/git.png';
import HTML from '../images/tech/HTML.png';
import JS from '../images/tech/JS.png';
import python from '../images/tech/python.png';
import tf from '../images/tech/tf.png';
import threejs from '../images/tech/threejs.png';
import ue from '../images/tech/ue.png';
import unity from '../images/tech/unity.png';
import Reactimg from '../images/tech/React.png';

function Home() {
	const pointLightRef = useRef();
	// const pointLightHelper = new PointLightHelper(PointLight, 1, 'red');
	// const { intensity, x, y, z } = useControls({ intensity: { value: 1, min: 0, max: 20 }, x: { value: 1, min: -100, max: 100 }, y: { value: 1, min: -100, max: 100}, z: { value: 1, min: -100, max: 100 } });
	const intensity = 1.0;
	return (
		<div className="home">
			<div>
				<Navbar />
			</div>
			<Arrow
				className="arrow"
				from={{
					direction: DIRECTION.UP,
					node: () => document.getElementById('createText'),
					translation: [0.5, 1],
				}}
				to={{
					direction: DIRECTION.LEFT,
					node: () => document.getElementById('canvas'),
					translation: [-0.4, 2.5],
				}}
			/>
			<div className="about">
				<div className="prompt">
					<div className="Intro">
						<div className="socials">
							<div className="icons">
								<a href="https://www.linkedin.com/in/saraneshkanna-vivek-391661237/">
									<LinkedInIcon />
								</a>
								<a href="https://github.com/Saraneshkanna">
									<GitHubIcon />
								</a>
								<a href="https://www.instagram.com/saraneshkanna/">
									<InstagramIcon />
								</a>
								<EmailIcon />
							</div>
							<div className="photDiv">
								<img className="photo" src={myImage}></img>
							</div>
						</div>
						<div className="textIntro">
							<h2>Hi, I'm Saranesh!</h2>

							<div className="createDiv">
								<p>I'm a final year undergrad </p>
								<p className="createText" id="createText">
									student who likes to create
								</p>
								<p>&rarr;</p>
							</div>

							{/* <p className='more'>And everything in between!</p> */}
						</div>
						<div className="carousel">
							<Canvas className="canvas" id="canvas">
								{/* <OrbitControls enableZoom={false} /> */}
								{/* <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-1} /> */}
								<pointLight ref={pointLightRef} intensity={intensity} position={[100, 50, 100]} />
								<pointLight ref={pointLightRef} intensity={intensity} position={[100, 41, 1]} />
								<pointLight ref={pointLightRef} intensity={intensity} position={[26, 41, -30]} />
								<pointLight ref={pointLightRef} intensity={intensity} position={[-50, 41, -23]} />
								<pointLight ref={pointLightRef} intensity={intensity} position={[100, -41, 20]} />
								<pointLight ref={pointLightRef} intensity={intensity} position={[-100, 41, 10]} />
								<Carousel />
							</Canvas>
						</div>
					</div>
					<div>
						<p className="muchMore">..and everything in between!</p>
					</div>

					{/* <div className="infiniteLoopCont">
						<div class="text-container">
							<div class="moving-text">
								<p>
									C/C++ &emsp; HTML/CSS &emsp; Flutter &emsp; Flutter &emsp; JavaScript &emsp; Python &emsp; TensorFlow
									&emsp; React.js &emsp; Three.js &emsp; Unreal Engine 5 &emsp; Unity3D &emsp; AWS &emsp; Git
								</p>
							</div>
							<div class="moving-text">
								<p>
									C/C++ &emsp; HTML/CSS &emsp; Flutter &emsp; Flutter &emsp; JavaScript &emsp; Python &emsp; TensorFlow
									&emsp; React.js &emsp; Three.js &emsp; Unreal Engine 5 &emsp; Unity3D &emsp; AWS &emsp; Git
								</p>
							</div>
						</div>
					</div> */}

					{/* <div id="rssBlock">
						<p className="cnnContents">
							<span className="marqueeStyle">
								<img className="loop_picture" src={C} alt="logo" /> C/C++
								<img className="loop_picture" src={HTML} alt="logo" /> HTML/CSS
								<img className="loop_picture" src={flutter} alt="logo" /> Flutter
								<img className="loop_picture" src={JS} alt="logo" /> JavaScript
								<img className="loop_picture" src={python} alt="logo" /> Python
								<img className="loop_picture" src={tf} alt="logo" /> TensorFlow
								<img className="loop_picture" src={Reactimg} alt="logo" /> React.js
								<img className="loop_picture" src={threejs} alt="logo" /> Three.js
								<img className="loop_picture" src={ue} alt="logo" /> Unreal Engine 5
								<img className="loop_picture" src={unity} alt="logo" /> Unity3D
								<img className="loop_picture" src={aws} alt="logo" /> AWS
								<img className="loop_picture" src={git} alt="logo" /> Git
							</span>
							<span className="marqueeStyle2">
								<img className="loop_picture" src={C} alt="logo" /> C/C++
								<img className="loop_picture" src={HTML} alt="logo" /> HTML/CSS
								<img className="loop_picture" src={flutter} alt="logo" /> Flutter
								<img className="loop_picture" src={JS} alt="logo" /> JavaScript
								<img className="loop_picture" src={python} alt="logo" /> Python
								<img className="loop_picture" src={tf} alt="logo" /> TensorFlow
								<img className="loop_picture" src={Reactimg} alt="logo" /> React.js
								<img className="loop_picture" src={threejs} alt="logo" /> Three.js
								<img className="loop_picture" src={ue} alt="logo" /> Unreal Engine 5
								<img className="loop_picture" src={unity} alt="logo" /> Unity3D
								<img className="loop_picture" src={aws} alt="logo" /> AWS
								<img className="loop_picture" src={git} alt="logo" /> Git
							</span>
						</p>
					</div> */}

					<div className="aboutText">
						<h2>About Me</h2>
						<p>
                        I'm an enthusiastic software developer who has worked with numerous languages and pet projects in various tech stacks (you can check them out in the
                        projects page!), and look forward to upskilling myself every day. I work best with a team of like-minded people who strive for excellence and 
                        perfection in everything that we do. In my spare time, I also like to keep up with new technological developments both inside and outside the field of 
                        Computer Science.
						</p>
					</div>
					<div className="buttonDiv">
						<button className="skillsButton">
							<Link to="/skills">See my skills &rarr;</Link>
						</button>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Home;
