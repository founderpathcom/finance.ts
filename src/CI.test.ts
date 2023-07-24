import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { CI } from "./CI";

test("CI", () => {
  const result = CI(4.3, 4, 1500, 6);
  assert(result === 1938.84);
});
