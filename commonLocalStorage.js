//set item to local storage
localStorage.setItem("username", "Afzal Hossain");
localStorage.setItem("user", "Afzal");
localStorage.setItem("name", "Hossain");
//get item from local storage
const username= localStorage.getItem("username");
const user= localStorage.getItem("user");
const name= localStorage.getItem("name");
//displaying the values
console.log(username);
console.log(user);
console.log(name);
//remove item from local storage
localStorage.removeItem("name");
//clear all the local storage
localStorage.clear();
//set item to local storage
localStorage.setItem("username", "Afzal Hossain");
localStorage.setItem("user", "Afzal");
localStorage.setItem("name", "Hossain");
//checking the keys length
console.log(localStorage.length);
//getting key by index
const key0= localStorage.key(0);
const key1= localStorage.key(1);
console.log(key0);
console.log(key1);