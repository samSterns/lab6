const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('returns plain text hi', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
}),

describe('color red', () => {
  it('has html <hi>red</h1>', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
      });
  });
}),

describe('color green', () => {
  it('has html <hi>green</h1>', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
      });
  });
});

describe('color blue', () => {
  it('has html <hi>blue</h1>', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
      });
  });
});

describe('post echo', () => {
  it('status code 200 and plain text with the request body', () => {
    return request(app)
      .post('/echo')
      .send('did it')
      .then(res => {
        expect(res.text).toEqual('did it');
      });
  });

});
