{
    const toggleBackground = () => {
        const white = document.querySelector(".js-container");
        const whiteIcon = document.querySelector(".js-button__icon");
        const whiteAsideLinks = document.querySelector(".js-aside__link");
        const whiteTableHeader = document.querySelector(".js-table__cell--header");

        white.classList.toggle("container--dark");
        whiteIcon.classList.toggle("button__icon--dark");
        whiteAsideLinks.classList.toggle("aside__link--dark");
        whiteTableHeader.classList.toggle("table__cell--dark");

        testWord(white);
    };

    const testWord = white => {
        const someString = document.querySelector(".js-button__emptyString");
        someString.innerText = white.classList.contains("container--dark") ? "Napis testowy" : "";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);
    };

    init();
}
