"use strict"

async function getData(){
   // fetch ('https://jsonplaceholder.typicode.com/users')
    let promise = fetch('https://jsonplaceholder.typicode.com/users')
    let response = await promise
    let data = await response.json()
    console.log(data);
}

getData()

