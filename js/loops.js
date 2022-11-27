{
  //Create a loop that runs from 0 to 9.
  let num = [];
  for (i = 0; i < 10; i++) {
    num = num + i;
  }
  console.log(num);
}

{
  let i;
  for (i = 0; i < 10; i++) {}
  console.log(i);
}

{
  // krijo nje loop qe te nxjerre nje nga nje elem e objektit
  let person = { fName: "Ari", lName: "Hastopalli", age: 25 };
  let text = "";
  for (let n in person) {
    // let n eshte key value pra n mund ta shkruash si te duash psh n, m, x etj etj
    text = text + person[n]; //person[n] sepse kshu i nxerrim vlerat tek objektet ose person.n
  }
  console.log(text);
}

{
  // nxirr nje nga nje nr ne array me dy metooda.
  //metoda 1: me for
  const numbers = [45, 4, 9, 16, 25];

  let num = "";
  for (i = 0; i < numbers.length; i++) {
    num = num + " " + numbers[i];
  }
  console.log(num);
}

{
  //menyra 2 me for in.
  const numbers = [45, 4, 9, 16, 25];

  let num = "";
  for (let n in numbers) {
    num += numbers[n];
  }
  console.log(num);
}

{
  // krijo nje loop qe te nxjerre nje nga nje elem e objektit
  const person = { fName: "Ari", lName: "Hastopalli", age: 25 };
  let text = "";
  for (const n in person) {
    // let n eshte key value pra n mund ta shkruash si te duash psh n, m, x etj etj
    text = text + person[n]; //person[n] sepse kshu i nxerrim vlerat tek objektet ose person.n
  }
  console.log("naja", text);
}

{
  //1. Write a JavaScript program that accept two integers and display the larger

  function integer(int1, int2) {
    if (int1 < int2) {
      return int2;
    } else {
      return int1;
    }
  }
  console.log(integer(30, 20));
}

{
  function number(x1, x2, x3) {
    if (x1 < x2 && x2 < x3) {
      return x1, x2, x3;
    } else if (x2 < x1 && x1 < x3) {
      return x2, x1, x3;
    }
  }
  console.log(number(2, 4, 6));
}

//shruaj nje funksion i cili ka argument array me numra dhe ndaj vec nr cift dhe nr tek.

{
  function numberType(num, message) {
    const numLength = num.length;
    const odd = [];
    const even = [];
    for (i = 0; i < numLength; i++) {
      if (num[i] % 2 === 0) {
        console.log(num[i] + " i " + message);
        odd.push(num[i]);
      } else {
        console.log(num[i] + " is " + "tek");
        even.push(num[i]);
      }
    }

    return {
      nrCift: odd,
      nrTek: even,
    };
  }

  const nrCift = numberType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "cift").nrCift;
  const nrTek = numberType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "cift").nrTek;
  console.log({ nrCift });
  for (let y = 0; y < nrCift.length; y++) {
    if (nrCift[y] > 4) {
      console.log(nrCift[y] + " this odd number is bigger than 4");
    }
  }
  console.log(nrCift);
  console.log(nrTek);

  //recap : Funksionet kur ti i deklaron jane thjeshte nje skeme. Js e regjistron funksionin.
  // kur ti e therret , js shkon dhe egezekutopn cdo rrjesht brenda funksionit
  //funksioni theritet duke e theritur ne emer() me kllapat rrethore, dhe i pason argumente nese ai pranon argumente
}

//Shkruani një program JavaScript i cili përsërit numrat e plotë nga 1 në 100. Por për shumëfishat e tre shtypni "Fizz"
//në vend të numrit dhe për shumëfishat e pesë shtypni "Buzz".
//Për numrat që janë shumëfish të tre dhe pesë, shtypni "FizzBuzz"

{
  function integer(number) {
    const Fizz = [];
    const Buzz = [];
    const FizzBuzz = [];
    for (i = 0; i < number.length; i++) {
      if (number[i] % 3 === 0) {
        console.log(number[i] + "is" + "Fizz");
        Fizz.push(number[i]);
      } else if (number[i] % 5 === 0) {
        console.log(number[i] + "is" + "Buzz");
        Buzz.push(number[i]);
      } else {
        console.log(number[i] + "is" + "FizzBuzz");
        FizzBuzz.push(number[i]);
      }
    }
    return {
      multiples3: Fizz,
      multiples5: Buzz,
      multiples: FizzBuzz,
    };
  }

  const multiples3 = integer([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]).multiples3;

  const multiples5 = integer([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]).multiples5;

  const multiples = integer([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]).multiples;
  console.log(multiples3);
  console.log(multiples5);
  console.log(multiples);
}

//Shkruaj nje funksion i cili merr 2 array me numra si argumente, dhe kthen nje array te re me 4 numrat me te medhenj, 2 nga secila array

{
  function maxNumber(array1, array2) {
    let max1 = array1[0];
    let secondMax1;
    let secondMax2;
    let max2 = array2[0];
    const finalMax = [];

    for (let i = 0; i < array1.length; i++)
      if (max1 < array1[i]) {
        secondMax1 = max1;
        max1 = array1[i];
      } else if (array1[i] > secondMax1) {
        secondMax1 = array1[i];
      }

    for (let j = 0; j < array2.length; j++) {
      if (max2 < array2[j]) {
        secondMax2 = max2;
        max2 = array2[j];
      } else if (array2[j] > secondMax2) {
        secondMax2 = array2[j];
      }
    }
    return [secondMax1, max1, secondMax2, max2];
  }
  console.log(maxNumber([1, 2, 3, 4], [5, 6, 7, 8, 9]));
}

{
  //menyra 2
  function maxNum(array1, array2) {
    return [
      ...array1.sort((x, y) => y - x).slice(0, 2),
      ...array2.sort((x, y) => y - x).slice(0, 2),
    ];
  }
  console.log(maxNum([1, 2, 3, 4], [5, 6, 7, 8]));
}

//shkruaj nje funks i cili merr nje array me objekte kshu[{a:1, b:2}, {a:3, b:100} , {a: 33, b: 44}]
//dhe funksioni te ktheje : [{a:1,b:2,sum:3} ...
//dmth cdo objekti ti shtosh key sum qe esh shuma e atyre

{
  function sumArray(dataSet) {
    const finalData = [];
    for (let itemObject of dataSet) {
      console.log("SINGLE ITEM: ===> ", itemObject);
      const najaIsModyfyingThisObject = itemObject;
      najaIsModyfyingThisObject.c =
        najaIsModyfyingThisObject.a + najaIsModyfyingThisObject.b;
      finalData.push(najaIsModyfyingThisObject);
      console.log("THIS IS NAJAS object ===>", najaIsModyfyingThisObject);
    }
    return finalData;
  }

  console.log(
    sumArray([
      { a: 1, b: 2 },
      { a: 1, b: 6 },
    ])
  );
}

{
  function sumArray(dataSet) {
    const finalData = [];
    for (let itemObject of dataSet) {
      const currentItem = itemObject;
      const keys = Object.keys(itemObject);
      let sum = 0;
      for (let key of keys) {
        console.log("single key ==>", key, itemObject[key]);
        sum = sum + itemObject[key];
      }
      console.log(sum);
      currentItem.totalSum = sum;
      finalData.push(currentItem);
    }
    return finalData;
  }

  console.log(
    sumArray([
      { a: 1, b: 2 },
      { c: 1, d: 6 },
    ])
  );
}

//shkruj nje funksion i cili merr si parameter nje object i cili ka n numer keys, dhee mblidh ato nr te obj qe jane > 10.
//ti di qe cdo key ka si vlere nje array me numra.psH
/*const data = {
  a: [1,2,3,4],
  b: [3334,4,5,6]
}

*/
{
  function calcSum(dataSet, valueToCompare) {
    let totalSum = 0;

    for (let pisa in dataSet) {
      console.log(pisa); // ke kap elem e obj, qe jane a, b, c
      const pisaValue = dataSet[pisa]; //ke kap vlerat e obj, i cili ehste array
      console.log(pisaValue);
      for (let i of pisaValue) {
        console.log(i); //ka kap vlerat e array
        // for of kap valuet e array
        if (i > valueToCompare) {
          totalSum += i;
          console.log(totalSum);
        }
      }
    }
    return totalSum;
  }

  console.log(
    ",ari",
    calcSum(
      {
        a: [11, 2, 3, 4, 12, 15, 5],
        b: [12, 23, 4, 5, 6, 11],
        c: [11, 2, 16],
      },
      10
    )
  );
  console.log(
    ",ari",
    calcSum(
      {
        a: [11, 2, 3, 4, 12, 15, 5],
        b: [12, 23, 4, 5, 6, 11],
        c: [11, 2, 16],
      },
      10
    )
  );

  console.log(
    ",ari",
    calcSum(
      {
        a: [11, 2, 3, 4, 12, 15, 5],
        b: [12, 23, 4, 5, 6, 11],
        c: [11, 2, 16],
      },
      2
    )
  );
}

//Shkruaj nje funksion I cili merr si argumente vetem 2 array Me numra Dhe kthen si pergjigje
// Nese shuma e te gjithe numrave rshte me e madhe se 100" me e madhe se 100", Nese jo kthen "me e vogel se 100

{
  function maxSum(arr1, arr2, compare) {
    let sumTotal = 0;
    const finalArray = [...arr1, ...arr2];
    for (let item of finalArray) {
      sumTotal += item;
      console.log(sumTotal);
    }
    if (sumTotal > compare) {
      return "is bigger than 100";
    }
    return "is smaller than 100";
  }
  console.log(maxSum([1, 2, 50, 4], [5, 11, 7, 8, 5, 60], 100));
}

//shkrua nje funks qe merr si param nje obj me n values(keys), dhe nje array me nr.
//kontrollo nqs nr i keys eshte i barab me length e array
//funk duhet te ktejje obj e modifikuar ne menyre qe valuet e ob te jene nr me te medhenj.

{
  function calclateOb(obj, arr) {
    const objectKeys = Object.keys(obj).length;

    const arrLength = arr.length;
    const finalObject = obj;
    if (objectKeys !== arrLength) {
      return Error("ERROR check input");
    }
    Object.entries(obj); //kthen object ne nje array me arrays brenda kku secila array ka key and value (a , 1)
    console.log(Object.entries(obj));
    const objectToArray = Object.entries(obj);
    console.log(objectToArray);
    for (let i = 0; i < objectToArray.length; i++) {
      console.log(objectToArray[i][1], arr[i]); // objectToArray[i] nxjerr elem e objektit te modifikuar ne array. ["a", 1], ["b", 2], ["c", 6]
      //kur shtojme objectToArray[i][1] do te thote qe kapim elem ne pozicionin e pare te array pra 1, 2, 6 pasi a, b c ne array jane ne poz 0

      const objectValue = objectToArray[i][1]; // kap elem e obj te kthyer ne arrai i cili ndodhet ne poz e pare pra vlerat
      const arrayValue = arr[i];
      const key = objectToArray[i][0]; //kap elem e obj te kthyer ne arrai i cili ndodhet ne poz zero pra keys (a, b c)
      console.log(key);
      if (objectValue < arrayValue) {
        finalObject[key] = arrayValue;
      }
    }
    return finalObject;
  }

  console.log(calclateOb({ a: 1, b: 2, c: 4 }, [3, 1, 6]));
}

{
  function calclateOb(obj, arr) {
    const objectKeys = Object.keys(obj); // kap keys e obj pra array ["a", "b", "c"]
    console.log(objectKeys);
    const arrLength = arr.length;
    const finalObject = obj;
    if (objectKeys.length !== arrLength) {
      return Error("ERROR check input");
    }

    for (let i = 0; i < objectKeys.length; i++) {
      const key = objectKeys[i]; //kap a, b, c
      console.log(key);
      const value = finalObject[key]; // kap vleren e a b c pra 1, 2, 4
      console.log(value);
      const arrayValue = arr[i]; //kap vlerat a array
      console.log(value, arrayValue, key);
      if (value < arrayValue) {
        finalObject[key] = arrayValue;
      }
    }
    return finalObject;
  }

  console.log(calclateOb({ a: 1, b: 2, c: 4 }, [3, 1, 6]));
}

//shkr nje funk i cili do marre si param nje array me nr dhe do ktheje shumen.
{
  function calcSum(arr) {
    console.log(arr);
    let sum = 0;
    for (let item of arr) {
      console.log(item);
      const typeOfItem = typeof item;
      console.log(typeOfItem);
      if (typeOfItem === "number") {
        sum += item;
        console.log(sum);
      } else {
        for (let item2 of item) {
          const typeOfItem2 = typeof item2;
          console.log(item2);
          if (typeOfItem2 === "number") {
            sum += item2;
            console.log(sum);
          } else {
            for (let item3 of item2) {
              const typeOfItem3 = typeof item3;
              if (typeOfItem3 === "number") {
                sum += item3;
              } else {
                for (let item4 of item3) {
                  const typeOfItem4 = typeof item4;
                  if (typeOfItem4 === "number") {
                    sum += item4;
                  }
                }
              }
            }
          }
        }
      }
    }

    return sum;
  }

  console.log(
    calcSum([1, [1, 2, 3, 5], 55, [1, 2, 3, 4, 5], [1, 2, [[1, 3]]]])
  );
}

//shkr nje funks i cili merr si param nje objekt dhe i shton obj aq keys sa ka + (dmth do i dyfishosh keys) te cilat duhet te jene random
{
  function dublicateObjectKeys(obj) {
    const objectKeys = Object.keys(obj);
    // nxjerr keys e obj
    const finalObject = obj;
    console.log(objectKeys);
    for (let i of objectKeys) {
      console.log(`${i} jjj`);
      finalObject[`${Math.random()}`] = Math.random();
    }

    return finalObject;
  }
  console.log(dublicateObjectKeys({ a: 1, b: 2, c: 3 }));
}

{
  //shkruaj nje funks i cili numeron sa keys ka nje objekt gjithsej
  function countObject(object) {
    let count = 0;

    for (let key in object) {
      console.log(key);
      count += key.length;
      console.log(count);
      const typeofKey = typeof object[key];
      console.log(typeofKey);
      if (typeofKey === "object") {
        for (let i in object[key]) {
          console.log(i);
          const nastedObj = object[key][i];
          console.log(nastedObj);
          const nastedObjLength = Object.keys(nastedObj).length;
          console.log(nastedObjLength);
          count += key.length + nastedObjLength;
          console.log(count);
        }
      }
    }
    return count;
  }
  console.log(
    countObject({ a: 1, b: 2, c: { f: 8, g: { s: 1 }, d: { n: 10 } } })
  );
  //duhet te ktheje 6
}

{
  //shkruaj nje funks i cili numeron sa keys ka nje objekt gjithsej
  function sumObject(object) {
    let count = 0;
    const objValue = Object.values(object);
    console.log(objValue); //[1,2, {}]
    for (let item of objValue) {
      console.log(item); // 1, 2, {}
      const typeOfItem = typeof item;
      if (typeOfItem === "number") {
        count += item;
        console.log(count);
      } else {
        const nastedValue = Object.values(item); // [8, {…}, {…}]
        console.log(nastedValue);
        for (let item2 of nastedValue) {
          console.log(item2); // 8, {s},
          const typeOfItem2 = typeof item2;
          console.log(typeOfItem2); // object
          if (typeOfItem2 === "number") {
            count += item2;
            console.log(count);
          } else {
            const nastedValue1 = Object.values(item2); // [1], [10]
            console.log(nastedValue1);
            for (let item3 of nastedValue1) {
              console.log(item3); // 1, 10,
              const typeOfItem3 = typeof item3;
              console.log(typeOfItem3); // object
              if (typeOfItem3 === "number") {
                count += item3;
              }
            }
          }
        }
      }
    }
    return count;
  }
  console.log(
    sumObject({ a: 1, b: 2, c: { f: 8, g: { s: 1 }, d: { n: 10 } } })
  );
  //duhet te ktheje 6
}

//shkruaj nje funksion, i cili merr si parameter nje string dhe kthen si pergjighe nje array me indexet e cdo shkronje ne alfbet
{
  function stringToArray(str) {
    const position = 0;
    const arrayOfIndex = [];
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log(alphabet);
    const strLength = str.length;
    for (let i = 0; i < strLength; i++) {
      console.log(i); // 0, 1, 2 se bbb ke por duam te nxjerre 111
      const arrayValue = str[i]; // b, b,
      console.log(arrayValue);
      if (alphabet.indexOf(arrayValue) !== -1) {
        arrayOfIndex.push(alphabet.indexOf(arrayValue));
      }
    }
    return arrayOfIndex;
  }
  console.log(stringToArray("ccc"));
}

//shkruaj nje funk i cili merr si parameter nje array me nr dhe gjej nr me te madh pa perdor math.max

{
  function largerNrOfArray(arr) {
    let arrayAtFirstPosition = arr[0];
    const maxNr = 0;
    console.log(maxNr);
    for (i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      if (arrayAtFirstPosition < arr[i]) {
        arrayAtFirstPosition = arr[i];
        console.log(arrayAtFirstPosition);
      }
    }
    return arrayAtFirstPosition;
  }
  console.log(largerNrOfArray([1, 15, 7, 9, 20, 13, 50, 1, 100, 90, 3]));
}

//  shkruaj nje funk i cili merr si param nje array me string dhe kthen nje array me objekte
{
  function arrayToObject(arr) {
    const arrayOfObject = [];
    for (let item in arr) {
      // marr stringet: naja, pisa, rodeni
      console.log(arr[item]);
      const arrayWithObject = { name: arr[item] };
      console.log(arrayWithObject); // {name: "naja"}, {name: "pisa"}, {name: "rodeni"}
      arrayOfObject.push(arrayWithObject);
    }
    return arrayOfObject;
  }
  console.log(arrayToObject(["naja", "pisa", "rodi"]));
  //duam pergj [{name: "naja"}, {name: "pisa"}, {name: "rodeni"}]
}

{
  // shkruaj nje funk i cili ka si parameter funks  function byTen(nr) {return 10 * nr}
  //dhe kthen 10+ parametri i thirrur

  function byTen(nr) {
    return 10 * nr;
  }

  function Ari(param) {
    // param eshte nr te funkk i pare
    return 10 + param(2);
  }
  const value = Ari(byTen);

  console.log(value);
  //rezutati eshte 10 + (10*2) = 30
}

{
  //Shkruaj nje funksion i cili merr 2 parametra
  //1-array me nr
  //2-nje funksion, i cili merr nje parameter nr dhe kthen dyfishin e parametrit
  function dublicateNuber(nr) {
    return 2 * nr;
  }

  function dublicateArray(array, param) {
    const newArray = [];
    for (let item in array) {
      const value = array[item];
      console.log(value); //1, 2, 3
      const result = param(value); //ose value * param(1); nqs value =5, do te thote param(5)=2*5
      newArray.push(result);
    }
    return newArray;
  }
  const final = dublicateArray(dublicateNuber);
  console.log(final);

  console.log(dublicateArray([5, 6, 7], dublicateNuber));

  //pyetja qe kam te ky usht eshte: si la lesh, si ta heqesh const final rezultati del
}

{
  // shkruaj nje funks qe merr si parameter nje numer
  //dhe kthen nje funksion, i cili kthen numrin qe ka funksioni prind

  function parent(nr) {
    function child() {
      console.log("hi ar dudushi", nr);
      return nr;
    }
    return child;
  }
  const numberValue = parent(5);
  console.log(numberValue());
}

{
  // menyra 2
  function numberToParent(nr) {
    console.log(nr);
    return nr;
  }

  function children() {
    return nr;
  }

  const fund = numberToParent(children);
  console.log(numberToParent(20));
}
