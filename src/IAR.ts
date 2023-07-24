/**
 * Inflation-adjusted return (IAR) measures the return taking into account the time period's inflation rate
 * @param investmentReturn
 * @param inflationRate
 * @returns
 */
export function IAR(investmentReturn: number, inflationRate: number) {
  return 100 * ((1 + investmentReturn) / (1 + inflationRate) - 1);
}
