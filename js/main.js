var elModalOpenButton = document.querySelector(".site-header__dark");
var elModalOpenlink = document.querySelector(".site-body");

elModalOpenButton.addEventListener("click", function () {
    elModalOpenlink.classList.toggle("site-body__active");
});