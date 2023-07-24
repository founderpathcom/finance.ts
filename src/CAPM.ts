/**
 * Capital Asset Pricing Model (CAPM) describes the relationship between systematic risk, or the general perils of investing, and expected return for assets, particularly stocks.
 *
 * @see https://www.investopedia.com/terms/c/capm.asp
 * @param rf
 * @param beta
 * @param emr
 * @returns
 */
export function CAPM(rf: number, beta: number, emr: number) {
  return rf / 100 + beta * (emr / 100 - rf / 100);
}
