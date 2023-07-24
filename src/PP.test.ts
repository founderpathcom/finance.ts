import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { PP } from "./PP";

test("PP even cash flows", () => {
  assert(PP(0, [-105, 25]) === 4.2);
});

test("PP uneven cash flows", () => {
  const res = PP(5, [-50, 10, 13, 16, 19, 22]);
  assert(res >= 3.3 && res <= 3.6);
});
