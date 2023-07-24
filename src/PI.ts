/**
 * Profitability Index (PI) is an index that attempts to identify the relationship between the costs and benefits of a proposed project through the use of a ratio calculated.
 *
 * @see http://www.investopedia.com/terms/p/profitability.asp
 * @param rate
 * @param cfs
 * @returns
 */
export function PI(rate: number, cfs: number[]) {
  let totalOfPVs = 0;

  for (let i = 1; i < cfs.length; i++) {
    // calculate discount factor
    const discountFactor = 1 / Math.pow(1 + rate / 100, i);
    totalOfPVs += cfs[i] * discountFactor;
  }
  const pi = totalOfPVs / Math.abs(cfs[0]);
  return Math.round(pi * 100) / 100;
}
