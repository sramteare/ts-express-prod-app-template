import app from '@app/app';

const listernMock = jest.fn();
jest.mock('@app/app', () => {
  return {
    listen: listernMock
  };
});

require('@app/server');
describe('Test server', () => {
  it('check assigned port', () => {
    expect(listernMock.mock.calls[0][0]).toEqual(Number(process.env.PORT));
  });
});
