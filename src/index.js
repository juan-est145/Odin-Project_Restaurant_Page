import './style.css';
import MainPage from './main-page.js';
import MenuPage from './menu.js';
import AboutPage from './about.js';

const hommeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("#content");

//MainPage();
AboutPage();

hommeButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
	content.classList.remove("contact-text");
	MainPage();
});

menuButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
	content.classList.remove("contact-text");
	MenuPage();
});

aboutButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	while(content.classList.length > 0)
		content.classList.remove(content.classList[0]);
	AboutPage();
});