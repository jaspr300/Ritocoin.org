import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// import history from '../../utils/history';
import { BlockExplore, Discord, GitHub } from '../../utils/svg';

import rito from '../../../images/rito.png';

export default class Home extends PureComponent {
    // routeTo(route) {
    //     history.push(route);
    // }

    render() {
        return(
            <header>
                <div className="links">
                    <div className="more-info">
                        <a href="https://explorer.ritocoin.org/" target="_explorer">
                            <BlockExplore />
                        </a>
                        <a href="https://discord.gg/5c9wHmy" target="_discord">
                            <Discord />
                        </a>
                        <a href="https://github.com/RitoProject" target="_github">
                            <GitHub />
                        </a>
                    </div>
                </div>
                <div className="page-title">
                    <img className="rito-img" src={rito} alt="Rito" />
                    <h1>Ritocoin</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/bounties">Bounties</Link></li>
                    </ul>
                </div>
            </header>
        );
    }
}
