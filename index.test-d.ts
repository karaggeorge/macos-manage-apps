import {expectType, expectError} from 'tsd';
import {launchApp, terminateApp, isAppRunning} from '.';

expectType<Promise<void>>(launchApp('bundleId'));
expectType<Promise<void>>(terminateApp('bundleId'));
expectType<Promise<boolean>>(isAppRunning('bundleId'));

expectError(launchApp());
expectError(terminateApp());
expectError(isAppRunning());
