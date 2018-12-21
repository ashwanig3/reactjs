import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return(
			<header>
				<h1>Emoji Search</h1>
			</header>
		)
	}
}

export class Search extends Component {
	render() {
		return(
		   <input className="search-input" type="text" onChange={this.props.searchEmoji} placeholder="Search for Emoji" />
		)
	}
}