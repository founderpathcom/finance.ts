import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { PI } from "./PI";

test("PI", () => {
  assert(PI(10, [-40000, 18000, 12000, 10000, 9000, 6000]) === 1.09);
});
