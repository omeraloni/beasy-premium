import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import home from './home';
import aboutUs from './aboutUs';

const Beasy = ({ match }) => (
    <div className="beasy-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/home`} />
            <Route path={`${match.url}/home`} component={home} />
            <Route path={`${match.url}/aboutUs`} component={aboutUs} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default Beasy;