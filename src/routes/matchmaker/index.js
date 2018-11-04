import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import newMatchMaker from './new';
import results from './results';

const MatchMaker = ({ match }) => (
    <div className="beasy-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/new`} />
            <Route path={`${match.url}/new`} component={newMatchMaker} />
            <Route path={`${match.url}/results`} component={results} />
            <Redirect to="/error" />

        </Switch>
    </div>
);
export default MatchMaker;