describe('Require accounts routes', () => {
  it('require express and create router const @router-require-account-routes', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    let accountRoutes;
    try {
      accountRoutes = appModule.__get__('accountRoutes');
    } catch (err) {
      assert(accountRoutes !== undefined, 'Has the `accountRoutes` const been created `router.js`?');
    }
    assert(typeof accountRoutes === 'function', 'Has the router been exported in `src/routes/accounts.js`?');
  });
});
