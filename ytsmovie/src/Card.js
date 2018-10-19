import React, { Component } from 'react';

class Card extends Component {
	render() {
		return(
			<div className="container">
				<img src={this.props.src} />
				<p className="movie_name">{this.props.name}</p>
			</div>
			)
	}
}

export default Card;