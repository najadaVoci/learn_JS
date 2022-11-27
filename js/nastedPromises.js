const allUsersApi = new Promise((resolve, reject) => {
  resolve([
    {
      userId: 1,
      name: "ari",
    },

    {
      userId: 2,
      name: "naja",
    },
    {
      userId: 3,
      name: "anxhi",
    },
  ]);
});

const dettaildeUserApi = new Promise((resolve, reject) => {
  resolve([
    {
      name: "ari",
      surname: "hs",
    },

    {
      name: "naja",
      surname: "voci",
    },
    {
      name: "anxhi",
      surname: "HS",
    },
  ]);
});

function getDettaildeData(id) {
  //ka per detyre te beje fech te gjithe userat, pastaj te marre userin specifik
  allUsersApi
    .then((results) => {
      console.log("JSON", results);

      const findById = results.filter((element) => {
        return element.userId === id;
      });

      if (findById.length) {
        dettaildeUserApi.then((results2) => {
          console.log("SECOND API RESULTS", results2);
          const filtred = results2.filter((singleElemInLoop) => {
            return singleElemInLoop.name === findById[0].name;
          });
          console.log("FINAL DATA", filtred);
        });
      }

      console.log("test", findById);
    })
    .catch((e) => console.log("e", e));
}

getDettaildeData(1);
