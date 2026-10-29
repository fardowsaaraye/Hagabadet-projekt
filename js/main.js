"use strict";

/* Hamburgermeny */

// Hämta menyelement
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Hantera klick på menyknappen
if (menuToggle && menu) {
menuToggle.addEventListener("click", function() {
  menu.classList.toggle("open");
});
}

/* validering av kontaktformulär */

// Hämta formulärelement 
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

// kontrollera att formulärets fält är ifyllda 
if (namnInput.value.trim() === "") {
    errors.push("Du måste ange ditt namn");
    }
if (epostInput.value.trim() ===""){
    errors.push("Du måste ange din e-post");
     } 
if (meddelandeInput.value.trim() === ""){
    errors.push("Du måste skriva ett meddelande");
    } 
 // kontrollera om det finns några felmeddelanden
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

// Eventlyssnare för formuläret
if (form) {
form.addEventListener ("submit", function(event) {
    event.preventDefault();


    // Validera formuläret
    validateForm();
   // visa felmeddelanden 
    displayErrors();
} );
}

/* Bild spel för spa  */

// Hämta bilden som visas i spa bildspelet
const spaBild = document.querySelector("#spa-bild");

// Hämta knappen från HTML
const nastaBild = document.querySelector("#nasta-bild");

// Lista med alla bilder som används i bildspelet
const spaBilder = [
    "images/Hagabadet.jpg",
    "images/spabild-1.jpg",
    "images/spabild-2.jpg",
    ];

// Håller reda på vilken bild som visas just nu
let aktuellBild = 0;

// Eventlyssnare för knappen
nastaBild.addEventListener("click", function() {
    aktuellBild = aktuellBild + 1;

    // Börja om från första bilden
    if (aktuellBild >= spaBilder.length) {
        aktuellBild = 0;
        }
    // visa nästa bild
    spaBild.src = spaBilder[aktuellBild];
   }); 

