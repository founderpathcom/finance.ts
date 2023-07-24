/**
 * Leverage Ratio (LR) is used to calculate the financial leverage of a company or individual to get an idea of the methods of financing or to measure ability to meet financial obligations.
 *
 * @see http://www.investopedia.com/terms/l/leverageratio.asp
 * @param totalLiabilities
 * @param totalDebts
 * @param totalIncome
 * @returns
 */
export function LR(
  totalLiabilities: number,
  totalDebts: number,
  totalIncome: number
) {
  return (totalLiabilities + totalDebts) / totalIncome;
}
