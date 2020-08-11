import React from "react";
import { Link } from "react-router-dom";
import {Typography} from '@material-ui/core';


export default class AllClasses extends React.Component{
	render(){
		return(
			<React.Fragment>
				<div className="row m-0 py-3">
					<div className="col-md-3 col-sm-4 col-6">
						<Link to="/class/ix" className="link">
							<div className="jr-card shadow border-0 mb-3 ripple-effect">
								<div className="jr-card-header-color bg-gradient-primary text-center">
									<Typography variant="h1" className="jr-font-weight-bold text-white">ix</Typography>
								</div>
								<div class="jr-card-body text-center">
									<Typography variant="h6" gutterBottom>200 Students</Typography>
									<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
								</div>
							</div>
						</Link>
					</div>
					<div className="col-md-3 col-sm-4 col-6">
						<div className="jr-card shadow border-0 mb-3 ripple-effect">
							<div className="jr-card-header-color bg-gradient-primary text-center">
								<Typography variant="h1" className="text-white">viii</Typography>
							</div>
							<div class="jr-card-body text-center">
								<Typography variant="h6" gutterBottom>200 Students</Typography>
								<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-4 col-6">
						<div className="jr-card shadow border-0 mb-3 ripple-effect">
							<div className="jr-card-header-color bg-gradient-primary text-center">
								<Typography variant="h1" className="text-white">vii</Typography>
							</div>
							<div class="jr-card-body text-center">
								<Typography variant="h6" gutterBottom>200 Students</Typography>
								<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-4 col-6">
						<div className="jr-card shadow border-0 mb-3 ripple-effect">
							<div className="jr-card-header-color bg-gradient-primary text-center">
								<Typography variant="h1" className="text-white">v</Typography>
							</div>
							<div class="jr-card-body text-center">
								<Typography variant="h6" gutterBottom>200 Students</Typography>
								<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-4 col-6">
						<div className="jr-card shadow border-0 mb-3 ripple-effect">
							<div className="jr-card-header-color bg-gradient-primary text-center">
								<Typography variant="h1" className="text-white">x</Typography>
							</div>
							<div class="jr-card-body text-center">
								<Typography variant="h6" gutterBottom>200 Students</Typography>
								<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-4 col-6">
						<div className="jr-card shadow border-0 mb-3 ripple-effect">
							<div className="jr-card-header-color bg-gradient-primary text-center">
								<Typography variant="h1" className="text-white">viii</Typography>
							</div>
							<div class="jr-card-body text-center">
								<Typography variant="h6" gutterBottom>200 Students</Typography>
								<Typography variant="subtitle2" gutterBottom>3 Sections</Typography>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}