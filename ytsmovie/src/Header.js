import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="nav-container">
					<ul className="nav-list">
						<li><input type="text" placeholder="Quick Search" /></li>
						<li>Home</li>
						<li>Browse Movies</li>
						<li>Login</li>
						<li>Register</li>
					</ul>
				</nav>
			</header>
			)
	}
}

export default Header;