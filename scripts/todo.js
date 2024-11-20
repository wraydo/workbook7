"use strict";

let idInput = document.querySelector("#idInput");
let detailsDiv = document.querySelector("#detailsDiv");
async function getToDo(id) {
  //you get a promise object back which
  //will send you a signal that the previous operation has completed
  let promise = fetch("https://jsonplaceholder.typicode.com/todos/" + id); //asking another computer for the data
  let response = await promise; //wait for the response message to come back from the server with the data in the body
  let todo = await response.json(); //turn JSON string in the body into a JavaScript array of objects
  console.log(todo);
  detailsDiv.innerText = todo.title;
}

function displayDetails() {
  //console.log("I Have Arrived")
  // console.log(detailsDiv)
  let id = idInput.value;
  getToDo(id);
}

// let id = 1
// let message = "Hola World!" + id;
// let message = 'Hola, World! ${id}';
// console.log(message);
