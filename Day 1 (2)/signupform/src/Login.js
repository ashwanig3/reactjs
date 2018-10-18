import React, { Component } from 'react';

class Login extends Component {
	render() {
		return (
			<form className="login_form">
				<h1 className="login_heading">LOG IN TO YOUR ACCOUNT</h1>
				<input className="form_input" type="text" placeholder="Phone number, username or email address"></input>
				<input className="form_input" type="text" placeholder="Password"></input>
				<div className="checkbox">
					<input type="checkbox"></input><span>Stay signed in</span>
				</div>
				<button className="btn">Sign In</button>
				<p className="login">Forgot password?</p>
			</form>
			)
	}
}

export default Login;