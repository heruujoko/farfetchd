import nock from 'nock';

jest.unmock('../src/request.utils');
require('whatwg-fetch');

const { RequestUtils } = require('../src/request.utils');

describe('RequestUtils', () => {
  it('should have GET function', () => {
    const request = new RequestUtils('https://test.com');
    expect(request.get).toBeDefined();
  });

  it('should have POST function', () => {
    const request = new RequestUtils('https://test.com');
    expect(request.post).toBeDefined();
  });

  it('should have PUT function', () => {
    const request = new RequestUtils('https://test.com');
    expect(request.put).toBeDefined();
  });

  it('should have PATCH function', () => {
    const request = new RequestUtils('https://test.com');
    expect(request.patch).toBeDefined();
  });

  it('should have DELETE function', () => {
    const request = new RequestUtils('https://test.com');
    expect(request.delete).toBeDefined();
  });

  // TODO request mocking tests
  xit('should pass the default header', async () => {
    // window.fetch = jest.fn().mockResolvedValueOnce("ok");
    nock('https://jsonplaceholder.typicode.com')
      .matchHeader('Authorization', 'XXX')
      .get('/posts/1')
      .reply(200, 'A');

    const request = new RequestUtils('https://jsonplaceholder.typicode.com');

    // const resp = await request.get('/posts/1', { 'Authorization': 'XXX'});
    // expect(resp).toBe(200);
    return request
      .get('/posts/1', { Authorization: 'XXX' })
      .then((resp: any) => {
        expect(resp).toBe(200);
      });
  });
});
