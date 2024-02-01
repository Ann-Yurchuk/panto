const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
	btn.addEventListener("click", showHint);
}

function showHint(e) {
	e.stopPropagation();

	for (let hint of infoHints) {
		hint.classList.add("none");
	}

	this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

document.addEventListener("click", closeHint);

function closeHint() {
	for (let hint of infoHints) {
		hint.classList.add("none");
	}
}

for (let hint of infoHints) {
	hint.addEventListener("click", e => e.stopPropagation());
}
