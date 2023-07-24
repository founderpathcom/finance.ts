import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { stockPV } from "./stockPV";

test("stockPV", () => {
  assert(stockPV(5, 15, 10) == 105);
});
