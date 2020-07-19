import React from 'react';
import StudentProfile from './Student';
import TeacherProfile from './Teacher';
import StaffProfile from './Staff';

import './style.css'


class Profile extends React.Component {
	constructor(props){
		super(props)
		this.username = props.match.params.username
		this.account_type = props.account_type
	}

	render() {
		const RenderProfile = this.account_type==='student'? StudentProfile: this.account_type==='teacher'? TeacherProfile: StaffProfile
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