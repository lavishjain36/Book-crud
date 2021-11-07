document.querySelector("button").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myImage.src = data.message;
    });
});
