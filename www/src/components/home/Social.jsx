import React, { PureComponent } from 'react';

import { BlockExplore, Discord } from '../../utils/svg';

export default class Home extends PureComponent {
    render() {
        return(
            <section className="social">
                <li>
                    <a href="https://discord.gg/Bueav8s">
                        <Discord />
                        <div className="social-item">Join our Discord</div>
                    </a>
                </li>
                <li>
                    <a href="https://explorer.ritocoin.org/">
                        <BlockExplore />
                        <div className="social-item">Block Explore</div>
                    </a>
                </li>
            </section>
        );
    }
}
