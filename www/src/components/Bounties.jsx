import React, { PureComponent } from 'react';

import BountyInfo from './Bounties/BountyInfo';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default class Bounties extends PureComponent {
    render() {
        return(
            <div id="Bounty" className="all">
                <Header />
                <div className="bounties-page">
                    <h1>Bounty Payouts</h1>
                    <BountyInfo />
                </div>
                <Footer />
            </div>
        );
    }
}
