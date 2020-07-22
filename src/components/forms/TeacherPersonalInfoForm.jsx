import React from 'react';
import {
	TextField,
	Select,
	FormControl,
	InputLabel,
	InputAdornment,
	IconButton
} from '@material-ui/core';

import AddRoundedIcon from '@material-ui/icons/AddRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


const TeacherPersonalInfoForm =({init_data, setNewData})=>{

	const handleChange = (event) => {
		const exceptional = ['first_name', 'last_name', 'phone_numbers', 'pictures']
		const name = event.target.id;
		if(exceptional.indexOf(name) === -1){
			setNewData({
				...init_data,
				teacher_personal_info: {
					...init_data.teacher_personal_info,
					[name]: event.target.value,
				}
			})
		} else if(name==='first_name' || name==='last_name'){
			setNewData({
				...init_data,
				[name]: event.target.value
			})
		} else if(name==='phone_numbers'){
			let li = [...init_data.phone_numbers]
			li[event.target.name] = {
				number: event.target.value
			}
			setNewData({
				...init_data,
				phone_numbers: li
			})
		} else if(name==='pictures'){
			setNewData({
				...init_data,
				pictures: {
					profile: event.target.files[0]
				}
			})
		}
	};


	const addPhoneField = ()=>{
		setNewData({
			...init_data,
			phone_numbers: [
				...init_data.phone_numbers,
				{'number': null}
			]
		})
	}


	return(
		<form>
			<div className="card px-4 py-3">

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
							<TextField
								id="first_name"
								label="First Name"
								required
								value={init_data.first_name}
								onChange={handleChange}
								className="mb-3"
							/>
					</div>
					<div className="col-sm-6 col-12 p-0">
							<TextField
								id="last_name" 
								label="Last Name" 
								required
								value={init_data.last_name}
								onChange={handleChange}
								className="mb-3"
							/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className="mb-3" style={{minWidth: '80%'}} required>
							<InputLabel htmlFor="gender">Gender</InputLabel>
							<Select
								native
								value={init_data.teacher_personal_info.gender}
								onChange={handleChange}
								inputProps={{ name: 'gender', id: 'gender' }}
							>
								<option aria-label="None" value="" />
								<option value='male'>Male</option>
								<option value='female'>Female</option>
								<option value='other'>Other</option>
							</Select>
						</FormControl>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField
			        id="dob"
			        label="Birth Date"
			        required
			        className="mb-3"
			        type="date"
			        defaultValue={init_data.teacher_personal_info.dob}
			        onChange={handleChange}
			        InputLabelProps={{shrink: true,}}
			      />
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="blood_group" 
							label="Blood Group" 
							value={init_data.teacher_personal_info.blood_group}
							onChange={handleChange}
							className="mb-3" 
						/>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="religion" 
							label="Religion" 
							value={init_data.teacher_personal_info.religion}
							onChange={handleChange}
							className="mb-3" 
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className="mb-3" fullWidth>
							<InputLabel htmlFor="marital_status">Marital Status</InputLabel>
							<Select
								native
								value={init_data.teacher_personal_info.marital_status}
								onChange={handleChange}
								inputProps={{ name: 'marital_status', id: 'marital_status' }}
							>
								<option aria-label="None" value="" />
								<option value='male'>Married</option>
								<option value='female'>Unmarried</option>
							</Select>
						</FormControl>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-11 p-0">
						{
							init_data.phone_numbers.map((data, index)=>(
								<TextField
									id="phone_numbers"
									label="Phone"
									type="number"
									value={data.number}
									onChange={handleChange}
									className='mb-3 animated slideInDown animation-duration-1'
									style={{width: '100%'}}
									InputProps={{
										startAdornment: <InputAdornment position="start">+880</InputAdornment>,
										name: index
									}}
								/>
							))
						}
					</div>
					<div className="col-1 pr-0">
						<div className="card p-0 m-0 h-100" style={{justifyContent: 'flex-end'}}>
							<IconButton aria-label="add-phone-field" className="p-1 mb-3" onClick={addPhoneField}>
							  <AddRoundedIcon color="primary" />
							</IconButton>
						</div>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField
							id="email"
							label="Email"
							value={init_data.teacher_personal_info.email}
							onChange={handleChange}
							className='mb-3'
							fullWidth
							InputProps={{
			          startAdornment: (<InputAdornment position="start"><AlternateEmailIcon color="primary" /></InputAdornment>),
			        }}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-8 col-12 p-0">
						<TextField
							id="facebook_id"
							label="Facebook Link"
							value={init_data.teacher_personal_info.facebook_id}
							onChange={handleChange}
							className='mb-3'
							fullWidth
							InputProps={{
			          startAdornment: (<InputAdornment position="start"><FacebookIcon color="primary" /></InputAdornment>),
			        }}
						/>
					</div>
				</div>

				<div>
					<TextField
						id="address"
						label="Address"
						defaultValue={init_data.teacher_personal_info.address}
						onChange={handleChange}
						fullWidth
						className="mb-3"
						multiline
					/>
				</div>
				<div>
					<label htmlFor="pictures" color="primary">Choose Picture</label><br/>
					<input name="pictures" accept="image/*" id="pictures" type="file" multiple className="py-2" onChange={handleChange}/>
				</div>
			</div>
		</form>
	)
}

export { TeacherPersonalInfoForm };