import request from 'supertest';
import express from 'express';
import i18n from 'i18n';
import exampleRoute from '@app/routes/routes';
const MSG = 'Hello';
jest.mock('i18n', () => ({
  __: (key: string) => MSG
}));
const app = express();
app.use('/', exampleRoute);
describe('Example api test', () => {
  it('GET exaple', async () => {
    const { body } = await request(app).get('/api/v1/example');
    expect(body).toEqual({ data: `${i18n.__('')} 🌎!!` });
    /* const t = await request(app).get('/api/example');
     expect(t).toThrow(Error);*/
  });
});
