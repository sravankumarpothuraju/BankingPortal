describe('`urlencoded` added', () => {
  it('should add `urlencoded` @router-urlencoded-form-data', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    assert(typeof router._router !== 'undefined', 'No routes have been created.');
    assert(router._router.stack.some(layer => layer.name === 'urlencodedParser'), '`urlencoded` is not being used.');
  });
});
