const showMenu = document.querySelector(".menu-btn");
const hideMenu = document.querySelector(".menu-btn-hide");
const menu = document.querySelector(".menu");

showMenu.addEventListener("click", () => {
	menu.style.transform = "translateX(0px)";
	menu.style.display = "flex";
});

hideMenu.addEventListener("click", () => {
	menu.style.transform = "translateX(100%)";
	menu.style.display = "none";
});
