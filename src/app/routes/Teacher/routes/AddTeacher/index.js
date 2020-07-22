import React from 'react';
import {Divider, Typography, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import {
	TeacherPersonalInfoForm,
	TeacherAcademicInfoForm,
} from 'components/forms';

import { init_data } from './dummy';



export default class AddTeacher extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:{...init_data}
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange =(new_date)=>{
		this.setState({data: {...new_date}})
	}

	render(){
		console.log(this.state.data)
		return(
			<div className="jr-card m-3 p-0 animated zoomIn animation-duration-3" style={{overflow:'hidden'}}>
				<div className="jr-card-header text-center bg-secondary text-white m-0 p-2">
					<Typography variant="h6">Teacher Form</Typography>
				</div>
				<div className="card-body p-0 m-0">

					<div className="row m-0">
						<div className="col-md-6 col-sm-12 col-12 p-0 animated fadeInRightTiny animation-delay-2">
							<TeacherPersonalInfoForm init_data={this.state.data} setNewData={this.handleChange} />
						</div>
						
						<div className='d-md-block d-none mt-5 mb-5 bg-primary'>
							<Divider orientation="vertical" />
						</div>
						<hr className="mt-4 mb-2 d-md-none bg-primary" style={{width: '70%'}} />
						
						<div className="col-md-6 col-sm-12 col-12 p-0 animated fadeInLeftTiny animation-delay-2" style={{maxWidth: 'calc(50% - 2px)'}}>
							<TeacherAcademicInfoForm init_data={this.state.data} setNewData={this.handleChange} />
						</div>
					</div>


					<div className="d-flex" style={{justifyContent:'center'}}>
						<Button size="small" className="mb-3 mr-1 text-danger">Calcel</Button>
						<Button size="small" variant="outlined" color="secondary" className="mb-3 mx-1">Submit & Another</Button>
						<Button size="small" variant="contained" endIcon={<SendIcon />} color="primary" className="mb-3 ml-1">Submit</Button>
					</div>

				</div>
			</div>
		)
	}
}