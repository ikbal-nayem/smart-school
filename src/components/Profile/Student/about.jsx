import React from 'react';


export default function About() {
  return (
  	<React.Fragment>
	  	<hr className="my-2"/>
	  	<div className="row">
				<div className="col-4">Gender</div>
				<div>Male</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Date of Birth</div>
				<div>14-JUN-1996</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">religion</div>
				<div>Muslim</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Blood Group</div>
				<div>B+</div>
			</div>
			<hr className="my-2"/>
			<div className="row">
				<div className="col-4">Admitted At</div>
				<div>21-JAN-2020</div>
			</div>
		</React.Fragment>
  );
}
