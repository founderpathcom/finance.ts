/**
 * Present Value (PV) is the current worth of a future sum of money or stream of cash flows given a specified rate of return
 *
 * @see https://www.investopedia.com/terms/p/presentvalue.asp
 * @param rate
 * @param cf1
 * @param numOfPeriod
 * @returns
 */
export function PV(rate: number, cf1: number, numOfPeriod = 1) {
  const pv = cf1 / Math.pow(1 + rate / 100, numOfPeriod);
  return Math.round(pv * 100) / 100;
}
