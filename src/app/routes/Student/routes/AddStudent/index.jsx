import React from 'react';
import {Divider, Typography, Button, Grid, TextField, Modal, Backdrop} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';

import GuardianCard from 'components/Profile/Student/guardian';

import {
	PersonalInfoForm,
	AcademicInfoForm,
	GuardianInfoForm,
} from 'components/forms';

import { init_data, g_init_data } from './dummy';



export default class AddStudent extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			data:{...init_data},
			g_modal: false,
			guardianData: null
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleGModal = this.handleGModal.bind(this)
		this.setGuardianData = this.setGuardianData.bind(this)
	}

	handleChange =(new_date)=>{
		this.setState({data: {...new_date}})
	}

	handleGModal =()=>{
		this.setState({g_modal: !this.state.g_modal})
	}
	closeGModal =()=>{
		console.log('closed')
	}

	setGuardianData =(data)=>{
		this.setState({guardianData: {...data}})
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
							<PersonalInfoForm init_data={this.state.data} setNewData={this.handleChange} />
						</div>
						
						<div className='d-md-block d-none mt-5 mb-5 bg-primary'>
							<Divider orientation="vertical" />
						</div>
						<hr className="mt-4 mb-2 d-md-none bg-primary" style={{width: '70%'}} />
						
						<div className="col-md-6 col-sm-12 col-12 p-0 animated fadeInLeftTiny animation-delay-2" style={{maxWidth: 'calc(50% - 2px)'}}>
							<AcademicInfoForm init_data={this.state.data} setNewData={this.handleChange} />
						</div>
					</div>

					<div className="row m-0 animated slideInDown animation-delay-3">
						<div className="col-12 text-center text-primary">
							<Typography variant="h6">Guardian Information</Typography>
							<hr className="my-2 bg-primary" style={{width: '70%'}} />
							{
								!this.state.guardianData ?
									<div className="card">
										<Grid container spacing={1} alignItems="center" className="my-3" style={{justifyContent:'center'}}>
											<Grid item>
												<SearchIcon />
											</Grid>
											<Grid item>
												<TextField id="g_search" label="Search existing one" type="search" variant="outlined" size="small" />
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
							        onClose={this.closeGModal}
							        closeAfterTransition
							        BackdropComponent={Backdrop}
							        BackdropProps={{
							          timeout: 500,
							        }}
							      >
											<GuardianInfoForm init_data={g_init_data} close={this.handleGModal} setGuardianData={this.setGuardianData}/>
										</Modal>
									</div>
								:
									<div className="card">
										<div className="row m-0">
											<div className="col-sm-6 col-12">
												<GuardianCard data={this.state.guardianData}/>
											</div>
											<div className="col-sm-6 col-12 d-flex align-items-center">
												<TextField id="guardian_relation" label="Relation with student" className="mr-auto" type="search"/>
											</div>
										</div>
									</div>
							}
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