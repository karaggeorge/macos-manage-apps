
/**
Launch an app with the given bundle identifier.

@example
```
await launchApp('com.sindresorhus.Dato');
```

@param bundleId - The bundle identifier of the application
@returns Promise that resolves to true if the app was launched successfully
*/
export const launchApp: (bundleId: string) => Promise<true>


/**
Kill an app with the given bundle identifier.

@example
```
await killApp('com.sindresorhus.Dato');
```

@param bundleId - The bundle identifier of the application
@returns Promise that resolves to true if the app was killed successfully
*/
export const killApp: (bundleId: string) => Promise<true>