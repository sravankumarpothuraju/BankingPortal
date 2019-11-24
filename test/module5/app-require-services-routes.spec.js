describe('Require services routes', () => {
  it('require express and create router const @router-require-services-routes', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    let servicesRoutes;
    try {
      servicesRoutes = appModule.__get__('servicesRoutes');
    } catch (err) {
      assert(servicesRoutes !== undefined, 'Has the `servicesRoutes` const been created `router.js`?');
    }
    assert(typeof servicesRoutes === 'function', 'Has the router been exported in `src/routes/services.js`?');
  });
});
