describe('Require Express and Create `router` const', () => {
  it('require express and create router const @router-require-express-const-router', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    let express;
    try {
      express = appModule.__get__('express');
    } catch (err) {
      assert(express !== undefined, 'Has the `express` framework been required in `router.js`?');
    }
  });
});
