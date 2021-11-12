// C - Create - POST
// R - Read - GET
// U - Update - Put
// D - Delete - DELETE
//------------------------------------------------------------
//GET method
async function fetchingapi() {
  try {
    const apidata = await fetch(
      "https://618eba7c50e24d0017ce140e.mockapi.io/users",
      { method: "get" }
    );
    const convertedapi = await apidata.json();
    document.querySelector(".user-list").innerHTML = "";
    convertedapi.forEach((userdata) => createuser(userdata));
  } catch (err) {
    document.body.append("Mock API server crashed");
  }
}
fetchingapi();
//------------------------------------------------------------
//Fetched api to be displayed on the screen
function createuser({ createdAt, name, avatar, id }) {
  const container = document.createElement("div");
  // container.className = 'container';
  container.innerHTML = `
<div class="main">
<div>
  <img class = "profilepic" src = ${avatar} alt = "profilepictures">
</div>
<div class="description">
  <p><b>Name:</b> ${name}</p>
  <p><b>Created at:</b> ${new Date(createdAt).toDateString()}</p>
  <button onclick ="deleteuser(${id})">Delete</button>
  <button class="user-edit" onclick="editUser('${name}', '${id}', '${avatar}')"> Edit </button>
</div>
</div>`;
  document.querySelector(".user-list").append(container); //used queryselector to select the section class in html (line 4) and append the container to the section class '.user-list', if you have used the container and appended it to the body directly like document.body.append(container) without using the section tag or div tag what happens is that the container html part (line 30 - 39) covers the screen and will not show the html code(line 1 - 3). The HTML code (line 1 - 3) will run but it will not show in the screen.
}
//------------------------------------------------------------
//DELETE method
async function deleteuser(id) {
  console.log(`Deleting ${id}`);
  const removeuser = await fetch(
    `https://618eba7c50e24d0017ce140e.mockapi.io/users/${id}`,
    { method: "DELETE" }
  );
  const removeduser = await removeuser.json(); //this line is just to print the deleted id in the console as usual procedure converting it into json and printing it.
  console.log(removeduser);
  fetchingapi();
}
//------------------------------------------------------------
//POST method
function adduser() {
  const nametext = document.querySelector(".name").value;
  const avatarimg = document.querySelector(".urllink").value; //selecting and storing the text entered in the type box

  fetch("https://618eba7c50e24d0017ce140e.mockapi.io/users", {
    method: "POST",
    //to pass the values from input to POST we should use body to pass the data
    body: JSON.stringify({
      name: nametext,
      avatar: avatarimg,
      createdAt: new Date().toISOString(),
    }), //before passing it first we should convert it into JSON by using stringify
  });
} //we can do like this, this method post the new data given in the textbox to the api link and it stores as a JSON in the api.

async function adduser() {
  const nametext = document.querySelector(".name").value;
  const avatarimg = document.querySelector(".urllink").value; //selecting and storing the text entered in the type box
  const postdata = {
    name: nametext,
    avatar: avatarimg,
    createdAt: new Date().toISOString(),
  };
  console.log(postdata, JSON.stringify(postdata));

  const data = await fetch(
    "https://618eba7c50e24d0017ce140e.mockapi.io/users",
    {
      method: "POST",
      //to pass the values from input to POST we should use body to pass the data
      body: JSON.stringify(postdata), //before passing it first we should convert it into JSON by using stringify, here postdata is from the object on line 73.
      //before sending to the API(server) we stringify it and send it.

      //in the case for mockapi we should mention the headers
      headers: {
        "Content-Type": "application/json", //we are telling the mockapi that we are sending the content type of application json in case of mockapi.io.
        //if we have not used the content type for mockapi.io sometimes random data may get filled in
      },
    }
  );
  fetchingapi(); //for screen refresh we are calling the function to clear the screen and update the data;
}

//------------------------------------------------------------
//PUT method
async function editUser(name, id, avatar) {
  const ename = (document.querySelector(".name").value = name);
  const eavatar = (document.querySelector(".urllink").value = avatar);
  document.querySelector(".editing").innerText = "Edit text";
  const postedata = {
    name: ename,
    avatar: eavatar,
  };
  const edata = await fetch(
    `https://618eba7c50e24d0017ce140e.mockapi.io/users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(postedata),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  fetchingapi();
}
editUser();
