import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { ROI } from "./ROI";

test("ROI", () => {
  assert(ROI(-55000, 60000) === 9.09);
});
