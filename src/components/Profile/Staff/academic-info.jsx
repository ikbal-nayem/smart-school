import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons'


const AcademicInfo = ({data}) => {
	const his = useHistory()

	const back = () =>{
		his.goBack()
	}

	return(
		<div className="jr-card shadow border-0 mb-2">
			<div className="jr-card-header-color bg-gradient-primary text-center" style={styles.header_padding}>
				<div className="jr-card-header-top">
					<IconButton aria-label="back" className="text-white" style={{padding:6}} onClick={back}>
						<ArrowBack />
					</IconButton>
				</div>
				<img class="rounded-circle size-100 avatar-shadow mb-2" src={data.pictures.profile} alt="Teacher" />
				<div className="text-white">{data.first_name}&nbsp;{data.last_name}</div>
			</div>
			<div className="jr-card-body p-0">
				<div className="row">
					<div className="col-4">Designation</div>
					<div>{data.academic_info.designation}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Qualification</div>
					<div>{data.staff_personal_info.qualification}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Gender</div>
					<div>{data.staff_personal_info.gender}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Joined</div>
					<div>{data.academic_info.joined_at}</div>
				</div>
			</div>
		</div>
	)
}


export default AcademicInfo;


const styles = {
	header_padding: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 20,
		paddingRight: 20
	}
}