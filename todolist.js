const todos =[
    {id:1, title:"Learn JavaScript", completed:true},
    {id:2, title:"Learn React", completed:false},
    {id:3, title:"Learn Node.js", completed:false},
    {id:4, title:"Learn MongoDB", completed:true},
];
localStorage.setItem("todos", JSON.stringify(todos));
svavedTodos = JSON.parse(localStorage.getItem("todos"));
console.log(svavedTodos);