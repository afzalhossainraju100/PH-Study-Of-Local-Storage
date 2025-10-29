const person={
  aname: "Afzal Hossain",
  age: 30,
  occuption: "Web Developer"
}
localStorage.setItem("Person", JSON.stringify(person));

const savedPerson= JSON.parse(localStorage.getItem("Person"));
console.log("peron from local storage:", savedPerson);