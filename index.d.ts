/**
Launch an app with the given bundle identifier.

@param bundleId - The bundle identifier of the app.
@returns A promise that resolves if the app was launched successfully.

@example
```
import {launchApp} from 'macos-manage-apps';

await launchApp('com.sindresorhus.Dato');
```
*/
export const launchApp: (bundleId: string) => Promise<void>


/**
Terminate an app with the given bundle identifier.

@param bundleId - The bundle identifier of the app.
@returns A promise that resolves if the app was terminated successfully.

@example
```
import {terminateApp} from 'macos-manage-apps';

await terminateApp('com.sindresorhus.Dato');
```
*/
export const terminateApp: (bundleId: string) => Promise<void>

/**
Check whether an app with the given bundle identifier is running.

@param bundleId - The bundle identifier of the app.
@returns A promise that resolves with true if the app is running and false otherwise.

@example
```
import {isAppRunning} from 'macos-manage-apps';

await isAppRunning('com.sindresorhus.Dato'); // true
```
*/
export const isAppRunning: (bundleId: string) => Promise<boolean>
