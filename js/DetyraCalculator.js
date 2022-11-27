const numbersElement = document.querySelectorAll(".number");
console.log(numbersElement);

const operatorElements = document.querySelectorAll(
  ".operator-container .operator"
);
console.log(operatorElements);

const setResults = (inputsAdded) => {
  const results = document.getElementsByClassName("text")[0];
  results.innerHTML = inputsAdded.join("");
};

function sum(array) {
  let sumOfNumber = 0;
  //FILTRUAM ARRAY NGA OPERATORET.
  const filteredArray = array.filter((item) => {
    return !isNaN(item);
  });
  for (let item in filteredArray) {
    console.log(filteredArray[item]);
    sumOfNumber += filteredArray[item];
  }
  return sumOfNumber;
}

function substracting(arr) {
  let subsOfNumber = arr[0];
  const filterArray = arr.filter((item) => {
    return !isNaN(item);
  });
  for (let i = 1; i < filterArray.length; i++) {
    subsOfNumber -= filterArray[i];
  }
  return subsOfNumber;
}
//tani duam qe butonat e klikuar te ruhen diku.
//pastaj i bej push currentNumber
let inputs = [];
let operators = [];
for (let i = 0; i < numbersElement.length; i++) {
  numbersElement[i].addEventListener("click", () => {
    console.log(numbersElement[i]);
    const currentNumber = Number(numbersElement[i].innerHTML);
    console.log(currentNumber);
    console.log(typeof currentNumber); // eshte string. e duam number kshq perdorim Namber() meethod
    inputs.push(currentNumber);
    console.log("inputClick ==>", inputs);
    // const results = document.getElementsByClassName("text")[0];
    // results.innerHTML = inputs.join("");
    setResults(inputs);
  });
}

for (let i = 0; i < operatorElements.length; i++) {
  operatorElements[i].addEventListener("click", () => {
    console.log(operatorElements[i].innerHTML);
    const innerHTML = operatorElements[i].innerHTML; //jep operatoret
    if (innerHTML === "+" && inputs.length !== 0) {
      //ne kete pike dime qe kemi vtm nr. le ti mbledhim dhe inputi == numrin
      let inputsTonumber = "";
      const filtredInputs = inputs.filter((item) => {
        return !isNaN(item);
      });

      filtredInputs.forEach((currentNr) => {
        inputsTonumber += currentNr;
      });
      console.log({ inputsTonumber });
      inputs = [Number(inputsTonumber)];
      operators = [];
      operators.push(innerHTML);
      inputs.push(innerHTML);

      console.log("=====>", inputs, operators);
      setResults(inputs);
    }
    if (innerHTML === "-" && inputs.length !== 0) {
      let inputsToNumber = "";
      const filtredInputs = inputs.filter((item) => {
        return !isNaN(item);
      });

      filtredInputs.forEach((currentNr) => {
        inputsToNumber += currentNr;
      });
      console.log({ inputsToNumber });
      inputs = [Number(inputsToNumber)];

      // const dataSubstracting = substracting(inputs);
      // inputs = [dataSubstracting];
      operators = [];
      operators.push(innerHTML);
      inputs.push(innerHTML);

      console.log("=====>", inputs, operators);
      setResults(inputs);
    }
    if (innerHTML === "Clear" && inputs.length !== 0) {
      inputs = [];
      operators = []; // kte e shtova une
      console.log(inputs, operators);
      setResults(inputs);
    }
    if (innerHTML === "=") {
      // inputs.forEach((item, i, arr) => {
      //   console.log({ item, i, arr });
      //   const currentElementInLoop = item;
      //   const nextElementInLopp = arr[i + 1];
      // });
      const results = document.getElementsByClassName("text")[0];
      inputs = [];
      if (results.innerHTML === "") {
        results.innerHTML = "";
      } else {
        console.log(results.innerHTML);
        let answer = eval(results.innerHTML);
        console.log(answer);

        results.innerHTML = answer;
        inputs.push(answer);
      }
      // if (innerHTML === "-" && inputs.length !== 0) {
      //   substracting(inputs);
      // }
      // if (innerHTML === "+" && inputs.length !== 0) {
      //   sum(inputs);
      // }
      setResults(inputs);
    }
    const filteredArray = inputs.filter((item) => {
      return !isNaN(item);
    });

    console.log(filteredArray);
    console.log(operators);
  });
}
