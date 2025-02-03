// app.test.js
const request = require('supertest');
const app = require('./index');

describe('GET /service1/api/endpoint1', () => {
  it('should return status 200 and a success message', async () => {
    const response = await request(app).get('/service1/api/endpoint1');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Endpoint 1 service 1');
  });
});

describe('GET /service1/api/endpoint2', () => {
    it('should return status 200 and a success message', async () => {
      const response = await request(app).get('/service1/api/endpoint2');
  
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Endpoint 2 service 1');
    });
  });
