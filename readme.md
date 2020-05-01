# macos-launch-application

> Launch and terminate apps on macOS

If you're on macOS 10.14.3 or earlier, you need to download the [Swift runtime support libraries](https://support.apple.com/kb/DL1998).

## Install

```
$ npm install macos-launch-application
```

## Usage

```js
const {launchApp, killApp} = require('macos-launch-application');

(async () => {
  await launchApp('com.sindresorhus.Dato');

  await killApp('com.sindresorhus.Dato');
})();
```

## API

### `launchApp(bundleId: string): Promise<true>`

Tries to launch the app with the given bundle identifier. It will resolve to true if it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app.

### `killApp(bundleId: string): Promise<true>`

Tries to kill the app with the given bundle identifier. It will resolve to true if it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app.

## Related

- [mac-focus-window](https://github.com/karaggeorge/mac-focus-window) - Focus a window and bring it to the front on macOS
- [mac-windows](https://github.com/karaggeorge/mac-windows) - Provide Information about Application Windows running

## License

MIT
