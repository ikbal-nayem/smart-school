import React from 'react';
import AcademicInfo from './academic-info';
import Information from './info';
import Guardian from './guardian';

import ClassInfo from './ClassInfo';
import './style.css'
import {data1, data2} from './data'



class StudentProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data: data1,
			class_info: data1.academic_info.class_info,
			academic_info: data1.academic_info
		}
	}

	render(){
		console.log(this.state.class_info)
		return(
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{paddingRight:8}}>
					<AcademicInfo class_info={this.state.class_info}/>
					<Information data={this.state.data}/>
					<Guardian />
				</div>
				<div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{paddingLeft:8}}>
					<ClassInfo academic_info={this.state.academic_info} />
				</div>
			</div>
		)
	}
}


export default StudentProfile;