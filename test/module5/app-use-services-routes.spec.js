const fs = require('fs');
const path = require('path');
const proxyquire = require('proxyquire');

describe('App uses services routes', () => {
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

  it('should contain `router.use` for services @router-use-services-routes', () => {
    assert(fs.existsSync(path.join(process.cwd(), 'src/routes/services.js')), 'The `src/routes/services.js` file does not exist.');
    const servicesRoutes = require(path.join(process.cwd(), 'src/routes/services.js'));
    assert(useSpy.calledWithExactly('/services', servicesRoutes), 'Are you using your services routes?');
  });
});
