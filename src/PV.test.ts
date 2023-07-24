import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { PV } from "./PV";

test("PV", () => {
  assert(PV(5, 100) === 95.24);
});

test("PV with num of periods", () => {
  assert(PV(5, 100, 5) === 78.35);
});
