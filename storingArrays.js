const colors=['red', 'green', 'blue', 'yellow', 'purple'];
localStorage.setItem("colors",JSON.stringify(colors));

const savedColors= JSON.parse(localStorage.getItem("colors"));
console.log("Colors from local storage:", savedColors);