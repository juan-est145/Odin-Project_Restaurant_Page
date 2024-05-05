export default function renderMainPage()
{
	const content = document.querySelector("#content");
	const title = document.createElement("h1");
	const imageDescription = document.createElement("div");

	title.textContent = "Amigo Kebab is the best Kebab in all of Malaga";

	content.appendChild(title);
}