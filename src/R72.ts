/**
 * Rule of 72 (R72) is a rule stating that in order to find the number of years required to double your money at a given interest rate, you divide the compound return into 72.
 *
 * @see http://www.investopedia.com/terms/r/ruleof72.asp
 * @param rate
 * @returns
 */
export function R72(rate: number) {
  return 72 / rate;
}
