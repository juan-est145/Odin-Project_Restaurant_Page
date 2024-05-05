import MainPhoto from '../imgs/pexels-daniel-cruz-170431136-13620477.jpg'

export default function renderMainPage()
{
	const content = document.querySelector("#content");
	const title = document.createElement("h1");
	const imageDescription = document.createElement("div");
	const image = new Image();
	const textDescription = document.createElement("p");

	toggleUnderline();
	title.textContent = "Amigo Kebab is the best Kebab in all of Malaga";
	imageDescription.classList = "img-description";
	image.src = MainPhoto;
	textDescription.textContent = "Our kebabs are made with expertise and love. \
	Every bite you take makes you feel like a Sultan";

	content.appendChild(title);
	content.appendChild(imageDescription);
	imageDescription.appendChild(image);
	imageDescription.appendChild(textDescription);
}

function toggleUnderline()
{
	const homeButton = document.querySelector("#home");
	const menuButton = document.querySelector("#menu");
	const aboutButton = document.querySelector("#about");

	menuButton.classList.remove("toggled");
	aboutButton.classList.remove("toggled");
	homeButton.classList.add("toggled");
}