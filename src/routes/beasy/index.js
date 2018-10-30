import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import opportunityFeed from './opportunityFeed';
import aboutUs from './aboutUs';

const Beasy = ({ match }) => (
    <div className="beasy-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/opportunity_feed`} />
            <Route path={`${match.url}/opportunity_feed`} component={opportunityFeed} />
            <Route path={`${match.url}/aboutUs`} component={aboutUs} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Beasy;