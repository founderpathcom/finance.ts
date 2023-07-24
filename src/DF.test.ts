import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { DF } from "./DF";

test("DF", () => {
  const result = DF(10, 6);
  assert(
    JSON.stringify(result) === JSON.stringify([1, 0.91, 0.827, 0.752, 0.684])
  );
});
