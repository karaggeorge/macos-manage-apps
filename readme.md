# macos-launch-application

> Launch or kill applications on macOS.

macOS 10.14.3 or earlier needs to download the Swift runtime support libraries. [More Info Here](https://developer.apple.com/documentation/xcode_release_notes/xcode_10_2_release_notes/swift_5_release_notes_for_xcode_10_2).


## Install

```
$ npm install macos-launch-application
```

## Usage

```js
const {launchApp, killApp} = require('macos-launch-application');

launchApp('com.sindresorhus.Dato');

killApp('com.sindresorhus.Dato');
```

## API

### `launchApp(bundleId: string): Promise<true>`

Tries to launch the app with the given bundle identifier. It will resolve to true if it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app

### `killApp(bundleId: string): Promise<true>`

Tries to kill the app with the given bundle identifier. It will resolve to true if it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app

## Related

- [mac-focus-window](https://github.com/karaggeorge/mac-focus-window) - Focus a window and bring it to the front on macOS
- [mac-windows](https://github.com/karaggeorge/mac-windows) - Provide Information about Application Windows running

## License

MIT
