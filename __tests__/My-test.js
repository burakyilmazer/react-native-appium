import {remote} from 'webdriverio';
import jasmine from 'jasmine';
// eslint-disable-next-line no-undef

let driver;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;

beforeAll(async () => {
  driver = await remote({
    path: '/wd/hub/',
    host: '0.0.0.0',
    port: 4723,
    capabilities: {
      platformName: 'Android',
      platformVersion: '11.0', // must correct the stimuator
      deviceName: 'emulator-5554', // must correct the stimuator
      // appium: {connectHardwareKeyboard: true},
      // automationName: 'XCUITest',
      // app: 'org.reactjs.native.example.appium', // this is for open specify app
      // udid: process.env.IOS_DEVICE_UUID,
      // xcodeOrgId: "xxx",
      // xcodeSigningId: "Apple Development"
      // useNewWDA: true,
      // usePrebuiltWDA: true,
    },
    logLevel: 'debug',
  });
});

afterAll(async () => {
  if (driver) {
    await driver.deleteSession();
  }
});
it('Login test', async () => {
  await driver.pause(2000);
  const element = await driver.$('~alertButton');
  await element.click();
  await driver.pause(3000);
});
