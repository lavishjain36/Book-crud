async function getUsers() {
  const myData = await fetch(
    "https://618eba7c50e24d0017ce140e.mockapi.io/users",
    { method: "GET" }
  );
  const user = await myData.json();
  // console.log(user);
  return user;
}
async function displayUsers() {
  const users = await getUsers();
  // console.log(users)
  const userList = document.querySelector(".user-list");
  userList.innerHTML = "";
  users.forEach((user) => {
    console.log(user.name);
    // userList.innerText = userList.innerText + user.name;
    userList.innerHTML += `<div class="user-container">
   <img src=${user.avatar} class="image">
   <div>
   <h2 class="text">${user.name}</h2>
   <button onclick="deleteUser(${user.id})">DELETE</button>
   </div>
   </div>`;
  });
}
async function deleteUser(id) {
  console.log(id);
  //  (IMPORTANT PUT A /(SLASH ON THE LINK OF MOCKAPI))

  const myData = await fetch(
    "https://618eba7c50e24d0017ce140e.mockapi.io/users/" + id,
    { method: "DELETE" }
  );
  //   (after click the delete button -> user deleting happens ->refresh the list in mockapi and ->dispalyusers,upto this the user is deleted but it copy with the same user list so we empty the html part and disply it)
  displayUsers();
}

async function addUser() {
  console.log("Adding User");
  const name = document.querySelector(".add-user-name").value;
  const avatar = document.querySelector(".add-user-avatar").value;
  console.log(name, avatar);
  //(create data)
  //   1.method - POST
  //   2.provided data in the - body - stringfy
  //   3.specify - data format in headers - JSON
  const myData = await fetch(
    "https://618eba7c50e24d0017ce140e.mockapi.io/users",
    {
      method: "POST",
      body: JSON.stringify({
        name: name,
        avatar: avatar,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  displayUsers();
}

displayUsers();

// (CRUD)
//              METHODS
// c - create - POST
// R - read   - GET
// U - update - PUT-(Its combination of DELETE &POST)
// D - Delete - DELETE
