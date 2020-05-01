import {expectType, expectError} from 'tsd';
import {launchApp, killApp} from '.';

expectType<Promise<true>>(launchApp('bundleId'));
expectType<Promise<true>>(killApp('bundleId'));

expectError(launchApp());
expectError(killApp());
