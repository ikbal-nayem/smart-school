import React from 'react';
import {
	TextField,
	InputAdornment,
	Button,
	FormControl,
	InputLabel,
	Select,
	IconButton
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import AddRoundedIcon from '@material-ui/icons/AddRounded';


const GuardianInfoForm =({init_data, close, setGuardianData})=>{
	const [state, setState] = React.useState({...init_data})


	const handleChange = (event) => {
		const exceptional = ['first_name', 'last_name', 'phone_numbers', 'pictures']
		const name = event.target.id;
		if(exceptional.indexOf(name) === -1){
			setState({
				...state,
				guardian_personal_info: {
					...state.guardian_personal_info,
					[name]: event.target.value,
				}
			})
		} else if(name==='first_name' || name==='last_name'){
			setState({
				...state,
				[name]: event.target.value
			})
		} else if(name==='phone_numbers'){
			let li = [...state.phone_numbers]
			li[event.target.name] = {
				number: event.target.value
			}
			setState({
				...state,
				phone_numbers: li
			})
		} else if(name==='pictures'){
			setState({
				...state,
				pictures: {
					profile: event.target.files[0]
				}
			})
		}
	};

	const addPhoneField = ()=>{
		setState({
			...state,
			phone_numbers: [
				...state.phone_numbers,
				{'number': null}
			]
		})
	}

	const passData =()=>{
		setGuardianData(state)
		close()
	}


	return(
		<React.Fragment>
			<div className="card px-4 py-3 animated zoomInDown animation-duration-4" style={{maxWidth: 500}}>

				<div className="row m-0">
					<div className="col-sm-6 col-12">
						<TextField 
							required 
							id="first_name" 
							label="First Name" 
							className="mb-3" 
							value={state.first_name}
							onChange={handleChange} 
						/>
					</div>
					<div className="col-sm-6 col-12">
						<TextField 
							required 
							id="last_name" 
							label="Last Name" 
							className="mb-3"
							value={state.last_name}
							onChange={handleChange} 
						/>
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-4 col-12">
						<FormControl className="mb-3" required fullWidth>
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
						/>
					</div>
				</div>

				<div className="d-flex" style={{justifyContent:'flex-end'}}>
					<Button size="small" className="mb-3 mr-1 text-danger" onClick={close}>Calcel</Button>
					<Button size="small" variant="contained" onClick={passData} endIcon={<SaveIcon/>} color="primary" className="mb-3 ml-1">Save</Button>
				</div>

			</div>
		</React.Fragment>
	)
}

export { GuardianInfoForm };