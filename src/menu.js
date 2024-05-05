const content = document.querySelector("#content");

export default function renderMenuPage()
{
	const menuTitle = document.createElement("h1");

	const firstMenu = new MenuOrder("Large Menu", 
	"Chicken/Beef/Mixed with fries and drink", "6 \u20AC");
	const secondMenu = new MenuOrder("Medium Menu", 
		"Chicken/Beef/Mixed with fries and drink", "5 \u20AC");
	const thirdMenu = new MenuOrder("Nuggets Menu",
		"Nuggets with fries, drink and salad", "6 \u20AC");
	const fourthMenu = new MenuOrder("Burguer Menu",
	"Chicken with cheese, fries and drink", "5 \u20AC");
	const fifthMenu = new MenuOrder("Turkish Pizza Menu",
	"Chicken/Beef/Mixed with fries and drink", "7.50 \u20AC");
	const menuArray = [firstMenu, secondMenu, thirdMenu, fourthMenu, fifthMenu];

	menuTitle.textContent = "Menu";

	toggleUnderline();
	content.appendChild(menuTitle);
	addMenu(menuArray);
}

function toggleUnderline()
{
	const homeButton = document.querySelector("#home");
	const menuButton = document.querySelector("#menu");
	const aboutButton = document.querySelector("#about");

	homeButton.classList.remove("toggled");
	aboutButton.classList.remove("toggled");
	menuButton.classList.add("toggled");
}

function addMenu(menuArray)
{
	for(let i = 0; i < menuArray.length; i++)
	{
		const menuTitle = document.createElement("h3");
		const menuDescription = document.createElement("p");
		const price = document.createElement("span");

		menuTitle.textContent = menuArray[i].menuName;
		menuDescription.textContent = menuArray[i].description;
		menuDescription.classList = "menu-text";
		price.textContent = menuArray[i].price;
		price.classList = "menu-price";
		price.style.fontFamily = "Times New Roman";
		
		content.appendChild(menuTitle);
		content.appendChild(menuDescription);
		menuDescription.appendChild(price);
	}
}

class MenuOrder
{
	constructor(menuName, description, price)
	{
		this.menuName = menuName;
		this.description = description;
		this.price = price;
	}
}