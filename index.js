// Logical AND (&&)
// Return true if both operands are true
let hightIncome = true;
let goodCreditScore = false;
let credit = hightIncome && goodCreditScore;
console.log(credit)

// Logincal OR (||)
// Return true if one of the operands is true
let eligibleForLoan = hightIncome || credit;
console.log(false || true)

//NOT (!)
// turn true to false and false to true
let applicationRefused =  !eligibleForLoan

console.log(applicationRefused)