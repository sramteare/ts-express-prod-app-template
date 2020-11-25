export const sum = async (a: number, b: number): Promise<number> => a + b;
export const diff = (a: number, b: number): number => a - b;
export const getTwoPlusTwo = async () => {
  return await sum(2, 2);
};
