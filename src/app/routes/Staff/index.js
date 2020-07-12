import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';
import Profile from 'components/Profile';



class StaffRoute extends React.Component {
	
	render() {
		const {match} = this.props
		return (
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/all`} />

				<Route path={`${match.url}/all`} component={asyncComponent(()=>import('./routes/AllStaff'))} />
				<Route path={`${match.url}/add`} component={asyncComponent(()=>import('./routes/AddStaff'))} />
				<Route path={`${match.url}/:username`} render={props=><Profile {...props} account_type='staff'/>} />
			
				<Route component={asyncComponent(() => import("../extraPages/routes/404"))}/>
			</Switch>
		);
	}
}

export default StaffRoute;