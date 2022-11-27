{
  // storage i ruan te dhenat ne string
  const obj = {
    name: "naja",
    logName: function () {
      console.log(this.name);
    },
  };

  sessionStorage.setItem("sessionStore", obj);
  const sessionData = sessionStorage.getItem("sessionStore");
  console.log(sessionData); //[object, object]
  console.log(typeof sessionData); //string
}

// vs

{
  //nepermjet json te dhenat ne storage i ruajme obj
  const obj = {
    name: "naja",
    logName: function () {
      console.log(this.name);
    },
  };

  sessionStorage.setItem("sessionStore", JSON.stringify(obj));
  const sessionData = JSON.parse(sessionStorage.getItem("sessionStore"));
  console.log(sessionData); //{name: 'naja'} NDERSA FUNK HUMB NE JSON
  console.log(typeof sessionData); //OBJECT
  const keys = sessionStorage.key(0);
  console.log(keys);
  const length = sessionStorage.length;
  console.log(length);
}

{
  //shembull 2
  const array = ["eat", "sleep", "code"];

  localStorage.setItem("MyArray", array);
  const localStorageData = localStorage.getItem("MyArray");
  console.log(localStorageData); // eat,sleep,code
  console.log(typeof localStorageData); // string
}

//vs

{
  const array = ["eat", "sleep", "code"];

  localStorage.setItem("MyArray", JSON.stringify(array));
  const localStorageData = JSON.parse(localStorage.getItem("MyArray"));
  console.log(localStorageData); //["eat", "sleep", "code"]
  console.log(typeof localStorageData); // OBJECT
  const length = localStorage.length;
  console.log(length); // 1
  const keys = localStorage.key(0);
  console.log(keys); // MyArray
}

{
  for (let i = 0; i < localStorage.length; i++) {
    // console.log(localStorage.getItem(localStorage.key(i)));
    const keys = localStorage.key(i);
    console.log(keys); // MyArray
    const localData = localStorage.getItem(keys);
    console.log(localData); // ["eat","sleep","code"]
  }
}
