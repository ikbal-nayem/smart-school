import React from 'react';
import {
	TextField,
	InputAdornment,
	Button,
	FormControl,
	InputLabel,
	Select,
	IconButton,
	CircularProgress,
	FormHelperText
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import {addNewGuardian} from '../action';


const GuardianInfoForm =({close, setGuardianData})=>{
	const [validation, setValidation] = React.useState({
		first_name: false,
		last_name: false,
		gender: false
	})
	const [saving, setSaving] = React.useState(false)
	const [emailExists, setEmailExists] = React.useState(false)
	const [state, setState] = React.useState({
		"username": null,
		"first_name": null,
		"last_name": null,
		"account_type": 'guardian',
		"guardian_personal_info": {
			"occupation": null,
			"gender": null,
			"email": null
		},
		"phone_numbers": [
			{
				"number": null
			}
		]
	})


	const handleChange = (event) => {
		const exceptional = ['first_name', 'last_name', 'phone_numbers', 'pictures']
		const name = event.target.id;
		let new_state = state
		if(exceptional.indexOf(name) === -1){
			new_state.guardian_personal_info[name] = event.target.value
		} else if(name==='first_name' || name==='last_name'){
			new_state[name] = event.target.value
		} else if(name==='phone_numbers'){
			let li = [...state.phone_numbers]
			li[event.target.name] = {
				number: event.target.value
			}
			new_state['phone_numbers'] = li
		} else if(name==='pictures'){
			new_state.pictures['profile'] = event.target.files[0]
		}
		setState(new_state)
	};

	const addPhoneField = ()=>{
		let new_field = state
		new_field['phone_numbers'] = [...state.phone_numbers, {'number': null}]
		setState(new_field)
	}

	const checkValidation =()=>{
		let is_valid = true
		setValidation({
			first_name: state.first_name===null || state.first_name==="",
			last_name: state.last_name===null || state.last_name==="",
			gender: state.guardian_personal_info.gender===null || state.guardian_personal_info.gender===""
		})
		Object.keys(validation).map(key=>{
			if(validation[key]){
				is_valid = false
				return false
			}
			return false
		})
		return is_valid;
	}

	const passData =async ()=>{
		if(checkValidation()){
			setSaving(true)
			let data = await addNewGuardian(state)
			if(data.success){
				setGuardianData(data)
				close()
			} else {
				console.log(data)
				if(data.guardian_personal_info && data.guardian_personal_info.email){
					setEmailExists(true)
				}
			}
			setSaving(false)
		}
	}


	return(
		<React.Fragment>
			<div className="card px-4 py-3 animated zoomInDown animation-duration-4" style={{maxWidth: 500}}>
				<div className="row m-0">
					<div className="col-sm-6 col-12">
						<TextField
							error={validation.first_name}
							required 
							id="first_name" 
							label="First Name" 
							className="mb-3" 
							value={state.first_name}
							onChange={handleChange}
							helperText={validation.first_name?"First Name is required":null}
						/>
					</div>
					<div className="col-sm-6 col-12">
						<TextField
							error={validation.last_name}
							required 
							id="last_name" 
							label="Last Name" 
							className="mb-3"
							value={state.last_name}
							onChange={handleChange}
							helperText={validation.last_name?"Last Name is required":null}
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-4 col-12">
						<FormControl className="mb-3" required fullWidth error={validation.gender}>
							<InputLabel htmlFor="gender">Gender</InputLabel>
							<Select
								native
								value={state.gender}
								onChange={handleChange}
								inputProps={{ name: 'gender', id: 'gender' }}
							>
								<option aria-label="None" value="" />
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</Select>
							<FormHelperText>{validation.gender?'Gender is required':null}</FormHelperText>
						</FormControl>
					</div>
					<div className="col-sm-8 col-12">
						<TextField
							id="occupation"
							label="Occupation"
							value={state.occupation}
							onChange={handleChange}
							className="mb-3"
							fullWidth
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-10">
						{
							state.phone_numbers.map((data, index)=>(
								<TextField
									key={index}
									id="phone_numbers"
									label="Phone"
									type="number"
									value={data.number}
									onChange={handleChange}
									fullWidth
									className='mb-3 animated slideInDown animation-duration-1'
									InputProps={{
										startAdornment: <InputAdornment position="start">+880</InputAdornment>,
										name: index
									}}
								/>
							))
						}
					</div>
					<div className="col-2">
						<div className="card p-0 m-0 h-100" style={{justifyContent: 'flex-end'}}>
							<IconButton aria-label="add-phone-field" className="p-1 mb-3" onClick={addPhoneField}>
							  <AddRoundedIcon color="primary" />
							</IconButton>
						</div>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-10 col-12">
						<TextField
							id="email"
							label="Email"
							value={state.email}
							onChange={handleChange}
							className="mb-3"
							fullWidth
							error={emailExists}
							helperText={emailExists?"Email is already exists.":null}
						/>
					</div>
				</div>

				<div className="d-flex" style={{justifyContent:'flex-end'}}>
					<Button size="small" className="mb-3 mr-1 text-danger" onClick={close}>Calcel</Button>
					<Button 
						size="small" 
						variant="contained" 
						onClick={passData} 
						disabled={saving}
						endIcon={saving ? <CircularProgress size={20}/> : <SaveIcon/>} 
						color="primary" 
						className="mb-3 ml-1"
					>Save</Button>
				</div>

			</div>
		</React.Fragment>
	)
}

export { GuardianInfoForm };