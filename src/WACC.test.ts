import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { WACC } from "./WACC";

test("WACC", () => {
  assert(
    WACC({
      marketValueOfEquity: 600000,
      marketValueOfDebt: 400000,
      costOfEquity: 6,
      costOfDebt: 5,
      taxRate: 35,
    }) === 4.9
  );
});
