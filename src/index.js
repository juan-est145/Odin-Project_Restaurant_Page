import './style.css';
import MainPage from './main-page.js';
import renderMenuPage from './menu.js';

const hommeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("#content");

MainPage();

hommeButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
	MainPage();
});

menuButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
	renderMenuPage();
});

aboutButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
});