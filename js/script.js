let button = document.querySelector(".button");
let white = document.querySelector(".container");
let dark = document.querySelector(".container--dark");
let darkIcon = document.querySelector(".button__icon--dark");
let whiteIcon = document.querySelector(".button__icon");
let whiteAsideLinks = document.querySelector(".aside__link");
let DarkAsideLinks = document.querySelector(".aside__link--dark");
let whiteTableHeader = document.querySelector(".table__cell--header");
let darkTableHeader = document.querySelector(".table__cell--dark");
let someString = document.querySelector(".button__emptyString");

button.addEventListener("click", () => {
    white.classList.toggle("container--dark");
    whiteIcon.classList.toggle("button__icon--dark");
    whiteAsideLinks.classList.toggle("aside__link--dark");
    whiteTableHeader.classList.toggle("table__cell--dark");

    if (white.classList.contains("container--dark")) {
        someString.innerText = "Napis testowy";
    } else {
        someString.innerText = "";
    }
});
