import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';



class TeacherRoute extends React.Component {
	
	render() {
		const {match} = this.props
		return (
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/all`} />

				<Route path={`${match.url}/all`} component={asyncComponent(()=>import('./routes/AllClass'))} />
				<Route path={`${match.url}/:class_code`} component={asyncComponent(()=>import('./routes/ClassDetails'))} />
			
				<Route component={asyncComponent(() => import("../extraPages/routes/404"))}/>
			</Switch>
		);
	}
}

export default TeacherRoute;