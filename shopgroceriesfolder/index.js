"use strict";
console.log("test")
let url = "http://localhost:8081/api/categories";
let shopByTypeSelect = document.querySelector("#shopByTypeSelect");
let categorySelect = document.querySelector("#categorySelect");

async function getCategories() {
  try {
    let response = await fetch(url);
    let categories = await response.json();
    console.log("categories", categories);
    populateCategorySelect(categories);
  } catch (error) {
    console.log("error:", error.message);
  }
}

//categories.categoryId wil be the value of the select option
// categories.categoryName will be the text display

function populateCategorySelect(categories) {
  for (const category of categories) {
    let option = document.createElement("option");
    //let createOptions = document.createElement("option")
    //createOptions.value = params.categoryId
    option.value = category.categoryId;
    option.innerText = category.name;
    categorySelect.appendChild(option);
  }}
// categories.forEach((category) => {
//     let option = document.createElement("option")
//     option.value = category.categoryId;
//     option.innerText = category.name
//     categorySelect.appendChild(option);
// });
// //getCategories();


getCategories();


