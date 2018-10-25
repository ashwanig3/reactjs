import React, { Component } from 'react';


export default class Font extends Component {
	render() {
		return(
				<div className="container">
					<div className="text-wrapper">
						<div className="font__style">Karla</div>
						<div className="input-value karla">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">Helvetica Neue</div>
						<div className="input-value helvetica">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">Bree serif</div>
						<div className="input-value bree">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">Lato</div>
						<div className="input-value lato">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">cabin</div>
						<div className="input-value cabin">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">Proxima nova</div>
						<div className="input-value proxima">{this.props.value}</div>
					</div>
					<div className="text-wrapper">
						<div className="font__style">Andale mono</div>
						<div className="input-value andale">{this.props.value}</div>
					</div>
				</div>
			)
	}
}