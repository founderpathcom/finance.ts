import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { NPV } from "./NPV";

test("NPV", () => {
  const result = NPV(10, -500000, 200000, 300000, 200000);
  assert(result === 80015.03);
});
