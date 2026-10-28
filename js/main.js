"use strict";

// hamburgermeny
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function() {
  menu.classList.toggle("open");
});

// Kontaktformulär
const form = document.querySelector("#kontakt-form");
const namnInput = document.querySelector("#namn");
const epostInput = document.querySelector("#epost");
const meddelandeInput = document.querySelector("#meddelande");
const errorList = document.querySelector("#errorlist");

// Validerar kontaktformuläret
function validateForm () {
    const errors = [];

    if (namnInput.value.trim() === ""){
        errors.push("Du måste ange ditt namn");
        }
    if (epostInput.value.trim() ===""){
        errors.push("Du måste ange din e-post");
         } 

    if (meddelandeInput.value.trim() === ""){
        errors.push("Du måste skriva ett meddelande");
     } 
} 
// Eventlyssnare 
form.addEventListener("submit", function (event) {
    event.preventDefault();
      });
