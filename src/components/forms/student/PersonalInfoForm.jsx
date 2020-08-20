import React from 'react';
import {
	TextField,
	Select,
	FormControl,
	InputLabel,
	InputAdornment,
	IconButton,
	FormHelperText
} from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';


const PersonalInfoForm =({init_data, setNewData, validated})=>{

	const handleChange = (event) => {
		const exceptional = ['first_name', 'last_name', 'phone_numbers', 'pictures']
		const name = event.target.id;
		let new_data = init_data

		if(exceptional.indexOf(name) === -1){
			new_data.student_personal_info[name] = event.target.value
		} else if(name==='first_name' || name==='last_name'){
			new_data[name] = event.target.value
		} else if(name==='phone_numbers'){
			let li = [...init_data.phone_numbers]
			li[event.target.name] = {
				number: event.target.value
			}
			new_data['phone_numbers'] = li
		} else if(name==='pictures'){
			new_data.pictures['profile'] = event.target.files[0]
		}
		setNewData(new_data)
	};


	const addPhoneField = ()=>{
		let new_field = init_data
		new_field['phone_numbers'] = [...init_data.phone_numbers, {'number': null}]
		setNewData(new_field)
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
							error={!validated.first_name}
							helperText={!validated.first_name?"First Name is require":null}
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
							error={!validated.last_name}
							helperText={!validated.last_name?"Last Name is require":null}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className="mb-3" 
							style={{width: '60%'}} 
							required 
							error={!validated.gender}
						>
							<InputLabel htmlFor="gender">Gender</InputLabel>
							<Select
								native
								value={init_data.student_personal_info.gender}
								onChange={handleChange}
								inputProps={{ name: 'gender', id: 'gender' }}
							>
								<option aria-label="None" />
								<option value='male'>Male</option>
								<option value='female'>Female</option>
								<option value='other'>Other</option>
							</Select>
							<FormHelperText>{!validated.gender?"Gender is require":null}</FormHelperText>
						</FormControl>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField
			        id="dob"
			        label="Birthdate"
			        required
			        className="mb-3"
			        type="date"
			        defaultValue={init_data.student_personal_info.dob}
			        onChange={handleChange}
			        InputLabelProps={{shrink: true,}}
			        error={!validated.dob}
							helperText={!validated.dob?"Birthday is require":null}
			      />
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="blood_group" 
							label="Blood Group" 
							value={init_data.student_personal_info.blood_group}
							onChange={handleChange}
							className="mb-3" 
						/>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="religion" 
							label="Religion" 
							value={init_data.student_personal_info.religion}
							onChange={handleChange}
							className="mb-3" 
						/>
					</div>
				</div>

				<div className="row m-0">
					<TextField
		        id="admitted_at"
		        label="Admitted At"
		        className="mb-3"
		        type="date"
		        defaultValue={init_data.student_personal_info.admitted_at}
		        onChange={handleChange}
		        InputLabelProps={{shrink: true,}}
		      />
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
									className='mb-3 animated slideInDown animation-duration-2'
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
							value={init_data.student_personal_info.email}
							onChange={handleChange}
							className='mb-3'
							fullWidth
						/>
					</div>
				</div>
				<div>
					<TextField
						id="address"
						label="Address"
						defaultValue={init_data.student_personal_info.address}
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

export { PersonalInfoForm };