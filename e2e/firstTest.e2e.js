/* eslint-disable no-undef */
import {expect} from 'detox';
import {element} from 'detox';
import {device, by} from 'detox';

describe('CoinList Detox Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have an header', async () => {
    await expect(element(by.id('app-header'))).toBeVisible();
  });

  it('should have a search field', async () => {
    await expect(element(by.id('app-search-input'))).toBeVisible();
  });

  it('should fill the search input field', async () => {
    await element(by.id('app-search-input')).typeText('BTC');
  });

  it('should show coins list', async () => {
    await expect(element(by.id('app-list'))).toBeVisible();
  });
});
