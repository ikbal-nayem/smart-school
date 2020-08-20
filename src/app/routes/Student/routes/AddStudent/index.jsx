import React from 'react';
import {Divider, Typography, Button, Grid, TextField, Modal, Backdrop, CircularProgress} from '@material-ui/core';
import {Save, Search} from '@material-ui/icons';
import Toast from 'components/Toast';

import GuardianCard from 'components/Profile/Student/guardian';
import {addNewStudent} from './action';

import {
	PersonalInfoForm,
	AcademicInfoForm,
	GuardianInfoForm,
	SearchGuardian
} from 'components/forms';

import { init_data, validated_data } from './dummy';


export default class AddStudent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data: init_data,
			academic_info: init_data.academic_info,
			g_modal: false,
			guardianData: null,
			saving: false,
			success: false,
			validated: validated_data,
		}
		delete this.state.data.academic_info

		this.handleChange = this.handleChange.bind(this)
		this.handleGModal = this.handleGModal.bind(this)
		this.handleAcademicInfo = this.handleAcademicInfo.bind(this)
		this.setGuardianData = this.setGuardianData.bind(this)
	}

	handleChange =(new_data)=>{
		this.setState({data: new_data})
	}
	handleAcademicInfo =(academic)=>{
		this.setState({academic_info: academic})
	}
	handleGInfo =(event)=>{
		let stst_data = this.state.data
		stst_data.student_personal_info['guardian_relation'] = event.target.value
		this.setState({ data: stst_data })
	}

	handleGModal =()=>{
		this.setState({g_modal: !this.state.g_modal})
	}


	setGuardianData =(data)=>{
		let stst_data = this.state.data
		stst_data.student_personal_info['guardian'] = data.username
		this.setState({
			guardianData: data,
			data: stst_data
		})
	}

	checkValidation	=()=>{
		let valid = true
		this.setState({
			validated:{
				"first_name": !(this.state.data.first_name===null || this.state.data.first_name===""),
				"last_name": !(this.state.data.last_name===null || this.state.data.last_name===""),
				"gender": !(this.state.data.student_personal_info.gender===null || this.state.data.student_personal_info.gender===""),
				"dob": !(this.state.data.student_personal_info.dob===null || this.state.data.student_personal_info.dob===""),
				"shift": !(this.state.academic_info.shift===null || this.state.academic_info.shift===""),
				"class_code": !(this.state.academic_info.class_code===null),
				"group": !((['ix','x','xi','xii']).indexOf(this.state.academic_info.class_code)!==-1 && this.state.academic_info.group===null),
				"session": !(this.state.academic_info.session===null || this.state.academic_info.session==="")
			}
		})
		Object.keys(this.state.validated).map(key=>{
			if(!this.state.validated[key]){
				valid = false
				return false
			}
			return true
		})
		return valid
	}

	handleSubmit = async ()=>{
		if(this.checkValidation()){
			this.setState({saving: true})
			let data = this.state.data
			data["academic_info"] = this.state.academic_info
			const form_data = new FormData()
			form_data.append('data', JSON.stringify(data))
			if(this.state.data.pictures.profile){
				form_data.append('picture', this.state.data.pictures.profile)
			}
			let resp = await addNewStudent(form_data)
			if(resp.success){
				this.setState({saving: false, success: true})
				this.props.history.goBack()
			}
			this.setState({saving: false, success: false})
		}
	}


	render(){
		return(
			<div className="jr-card m-3 p-0 animated zoomIn animation-duration-3" style={{overflow:'hidden'}}>
				<div className="jr-card-header text-center bg-secondary text-white m-0 p-2">
					<Typography variant="h6">Student Form</Typography>
				</div>
				<div className="card-body p-0 m-0">

					<div className="row m-0">
						<div className="col-md-6 col-sm-12 col-12 p-0 animated fadeInRightTiny animation-delay-2">
							<PersonalInfoForm
								init_data={this.state.data}
								setNewData={this.handleChange}
								validated={this.state.validated}
							/>
						</div>
						
						<div className='d-md-block d-none mt-5 mb-5 bg-primary'>
							<Divider orientation="vertical" />
						</div>
						<hr className="mt-4 mb-2 d-md-none bg-primary" style={{width: '70%'}} />
						
						<div className="col-md-6 col-sm-12 col-12 p-0 animated fadeInLeftTiny animation-delay-2" style={styles.academic}>
							<AcademicInfoForm
								init_data={this.state.academic_info}
								setNewData={this.handleAcademicInfo}
								validated={this.state.validated}
								/>
						</div>
					</div>

					<div className="row m-0 animated slideInDown animation-delay-3">
						<div className="col-12 text-center text-primary">
							<Typography variant="h6">Guardian Information</Typography>
							<hr className="my-2 bg-primary" style={{width: '70%'}} />
							{
								!this.state.guardianData ?
									<div className={`card align-items-center ${this.state.guardianData?'animated zoomOut animation-duration-1':null}`}>
										<Grid container spacing={1} alignItems="center" className="my-3 justify-content-center">
											<Grid item>
												<Search />
											</Grid>
											<Grid item>
												<SearchGuardian setGuardianData={this.setGuardianData} />
											</Grid>
										</Grid>
										<div className="d-flex align-items-center m-auto">
											<div className="jr-separator mb-0"/>
											<Typography variant="h6" color="primary" style={{marginLeft:10, marginRight:10}}>OR</Typography>
											<div className="jr-separator mb-0"/>
										</div>
										<Button variant="contained" className="w-50 m-auto my-3" color="secondary" onClick={this.handleGModal}>Add new Guardian</Button>
										<Modal
											aria-labelledby="g-modal"
											aria-describedby="g-modal-description"
											className="d-flex align-items-center justify-content-center"
											open={this.state.g_modal}
											onClose={()=>console.log('Guardian Modal closed.')}
											closeAfterTransition
											BackdropComponent={Backdrop}
											BackdropProps={{
												timeout: 500,
											}}
										>
											<GuardianInfoForm close={this.handleGModal} setGuardianData={this.setGuardianData}/>
										</Modal>
									</div>
								:
									<div className="card animated zoomIn animation-duration-2">
										<div className="row m-0">
											<div className="col-sm-6 col-12 animated slideInRight animation-delay-1">
												<GuardianCard guardian={this.state.guardianData}/>
											</div>
											<div className="col-sm-6 col-12 d-flex align-items-center animated slideInLeft animation-delay-1">
												<TextField
													id="guardian_relation"
													required
													label="Relation with student"
													value={this.state.data.student_personal_info.guardian_relation}
													onChange={this.handleGInfo}
													className="mr-auto"
													type="search"
												/>
											</div>
										</div>
									</div>
							}
						</div>
					</div>

					<div className="d-flex" style={{justifyContent:'center'}}>
						<Button size="small" className="mb-3 mr-1 text-danger" onClick={()=>this.props.history.goBack()}>Calcel</Button>
						<Button 
							size="small" 
							variant="outlined" 
							color="primary" 
							className="mb-3 mx-1"
						>Save & Another</Button>
						<Button 
							size="small" 
							variant="contained" 
							disabled={this.state.saving}
							onClick={this.handleSubmit} 
							endIcon={this.state.saving?<CircularProgress color="white" size={20}/>:<Save/>} 
							color="primary" 
							className="mb-3 ml-1"
						>Save</Button>
					</div>

					{this.state.success?<Toast
																	message={this.state.success?"Student added successfully!":"Could not add the student."} 
																	type={this.state.success?"success":"danger"}
															/>:null}

				</div>
			</div>
		)
	}
}


const styles = {
	academic: {
		maxWidth: (window.screen.width<400)?'100%':'calc(50% - 2px)',
	}
}