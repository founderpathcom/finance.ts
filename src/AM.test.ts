import { strict as assert } from "node:assert/strict";
import test from "node:test";
import { AM } from "./AM";

test("AM in years", () => {
  const result = AM({
    principal: 20000,
    rate: 7.5,
    period: 5,
    yearOrMonth: "year",
    payAtBeginning: false,
  });
  assert(result === 400.76);
});

test("AM in months", () => {
  const result = AM({
    principal: 20000,
    rate: 7.5,
    period: 60,
    yearOrMonth: "month",
    payAtBeginning: false,
  });
  assert(result === 400.76);
});

test("AM beginning of the year", () => {
  const result = AM({
    principal: 20000,
    rate: 7.5,
    period: 5,
    yearOrMonth: "year",
    payAtBeginning: true,
  });
  assert(result === 398.27);
});
