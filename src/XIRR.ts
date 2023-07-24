/**
 * XIRR is used to determine the Internal Rate of Return when the cash flows are at Irregular intervals.
 *
 * @see http://www.financialwisdomforum.org/gummy-stuff/xirr.htm
 * @param cfs
 * @param dts
 * @param guess
 * @returns
 */
export function XIRR(cfs: number[], dts: Date[], guess = 0) {
  if (cfs.length != dts.length)
    throw new Error("Number of cash flows and dates should match");

  let positive, negative;
  Array.prototype.slice.call(cfs).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  });

  if (!positive || !negative)
    throw new Error(
      "XIRR requires at least one positive value and one negative value"
    );

  let limit = 100; //loop limit
  let guess_last;
  const durs = [];

  durs.push(0);

  //Create Array of durations from First date
  for (let i = 1; i < dts.length; i++) {
    durs.push(durYear(dts[0], dts[i]));
  }

  do {
    guess_last = guess;
    guess = guess_last - sumEq(cfs, durs, guess_last);
    limit--;
  } while (guess_last.toFixed(5) != guess.toFixed(5) && limit > 0);

  if (guess_last.toFixed(5) != guess.toFixed(5)) {
    return null;
  }

  const xirr = guess * 100;

  return Math.round(xirr * 100) / 100;
}

function durYear(first: Date, last: Date) {
  return Math.abs(last.getTime() - first.getTime()) / (1000 * 3600 * 24 * 365);
}

//Returns Sum of f(x)/f'(x)
function sumEq(cfs: number[], durs: number[], guess: number) {
  let sum_fx = 0;
  let sum_fdx = 0;
  for (let i = 0; i < cfs.length; i++) {
    sum_fx = sum_fx + cfs[i] / Math.pow(1 + guess, durs[i]);
  }
  for (let i = 0; i < cfs.length; i++) {
    sum_fdx = sum_fdx + -cfs[i] * durs[i] * Math.pow(1 + guess, -1 - durs[i]);
  }
  return sum_fx / sum_fdx;
}
