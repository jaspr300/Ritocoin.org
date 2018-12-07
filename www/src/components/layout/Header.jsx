import React, { PureComponent } from 'react';

import { BlockExplore, Discord, GitHub } from '../../utils/svg';

import rito from '../../../images/rito.png';

export default class Home extends PureComponent {
    render() {
        return(
            <header>
                <div className="page-title">
                    <img className="rito-img" src={rito} alt="Rito" />
                    <h1>Ritocoin</h1>
                </div>
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
            </header>
        );
    }
}
