const tabsBtn = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtn) {
	btn.addEventListener("click", function () {
		for (let btn of tabsBtn) {
			btn.classList.remove("tabs-controls__btn--active");
		}

		this.classList.add("tabs-controls__btn--active");

		for (let product of tabsProducts) {
			if (this.dataset.tab === "all") {
				product.classList.remove("none");
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove("none");
				} else {
					product.classList.add("none");
				}
			}
		}

		swiper.update();
	});
}
