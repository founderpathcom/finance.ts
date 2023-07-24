import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { IRR } from "./IRR";

test("IRR", () => {
  const result = IRR([-6, 297, 307], 10000);
  assert(result > 4951 && result < 4952);
});
