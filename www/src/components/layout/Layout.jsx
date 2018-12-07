import React, { PureComponent } from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <div className="all">
                <Header />
                {children}
                <Footer />
            </div>
        );
    }
}
