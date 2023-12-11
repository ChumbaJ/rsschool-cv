const burger = document.getElementById("burgerMenu");
const burgerBtn = document.getElementById("burgerBtn");

burgerBtn.addEventListener("click", (event) => {
    burger.classList.toggle("opened");
})