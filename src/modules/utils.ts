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
  if (max < val) {
    return 0;
  }
  return (max - val) / max;
};
