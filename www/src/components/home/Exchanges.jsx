import React, { PureComponent } from 'react';

import exchangeList from '../../utils/exchangeList';

export default class Exchanges extends PureComponent {
    getExchangeList() {
        const list = exchangeList.map((exchange, i) => (
            <li className="exchange" key={i}>
                <a href={exchange.url}>
                    <img src={exchange.img} alt={exchange.alt} />
                    <div className="ex-name">{exchange.title}</div>
                </a>
            </li>
        ));
        return list
    }
    render() {
        return(
            <section className="exchanges">
                <h2>Buy Ritocoin</h2>
                {this.getExchangeList()}
            </section>
        );
    }
}
