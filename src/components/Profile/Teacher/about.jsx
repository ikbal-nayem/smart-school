import React from 'react';


export default function About({data}) {
  return (
  	<React.Fragment>
	  	<hr className="my-2"/>
	  	<div className="row">
				<div className="col-4">Gender</div>
				<div>{data.teacher_personal_info.gender}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Date of Birth</div>
				<div>{data.teacher_personal_info.dob}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Religion</div>
				<div>{data.teacher_personal_info.religion}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Blood Group</div>
				<div>{data.teacher_personal_info.blood_group}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Joined At</div>
				<div>{data.academic_info.joined_at}</div>
			</div>
		</React.Fragment>
  );
}
