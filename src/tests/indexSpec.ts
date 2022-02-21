// import superset module to testing the main endpoint
import supertest from 'supertest';

//import app from main index server
import app from '../index';

const request = supertest(app);

// test main endpoint response
describe('Test main endpoint responses', () => {
  it('gets main endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
});

// test api route response
describe('Test api route responses', () => {
  it('gets api route', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});

// test images route response
describe('Test images route responses', () => {
  it('gets images route', async (done) => {
    const response = await request.get(
      '/api/images?name=fjord&width=300&height=200'
    );
    expect(response.status).toBe(200);
    done();
  });
});
