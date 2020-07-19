import React from 'react';
import {
	TextField,
	InputAdornment
} from '@material-ui/core';


const GuardianInfoForm =()=>{
	return(
		<form>
			<div className="card px-4 py-3">

				<div className="row m-0">
					<div className="col-sm-6 col-12">
				      <TextField required id="g_first_name" label="First Name" className="mb-3" />
					</div>
					<div className="col-sm-6 col-12">
				      <TextField required id="g_last_name" label="Last Name" className="mb-3" />
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12">
				      <TextField id="g_occupation" label="Occupation" className="mb-3" fullWidth />
					</div>
					<div className="col-sm-6 col-12">
				      <TextField required id="g_relation" label="Relation With Student" className="mb-3" />
					</div>
				</div>

				<div className="row m-0">
					<div className="col-sm-6 col-12">
				      <TextField
								id="g_phone"
								label="Phone Number"
								className='mb-3'
								type='number'
								InputProps={{
									startAdornment: <InputAdornment position="start">+880</InputAdornment>,
								}}
							/>
					</div>
					<div className="col-sm-6 col-12">
				      <TextField id="g_email" label="Email" className="mb-3" fullWidth />
					</div>
				</div>

			</div>
		</form>
	)
}

export { GuardianInfoForm };