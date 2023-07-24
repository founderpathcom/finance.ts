/**
 * Return on Investment (ROI) is a simple calculation that tells you the bottom line return of any investment.
 *
 * @see https://github.com/ebradyjobory/finance.js#:~:text=of%20any%20investment.-,12,-//%20e.g.%2C%20If
 * @param initial
 * @param earnings
 * @returns
 */
export function ROI(initial: number, earnings: number) {
  const roi = ((earnings - Math.abs(initial)) / Math.abs(initial)) * 100;
  return Math.round(roi * 100) / 100;
}
