/**
 * Payback Period (PP) is the length of time required to recover the cost of an investment.
 *
 * @see http://www.investopedia.com/terms/p/paybackperiod.asp
 * @param numOfPeriods
 * @param cashFlows
 * @returns
 */
export function PP(numOfPeriods: number, cashFlows: number[]) {
  // for even cash flows
  if (numOfPeriods === 0) {
    return Math.abs(cashFlows[0]) / cashFlows[1];
  }
  // for uneven cash flows
  let cumulativeCashFlow = cashFlows[0];
  let yearsCounter = 1;
  for (let i = 1; i < cashFlows.length; i++) {
    const ii = cashFlows[i];
    cumulativeCashFlow += ii;
    if (cumulativeCashFlow > 0) {
      yearsCounter += (cumulativeCashFlow - ii) / ii;
      return yearsCounter;
    } else {
      yearsCounter++;
    }
  }

  return yearsCounter;
}
