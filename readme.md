# macos-manage-apps

> Launch and terminate apps on macOS

If you're on macOS 10.14.3 or earlier, you need to download the [Swift runtime support libraries](https://support.apple.com/kb/DL1998).

## Install

```
$ npm install macos-manage-apps
```

## Usage

```js
const {launchApp, terminateApp} = require('macos-manage-apps');

(async () => {
  await launchApp('com.sindresorhus.Dato');

  await terminateApp('com.sindresorhus.Dato');
})();
```

## API

### `launchApp(bundleId: string): Promise<true>`

Tries to launch the app with the given bundle identifier. It will resolve if it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app.

### `terminateApp(bundleId: string): Promise<true>`

Tries to terminate the app with the given bundle identifier. It will resolve it succeeds, and reject with an error otherwise.

#### `bundleId`

The bundle identifier of the app.

## Related

- [mac-focus-window](https://github.com/karaggeorge/mac-focus-window) - Focus a window and bring it to the front on macOS
- [mac-windows](https://github.com/karaggeorge/mac-windows) - Provide Information about Application Windows running

## License

MIT
