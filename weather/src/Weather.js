import React, { Component } from 'react';

export default class Weather extends Component {
	render(){
		const {name, temp, description, temp_max, temp_min} = this.props
		return(
			<div className="main-container">
				<h2>{name}</h2>
				<span>temp:{parseInt(temp-273.15)} &deg; c</span>
				<span>max-temp:{parseInt(temp_max-273.15)} &deg; c</span>
				<span>min-temp:{parseInt(temp_min-273.15)} &deg; c</span>
				<p>description:{description}</p>
			</div>
			)
	}
}