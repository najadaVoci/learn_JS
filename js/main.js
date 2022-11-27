console.log("Hello World!");
console.log(typeof "Najada");
console.log(typeof 42);
console.log(typeof true);

// data structure array *Ari*;
const myArray = [];

const myArray2 = new Array();

console.log(myArray, myArray2);
console.log(console);
console.log(Array);

const myArray3 = [1, 2, 3, "n", false];
console.log(myArray3);

const secondElement = myArray3[1];
console.log(secondElement);

const ari = 5 + 2 + 1;
console.log(ari);

//Barazimi ===, !==, >, >=, <, <=;

if (ari > 2) {
  console.log("hahhaha");
}

if (ari < 2) {
  console.log("hahhaha");
} else {
  console.log("belege");
}

//pyetje interviste : what is thread in js ? Answer: In software, 'Thread' is the smallest sequence of execution of programmed instructions managed independently by a scheduler, being a part of an Operating System. JavaScript Thread is single-threaded by default used to run a script in the web application, perform layout and garbage collection.

//block scope
{
  const test = 2;
}

console.log("najad", "test");
// ky eshte block scope dhe ne monitor del error

// string length;

let test1 = "r";
console.log(test1.length);

{
  // concat
  let test2 = "naja";
  let test3 = "rode";
  console.log(test2.concat("", test3));
}

{
  let x = "5";
  console.log(x.padStart(4, "x"));
}

{
  let x = "Najada";
  console.log(x[2]);
}

{
  let text = "HELLO WORLD";
  console.log(text[1]);
}

{
  //trim
  let text = "     Hello World!     ";
  let result = text.trim();
  console.log(text);
  console.log(result);
}

{
  //split
  let text = "How are you";
  const myArray = text.split(" ");
  console.log(text.split(" "), myArray[1]);
}

{
  //split
  let text = "How are you";
  const myArray = text.split("");
  console.log(text.split(""));
}

{
  //split
  let text = "How are you";
  const myArray = text.split(" ", 2);
  console.log(text.split(" ", 2));
}

{
  //trimEnd
  let text1 = "     Hello World!     ";
  let text2 = text1.trimEnd();
  console.log(text1.length);
  console.log(text2.length);
}

{
  //trimStart
  let text1 = "     Naja     ";
  let text2 = text1.trimStart();
  console.log(text1.length);
  console.log(text2.length);
}

{
  //repeat
  let text = "Hello world!";
  console.log(text.repeat(2));
}

{
  //replace
  let text = "Hello world!";
  console.log(text.replace("world", "naja"));
}

//lesson 3 from dave//STRINGS//

const myVariable = "Mathematics";
console.log("naja", myVariable.split("a"));

{
  let text = "Hello planet earth, you are a great planet.";
  console.log(text.length);
  console.log("rod", text.indexOf("planet"));
  console.log(text.lastIndexOf("planet"));
}

{
  const myVariable = "Mathematics is what i love";
  console.log(myVariable.charAt(15));
}

{
  let x = "5";
  console.log(x);
}

let x = 10;
let y = 20;
let z = x + y;
console.log("n", z);

//number methods

// toString : returns a number as a string
{
  let x = 6;
  console.log(x.toString());
  let y = "4";
  z = x + y;
  console.log(z);
  //Pra nepermet proves me mbledhje provoj qe nr 6 u kthye ne string
}

{
  // Number() method - convert a variable to a number
  let x = "10 20";
  console.log(Number(x));
  let y = "20,30";
  console.log(Number(y));
  let z = "pisa";
  console.log(Number(z));
  let n = "10 year";
  console.log(Number(n));
  let m = "year 10";
  console.log(Number(m));
}
{
  let x = 9.656;
  console.log(x.toFixed(0));
  console.log(x.toFixed(1));
  console.log(x.toFixed(3));
  console.log(x.toFixed(2));
}

{
  let x = 9.656;
  console.log(x.toExponential(0));
  console.log(x.toExponential(1));
  console.log(x.toExponential(3));
}

{
  let x = 9.656;
  console.log(x, x.toPrecision(3));
}

{
  let x = "100";
  let y = "10";
  let z = x / y;
  console.log(z);
}

{
  let x = 4.9;
  Math.ceil(4.9);
  console.log("n", Math.ceil(4.9));
  console.log("n", Math.ceil(4.4));
  console.log("n", Math.ceil(4.5));
  console.log("n", Math.ceil(-4.6));
}

{
  console.log("p", Math.floor(4.9));
  console.log("p", Math.floor(4.4));
  console.log("p", Math.floor(4.5));
  console.log("p", Math.floor(-4.5));
}
// generate a random number
{
  //returns a random number from 0 to 10
  Math.random() * 10;
  console.log(Math.random() * 10);
}

{
  //returns a random integer from 0 to 10 (0 dhe 10 te jene te perfshira)
  Math.floor(Math.random() * 11);
  console.log(Math.floor(Math.random() * 11));
}

{
  //returns a random integer from 1 to 10 (1 dhe 10 te jene te perfshira)
  Math.floor(Math.random() * 11 + 1);
  console.log(Math.floor(Math.random() * 11 + 1));
}

{
  // first exercise from dave
  // return a random letter from a name

  const name = "Ardit";
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
  console.log(name.charAt(Math.floor(Math.random() * name.length)));
}

//funcion
function add(x, y) {
  return x + y;
}

const value = add(1, 2);
console.log(value);
//function

//example
function reverseString(value) {
  return value.split("").reverse().join("");
}

const nameReversed = reverseString("me shkruaj mbrapsht");
console.log(nameReversed);

//example

function maxNumber(array, minOrMax) {
  if (minOrMax === "up") {
    return Math.max(...array);
  } else {
    return Math.min(...array);
  }
}

console.log(maxNumber([5, 4, 9, 10], "down"));

//exampe. shruaj nje funks qe merr si argumente 2 array dhe kthen ne array te vetem

function array(firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

console.log(array([5, 9, 10], [1, 2, 3]));

// shkruaj nje funks qe merr si argumente 2 array dhe kthen si rezultat shumen e dy nr me te medhenj

  function finalArray(array1, array2) {
    const array1Max = Math.max(...array1);
    const array2Max = Math.max(...array2);
    return array1Max + array2Max;
  }
  console.log(finalArray([1,2,3], [5,6,7]))

  // shkruaj nje funks qe merr si parameter nje string dhe kthen lenghin e stringut

  function nameLength (name) {
    const length = name.length
    return length
  }
console.log(nameLength("najjada"))

// shkruajj nje funk q merr si param nje nr dhe e shumezon me rezultatin e nje funk tj

function multiplyefn(nr) {
  return nr*finalArray([5,6,7,1], [4,3,2])
}

const result = multiplyefn(10)
console.log(result)


{
function rn(){
  return Math.floor(Math.random()*50)
}
function test(nr, fn) {
  return nr*fn()
}

const result = test(10,rn)
console.log(result)
}

//funcs recap
//1 funks merr parametra
//2 funkk merr jete vetem kur evokohet(therritet)
//3 kur funks gjate evokimit i pasojme nje funk tj kyy quhet callback (me thirr me vone)
//4 funk mbaron te return keyword (cdo gjje pas keyordit nuk ka me vlere)
//5 nje funk kthen rezultat cdo gje
//6 nje funk e deklaron duke perdor direkt funk (name) ose const naja = funnk(bosh)
{
function test(){
  return function(){
    return 1
  }
}

const test2 = test()
console.log(test2(1))

}


//funcion ()


