import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	TextField,
	Select,
	InputLabel,
	MenuItem,
	FormControl
} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0, 0, 1, 0),
    minWidth: '80%',
  },
}));


const AcademicInfoForm =({init_data, setNewData})=>{
	const classes = useStyles()

	const handleChange = (event) => {
		const name = event.target.name;
		setNewData({
			...init_data,
			academic_info:{
				...init_data.academic_info,
				[name]: event.target.value,
			}
		});
	};


	let has_grp = (['ix','x','xi','xii']).indexOf(init_data.academic_info.class_code)===-1 ? false : true

	return(
		<form>
			<div className="card px-4 py-3">


				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className={classes.formControl} required>
							<InputLabel id="shift">Shift</InputLabel>
							<Select
								labelId="shift"
								id="shift"
								value={init_data.academic_info.shift}
								onChange={handleChange}
								inputProps={{name:'shift'}}
							>
								<MenuItem value='morning'>Morning</MenuItem>
								<MenuItem value='day'>Day</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="session" 
							label="Session" 
							type="number"
							required
							value={init_data.academic_info.session}
							onChange={handleChange}
							className="mb-3" 
							inputProps={{name:'session'}}
						/>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className={classes.formControl} required>
							<InputLabel id="class_code">Class</InputLabel>
							<Select
								labelId="class_code"
								id="class_code"
								value={init_data.academic_info.class_code}
								onChange={handleChange}
								inputProps={{name:'class_code'}}
							>
								<MenuItem value='i'>One</MenuItem>
								<MenuItem value='ii'>Two</MenuItem>
								<MenuItem value='iii'>Three</MenuItem>
								<MenuItem value='iv'>Four</MenuItem>
								<MenuItem value='v'>Five</MenuItem>
								<MenuItem value='ix'>Nine</MenuItem>
								<MenuItem value='x'>Ten</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<FormControl className={classes.formControl} disabled={!has_grp} required={has_grp}>
							<InputLabel id="group">Group</InputLabel>
							<Select
								labelId="group"
								id="group"
								value={init_data.academic_info.group}
								onChange={handleChange}
								inputProps={{name:'group'}}
							>
								<MenuItem value='science'>Science</MenuItem>
								<MenuItem value='arts'>Arts</MenuItem>
								<MenuItem value='commers'>Commers</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>


				<div className="row m-0">
					<div className="col-sm-6 col-12 p-0">
						<FormControl className={classes.formControl}>
							<InputLabel id="section">Section</InputLabel>
							<Select
								labelId="section"
								id="section"
								value={init_data.academic_info.section}
								onChange={handleChange}
								inputProps={{name:'section'}}
							>
								<MenuItem value='A'>A</MenuItem>
								<MenuItem value='B'>B</MenuItem>
								<MenuItem value='C'>C</MenuItem>
							</Select>
						</FormControl>
					</div>
					<div className="col-sm-6 col-12 p-0">
						<TextField 
							id="roll" 
							label="Roll" 
							type="number"
							value={init_data.academic_info.roll}
							onChange={handleChange}
							className="mb-3"
							inputProps={{name:'roll'}}
						/>
					</div>
				</div>


			</div>
		</form>
	)
}

export { AcademicInfoForm };