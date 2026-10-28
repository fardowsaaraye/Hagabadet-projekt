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
