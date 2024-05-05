import Location from '../imgs/800px-Google_Maps_icon_(2020).svg.png'


export default function renderMenuPage()
{
	const content = document.querySelector("#content");
	const aboutDiv = document.createElement("div");
	const dataDiv = document.createElement("div");

	const contactTitle = document.createElement("h1");
	const locationImage = new Image(200);
	const phoneTitle = document.createElement("h3");
	const phoneNumer = document.createElement("p");
	const addressTitle = document.createElement("h3");
	const addressParagraph = document.createElement("p");

	aboutDiv.classList = "contact-text";
	contactTitle.textContent = "Contact";
	locationImage.src = Location;
	phoneTitle.textContent = "Phone";
	phoneNumer.textContent = "432 42 89 30";
	addressTitle.textContent = "Address";
	addressParagraph.textContent = "123 Fake Street";

	toggleUnderline();
	content.appendChild(contactTitle);
	content.appendChild(aboutDiv);
	aboutDiv.appendChild(locationImage);
	aboutDiv.appendChild(dataDiv);
	dataDiv.appendChild(phoneTitle);
	dataDiv.appendChild(phoneNumer);
	dataDiv.appendChild(addressTitle);
	dataDiv.appendChild(addressParagraph);
}

function toggleUnderline()
{
	const homeButton = document.querySelector("#home");
	const menuButton = document.querySelector("#menu");
	const aboutButton = document.querySelector("#about");

	homeButton.classList.remove("toggled");
	menuButton.classList.remove("toggled");
	aboutButton.classList.add("toggled");
}