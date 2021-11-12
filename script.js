function searchbar() {
  const main = document.createElement("div");
  main.innerHTML = `
    <div class=mainbox></div>
    <form>
      <label for="searchbar">Enter a name</label>
      <input type="text" class="searchon" name="searchbar">
      <button type="button" class="searchinglist" onclick='search()'>Search</button>
    </form>
    `;
  document.querySelector(".box").append(main);
}
searchbar();

function search() {
  const test = document.querySelector(".searchon");
  const inputtext = test.value;
  fetching(inputtext);
}
search();

async function fetching(input) {
  // try{
  const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`);
  const convertingapi = await data.json();
  console.log(convertingapi);
  // convertingapi.forEach(boxes => databox(boxes));
  databox(convertingapi.results);
  // }
  // catch(err){
  //   document.body.append("Sorry for the inconvenience try again later")
  // }
}

function databox(boxes) {
  for (let i = 0; i <= boxes.length; i++) {
    let searchresultbox = document.createElement("div");
    searchresultbox.innerHTML = `
      <img src=${boxes[i].image_url}>`;
    document.querySelector(".box").append(searchresultbox);
  }
}
