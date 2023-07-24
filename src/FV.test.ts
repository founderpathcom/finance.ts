import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { FV } from "./FV";

test("FV", () => {
  const result = FV(0.5, 1000, 12);
  assert(result === 1061.68);
});
