import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { CAPM } from "./CAPM";

test("CAPM", () => {
  const result = CAPM(2, 2, 10);

  assert(result === 0.18);
});
