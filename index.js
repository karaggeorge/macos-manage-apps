const path = require('path');
const execa = require('execa');
const electronUtil = require('electron-util/node');

const launchBinary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'launch-app');
const terminateBinary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'terminate-app');
const checkBinary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'check-app');

module.exports = {
  launchApp: async bundleId => {
    try {
      await execa(launchBinary, [bundleId]);
    } catch (error) {
      throw new Error(error.stdout);
    }
  },
  terminateApp: async bundleId => {
    try {
      await execa(terminateBinary, [bundleId]);
    } catch (error) {
      throw new Error(error.stdout);
    }
  },
  isAppRunning: async bundleId => {
    try {
      const {stdout} = await execa(checkBinary, [bundleId]);
      return stdout === 'true';
    } catch (error) {
      throw new Error(error.stdout);
    }
  }
};
