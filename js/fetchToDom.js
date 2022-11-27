document.addEventListener("DOMContentLoaded", () => {
  //marrim te dhenat e url nepermjet fetch
  function fetchApi() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => resp.json())
      .then((data) => fetchData(data));
  }

  // funks callBack ku do krijohen elem dhe do behen append
  function fetchData(data) {
    for (const item of data) {
      const divElement = document.getElementById("fetch-api");
      const div = document.createElement("div");
      const ul = document.createElement("ul");
      const liElement = document.createElement("li");
      const section = document.createElement("blockquote");
      const userId = document.createElement("p");
      const id = document.createElement("p");
      const p = document.createElement("p");
      const footer = document.createElement("footer");
      const br = document.createElement("br");
      const hr = document.createElement("hr");
      userId.innerHTML = item.userId;
      id.innerHTML = item.id;
      p.innerHTML = item.title;
      footer.innerHTML = item.completed;
      section.append(userId, id, p, footer, br, hr);
      div.append(ul);
      ul.append(liElement);
      liElement.append(section);
      divElement.append(liElement);

      // qe te mund ta stilizoj me css i shtoj elementeve te krijuar klasat
      liElement.className = "elements"; //for styling
      section.className = "section"; //for styling
      p.className = "items"; //for styling
      footer.className = "bolean"; //for styling
    }
  }
  fetchApi();
});
