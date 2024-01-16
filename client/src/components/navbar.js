import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

	const isUserSignedIn = !!localStorage.getItem('token')
	const navigate = useNavigate();

	const handleSigOut = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<nav className="flex justify-around p-3 border-b border-zinc-800 items-center bg-[#1a1a1a]/90 text-zinc-300">
			<Link to="/">
				<h1>AuthDB</h1>
			</Link>
			<ul className="flex gap-6">
				{ isUserSignedIn ? (
					<>
						<Link to="/account"><l1>Account</l1></Link>
						<l1><button onClick={handleSigOut}>Sign Out</button></l1>
					</>
				): (
					<>
						<Link to="/login"><l1>Login</l1></Link>
						<Link to="/signup"><l1>Signup</l1></Link>
					</>
				)}
			</ul>
		</nav>
	);
}

export default Navbar;
