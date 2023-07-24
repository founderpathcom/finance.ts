interface WACCParams {
  marketValueOfEquity: number;
  marketValueOfDebt: number;
  costOfEquity: number;
  costOfDebt: number;
  taxRate: number;
}

/**
 * Weighted Average Cost of Capital (WACC) is the rate that a company is expected to pay on average to all its security holders to finance its assets.
 *
 * @see http://en.wikipedia.org/wiki/Weighted_average_cost_of_capital
 * @param param0
 * @returns
 */
export function WACC({
  marketValueOfEquity,
  marketValueOfDebt,
  costOfEquity,
  costOfDebt,
  taxRate,
}: WACCParams) {
  const E = marketValueOfEquity;
  const D = marketValueOfDebt;
  const V = marketValueOfEquity + marketValueOfDebt;
  const Re = costOfEquity;
  const Rd = costOfDebt;
  const T = taxRate;

  const WACC = ((E / V) * Re) / 100 + (((D / V) * Rd) / 100) * (1 - T / 100);
  return Math.round(WACC * 1000) / 10;
}
