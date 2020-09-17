import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab';


const AcademicInfo = ({academic_info, name, photo}) => {
	const his = useHistory()
	const class_info = academic_info.class_info[0]

	const back = () =>{
		his.goBack()
	}

	return(
		<div className="jr-card shadow border-0 mb-2 animated slideInUp animation-duration-2">
			<div className="jr-card-header-color bg-gradient-primary text-center" style={styles.header_padding}>
				<div className="jr-card-header-top">
					<IconButton aria-label="back" className="text-white" style={{padding:6}} onClick={back}>
						<ArrowBack />
					</IconButton>
				</div>
				<img class="rounded-circle size-100 avatar-shadow mb-2 scale-12" src={photo} alt="Student" />
				<div className="text-white">{name}</div>
			</div>
			<div className="jr-card-body p-0">
				<div className="row">
					<div className="col-4">Class</div>
					<div>{class_info && class_info.class_code ? class_info.class_code : <Skeleton animation="wave" width={80} height={20}/> }</div>
				</div>
				{
					class_info.group ?
					<React.Fragment>
					<hr className="my-2"/>
					<div className="row">
						<div className="col-4">Group</div>
						<div>{class_info.group ? class_info.group : <Skeleton animation="wave" width={80} height={20}/>}</div>
					</div>
					</React.Fragment> : null
				}
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Section</div>
					<div>{class_info && class_info.section ? class_info.section : <Skeleton animation="wave" width={80} height={20}/>}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Roll</div>
					<div>{class_info && class_info.roll ? class_info.roll : <Skeleton animation="wave" width={80} height={20}/>}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Shift</div>
					<div>{class_info && class_info.shift ? class_info.shift : <Skeleton animation="wave" width={80} height={20}/>}</div>
				</div>
				<hr className="my-2"/>
				<div className="row">
					<div className="col-4">Year</div>
					<div>{class_info && class_info.session ? class_info.session : <Skeleton animation="wave" width={80} height={20}/>}</div>
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