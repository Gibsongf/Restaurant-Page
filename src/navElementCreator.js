import { MenuPage, ContactPage, HomePage } from "./createPages.js";
import { createElementDom } from "/src/dom-manipulation.js";

function navElement() {
	const domElements = createElementDom();
	const header = domElements.simple_el("div", "header");
	const restaurantName = domElements.simple_el(
		"h1",
		"name-logo",
		"Van der Linde"
	);
	const btnHome = domElements.simple_el("button", "home", "Home");
	const btnMenu = domElements.simple_el("button", "menu", "Menu");
	const btnContact = domElements.simple_el("button", "contact", "Contact");

	const arr = [restaurantName, btnHome, btnMenu, btnContact];

	content.appendChild(header);
	arr.forEach((toCreate) => {
		header.appendChild(toCreate);
	});
	btnIconActive();
}

function btnIconActive() {
	const btnHome = document.querySelector(".home");
	btnHome.setAttribute("id", "icon-on");
	const callPages = {
		Contact: ContactPage,
		Menu: MenuPage,
		Home: HomePage,
	};
	function clean_info(e) {
		const info = document.querySelector(".info");
		while (info.firstChild) {
			info.removeChild(info.lastChild);
		}
		callPages[e.textContent]();
	}

	function btnActive() {
		let current = document.getElementById("icon-on");
		current.setAttribute("id", "");
		this.setAttribute("id", "icon-on");
		clean_info(this);
	}
	let btns = document.querySelectorAll("button");
	btns.forEach((btn) => btn.addEventListener("click", btnActive));
}
export default navElement;
