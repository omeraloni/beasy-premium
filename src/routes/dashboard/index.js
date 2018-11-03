import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import myDashboard from './myDashboard';

const Dashboards = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/myDashboard`} />
            <Route path={`${match.url}/myDashboard`} component={myDashboard} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Dashboards;