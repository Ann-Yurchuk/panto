const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBeetween: 10,
	freeMode: true,
	loop: true,
	speed: 800,

	navigation: {
		nextEl: "#sliderNext",
		prevEl: "#sliderPrev",
	},

	breakpoints: {
		400: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		500: {
			slidesPerView: 1,
			spaceBetween: 5,
		},
		600: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
		900: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 0,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	},
});
