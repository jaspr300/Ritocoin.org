import React, { PureComponent } from 'react';

import bountyPayouts from '../utils/bountyPayouts';

export default class Bounties extends PureComponent {
    getBounties() {
        const bountyList = bountyPayouts.map((bounty, i) => (
            <div className="bounty-payout-info" key={i}>
                <div className="mobile-title">
                    <div className="title">Who</div>
                    <div className="title">What</div>
                    <div className="title">Amount</div>
                    <div className="title">Receiving Address</div>
                    <div className="title">tx ID</div>
                </div>
                <li>
                    <div className="item who">{bounty.who}</div>
                    <div className="item what">{bounty.what}</div>
                    <div className="item amount">{bounty.amount}</div>
                    <div className="item receiving-address">{bounty.receivingAddress}</div>
                    <div className="item tx-id">{bounty.txId}</div>
                </li>
            </div>
        ));

        return bountyList;
    }

    render() {
        return(
            <div className="bounties-page">
                <h1>Bounty Payouts</h1>
                <div className="bounty-info">
                    The following is a list of contributors of Ritocoin. If you would
                    like to contribute join us on <a href="https://discord.gg/Bueav8s">Discord </a>
                    to see where your talent can help!
                </div>
                <ul className="bounty-section">
                    <div className="browser-title">
                        <div className="title">Who</div>
                        <div className="title">What</div>
                        <div className="title">Amount</div>
                        <div className="title">Receiving Address</div>
                        <div className="title">tx ID</div>
                    </div>
                    {this.getBounties()}
                </ul>
            </div>
        );
    }
}
