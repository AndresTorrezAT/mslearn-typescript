"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*  Module 7: Working with external libraries
    Lab Start */
var LoanPrograms = require("./module07_loan-programs.js");
/*  TODO Add the import statement. */
/*  TODO Update the function calls. */
//!ANTES
// let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
// let conventionalLoanPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
//!AHORA
var interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
//!! PARA EJECUTAR
// tsc --module commonjs module07_main.ts
