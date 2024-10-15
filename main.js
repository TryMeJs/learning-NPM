import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  console.log(res.data);
});

// fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))