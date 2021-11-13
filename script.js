var url = "https://618fa913f6bf4500174849cd.mockapi.io/users";

//Read the data

function getData() {
  fetch(url)
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

// getData();

//create =the data with post
function createData() {
  let data = {
    name: "Lavish Jain",
    email: "lavish@guvi.in",
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

createData();
// getData();

//update=>http method is put
// i have to update data with id =12
function updateData() {
  let data = {
    name: "swapnil",
    email: "swapnil@gmail.com",
  };

  fetch(url + "/2", {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

updateData();

getData();

//Delete=>
// delete a particular data=>http DELETE
function deleteData() {
  fetch(url + "/6", {
    method: "DELETE",
  })
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

deleteData();
