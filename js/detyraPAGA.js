const buttonSubmit = document.getElementById("naja");
console.group(buttonSubmit);

buttonSubmit.addEventListener("click", function () {
  let wage = document.getElementById("wages"); //wage.value kap vleren qe i fut inputit
  let taxes = document.getElementById("tax");
  let validateTax = document.getElementById("validateTax");
  let validateWage = document.getElementById("validateWage");
  validateTax.innerHTML = "";
  validateWage.innerHTML = "";
  let p1 = Number(wage.value);
  let p2 = Number(taxes.value);
  console.log(isNaN(p1));
  if (isNaN(p1) === true) {
    validateWage.innerHTML = "ERROR, ONLY NUMBER ALLOWED";
    return;
  }

  if (isNaN(p2) === true && p2 < 0 && p2 > 100 && !Number.isInteger(p2)) {
    validateTax.innerHTML = "ERROR, ONLY FULL NUMBER ALLOWED";
    return;
  }

  myFunction(p1, p2);
});

function myFunction(a, b) {
  const percentage = b / 100;
  document.getElementById("demo").innerHTML =
    12 * a - 12 * a * percentage + " " + "leke";
}
