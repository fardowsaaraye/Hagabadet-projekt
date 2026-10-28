"use strict";

// hamburgermeny
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


if (menuToggle && menu) {
menuToggle.addEventListener("click", function() {
  menu.classList.toggle("open");
});
}

// Hämtat element från DOM
const form = document.querySelector("#kontakt-form");
const namnInput = document.querySelector("#namn");
const epostInput = document.querySelector("#epost");
const meddelandeInput = document.querySelector("#meddelande");
const errorList = document.querySelector("#errorlist");
 
// Array för felmeddelanden
let errors = [];


// Validerar kontaktformuläret
function validateForm() {
errors = [];


if (namnInput.value.trim() === "") {
    errors.push("Du måste ange ditt namn");
    }
if (epostInput.value.trim() ===""){
    errors.push("Du måste ange din e-post");
     } 
if (meddelandeInput.value.trim() === ""){
    errors.push("Du måste skriva ett meddelande");
    } 
 
    if (errors.length === 0) {
        return true;
         } else { 
          return false;
          }
}
// Visar felmeddelanden på sidan
function displayErrors () {
    // rensar tidigare felmeddelande
    errorList.innerHTML = ""; 

    // visar aktuella felmeddelanden
    errors.forEach(function(error) {
    const listItem = document.createElement("li");
    listItem.textContent = error;
    errorList.appendChild(listItem);
    } );
   }

// Eventlyssnare
if (form) {
form.addEventListener ("submit", function(event) {
    event.preventDefault();

    console.log("Formuläret har skickats");

    // Validera formuläret
    validateForm();
   // visa felmeddelanden 
    displayErrors();
} );
}
