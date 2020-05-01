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
