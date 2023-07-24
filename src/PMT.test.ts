import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { PMT } from "./PMT";

test("PMT", () => {
  const res = PMT(2, 36, -1000000);
  assert(res === 39232.85);
});
