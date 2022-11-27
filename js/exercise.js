const btn = document.getElementById("submit");
console.log(btn);

let array = [];
for (let i = 0; i < 100; i++) {
  const names = ["test", "test1", "test2", "test3", "test4"];
  array.push({
    name: names[Math.floor(Math.random() * 10)],
    age: Math.floor(Math.random() * 100),
  });
}

function fetchResults(obj) {
  //filtro array
  const dataFiltered = array.filter((currentElem) => {
    return currentElem.name === obj.query;
  });
  // kthejme promise
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (obj.query === "") {
        rej("EMPTY QUERY");
      } else if (dataFiltered.length === 0) {
        rej("no result found");
      } else {
        res(dataFiltered);
      }
    }, 3000);
  });
}

function clickHandler() {
  //1.per te shfaqur messazhin "loading"
  document.getElementsByClassName("loading")[0].style.visibility = "initial";

  const errorSSMS = document.getElementsByClassName("error-sms")[0];
  if (errorSSMS) {
    errorSSMS.remove();
  }

  const result = document.getElementsByClassName("results");
  console.log(result);
  if (result) {
    [...result].forEach((currentResult) => {
      currentResult.remove();
    });
  }

  //2. kap inputin dhe vlerat qe do futen ne input
  const input = document.getElementById("fName");
  console.log(input.value);
  let inputValue = input.value;

  //3. therrasim promise
  fetchResults({ query: inputValue })
    .then((val) => {
      console.log("this is", val); //[{name:.., age:}, {}, ... {}]

      //per te zhduk mesazhin "loading" pasi te dhenat kane ardh
      document.getElementById("load").style.visibility = "hidden";

      //meqe ne e dime qe eshte array me objekte perdorim loop per te kriju 100 p
      val.forEach((element) => {
        const p = document.createElement("p");
        p.classList.add("results");
        //elem te krijuar i ndryshojme tekstin
        p.innerHTML = element.name + " is " + element.age + " year old";
        document.body.appendChild(p);
      });
    })
    .catch((err) => {
      const errorElem = document.createElement("p");
      errorElem.classList.add("error-sms");
      //elem te krijuar i ndryshojme tekstin
      errorElem.innerHTML = err;
      document.body.appendChild(errorElem);
      document.getElementById("load").style.visibility = "hidden";
    });
}

btn.addEventListener("click", clickHandler);
