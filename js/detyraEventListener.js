const div = document.getElementsByClassName("lists")[0];
console.log(div);

const ul = document.getElementsByTagName("ul")[0];
console.log(ul);

const li = ul.querySelectorAll("li");
console.log(li);

for (i = 0; i < li.length; i++) {
  const liValue = li[i];
  console.log(liValue);
  liValue.addEventListener("click", function () {
    console.log("clicked", liValue);

    document.getElementById("demo").innerHTML = alert(liValue.innerHTML);
    return;
  });
}

{
  // set the current date and time
  function myTimer() {
    const date = new Date();
    let dt = date.toDateString();
    let time = date.toLocaleTimeString();
    document.getElementById("setDate").innerHTML = dt;
    document.getElementById("time").innerHTML = time;
  }

  setInterval(myTimer, 1000);
}

{
  const array = [1, 5, 7, 9];
  const dublicate = [];

  const v = array.filter(function (item, i) {
    const poer2 = item * item;
    dublicate.push(poer2);
    return dublicate;
  });

  console.log({ v });
  console.log(dublicate);
}

// task: ke nje form e cila ka tre fusha te cilat inputet jane:
// inputi i pare deklaron sa elem do kete array perfundimtar
// inputi i dyte do jete tekst( emri)
// inputi trete do jete tekst (mbiemmri)
//  do krijojmem nje array me objekte ku secili objekt do kete dy elem {name: naja, lastname:hastop}
// dhe do perseritet aq here sa nr qe ke fut te inputi i pare
