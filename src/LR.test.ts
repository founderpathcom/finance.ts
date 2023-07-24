import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { LR } from "./LR";

test("LR", () => {
  const result = LR(25, 10, 20);
  assert(result === 1.75);
});
