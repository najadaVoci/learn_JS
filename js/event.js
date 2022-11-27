{
  const myCat = document.getElementsByClassName("cat");
  console.log(myCat);

  myCat[0].addEventListener("click", myFunction);

  function myFunction() {
    myCat[0].innerHTML = "erdhi mbreme prr prr";
  }
}

{
  //bej nje buton qe sa here e shtyp aq here e rrit nr dhe nje buton qe sa here e shtyp aq here e zvog nr
  const div = document.getElementsByClassName("increment");
  console.log(div[0]);

  const incrementNum = document.getElementsByClassName("inc");
  console.log(incrementNum[0]);

  const decrementNum = document.getElementsByClassName("dec");
  console.log(decrementNum[0]);

  const num = document.getElementById("progress");
  console.log(num);

  let score = 0;
  num.innerHTML = score;

  incrementNum[0].addEventListener("click", shto);
  function shto() {
    score++;
    num.innerHTML = score;
  }

  decrementNum[0].addEventListener("click", zbrit);

  function zbrit() {
    score--;
    num.innerHTML = score;
  }
}

{
  //Bej nje input Dhe nje button to do list Dhe cado te shkrush te inputi,
  //kur klikon butonin Shtohet ne nje list
  const btn = document.getElementsByClassName("list")[0];
  console.log(btn);
  const div = document.getElementsByClassName("lists")[0];
  console.log(div);
  btn.addEventListener("click", toDoList);
  function toDoList() {
    const newElement = document.createElement("p");
    const secondElement = document.createElement("p");
    newElement.setAttribute("id", fname.value);
    secondElement.setAttribute("id", fname.value);
    const node = document.createTextNode("Learning");
    const node1 = document.createTextNode("coffe");
    newElement.appendChild(node);
    secondElement.appendChild(node1);
    div.appendChild(newElement);
    div.appendChild(secondElement);
  }
  const button1 = document.getElementById("naja");
  console.log(button1);
  button1.addEventListener("click", removeP);
  function removeP() {
    let item = document.getElementById(fname.value);
    div.removeChild(item);
  }
}

// {
//   //menyra 2
//   const btn = document.getElementsByClassName("list")[0];
//   console.log(btn);
//   const div = document.getElementsByClassName("lists")[0];
//   console.log(div);
//   btn.addEventListener("click", toDoList);
//   function toDoList() {
//     const learnList = document.createElement("li");
//     const coffeList = document.createElement("li");
//     learnList.textContent = "Learning";
//     coffeList.textContent = "Coffe";
//     div.append(learnList, coffeList);
//   }
//   const deleteBtn = document.getElementsByClassName("delete")[0];
//   console.log(deleteBtn);
//   deleteBtn.addEventListener("click", myFunction);
//   function myFunction() {
//     const learnList = document.createElement("li");
//     const coffeList = document.createElement("li");
//     learnList.textContent = "Learning";
//     coffeList.textContent = "Coffe";
//     div.append(learnList, coffeList);
//     div.removeChild(learnList, coffeList);

//   }
// }

// {
//   //menyra 3. per kte menyre krijova ne HTML dy p bosh :P
//   const btn = document.getElementsByClassName("list")[0];
//   console.log(btn);
//   const div = document.getElementsByClassName("lists")[0];
//   console.log(div);
//   btn.addEventListener("click", toDoList);
//   function toDoList() {
//     document.getElementById("demo").innerHTML = "naja";
//     document.getElementById("demo1").innerHTML = "ari";
//   }
// }

// {//menyra dy si te shtosh elem ne dom dhe si ti heqesh pwrseri keto elem
//   function addItem() {
//     var a = document.getElementById("list");
//     var naja = document.getElementById("candidate");
//     var li = document.createElement("li");
//     li.setAttribute("id", naja.value);
//     const node = document.createTextNode("ari lovis u");
//     li.appendChild(node);
//     a.appendChild(li);
//   }

//   // Creating a function to remove item from list
//   function removeItem() {
//     // Declaring a variable to get select element
//     var a = document.getElementById("list");
//     var naja = document.getElementById("candidate");
//     var item = document.getElementById(naja.value);
//     a.removeChild(item);
//   }
// }

{
  // togleri kur leviz ndryshon ngjyre
  document.getElementById("toggler").onclick = myFunction;
  function myFunction() {
    let color = document.body.style.background;
    if (color === "black") {
      document.body.style.background = "green";
    } else {
      document.body.style.background = "black";
    }
  }
}
