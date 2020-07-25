import React from 'react';
import {
	TextField,
	Grid,
	Paper,
	List,
	ListItem,
	ListItemText,
	InputLabel
} from '@material-ui/core';


const TeacherAcademicInfoForm =({init_data, setNewData})=>{
	const left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	const [right, setRight] = React.useState(init_data.academic_info.takes);


	const setEve = ()=>{
		let event = {}
		event.target = {}
		event.target.name = 'takes'
		event.target.value = right
		return event
	}

	const leftListToggle = (value)=>{
		if(right.indexOf(value) === -1){
			right.push(value)
			setRight([...right])
			handleChange(setEve())
		}
	}
	const rightListToggle = (index)=>{
		right.splice(index, 1)
		setRight([...right])
		handleChange(setEve())
	}

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


	const subjectList = (items, list) => (
		<Paper variant="outlined">
			<List dense component="div" role="list">
				{items.map((value, index) => {
					const labelId = `item-${value}-label`;
					return (
						<ListItem
							key={value}
							role="listitem"
							className=" p-1 animated bounceIn"
							button onClick={()=>list==='l' ? leftListToggle(value) : rightListToggle(index)}
						>
							<ListItemText id={labelId} primary={`Subject item number ${value + 1}`} />
						</ListItem>
					);
				})}
				<ListItem />
			</List>
		</Paper>
	);



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


				<div className="row m-0">
					<InputLabel className="mb-2">Takes</InputLabel>
					<Grid container justify="center" alignItems="center" className="m-auto">
						<Grid item style={styles.subject_list}>{subjectList(left, 'l')}</Grid>
						<Grid item>
							<Grid container direction="column" alignItems="center">
								<b className="mx-1 text-primary">
									>
								</b>
							</Grid>
						</Grid>
						<Grid item style={styles.subject_list}>{subjectList(right, 'r')}</Grid>
					</Grid>
				</div>


			</div>
		</form>
	)
}

export { TeacherAcademicInfoForm };

const styles = {
	subject_list: {
		height: 350,
		width:"48%",
		overflow: 'scroll',
	}
}