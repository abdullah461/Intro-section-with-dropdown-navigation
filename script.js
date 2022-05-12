const dropdown = document.querySelector(".dropdown");
const dropdown2 = document.querySelector(".dropdown2");
const caret = document.querySelector(".caret");
const caret2 = document.querySelector(".caret2");
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const nav = document.querySelector(".navigation");
const OpenMenu = document.querySelector(".hamburger");
const CloseMenu = document.querySelector(".close-menu")

//adding click event to the  features and company & caret element
features.addEventListener('click', () => {
    caret.classList.toggle("caret-rotate");

    if (dropdown.style.display === 'block') {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";

    }
});
company.addEventListener('click', () => {
    caret2.classList.toggle("caret2-rotate");

    if (dropdown2.style.display === 'block') {
        dropdown2.style.display = "none";
    } else {
        dropdown2.style.display = "block";

    }
});
// menu open and close
OpenMenu.addEventListener('click', () => {
    nav.style.display = "block";
})
CloseMenu.addEventListener('click', () => {
    nav.style.display = "none";
})