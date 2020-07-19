import React from 'react';
import AcademicInfo from './academic-info';
import Information from './info';
import SubjectInfo from './subjectInfo';

import {data} from './data';




class TeacherProfile extends React.Component{

	render(){
		return(
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{paddingRight:8}}>
					<AcademicInfo data={data}/>
					<Information data={data}/>
				</div>
				<div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{paddingLeft:8, paddingRight:8}}>
					<SubjectInfo />
				</div>
			</div>
		)
	}
}


export default TeacherProfile;