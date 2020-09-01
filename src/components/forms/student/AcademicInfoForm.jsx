import React from 'react';
import {
	TextField,
	Select,
	InputLabel,
	MenuItem,
	FormControl,
	FormHelperText
} from '@material-ui/core';
import { getClassData } from '../action';




class AcademicInfoForm extends React.Component{

	state = {
		data: {
			shifts: [],
			shift_classes: {}
		}
	}

	async componentDidMount(){
		let data = await getClassData()
		this.setState({data: data})
	}

	handleChange = (event) => {
		const name = event.target.name;
		let new_data = this.props.init_data
		new_data[name] = event.target.value
		this.props.setNewData(new_data)
	}

	classList = ()=>{
		let shift = this.props.init_data.shift
		let cls = []
		if(shift){
			cls = this.state.data.shift_classes[shift].class_list
		}
		return cls
	}

	groupList = ()=>{
		let shift = this.props.init_data.shift
		let cls = this.props.init_data.class_code
		let grp = []
		if(shift && cls){
			grp = this.state.data.shift_classes[shift][cls].has_group ? this.state.data.shift_classes[shift][cls].group_list : []
		}
		return grp
	}

	sectionList = ()=>{
		let shift = this.props.init_data.shift
		let cls = this.props.init_data.class_code
		let grp = this.props.init_data.group
		let list = []
		if(shift && cls){
			list = this.state.data.shift_classes[shift][cls].has_group ? (grp ? this.state.data.shift_classes[shift][cls][grp].sections : []) : this.state.data.shift_classes[shift][cls].sections
		}
		return list
	}


	render(){
	let has_grp = (['ix','x','xi','xii']).indexOf(this.props.init_data.class_code)===-1 ? false : true
		return(
			<form>
				<div className="card px-4 py-3">

					<div className="row m-0">
						<div className="col-sm-6 col-12 p-0">
							<FormControl style={classes.formControl} 
								required 
								error={!this.props.validated.shift}
							>
								<InputLabel id="shift">Shift</InputLabel>
								<Select
									labelId="shift"
									id="shift"
									value={this.props.init_data.shift}
									onChange={this.handleChange}
									inputProps={{name:'shift'}}
								>
									{
										this.state.data.shifts.map(shift=>(
											<MenuItem key={shift} value={shift}>{shift}</MenuItem>
										))
									}
								</Select>
								<FormHelperText>{!this.props.validated.shift?"Shift is required":null}</FormHelperText>
							</FormControl>
						</div>
						<div className="col-sm-6 col-12 p-0">
							<TextField 
								id="session" 
								label="Session" 
								type="number"
								required
								value={this.props.init_data.session}
								onChange={this.handleChange}
								className="mb-3" 
								inputProps={{name:'session'}}
								error={!this.props.validated.session}
								helperText={!this.props.validated.session?"Session is required":null}
							/>
						</div>
					</div>


					<div className="row m-0">
						<div className="col-sm-6 col-12 p-0">
							<FormControl 
								className="mb-3" 
								style={classes.formControl} 
								disabled={this.props.init_data.shift?false:true} 
								required
								error={!this.props.validated.class_code}
							>
								<InputLabel id="class_code">Class</InputLabel>
								<Select
									labelId="class_code"
									id="class_code"
									value={this.props.init_data.class_code}
									onChange={this.handleChange}
									inputProps={{name:'class_code'}}
								>
									{
										this.classList().map(cls=>(
	                    <MenuItem value={cls}>{cls}</MenuItem>
	                  ))
									}
								</Select>
								<FormHelperText>{!this.props.validated.class_code?"Class is required":null}</FormHelperText>
							</FormControl>
						</div>
						<div className="col-sm-6 col-12 p-0">
							<FormControl
								className="mb-3"
								style={classes.formControl}
								disabled={!has_grp} 
								required={has_grp}
								error={!this.props.validated.group}
							>
								<InputLabel id="group">Group</InputLabel>
								<Select
									labelId="group"
									id="group"
									value={this.props.init_data.group}
									onChange={this.handleChange}
									inputProps={{name:'group'}}
								>
									{
										this.groupList().map(grp=>(
											<MenuItem value={grp}>{grp}</MenuItem>
										))
									}
								</Select>
								<FormHelperText>{!this.props.validated.group?"Group is required":null}</FormHelperText>
							</FormControl>
						</div>
					</div>


					<div className="row m-0">
						<div className="col-sm-6 col-12 p-0">
							<FormControl style={classes.formControl} disabled={has_grp?(this.props.init_data.group?false:true):(this.props.init_data.class_code?false:true)}>
								<InputLabel id="section">Section</InputLabel>
								<Select
									labelId="section"
									id="section"
									value={this.props.init_data.section}
									onChange={this.handleChange}
									inputProps={{name:'section'}}
								>
								{
									this.sectionList().map(sec=>(
										<MenuItem value={sec}>{sec}</MenuItem>
									))
								}
								</Select>
							</FormControl>
						</div>
						<div className="col-sm-6 col-12 p-0">
							<TextField 
								id="roll" 
								label="Roll" 
								type="number"
								value={this.props.init_data.roll}
								onChange={this.handleChange}
								className="mb-3"
								inputProps={{name:'roll'}}
							/>
						</div>
					</div>


				</div>
			</form>	
		)
	}
}


export { AcademicInfoForm }


const classes = {
  formControl: {
    minWidth: '80%',
  },
};