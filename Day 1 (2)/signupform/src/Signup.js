import React, { Component } from 'react';

class Signup extends Component {
	render() {
		return (
			<form className="signup_form">
				<h1 className="heading">Signup</h1>
				<input className="form_input" type="text" placeholder="Mobile number or Email"></input>
				<input className="form_input" type="text" placeholder="Full name"></input>
				<input className="form_input" type="text" placeholder="Username"></input>
				<input className="form_input" type="text" placeholder="Password"></input>
				<button className="btn">Sign up</button>
				<p className="login">Login with facebook</p>
			</form>
			)
	}
}
export default Signup;