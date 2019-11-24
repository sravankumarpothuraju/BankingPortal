const proxyquire = require('proxyquire');

describe('Server created with router.listen', () => {
  let listenStub;
  before(() => {
    listenStub = sinon.stub().returns({});
    proxyquire('../../src/router', {
      express: sinon.stub().returns({
        get: sinon.spy(),
        post: sinon.spy(),
        set: sinon.spy(),
        use: sinon.spy(),
        listen: listenStub
      })
    });
  });

  it('should contain router.listen @router-listen-console-log', () => {
    assert(listenStub.calledOnce, '`router.listen` has not been called.');
    assert(
      listenStub.calledWithExactly(3000, sinon.match.func),
      '`router.listen` was not called with the correct arguments.'
    );
  });
});
