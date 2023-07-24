interface AMParams {
  principal: number;
  rate: number;
  period: number;
  yearOrMonth: "year" | "month";
  payAtBeginning: boolean;
}

/**
 * Amortization is the paying off of debt with a fixed repayment schedule in regular installments over a period of time.
 *
 * @see http://www.investopedia.com/terms/a/amortization.asp
 */
export function AM({
  principal,
  rate,
  period,
  yearOrMonth,
  payAtBeginning = false,
}: AMParams) {
  let numerator: number;
  let denominator: number;
  const ratePerPeriod = rate / 12 / 100;

  if (yearOrMonth === "year") {
    // for inputs in years
    numerator = buildNumerator(period * 12, ratePerPeriod, payAtBeginning);
    denominator = Math.pow(1 + ratePerPeriod, period * 12) - 1;
  } else if (yearOrMonth === "month") {
    // for inputs in months
    numerator = buildNumerator(period, ratePerPeriod, payAtBeginning);
    denominator = Math.pow(1 + ratePerPeriod, period) - 1;
  } else {
    throw new Error("not defined");
  }
  const am = principal * (numerator / denominator);

  return Math.round(am * 100) / 100;
}

function buildNumerator(
  numInterestAccruals: number,
  ratePerPeriod: number,
  payAtBeginning = false
) {
  if (payAtBeginning) {
    //if payments are made in the beginning of the period, then interest shouldn't be calculated for first period
    numInterestAccruals -= 1;
  }
  return ratePerPeriod * Math.pow(1 + ratePerPeriod, numInterestAccruals);
}
