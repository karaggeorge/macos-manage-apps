/**
Launch an app with the given bundle identifier.

@param bundleId - The bundle identifier of the app.
@returns A promise that resolves to true if the app was launched successfully.

@example
```
import {launchApp} from 'macos-launch-application';

await launchApp('com.sindresorhus.Dato');
```
*/
export const launchApp: (bundleId: string) => Promise<true>


/**
Terminate an app with the given bundle identifier.

@param bundleId - The bundle identifier of the app.
@returns A promise that resolves to true if the app was terminated successfully.

@example
```
import {killApp} from 'macos-launch-application';

await killApp('com.sindresorhus.Dato');
```
*/
export const killApp: (bundleId: string) => Promise<true>
