import React, { PureComponent } from 'react';

import pools from '../../utils/pools';

export default class Pools extends PureComponent {
    getPools() {
        const miningPools = pools.map((pool, i) => (
            <li key={i}><a href={pool.url} target={pool.target}>{pool.title}</a></li>
        ));
        return miningPools;
    }

    render() {
        return(
            <section className="pools">
                <h2>Mining Pools</h2>
                {this.getPools()}
            </section>
        );
    }
}
