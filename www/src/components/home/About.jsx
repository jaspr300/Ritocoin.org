import React, { PureComponent } from 'react';

export default class Home extends PureComponent {
    render() {
        return(
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
        );
    }
}
