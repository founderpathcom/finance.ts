# Finance.ts

## Introduction

Finance.ts makes it easy to incorporate common financial calculations into your application. The library is built in Typescript without any dependencies. 

This is a fork of https://github.com/ebradyjobory/finance.js. 

Major differences: 
- Written in Strict Typescript 
- ESM and CJS compatible
- No more classes, just pure functions 
- Functions are written without using `arguments` and rest parameters 
- Functions with more than 3 parameters uses object parameters instead
- Functions uses booleans and enums instead of integer flags


## Getting Started 

```lang=bash
npm install @founderpath/financets --save
```

## Example Usage

```lang=ts
import { AM } from "@founderpath/financets"

AM({
  principal: 20000,
  rate: 7.5,
  period: 5,
  yearOrMonth: "year",
  payAtBeginning: false,
});
// => 400.76
```

## Available Functions 

These are the available functions. Please refer to the typescript definition itself and/or tests for usage. 

### `AM` Amortization

Amortization (AM) is the paying off of debt with a fixed repayment schedule in regular installments over a period of time.

### `CAGR` Compound Annual Growth Rate 

Compound Annual Growth Rate (CAGR) is the year-over-year growth rate of an investment over a specified period of time.

### `CAPM` Capital Asset Pricing Model

Capital Asset Pricing Model (CAPM) describes the relationship between systematic risk, or the general perils of investing, and expected return for assets, particularly stocks.

### `CI` Compound Interest

Compound Interest (CI) is the interest calculated on the initial principal and also on the accumulated interest of previous periods of a deposit or loan.

### `DF` Discount Factor
Discount Factor (DF) is the factor by which a future cash flow must be multiplied in order to obtain the present value.

### `FV` Future Value
Future Value (FV) is the value of an asset or cash at a specified date in the future that is equivalent in value to a specified sum today

### `IAR` Inflation-adjusted return
Inflation-adjusted return (IAR) measures the return taking into account the time period's inflation rate

### `IRR` Internal Rate of Return
Internal Rate of Return (IRR) is the discount rate often used in capital budgeting that makes the net present value of all cash flows from a particular project equal to zero.

### `LR`  Leverage Ratio 
Leverage Ratio (LR) is used to calculate the financial leverage of a company or individual to get an idea of the methods of financing or to measure ability to meet financial obligations.

### `NPV` Net Present Value
Net Present Value (NPV) compares the money received in the future to an amount of money received today, while accounting for time and interest [through the discount rate]. It's based on the principal of time value of money (TVM), which explains how time affects monetary value.

### `PI` Profitability Index
Profitability Index (PI) is an index that attempts to identify the relationship between the costs and benefits of a proposed project through the use of a ratio calculated.

### `PMT` Loan Payment per Period
Loan Payment per Period (PMT) calculates payment for a loan based on constant payments and a constant interest rate

### `PP` Payback Period
Payback Period (PP) is the length of time required to recover the cost of an investment.

### `PV` Present Value 
Present Value (PV) is the current worth of a future sum of money or stream of cash flows given a specified rate of return

### `R72` Rule of 72
Rule of 72 (R72) is a rule stating that in order to find the number of years required to double your money at a given interest rate, you divide the compound return into 72.

### `ROI` Return on Investment
Return on Investment (ROI) is a simple calculation that tells you the bottom line return of any investment.
