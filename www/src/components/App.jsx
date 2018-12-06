import React, { Component } from 'react';

import { BlockExplore, Discord, GitHub } from '../utils/svg';
import '../less/main.less';

import rito from '../../images/rito.png';
import moonDexImg from '../utils/moonDexImg';

export default class App extends Component {
    render() {
        return(
            <div className="home-page">
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
                    <button>
                        <a href="https://github.com/RitoProject/Ritocoin/">Get Your Wallet</a>
                    </button>
                </section>
                <section className="exchanges">
                    <h2>Buy Ritocoin</h2>
                    <li className="exchange">
                        <a href="https://safe.trade/trading/ritobtc">
                            <img src="https://www.safe.trade/assets/a135c-safe-trade.png" alt="SafeTrade"/>
                            <div className="ex-name">SafeTrade</div>
                        </a>
                    </li>
                    <li className="exchange">
                        <a href="https://beta.moondex.io/market/MOONDEX.RITO_MOONDEX.BTC">
                            <img src={moonDexImg} alt="MoonDex Exchange"/>
                            <div className="ex-name">MoonDex</div>
                        </a>
                    </li>
                    <li className="exchange">
                        <a href="https://trade.mct.plus/">
                            <img src="https://trade.mct.plus/uploads/mct_logo_128x128.png" alt="MCT Exchange"/>
                            <div className="ex-name">MCT</div>
                        </a>
                    </li>
                </section>
                <section className="pools">
                    <h2>Mining Pools</h2>
                    <li>
                        <a href="https://cryptopool.cash/">Cryptopool</a>
                    </li>
                    <li>
                        <a href="https://pickaxe.pro/">Pickaxe</a>
                    </li>
                    <li>
                        <a href="https://focus-pool.com/">Focus Pool</a>
                    </li>
                    <li>
                        <a href="https://icemining.ca/">Icemining</a>
                    </li>
                    <li>
                        <a href="https://blockify.xyz/">Blockify</a>
                    </li>
                    <li>
                        <a href="https://arcpool.com/">Arcpool</a>
                    </li>
                    <li>
                        <a href="https://pool.rig.tokyo/">Pool Rig</a>
                    </li>
                    <li>
                        <a href="https://marspool.org/">Marspool</a>
                    </li>
                    <li>
                        <a href="https://xd.dapool.me/">Dapool</a>
                    </li>
                    <li>
                        <a href="https://www.gos.cx/">GOS</a>
                    </li>
                    <li>
                        <a href="https://hashfaster.com/">Hashfaster</a>
                    </li>
                    <li>
                        <a href="http://coolmine.top/ ">Coolmine</a>
                    </li>
                    <li>
                        <a href="https://www.lyra2z.com/rito/">Lyra2z</a>
                    </li>
                    <li>
                        <a href="https://coinfoundry.org/pool/rito">Coin Foundry</a>
                    </li>
                </section>
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
                <section className="about">
                    <p className="center">
                        In the fictional world of Hyrule, the Rito are winged people with the ability to fly, making them exceptionally adept at delivering messages, moving quickly from one place to another and adapting to different environments. Ritocoin is a blockchain project designed to explore alternative concepts and ideas of those begun by the Ravencoin project.
                    </p>
                    <p className="left">
                        Some members of the Ravencoin and blockchain communities are thirsty for new horizons to cross and new worlds to explore. As Ravencoin continues maturing through its inexorable march toward blockchain supremacy, the cypherpunks among us wish to remain in hacker space and have fun with a coin that we can easily mine without worrying about FPGA, ASIC and NiceHash coming in and taking away our fun. We want to write new wallets, create new explorers, and make interesting utilities that do unusual and surprising things with the blockchain. We want to mine coins and then spend those coins freely amongst ourselves and to the burn addresses where we will make assets for pleasure and for business. Ritocoin is a playground for programmers and the coins are not intended to be horded as if it was money.
                    </p>
                    <p className="right">
                        We are on the brink of entering a post-GPU era of cryptocurrency mining, and those of us who own farms of rigs wish to continue to see our hardware continue to be put to use. This desire is, in fact, the primary reason many of us joined the Ravencoin ranks in the first place. The X16R algorithm on which Ravencoin was founded was designed specifically for ASIC resistance.[1] While we applaud Ravencoin's commitment to resist ASIC domination of their chain, we are sorry that they have adopted the decision to allow FPGAs to mine X16R. Until the unlikely day comes that FPGAs are commonplace in homes across the world, Ritocoin is committed to ensuring that GPUs will always have a fair and even chance to mine the blocks in this chain.
                    </p>
                    <p className="left">
                        Additionally, centralized hash renting services such as NiceHash have a similarly chilling effect on miners. At the time of this writing, about 33% of the network hash for X16R is coming through NiceHash. For the sake of the security of the network and for the other reasons we mentioned above, we desire for our coin's network to remain inaccessible to services like NiceHash. We do recognize that these kinds of services can easily add new algorithms to their offerings, but we remain committed to staying ahead of that cat and mouse game. Periodic hard forks to new algorithms are something we are willing to do in order to keep our chain safe and minable by our GPUs.
                    </p>
                    <p className="right">
                        To that end, we have elected to launch the coin with the newly created X21s algorithm, which was developed by the the author of this whitepaper. It is a chain of 21 different algorithms. The first 16 handled exactly like X16S, followed by 5 additional hashing algorithms. The inclusion of Lyra2Z allows  it to mine at cooler temperatures and the algorithm overall does not have high power requirements. 
                    </p>
                </section>
                <footer>
                    <p>
                        This website is managed through our <a href="https://github.com/RitoProject/Ritocoin.org">Github repository for Ritocoin.org</a>. Pull requests are welcomed.
                    </p>
                </footer>
            </div>
        );
    }
}
