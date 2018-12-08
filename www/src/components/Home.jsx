import React, { PureComponent } from 'react';

import SiteInfo from './home/SiteInfo';
import Exchanges from './home/Exchanges';
import Pools from './home/Pools';
import Social from './home/Social';
import About from './home/About';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default class Home extends PureComponent {
    render() {
        return(
            <div id="home" className="all">
                <Header />
                <div className="home-page">
                    <SiteInfo />
                    <Exchanges />
                    <Pools />
                    <Social />
                    <About />
                </div>
                <Footer />
            </div>
        );
    }
}
