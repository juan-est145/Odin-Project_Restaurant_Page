import './style.css';
import mainPage from './main-page.js'

const hommeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");
const content = document.querySelector("#content");

mainPage();


hommeButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
	mainPage();
});

menuButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
});

aboutButton.addEventListener("click", () =>
{
	while(content.firstChild)
		content.removeChild(content.firstChild);
});