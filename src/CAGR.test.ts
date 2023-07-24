import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { CAGR } from "./CAGR";

test("CAGR", () => {
  const result = CAGR(10000, 19500, 3);

  assert(result === 24.93);
});
