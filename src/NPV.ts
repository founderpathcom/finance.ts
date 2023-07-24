/**
 * Net Present Value (NPV) compares the money received in the future to an amount of money received today, while accounting for time and interest [through the discount rate]. It's based on the principal of time value of money (TVM), which explains how time affects monetary value.
 *
 * @see https://www.investopedia.com/articles/fundamental-analysis/09/net-present-value.asp
 * @param rate
 * @param initial
 * @param cashFlows
 * @returns
 */
export function NPV(rate: number, ...cashFlows: number[]) {
  let npv = cashFlows[0];

  for (let i = 1; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + rate / 100, i);
  }

  return Math.round(npv * 100) / 100;
}
