import React from 'react';

class TeacherProfile extends React.Component{
	render(){
		return(
			<div className="jr-profile-content">
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-4 col-12">
						<div className="jr-card jr-profile-card">
							teacher Profile
							{this.props.username}
						</div>
					</div>
					<div className="col-xl-8 col-lg-8 col-md-8 col-12">
						<div className="jr-card jr-profile-card">
							{this.props.username}
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default TeacherProfile;