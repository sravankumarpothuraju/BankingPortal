const path = require('path');

describe('View engine and directory', () => {
  it('should set view engine and directory @router-set-views-directory-engine', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    assert(router.settings.views === path.join(__dirname, '../../src/views'), 'The view directory has not been set to the `views` directory.');
    assert(router.settings['view engine'] === 'ejs', 'The view engine has not been set to `ejs`.');
  });
});
