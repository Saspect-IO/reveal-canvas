export const getVectorComponents = (
  xInit: number,
  yInit: number,
  xFinal: number,
  yFinal: number,
) => {
  const dx = xFinal - xInit;
  const dy = yFinal - yInit;
  const magnitude = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return {
    dx,
    dy,
    magnitude,
  };
};
export const normalize = (val: number, max: number) => {
  const result = (max - val) / max;
  return result < 0 ? 0 : result;
};
