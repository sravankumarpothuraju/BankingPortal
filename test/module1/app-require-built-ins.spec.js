describe('Require `fs` and `path` built-ins', () => {
  it('should contain requires @router-require-built-ins', () => {
    let fs;
    let path;
    try {
      fs = appModule.__get__('fs');
      path = appModule.__get__('path');
    } catch (err) {
      assert(fs !== undefined, 'Has the `fs` built-in module been required in `router.js`?');
      assert(path !== undefined, 'Has the `path` built-in module been required in `router.js`?');
    }
  });
});
