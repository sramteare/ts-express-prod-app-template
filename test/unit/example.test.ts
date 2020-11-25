import { sum, diff } from '@app/services/exampleSum'; //@app/ alias configured in jest.config.js and tsconfig.js

describe('Example', () => {
  it('2+2 is equla to 4!', async () => {
    let res = await sum(2, 2);
    expect(res).toBe(4);
    res = await sum(0, 0);
    expect(res).toBe(0);
  });
  it('2+2 is not equla to 5!', async () => {
    const res = await sum(2, 2);
    expect(res).not.toEqual(5);
  });
  it('2-2 is not equla to 0!', () => {
    expect(diff(2, 2)).toBe(0);
  });
  it('2-2 is not equla to 1!', () => {
    expect(diff(2, 2)).not.toEqual(1);
  });
});
