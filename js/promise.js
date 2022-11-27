{
  // //  Shkruaj nje funksion
  // // I cili kten nje promise, e cila ben resolve nr 1 pas 5s

  function naja() {
    return 1;
  }

  let myPromise = new Promise(function (myResolve) {
    setTimeout(() => {
      myResolve(naja());
    }, 1000);
  });

  myPromise.then(function (value) {
    console.log(value);
  });
}

{
  const naja = (nr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(nr);
      }, 3000);
    });
  };
  naja(5).then((value) => {
    console.log(value);
  });
}

{
  //kotrollo nese ne doom ekziston nje elem i dhene.

  const element = (id) => {
    return new Promise((resolve, reject) => {
      const getElementInDom = document.getElementById(id);
      if (getElementInDom) {
        resolve(getElementInDom);
      } else {
        reject("the element is not in DOM");
      }
    });
  };
  element("ari")
    .then((value) => {
      console.log(value);
    })
    .catch((e) => {
      console.log(e);
    });
}

{
  // write a function whitch receives a string and return a promise.
  //The promise should should resolve with the uppercase version of the string,
  //but should reject if the string is null

  const stringData = (string) => {
    return new Promise((resolve, reject) => {
      if (string !== null) {
        const stringUpperCase = string.toUpperCase();
        resolve(stringUpperCase);
      } else {
        reject("the string is null");
      }
    });
  };

  stringData("naja")
    .then((value) => {
      console.log(value);
    })
    .catch((e) => {
      console.log(e);
    });

  stringData(null)
    .then((value) => {
      console.log(value);
    })
    .catch((e) => {
      console.log(e);
    });
}

{
  //shkruaj nje funk i cili ka si parameter nje string dhe
  //dhe ben return fetch(url) ku url https://jsonplaceholder.typicode.com/todos/1

  const fetchApi = (string) => {
    return fetch(string);
  };
  fetchApi("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//bej fetch kte apin : https://jsonplaceholder.typicode.com/posts
//dhe shfaq vetem ato rezultate, qe kane lengthin e titullit jo me te madhe se 50
{
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) =>
      console.log(
        json.filter((x) => {
          return x.title.length <= 50;
        })
      )
    );
}
