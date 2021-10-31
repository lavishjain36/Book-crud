// 1.Create 3 function using taking the help Promise
// 1.getUser()
// 1.user id:userid
// 2.username:admin

// 2.getServices from APi
// display user.name

// setTimeout(() => {

// }, 5000);

// EMail and VPN

// 3.getCOst

// service charges

// Output using promise chaining

// 1.Get the data of the user from database
// 2.Get the data of the services from API
// array=>email,vpn,cloud access

// 3.FInd out the cost of the service

// one =>1000$ =>3000$

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Getting the data from the database ");
    setTimeout(() => {
      console.log("get user");
      resolve({ userId: userId, username: "admin" });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Getting the Services from ${user.username} `);
    setTimeout(() => {
      console.log("get services");
      resolve(["email", "vpn", "cloud access"]);
    }, 3000);
  });
}

function getCosts(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculating the cost of services for ${services}`);
    setTimeout(() => {
      console.log("get costs");
      resolve(services.length * 1000);
    }, 3000);
  });
}

getUser(100).then(getServices).then(getCosts).then(console.log);
