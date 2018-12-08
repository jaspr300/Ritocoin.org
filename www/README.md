# Ritocoin react build

#Production build
Running `yarn build` will build the files used for `index.html`. After this command is ran, `index.js` can be loaded to see the production build of the site.

# Install
`yarn install`

# Dev
`yarn start`

# Build
`yarn build`

## Header and Footer
For header and footer development, you can find the components in `src/components/layout`

## Adding pages
New pages can be added in `src/components/App.jsx`:

```
import NewPage from './NewPage`;

<Route exact path="/" component={NewPage} />
```

Main part of page is kept in the same directory as App, but any sections of the page are in folders in that directory. Example would be `src/components/Home.jsx` and its sections in `src/components/home/`

## Exchange list
exchanges can be added to the JS object in `src/utils/exchangeList`. This will add the data to the UI.

Format:
```
{
    url: 'https://trade.mct.plus/',
    img: 'https://trade.mct.plus/uploads/mct_logo_128x128.png',
    alt: 'MCT Exchange',
    title: 'MCT',
}
```

## Pools
Mining pools can be added to the JS object in `src/utils/pools`. This will add the data to the UI.

Format:
```
{
    url: 'https://xd.dapool.me',
    target: '_pool',
    title: 'dapool',
}
```

## Bounties
Bounties can be added to the JS object in `src/utils/bountyPayouts`. This will add the data to the UI.

Format:
```
{
    who: 'Sir_Chasington (discord user)',
    what: 'Website initial framework update',
    amount: '5000',
    receivingAddress: 'B9q1Mno66GCuTejSz9UHdVWqzdZFnFp9RV',
    txId: '30dedef29576e31521966a4deb622561efcd370a6863ad4c5105fc3343766a81',
}
```

TODO:
- `yarn start` used for dev needs updating. Currently any saving, server needs to be killed and restarted to see changes.