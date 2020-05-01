import {expectType, expectError} from 'tsd';
import {launchApp, terminateApp} from '.';

expectType<Promise<void>>(launchApp('bundleId'));
expectType<Promise<void>>(terminateApp('bundleId'));

expectError(launchApp());
expectError(terminateApp());
