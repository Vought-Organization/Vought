export const calculaDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3;
  const p1 = (lat1 * Math.PI) / 180;
  const p2 = (lat2 * Math.PI) / 180;
  const deltaLon = lon2 - lon1;
  const deltaLambda = (deltaLon * Math.PI) / 180;
  const d = (
    (Math.acos(
      Math.sin(p1) * Math.sin(p2) +
        Math.cos(p1) * Math.cos(p2) * Math.cos(deltaLambda)
    ) *
      R) /
    1000
  ).toFixed(2);

  if (d < 1.0) {
    return `Distância: ${d * 1000}m`;
  } else if (d >= 1.0) {
    return `Distância: ${d}km`;
  } else {
    return '';
  }
};
