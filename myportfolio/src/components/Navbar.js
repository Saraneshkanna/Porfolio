import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import myImage from '../images/Me(1).jpg';
import dpPhoto from '../images/DP Photo .jpg'

function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setExpandNavbar(false);
	}, [location]);
	return (
		<div className="navbar" id={expandNavbar ? 'open' : 'close'}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}
				>
					<ReorderIcon></ReorderIcon>
				</button>
			</div>
			<div className="links">
				<Link to="/">
					<img className="navbar__photo" src={dpPhoto} alt="logo" />
				</Link>
				<div className="navbar__cont">
					<Link to="/">Home</Link>
					<Link to="/skills">Skills</Link>
					<Link to="/experience">Experience</Link>
					<Link to="/projects">Projects</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
