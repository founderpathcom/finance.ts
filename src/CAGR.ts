/**
 * Compound Annual Growth Rate (CAGR) is the year-over-year growth rate of an investment over a specified period of time
 *
 * @see http://www.investopedia.com/terms/c/cagr.asp
 *
 * @param beginningValue
 * @param endingValue
 * @param numOfPeriods
 * @returns
 */
export function CAGR(
  beginningValue: number,
  endingValue: number,
  numOfPeriods: number
) {
  const CAGR = Math.pow(endingValue / beginningValue, 1 / numOfPeriods) - 1;
  return Math.round(CAGR * 10000) / 100;
}
