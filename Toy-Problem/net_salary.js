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
    let nssf = calculateNssf(basicSalary);
    let taxablePay = basicSalary - nssf;
    // Calculate net
    let netSalary =
      basicSalary -
      (calculateNhif(basicSalary) + calculateTax(taxablePay) + nssf);
    console.log("Net salary is " + netSalary);
  }
}

function calculateNssf(salary) {
  //calculate nssf amount
  let nssf;
  if (salary > 18000) {
    nssf = 1080;
  } else {
    nssf = salary * 0.06;
  }
  console.log("Nssf" + nssf);
  return nssf;
}

function calculateTax(salary) {
  //calculate task amount
  let tax;
  if (salary <= 24000) {
    tax = 0.1;
  } else if (salary > 24000 && salary <= 32333) {
    tax = 0.25;
  } else if (salary > 32333) {
    tax = 0.1;
  }
  console.log("Tax" + salary * tax);
  return salary * tax;
}

function calculateNhif(salary) {
  //calculate nhif amount
  let nhif;
  if (salary <= 5999) {
    nhif = 150;
  } else if (salary >= 6000 && salary <= 7999) {
    nhif = 300;
  } else if (salary >= 8000 && salary <= 11999) {
    nhif = 400;
  } else if (salary >= 12000 && salary <= 14999) {
    nhif = 500;
  } else if (salary >= 15000 && salary <= 19999) {
    nhif = 600;
  } else if (salary >= 20000 && salary <= 24999) {
    nhif = 750;
  } else if (salary >= 25000 && salary <= 29999) {
    nhif = 850;
  } else if (salary >= 30000 && salary <= 34999) {
    nhif = 900;
  } else if (salary >= 35000 && salary <= 39999) {
    nhif = 950;
  } else if (salary >= 40000 && salary <= 44999) {
    nhif = 1000;
  } else if (salary >= 45000 && salary <= 49999) {
    nhif = 1100;
  } else if (salary >= 50000 && salary <= 59999) {
    nhif = 1200;
  } else if (salary >= 60000 && salary <= 69999) {
    nhif = 1300;
  } else if (salary >= 70000 && salary <= 79999) {
    nhif = 1400;
  } else if (salary >= 80000 && salary <= 89999) {
    nhif = 1500;
  } else if (salary >= 90000 && salary <= 99999) {
    nhif = 1600;
  }
  console.log("NHIF" + nhif);
  return nhif;
}
