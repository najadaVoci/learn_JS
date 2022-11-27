// compute 2 number
{
  function compute(p1, p2) {
    return p1 * p2;
  }
  const result = compute(3, 4);
  console.log(result);
}

//funcion
{
  function add(x, y) {
    return x + y;
  }

  const value = add(1, 2);
  console.log(value);
}
//function

//example1
{
  function reverseString(value) {
    return value.split("").reverse().join("");
  }

  const nameReversed = reverseString("me shkruaj mbrapsht");
  console.log(nameReversed);
}
//example
{
  function maxNumber(array, minOrMax) {
    if (minOrMax === "up") {
      return Math.max(...array);
    } else {
      return Math.min(...array);
    }
  }

  console.log(maxNumber([5, 4, 9, 10], "down"));
}
//exampe. shkruaj nje funks qe merr si argumente 2 array dhe kthen nje array te vetem
{
  function array(firstArray, secondArray) {
    return [...firstArray, ...secondArray];
  }

  console.log(array([5, 9, 10], [1, 2, 3]));
}
// shkruaj nje funks qe merr si argumente 2 array dhe kthen si rezultat shumen e dy nr me te medhenj
{
  function finalArray(array1, array2) {
    const array1Max = Math.max(...array1);
    const array2Max = Math.max(...array2);
    return array1Max + array2Max;
  }
  console.log(finalArray([1, 2, 3], [5, 6, 7]));
}
// shkruaj nje funks qe merr si parameter nje string dhe kthen lengthin e stringut
{
  function nameLength(name) {
    const length = name.length;
    return length;
  }
  console.log(nameLength("najjada"));
}
// shkruajj nje funk q merr si param nje nr dhe e shumezon me rezultatin e nje funk tj
{
  function multiplyefn(nr) {
    return nr * finalArray([5, 6, 7, 1], [4, 3, 2]);
  }

  const result = multiplyefn(10);
  console.log(result);
}

{
  function rn() {
    return Math.floor(Math.random() * 50);
  }
  function test(nr, fn) {
    return nr * fn();
  }

  const result = test(10, rn);
  console.log(result);
}

//funcs recap
//1 funks merr parametra
//2 funkk merr jete vetem kur evokohet(therritet)
//3 kur funks gjate evokimit i pasojme nje funk tj kyy quhet callback (me thirr me vone)
//4 funk mbaron te return keyword (cdo gjje pas keyordit nuk ka me vlere)
//5 nje funk kthen rezultat cdo gje
//6 nje funk e deklaron duke perdor direkt funk (name) ose const naja = funnk(bosh)

{
  function test() {
    return function () {
      return 1;
    };
  }

  const test2 = test();
  console.log(test2(1));
}

// detyrat e mia
//example: Write a JavaScript function that reverse a number

{
  function numberReversed(nr) {
    return Number(String(nr).split("").reverse().join(""));
  }

  const reverseNumber = numberReversed(1234);
  console.log(reverseNumber);
}

//example Write a JavaScript function to print the “Hello World” message
{
  function printMessage() {
    const print = "hello world";
    return print;
  }
  console.log(printMessage("HELLO WORLD"));
}

//Write a function that returns the square of a number
{
  function squareNumber(p1, p2) {
    return Math.pow(p1, p2);
  }
  console.log(squareNumber(2, 4));
}

//Write a function to find the area of a given Rectangle

{
  function area(a, h) {
    return (a * h) / 2;
  }
  console.log(area(3, 4));
}

// Write a function to find the area and perimeter of a Circle
{
  function circle(r) {
    return `perimeter is: ${2 * Math.PI * r}, Area is: ${Math.PI * r * r}`;
  }
  console.log(circle(4));
}

// Count number of Vowels in String

{
  function vowelNumber(name) {
    const numberVowel = name.match(/[aeiou]/gi);
    return numberVowel === null ? 0 : numberVowel.length;
  }
  console.log(vowelNumber("a,b,c,d,i,e,f"));
}

// Flatten array of arrays using JavaScript reduce
{
  function flattArray(array1, array2, array3) {
    return [...array1, ...array2, ...array3];
  }
  console.log(flattArray([1, 2, 3], [4, 5, 6], [7, 8, 9]));
}

// Write a function to generate a random number
{
  function randomNum() {
    return Math.floor(Math.random() * 10);
  }
  console.log(randomNum());
}

//menyra 2 gjenero nje nr te rastesishem nga 1 tek 10
{
  function randomNum() {
    return Math.floor(Math.random() * 10 + 1);
  }
  console.log(randomNum(1, 10));
}

//example Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
//Otherwise, return "there is no 7 in the array".
{
  function arrayBoom(array, sevenBoom) {
    if (array.includes(7)) {
      return sevenBoom;
    } else {
      return "there is no 7 in the array";
    }
  }

  console.log(arrayBoom([1, 2, 3, 4, 5, 7], "Boom"));
}

// Create a function that returns the total number of boomerangs in an array.
{
  function boomerangArray(boomerang) {
    if (boomerang.length(3)) {
      return 1;
    }
    console.log(boomerangArray([1, 2, 1], [5, 6, 5]));
  }
}

//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

{
  function integerNumber(p) {
    const string = p.toString();
    const length = string.length;

    return length;
  }
  console.log(integerNumber(5000));
}

{
  function sort() {
    var a = Array.prototype.slice.call(arguments);
    return a.sort();
  }
  console.log(sort(30, 40, 50));
}

//shkruaj nje funksion, i cili merr nje argument dhe kthen true nese argumenti esh objekt
{
  function test(p, boolean) {
    if (typeof p === "object") {
      return boolean;
    } else {
      return "false";
    }
  }
  console.log(test({ name: "naja" }, "true"));
}

{
  //ushtrimi 2: shkruaj nje funksion i cili merr nje argument objekt, dhe e kontrollon nese eshte bosh ose jo. Nese esh bosh kth true. nese nuk esh bosh kthe false
  function ArgObject(obj, boolean) {
    if (Object.keys(obj).length === 0) {
      return boolean;
    } else {
      return "false";
    }
  }
  console.log(ArgObject({ name: "naja" }, "true"));
}

{
  function arrToObj(arr1) {
    return { ...arr1 };
  }
  console.log(arrToObj(["name", "ari", "do", "anxhin"]));
}

{
  const naja = ["name", "naja", "do", "arin", "ta", "fejoje"];
  const ari = { ...naja };
  console.log(ari);
}

//shkruaj nje funksion qe merr 2 paramtre, objekta, dhe kthen nje objekt perfundimtar me te gjitha key/valuet
{
  function finalObject(obj1, obj2) {
    let merged = { ...obj1, ...obj2 };
    return merged;
  }
  console.log(
    finalObject({ name: "ardit", lastName: "hastopalli" }, { job: "dev" })
  );
}

{
  function objects(obj1, obj2) {
    //1
    const finalObject = obj1;
    const objectKeysLength = Object.keys(obj2).length;
    const objectKeys = Object.keys(obj2);
    console.log({ objectKeys });
    console.log({ objectKeysLength });
    let i = 0;
    for (i; i < objectKeysLength; i = i + 1) {
      const currentKey = objectKeys[i];
      const currentValue = obj2[currentKey];
      console.log({ currentValue });
      finalObject[currentKey] = currentValue;
    }
    return finalObject;
  }
  console.log(
    objects({ name: "naa", lastName: "voci" }, { job: "mut", wage: "1200evro" })
  );
}

{
  const object = { a: 1, b: 2, c: 3 };
  //how to easly loop an object
  for (const property in object) {
    console.log(`${property}: ${object[property]}`);
  }

  function objects(obj1, obj2) {
    //1
    const finalObject = obj1;
    for (const property in obj2) {
      console.log(`${property}: ${obj2[property]}`);

      finalObject[property] = obj2[property];
    }

    return finalObject;
  }
  console.log(
    objects(
      { name: "naa", lastName: "voci" },
      { job: "mut", wage: "1500evro", prof: "PRO" }
    )
  );
}

// ARROW FUNCTIONS
{
  const object = (test) => {
    console.log("LEARN ME");
  };

  const test = (a, b) => 1;

  const testtt = (a, b) => {
    return 1;
  };
  object();
}

{
  //shkruaj nje funksion qe te krijoje nje arrej me x values, dhe cdo vlere te jete + 5 e vleres parardhese

  const arrayGenerator = (length, increment) => {
    //naja do nje kuti te madhe drruri ta mbushe me kumlla
    //naja nuk e di se sa kumlla do ti sjelli rodeni, di vetem qe cdo kumbull do te jete 5mm me e madhe se kumlla tj

    //najes i duhet nje kuti shumeeee elestatike, dhe kur ti sjelli rodeni kumbullat, ajo duhet ti vendose nje nga nje ne kuti qe te
    //mos prishen
    if (!length || !increment || isNaN(length) === false || !isNaN(increment)) {
      return "HARROVE TE FUSESH TE GJTIHE PARAMETRATE TUSHE";
    }
    if (length > 0 && increment > 0) {
      return "HARROVE TE FUSESH TE GJTIHE PARAMETRATE TUSHE";
    }

    //true && true ===> true
    //true && false => false
    //fasle && false ==> false
    // true || false ==> true
    // true || true => true
    //false || false ===> fasle

    const finalBox = [];
    console.time();
    for (let i = 0; i < length; i++) {
      const value = i * increment;
      finalBox.push(value);
    }
    console.timeEnd();
    return finalBox;
  };

  console.log("ari", arrayGenerator("fsfsfsfsfs", "dshfsdiu"));
}



