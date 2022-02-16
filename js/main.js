const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav")

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
})

const faqs = document.querySelector(".faq__btn");
faqs.addEventListener("click", function() {
    faqs.classList.toggle("faq__btn--opened");
});