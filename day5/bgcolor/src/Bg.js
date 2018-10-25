import React, { Component } from 'react';

export default class Color extends Component {
	render() {
		const bg = {
			backgroundColor : `rgb(${this.props.R},${this.props.G},${this.props.B})`
		}
		return (
			 <div className="container" style={bg}>
			 		<div className="wrapper">
			 			<span>R</span>
			 			<input type="range" name="R" min="0" max="255" onChange={this.props.Rchange} />
			 		</div>
			 		<div className="wrapper">
			 			<span>G</span>
			 			<input type="range" name="G" min="0" max="255" onChange={this.props.Gchange} />
			 		</div>
			 		<div className="wrapper">
			 			<span>B</span>
			 			<input type="range" name="B" min="0" max="255" onChange={this.props.Bchange} />
			 		</div> 
			 		<p>rgb({this.props.R},{this.props.G},{this.props.B})</p> 
			 </div>
			)
	}
}