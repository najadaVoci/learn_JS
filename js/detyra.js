// task: ke nje form e cila ka tre fusha te cilat inputet jane:
// inputi i pare deklaron sa elem do kete array perfundimtar
// inputi i dyte do jete tekst( emri)
// inputi trete do jete tekst (mbiemmri)
//  do krijojmem nje array me objekte ku secili objekt do kete dy elem {name: naja, lastname:hastop}
// dhe do perseritet aq here sa nr qe ke fut te inputi i pare

const form = document.querySelector(".form");
console.log(form);

const number = form.querySelector("#number");
console.log(number);
const names = form.querySelector("#name");
const lastName = form.querySelector("#lastName");
const p1 = names.value;
const p2 = lastName.value;
const btn = document.getElementById("submit");
console.log(btn);

btn.addEventListener("click", myFunction);
function myFunction() {
  let number = form.querySelector("#number");
  console.log(number);
  const names = form.querySelector("#name");
  const lastName = form.querySelector("#lastName");
  const p1 = names.value;
  const p2 = lastName.value;

  const numberValue = number.value;
  var result = [];
  console.log(numberValue);
  for (let i = 0; i < numberValue; i++) {
    const newObject = { name: p1, lastName: p2 };
    result.push(newObject);
  }
  console.log(result);
  return result;
}
