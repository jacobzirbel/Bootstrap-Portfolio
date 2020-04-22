let projects = [
	{
		name: "Harry Potter Hangman",
		URL: "https://jacobzirbel.github.io/Word-Guess-Game/",
		imgUrl: "assets/images/hangman.png",
	},
	{
		name: "jQuery Game",
		URL: "https://jacobzirbel.github.io/unit-4-game/",
		imgUrl: "assets/images/hp.png",
	},
	{
		name: "Ancient Trivia",
		URL: "https://jacobzirbel.github.io/TriviaGame/",
		imgUrl: "assets/images/greek.jpg",
	},
	{
		name: "Gif Search",
		URL: "https://jacobzirbel.github.io/giphy-api/",
		imgUrl: "assets/images/greek.jpg",
	},
	{
		name: "Rock Paper Scissors-multiplayer",
		URL: "https://jacobzirbel.github.io/RPS-Multiplayer/",
		imgUrl: "assets/images/greek.jpg",
	},
	{
		name: "Road Trippers",
		URL: "https://road-trippers.github.io/road-trip-app/",
		imgUrl: "assets/images/greek.jpg",
	},
];

let jumbo = document.getElementsByClassName("jumbotron")[0];
let row;

projects.forEach((e, i, arr) => {
	if (i % 3 === 0) {
		row = document.createElement("div");
		row.setAttribute("class", "row justify-content-start");
	}
	let newItem = document.createElement("div");
	newItem.setAttribute("class", "col-md-4 portfolio-img");
	newItem.onclick = () => window.open(e.URL, "_blank");
	let newImg = document.createElement("img");
	newImg.setAttribute("src", e.imgUrl);
	let newText = document.createElement("p");
	newText.textContent = e.name;
	newItem.appendChild(newImg);
	newItem.appendChild(newText);
	row.appendChild(newItem);
	if ((i % 3 === 0 || i === arr.length - 1) && row) {
		jumbo.appendChild(row);
	}
});
