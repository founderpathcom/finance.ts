/**
 * Internal Rate of Return (IRR) is the discount rate often used in capital budgeting that makes the net present value of all cash flows from a particular project equal to zero.
 *
 * @see http://www.investopedia.com/terms/i/irr.asp
 * @param depth
 * @param cashFlow
 * @returns
 */
export function IRR(depth: number, cashFlow: number[]) {
  let numberOfTries = 1;
  // Cash flow values must contain at least one positive value and one negative value
  let positive, negative;
  Array.prototype.slice.call(cashFlow).forEach(function (value) {
    if (value > 0) positive = true;
    if (value < 0) negative = true;
  });
  if (!positive || !negative)
    throw new Error(
      "IRR requires at least one positive value and one negative value"
    );
  function npv(rate: number) {
    numberOfTries++;
    if (numberOfTries > depth) {
      throw new Error("IRR can't find a result");
    }
    const rrate = 1 + rate / 100;
    let npv = cashFlow[0];
    for (let i = 1; i < cashFlow.length; i++) {
      npv += cashFlow[i] / Math.pow(rrate, i);
    }
    return npv;
  }
  return Math.round(seekZero(npv) * 100) / 100;
}

// seekZero seeks the zero point of the function fn(x), accurate to within x \pm 0.01. fn(x) must be decreasing with x.
interface Fn {
  (x: number): number;
}
function seekZero(fn: Fn) {
  let x = 1;
  while (fn(x) > 0) {
    x += 1;
  }
  while (fn(x) < 0) {
    x -= 0.01;
  }
  return x + 0.01;
}
