import React from 'react';
import AcademicInfo from './academic-info';
import Information from './info';
import Guardian from './guardian';
import ClassInfo from './ClassInfo';

import { getDetails } from '../action';

import {dummy} from './data'



class StudentProfile extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			username: this.props.username,
			data: dummy,
			academic_info: dummy.academic_info,
		}
		this.onClassChange = this.onClassChange.bind(this)
	}

	async componentDidMount(){
		let data = await getDetails('student', this.state.username)
		this.setState({data: data, academic_info: data.academic_info})
	}

	onClassChange(academic_info){
		this.setState({academic_info: academic_info})
	}

	render(){
		return(
			<div className="row">
				<div className="col-xl-4 col-lg-4 col-md-4 col-12" style={{paddingRight:8}}>
					<AcademicInfo 
						academic_info={this.state.academic_info} 
						name={`${this.state.data.first_name} ${this.state.data.last_name}`}
						photo={this.state.data.pictures.profile}
					/>
					<Information data={this.state.data}/>
					<Guardian guardian={this.state.data.student_personal_info.guardian}/>
				</div>
				<div className="col-xl-8 col-lg-8 col-md-8 col-12" style={{paddingLeft:8, paddingRight:8}}>
					<ClassInfo
						username={this.state.username}
						academic_info={this.state.academic_info} 
						changeClass={this.onClassChange}
					/>
				</div>
			</div>
		)
	}
}


export default StudentProfile;