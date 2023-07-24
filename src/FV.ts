/**
 * Future Value (FV) is the value of an asset or cash at a specified date in the future that is equivalent in value to a specified sum today
 *
 * @see http://www.investopedia.com/terms/f/futurevalue.asp
 * @param rate
 * @param cf0
 * @param numOfPeriod
 * @returns
 */
export function FV(rate: number, cf0: number, numOfPeriod: number) {
  const fv = cf0 * Math.pow(1 + rate / 100, numOfPeriod);
  return Math.round(fv * 100) / 100;
}
