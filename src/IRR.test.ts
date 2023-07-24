import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { IRR } from "./IRR";

test("IRR", () => {
  const result = IRR(10000, [-6, 297, 307]);
  assert(result > 4951 && result < 4952);
});
