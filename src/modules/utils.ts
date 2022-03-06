export const getDistance = (
  xInit: number,
  yInit: number,
  xFinal: number,
  yFinal: number,
) => {
  const dx = xFinal - xInit;
  const dy = yFinal - yInit;
  const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  return {
    dx,
    dy,
    distance,
  };
};
