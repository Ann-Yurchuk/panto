const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpenBtn.addEventListener("click", function () {
	mobileNav.classList.add("mobile-nav-wrapper--open");
});

mobileNavCloseBtn.addEventListener("click", function () {
	mobileNav.classList.remove("mobile-nav-wrapper--open");
});
