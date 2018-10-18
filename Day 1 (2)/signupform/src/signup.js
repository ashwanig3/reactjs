import React, { component } from 'react';

class Signup extends component {
	render() {
		return (
			<form>
				<h1 class="heading">Signup</h1>
				<input class="form_input" type="text" placeholder="Mobile number or Email"></input>
				<input class="form_input" type="text" placeholder="Full name"></input>
				<input class="form_input" type="text" placeholder="Username"></input>
				<input class="form_input" type="text" placeholder="Password"></input>
				<button class="btn"></button>
				<p class="login">Login with facebook</p>
			</form>
			)
	}
}

export default Signup;