import React, { PureComponent } from 'react';

export default class SiteInfo extends PureComponent {
    render() {
        return(
            <section className="site-info">
                <p>
                    We know this website is bare and simple. Most people understand that Ritocoin is not about flashy marketing. We're not here to sell you on this coin or this project. We're here to code and make things. This website contains the information you need and that is sufficient for our needs at the moment. Additionally, we were caught by surprise by all the attention we received. We expected a handful of miners would be interested in our project but instead we got the attention of the world.
                </p>
                <p>
                    Already the Ritocoin community has released a ccminer fork for x21s. Software development is why we're here!
                </p>
                <p>
                    Whitepaper is being finished up and will be published to this website later this week. Maybe soon we will put together a polished website as well.
                </p>
                <button><a href="https://github.com/RitoProject/Ritocoin/">Download Wallet at Github</a></button>
                <button><a href="https://paper.ritocoin.org/">Paper Wallet</a></button>
            </section>
        );
    }
}
