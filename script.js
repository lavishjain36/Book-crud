const ul = document.getElementById("runners"),
  url = "https://randomuser.me/api/?gender=female&results=10";

const createNode = (element) => {
  return document.createElement(element);
};
const append = (parent, el) => {
  return parent.appendChild(el);
};

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let runners = data.results;
    return runners.map((runner) => {
      let li = createNode("li"),
        img = createNode("img"),
        span = createNode("span");
      img.src = runner.picture.medium;
      span.innerHTML = `${runner.name.first} ${runner.name.last}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    });
  })
  .catch((error) => {
    console.log(error);
  });
