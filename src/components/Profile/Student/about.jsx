import React from 'react';


export default function About({data}) {
  return (
  	<React.Fragment>
	  	<hr className="my-2"/>
	  	<div className="row">
				<div className="col-4">Gender</div>
				<div>{data.student_personal_info.gender}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Date of Birth</div>
				<div>{data.student_personal_info.dob?data.student_personal_info.dob:'-'}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">religion</div>
				<div>{data.student_personal_info.religion?data.student_personal_info.religion:'-'}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Blood Group</div>
				<div>{data.student_personal_info.blood_group?data.student_personal_info.blood_group:'-'}</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Admitted At</div>
				<div>{data.student_personal_info.admitted_at?data.student_personal_info.admitted_at:'-'}</div>
			</div>
		</React.Fragment>
  );
}
