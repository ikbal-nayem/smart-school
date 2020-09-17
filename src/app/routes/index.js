import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';



const Routes = ({match}) =>
  <Switch>
  	<Route path={`${match.url}dashboard`} component={asyncComponent(() => import('./Dashboard'))} />
  	<Route path={`${match.url}student`} component={asyncComponent(() => import('./Student'))} />
  	<Route path={`${match.url}teacher`} component={asyncComponent(() => import('./Teacher'))} />
  	<Route path={`${match.url}staff`} component={asyncComponent(() => import('./Staff'))} />
  	<Route path={`${match.url}class`} component={asyncComponent(() => import('./Class'))} />
  	<Route path={`${match.url}subjects`} component={asyncComponent(() => import('./Subject'))} />

    <Route component={asyncComponent(() => import("./extraPages/routes/404"))}/>
  </Switch>;


export default withRouter(Routes);

