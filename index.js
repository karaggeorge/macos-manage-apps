const path = require('path');
const execa = require('execa');
const electronUtil = require('electron-util/node');

const launchBinary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'launch-app');
const killBinary = path.join(electronUtil.fixPathForAsarUnpack(__dirname), 'kill-app');

module.exports = {
  launchApp: async bundleId => {
    try {
      await execa(launchBinary, [bundleId]);
      return true;
    } catch (error) {
      throw new Error(error.stdout);
    }
  },
  killApp: async bundleId => {
    try {
      await execa(killBinary, [bundleId]);
      return true;
    } catch (error) {
      throw new Error(error.stdout);
    }
  }
};
