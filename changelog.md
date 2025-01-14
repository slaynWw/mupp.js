# 1.0.1 Build 1710 

## Changes
* Added `$randomColor`
* Added `$excludeSpecialChars`
  * Usage: `$excludeSpecialChars[text]`
* Removed `$ifv6` as it no longer works

### Source code
Internal improvements has been added to the source code. Files for the functions are now located in the new `plugins.js` file meanwhile the old one has been renamed to `pluginsloader.js` as a way to make the code cleaner.

In addition to this, a new console message has been introduced which announces that scootz.js is ready to be used. Thus, helping you to check on whether or not the package has been loaded.

## Bug Fixes
* Fixed a bug in which running `$isBoostMessage` will cause the bot to silently stop working
* Fixed potential issues for functions like `$userURL`

# 1.0.1 Build 1701

## Changes
* Added `$owoify`
  * Usage: `$owoify[text]`

## Bug Fixes
* Fixed a bug that was using the wrong parameter name in `$isBoostMessage`
* Fixed the old Github username `dodoGames-s-Studios` still being used in a hyperlink on `README.md` file


# 1.0.0
Nothing much has changed besides few changes such as new usage for existing functions from the original package and a new function called `$welcomeMessage` intended to be used for `onJoin` event from aoi.js

Node.js 20 or later is now required to be able to use the package as well!
