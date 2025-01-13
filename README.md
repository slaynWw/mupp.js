# scootz.js
A silly package for aoi.js that registers custom functions you can use.

# Disclaimer
This package (`scootz.js`) is not made by official aoi.js developers and so therefore, do not request support for the package in their official support server. Instead, request support for it by going into [Github Issues](https://github.com/ddodogames/scootz.js/issues/new/choose).

# Why does this exist?
It originally started as `dodoplugins.js` which was only made because i got annoyed of having to update multiple custom functions in each bot project i have. This was how the original package was born. 

At the time it was made, aoi.js had problems with custom functions in aoi.js type which hindered the development as i did not fully know javascript. I eventually had no choice but to discontinue it since it's been 2 years and nothing was addressed about it.

In the end, it was finally addressed in 2024! So, as part of this, i decided to refresh the package as `scootz.js` with both new and updated stuff (including easier management of versions published of the package as well).

# Setup
* aoi.js 6.9.0 or later is required.
* Node.js v20 or later is also required.

```js
// Stable version
npm i scootz.js@latest

// Canary version
npm i https://github.com/ddodogames/scootz.js

// or if you want to use completed pre-release builds
npm i scootz.js@canary
```

You then load the package with the following
```js
// Define clients
const { Plugins } = require("scootz.js")
const { AoiClient } = require("aoi.js");

// Setup aoi.js first
const client = new AoiClient({
    token: "Discord Bot Token", // Here goes the Token you copied earlier!
    prefix: "Discord Bot Prefix", // Here goes the prefix you want to use for your bot!
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here"
    }
});

// Load the package
const plugins = new Plugins({ client: client }); 
plugins.loadPlugins(); 
```
This will enable all custom functions that were created in the package.

# Links
This is Optional, So Check Links at Your own Discretion.
* [Docs](https://ddodogames.github.io/scootz-docs/guides/introduction)
* [NPM page](https://www.npmjs.com/package/scootz.js)

# Credits
the source code on how this was setup belongs to `Kawaii#7615`, thank him/her later for the aoi.js plugins tutorial later.
* `Kawaii#7615` (i don't remember their username): for the aoi.js plugins tutorial later
* [`Blur`](https://github.com/Bumblebee-3): for helping me on getting this package to work
* [`InikoMatthewPro`](https://github.com/InikoMatthewPro): for publishing the package on npm

Most of these are for the original (now discontinued) package of `dodoplugins.js`.

