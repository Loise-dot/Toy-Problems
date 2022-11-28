function netSalaryCalculator() {
  //get the user basic salary input
  let basicSalary = prompt("Enter basic salary?");
  // intialize and declare the tax, nssf and nhif
  let tax;
  let nssf = 0.06;
  let nhif = 0.025;
  // Get the tax depending on the basic salary amount
  if (basicSalary <= 0) {
    console.log("Basic salary should be greater than 0");
  } else {
    if (basicSalary < 24000) {
      tax = 0.1;
    } else if (basicSalary >= 24000 && basicSalary < 32333) {
      tax = 0.25;
    } else if (salary > 32333) {
      tax = 0.1;
    }
    // Calculate net
    let netSalary = basicSalary - (tax + nssf + nhif);
    console.log("Net salary is " + netSalary);
  }
}
