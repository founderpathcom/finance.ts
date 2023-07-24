export function stockPV(g: number, ke: number, D0: number) {
  const valueOfStock = (D0 * (1 + g / 100)) / (ke / 100 - g / 100);
  return Math.round(valueOfStock);
}
