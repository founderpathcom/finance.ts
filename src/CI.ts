/**
 * Compound Interest is the interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan.
 *
 * @see http://www.investopedia.com/terms/c/compoundinterest.asp
 * @param rate
 * @param numOfCompoundings
 * @param principal
 * @param numOfPeriods
 * @returns
 */
export function CI(
  rate: number,
  numOfCompoundings: number,
  principal: number,
  numOfPeriods: number
) {
  const CI =
    principal *
    Math.pow(
      1 + rate / 100 / numOfCompoundings,
      numOfCompoundings * numOfPeriods
    );
  return Math.round(CI * 100) / 100;
}
