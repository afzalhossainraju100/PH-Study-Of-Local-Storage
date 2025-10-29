let visits  = localStorage.getItem("visits");
visits = visits ? parseInt(visits)+1: 1;
localStorage.setItem("visits", visits);
console.log(`Number of visits: ${visits}`);