import React, { Component} from 'react';

export default class User extends Component {
	render() {
		const {imgUrl, name, Follower, Following, Repos } = this.props;
		return(
				<div className="main-container">
					<section className="user-info">
						<img className="user-img" src={imgUrl} />
						<div>
							<h1>{name}</h1>
							<div className="github-status">
								<span>{Follower}</span>
								<span>Follower</span>
							</div>
							<div className="github-status">
								<span>{Following}</span>
								<span>Following</span>
							</div>
							<div className="github-status">
								<span>{Repos}</span>
								<span>Repos</span>
							</div>
						</div>
					</section>
				</div>
			)
	}
}