import React, { Component } from 'react';


class Emoji extends Component {
	render() {
		return(
			<div className="emoji-wrapper" onClick={this.props.copyEmoji}>
				<span>{this.props.expression}</span>
				<p className="emoji-with-title">{this.props.title}</p>
			</div>

			)
	}
}


export default Emoji;