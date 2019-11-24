const fs = require('fs');
const path = require('path');
const proxyquire = require('proxyquire');

describe('App uses account routes', () => {
  let useSpy;
  before(() => {
    useSpy = sinon.spy();
    proxyquire('../../src/router', {
      express: sinon.stub().returns({
        get: sinon.spy(),
        post: sinon.spy(),
        set: sinon.spy(),
        use: useSpy,
        listen: sinon.stub().returns({})
      })
    });
  });

  it('should contain router.use for account routes @router-use-account-routes', () => {
    assert(fs.existsSync(path.join(process.cwd(), 'src/routes/accounts.js')), 'The `src/routes/accounts.js` file does not exist.');
    const accountRoutes = require(path.join(process.cwd(), 'src/routes/accounts.js'));
    assert(useSpy.calledWithExactly('/account', accountRoutes), 'Are you using your account routes?');
  });
});
