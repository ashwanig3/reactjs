import React, { Component } from 'react';


class Emoji extends Component {
	render() {
		return(
			<div className="emoji-wrapper">
				<p className="emoji-with-title"><span>{this.props.expression}</span>{this.props.title}</p>
			</div>

			)
	}
}


export default Emoji;