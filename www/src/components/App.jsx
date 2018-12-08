import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Bounties from './Bounties';

import '../less/main.less';

export default function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/bounties" component={Bounties} />
                <Route path="*" component={Home} />
            </Switch>
        </HashRouter>
    );
}