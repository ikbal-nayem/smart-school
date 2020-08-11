import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';


class SujecctRoute extends React.Component {
	
	render() {
		const {match} = this.props
		return (
			<Switch>
				<Redirect exact from={`${match.url}`} to={`${match.url}/list`} />

				<Route path={`${match.url}/list`} component={asyncComponent(()=>import('./routes/AllSubjects'))} />
				<Route path={`${match.url}/add`} component={asyncComponent(()=>import('./routes/AddSubject'))} />
			
				<Route component={asyncComponent(() => import("../extraPages/routes/404"))}/>
			</Switch>
		);
	}
}

export default SujecctRoute;