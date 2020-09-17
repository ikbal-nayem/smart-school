import React from 'react';
import asyncComponent from 'util/asyncComponent';
import Error404 from 'app/routes/extraPages/routes/404';

import './style.css'


class Profile extends React.Component {
	constructor(props){
		super(props)
		this.username = props.match.params.username
		this.account_type = props.account_type
	}

	render() {
		const RenderProfile = this.account_type==='student'
													? asyncComponent(()=>import('./Student'))
													: this.account_type==='teacher'
														? asyncComponent(()=>import('./Teacher'))
														: this.account_type==='staff'
															? asyncComponent(()=>import('./Staff'))
															: Error404;

		return (
			<div className="app-wrapper">
				<div className="jr-profile-content">
					<RenderProfile username={this.username} />
				</div>
			</div>
		);
	}
}


export default Profile;