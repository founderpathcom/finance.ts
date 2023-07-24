import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { XIRR } from "./XIRR";

test("XIRR", () => {
  const res = XIRR(
    [-1000, -100, 1200],
    [new Date(2015, 11, 1), new Date(2016, 7, 1), new Date(2016, 7, 19)],
    0
  );
  assert(res === 14.11);
});
