describe('Static Directory', () => {
  it('should set express static directory @router-use-express-static', done => {
    assert(typeof router === 'function', '`router` const has not been created in `router.js`.');
    request(router)
      .get('/css/styles.css')
      .expect(res => {
        assert(/^body {/.test(res.text), 'Looks as if the `public` directory has not been set as the static directory.');
      })
      .end(done);
  });
});
