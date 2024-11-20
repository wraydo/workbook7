"use strict";

let speciesDataTable = document.getElementById("speciesDataTable");
//let speciesDiv = document.querySelector("#speciesDiv");
fetch("https://swapi.dev/api/species/")
  .then((response) => response.json())
  .then((data) => { 
    for (let i = 0; i < data.results.length; i++) {
      let row = speciesDataTable.insertRow(-1);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      let cell5 = row.insertCell(4);
      cell1.innerHTML = data.results[i].name;
      cell2.innerHTML = data.results[i].classification;
      cell3.innerHTML = data.results[i].height;
      cell4.innerHTML = data.results[i].skincolor;
      cell5.innerHTML = data.results[i].language;
    }
  });
