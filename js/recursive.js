//shkruaj nje funksion, i cili merr si parameter nje numer, dhe e therret veten aq here sa eshte numri i futur :p

{
  function repeat(startNr = 0, totalNrOfRepeated) {
    if (startNr < totalNrOfRepeated) {
      console.log(startNr);
      repeat(startNr + 1, totalNrOfRepeated);
    }
  }
  repeat(0, 10);
}

//shkruaj nje funksion rekursiv, i cili ka per detyre qe nje array te jashtme ta marri te gjithe

let allItems = [];
//e populloj array-n me 100 items
for (let i = 0; i < 100; i++) {
  allItems.push({ nr: i });
}
console.log(allItems);

function getAllData(limit = 10, accumulator, items) {
  for (let i = 0; i < allItems; i++) {
    console.log(i);
  }
}

getAllData(10, [], allItems);
