import React, { PureComponent } from 'react';

import SiteInfo from './home/SiteInfo';
import Exchanges from './home/Exchanges';
import Pools from './home/Pools';
import Social from './home/Social';
import About from './home/About';

export default class Home extends PureComponent {
    render() {
        return(
            <div className="home-page">
                <SiteInfo />
                <Exchanges />
                <Pools />
                <Social />
                <About />
            </div>
        );
    }
}
