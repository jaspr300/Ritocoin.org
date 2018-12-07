import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../utils/history';

import Layout from './layout/Layout';
import Home from './Home';
import Bounties from './Bounties';

import '../less/main.less';

export default function App() {
    return (
        <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/bounties" component={Bounties} />
                </Switch>
            </Layout>
        </Router>
    );
}