import { rapliste } from "./rap.js";

const body= document.querySelector("#test")

body.addEventListener('click',()=>{
    const numproj = randomproj()
    console.log(rapliste[numproj].nom)
 })
 
 rapliste.forEach(e=>{
    body.innerHTML+=`<div class="xl:w-1/4 md:w-1/2 p-4">
    <div class="bg-gray-100 p-6 rounded-lg">
    <img class="h-40 rounded w-full object-cover object-center mb-6 bg-cover" src="${e.image}" alt="content">
    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${e.nom}</h2>
 //   <a class="leading-relaxed text-base"></p>
    <a href="${e.biographie}">bio</a>
    <a href="${e.lien}">album</a>
  </div>`
 })
 function randomproj() {
     const numCartes= Math.floor(Math.random() * 5);
     return numCartes
     //choisi un nombre entre 0 et 21 pour choisir la carte 
  }