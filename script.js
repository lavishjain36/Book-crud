document.querySelector("button").addEventListener(
  "click",
  function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        myImage.src = myContent["message"];
      });
  },
  false
);
