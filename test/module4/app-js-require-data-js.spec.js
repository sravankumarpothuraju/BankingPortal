describe('Require `data.js` in `router.js', () => {
  it('should require `data.js` @router-js-require-data-js', () => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    let accountData;
    let userData;
    let users;
    let accounts;
    let writeJSON;

    try {
      accountData = appModule.__get__('accountData');
      userData = appModule.__get__('userData');
    } catch (err) {
      assert(accountData === undefined, 'Have you removed the lines that read and parse the `accounts.json` file?');
      assert(userData === undefined, 'Have you removed the lines that read and parse the `users.json` file?');
    }

    try {
      users = appModule.__get__('users');
      accounts = appModule.__get__('accounts');
      writeJSON = appModule.__get__('writeJSON');
    } catch (err) {
      assert(users !== undefined, '`router.js` is not requiring `src/data` and creating a `users` const.');
      assert(accounts !== undefined, '`router.js` is not requiring `src/data` and creating an `accounts` const.');
      assert(writeJSON !== undefined, '`router.js` is not requiring `src/data` and creating a `writeJSON` const.');
    }

    assert(accounts !== undefined && typeof accounts === 'object', '`data.js` is not exporting the `accounts` object.');
    assert(users !== undefined && typeof users === 'object', '`data.js` is not exporting the `users` object.');
    assert(writeJSON !== undefined && typeof writeJSON === 'function', '`data.js` is not exporting the `writeJSON` function.');
  });
});
