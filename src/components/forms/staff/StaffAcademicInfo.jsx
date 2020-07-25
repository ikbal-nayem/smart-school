import React from 'react';
import {
	TextField,
} from '@material-ui/core';


const StaffAcademicInfo =({init_data, setNewData})=>{

	const handleChange = (event) => {
		const exceptional = ['degree', 'qualification']
		const name = event.target.name;
		if(exceptional.indexOf(name) === -1){
			setNewData({
				...init_data,
				academic_info:{
					...init_data.academic_info,
					[name]: event.target.value,
				}
			});
		} else {
			setNewData({
				...init_data,
				staff_personal_info:{
					...init_data.staff_personal_info,
					[name]: event.target.value
				}
			})
		}
	};



	return(
		<form>
			<div className="card px-4 py-3">

				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField
							id="degree"
							label="Degree"
							type="text"
							value={init_data.academic_info.degree}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							inputProps={{name:'degree'}}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-10 col-12 p-0">
						<TextField
							id="qualification"
							label="Qualifications"
							type="text"
							value={init_data.academic_info.qualification}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							multiline
							inputProps={{name:'qualification'}}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-12 p-0">
						<TextField 
							id="designation" 
							label="Designation" 
							type="text"
							value={init_data.academic_info.designation}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							inputProps={{name:'designation'}}
						/>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField
							id="joined_at"
							label="Joining date"
							className="mb-3"
							fullWidth
							type="date"
							defaultValue={init_data.academic_info.joined_at}
							onChange={handleChange}
							InputLabelProps={{shrink: true,}}
							inputProps={{name:'joined_at'}}
						/>
					</div>
				</div>

			</div>
		</form>
	)
}

export { StaffAcademicInfo };
