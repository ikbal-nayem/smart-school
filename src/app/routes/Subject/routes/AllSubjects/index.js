import React from "react";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Search, Add } from '@material-ui/icons';
import List from './List';
import { classList } from '../../../Class/routes/classes';




export default class SubjectList extends React.Component{
	state = {
		cls: 'i'
	}

	componentDidMount(){
		const search = this.props.location.search.split('=')
		this.setState({cls: search[0] === '?class' ? search[1] : this.state.cls})
	}

	clsChange = (cls)=>{
		this.setState({cls: cls})
	}

	render(){

		return(
			<React.Fragment>
				<div className="d-flex class-info mx-3 mt-3">
				{
					Object.entries(classList).map(([key, value], i)=>(
						<div className={`animated slideInRight animation-delay-${i+1} animation-duration-2`} key={key}>
							<div className="class-info-card" onClick={()=>this.clsChange(key)}>
			      		<div className={`jr-card jr-card-full p-2 mt-1 mb-1${this.state.cls === key ? ' text-white bg-gradient-primary' : null}`}>
			      			<div className="text-center">
			      				<h2 className="jr-font-weight-bold mb-1">{key}</h2>
			      				<p className="m-0">{value}</p>
			      			</div>
			      		</div>
		      		</div>
			    	</div>
					))
				}
				</div>
				<div className="jr-card mx-3 p-0 mt-0">
					<div className="card-header">
						<Paper component="form" style={styles.root}>
				      <InputBase
				        style={styles.input}
				        placeholder="Search Subject"
				        inputProps={{ 'aria-label': 'search' }}
				      />
				      <IconButton type="submit" style={styles.iconButton} aria-label="search">
				        <Search />
				      </IconButton>
				      <Divider style={styles.divider} orientation="vertical" />
				      <IconButton color="primary" style={styles.iconButton} aria-label="directions">
				        <Add />
				      </IconButton>
				    </Paper>
					</div>
					<List/>
				</div>
			</React.Fragment>
		)
	}
}



const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 2,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
};
