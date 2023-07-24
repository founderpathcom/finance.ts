import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { IAR } from "./IAR";

test("IAR", () => {
  const result = IAR(0.08, 0.03);
  assert(result === 4.854368932038833);
});
