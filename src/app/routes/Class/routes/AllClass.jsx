import React from "react";
import { Link } from "react-router-dom";
import {Typography} from '@material-ui/core';

import { classList } from './classes';


export default class AllClasses extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className="row m-0 py-3">
				{
					Object.entries(classList).map(([key, value], i)=>(
						<div className={`col-md-3 col-sm-4 col-6 animated slideInUp animation-delay-${i} animation-duration-2`}>
							<Link to={`/class/${key}`} className="link">
								<div className="jr-card shadow border-0 mb-3 ripple-effect">
									<div className="jr-card-header-color bg-gradient-primary text-center">
										<Typography variant="h1" className="jr-font-weight-bold text-white">{key}</Typography>
									</div>
									<div class="jr-card-body text-center">
										<Typography variant="h6" gutterBottom>200 Students</Typography>
										<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
									</div>
								</div>
							</Link>
						</div>
					))
				}
				</div>
			</React.Fragment>
		)
	}
}