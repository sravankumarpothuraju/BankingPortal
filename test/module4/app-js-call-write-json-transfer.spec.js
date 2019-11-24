describe('Transfer post route writeJSON', () => {
  it('should include writeJSON @router-js-call-write-json-transfer', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    const stack = routeStack('/transfer', 'post') || routeStack('/services/transfer', 'post');
    assert(typeof stack !== 'undefined', 'Transfer post route may not exist yet.');
    assert(/writeJSON/.test(stack.handle.toString()), 'The transfer post function does not include a call to `writeJSON`.');
  });
});
