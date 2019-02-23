import MaterialDesignIcons from '../src';
const instance = new MaterialDesignIcons();

test('it has a name', () => {
  expect(typeof instance.pluginName).toBe('string');
});

test('it has a menu item function', () => {
  expect(typeof instance.showUI).toBe('function');
});