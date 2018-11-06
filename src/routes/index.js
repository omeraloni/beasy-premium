import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import TopNav from 'Containers/TopNav'
import Sidebar from 'Containers/Sidebar';

import beasy from './beasy';
import dashboard from './dashboard';
import matchmaker from './matchmaker';
import layouts from './layouts';

import { connect } from 'react-redux';

class MainApp extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match, containerClassnames } = this.props;
		return (
			<div id="app-container" className={containerClassnames}>
				<TopNav history={this.props.history} />
				<Sidebar />
				<main>
					<div className="container-fluid">
						<Switch>
							<Route path={`${match.url}/beasy`} component={beasy} />
							<Route path={`${match.url}/dashboard`} component={dashboard} />
							<Route path={`${match.url}/matchmaker`} component={matchmaker} />
							<Route path={`${match.url}/layouts`} component={layouts} />
							<Redirect to="/error" />
						</Switch>
					</div>
				</main>
			</div>
		);
	}
}
const mapStateToProps = ({ menu }) => {
	const { containerClassnames } = menu;
	return { containerClassnames };
}

export default withRouter(connect(mapStateToProps, {})(MainApp));