let projects = [
	{
		name: "Music/Movie Search",
		deployedAt: "https://i.imgur.com/7MIbSZl.mp4",
		imgUrl: "./assets/images/demo.gif",
		repoUrl: "https://github.com/jacobzirbel/LIRI-node",
	},
	{
		name: "Harry Potter Hangman",
		deployedAt: "https://jacobzirbel.github.io/Word-Guess-Game/",
		imgUrl: "assets/images/hangman.png",
		repoUrl: "https://github.com/jacobzirbel/Word-Guess-Game",
	},
	{
		name: "Rock Paper Scissors-multiplayer",
		deployedAt: "https://jacobzirbel.github.io/RPS-Multiplayer/",
		imgUrl: "assets/images/rps.jpg",
		repoUrl: "https://github.com/jacobzirbel/RPS-Multiplayer",
	},
	{
		name: "jQuery Game",
		deployedAt: "https://jacobzirbel.github.io/unit-4-game/",
		imgUrl: "assets/images/hp.png",
		repoUrl: "https://github.com/jacobzirbel/unit-4-game",
	},
	{
		name: "Ancient Trivia",
		deployedAt: "https://jacobzirbel.github.io/TriviaGame/",
		imgUrl: "assets/images/Greek.jpg",
		repoUrl: "https://github.com/jacobzirbel/TriviaGame",
	},
	{
		name: "Road Trippers",
		deployedAt: "https://road-trippers.github.io/road-trip-app/",
		imgUrl: "assets/images/rtp.png",
		repoUrl: "https://github.com/Road-Trippers/road-trip-app",
	},
	{
		name: "Gif Search",
		deployedAt: "https://jacobzirbel.github.io/giphy-api/",
		imgUrl: "assets/images/giphy.gif",
		repoUrl: "https://github.com/jacobzirbel/giphy-api",
	},
];

let jumbo = document.getElementsByClassName("jumbotron")[0];
let row;
let repos = document.createElement("div");
repos.style.display = "flex";
repos.style.flexFlow = "column nowrap";
projects.forEach((e, i, arr) => {
	let repoLink = document.createElement("a");
	repoLink.textContent = e.name;
	repoLink.setAttribute("href", e.deployedAt);
	repos.appendChild(repoLink);
	if (i % 3 === 0) {
		row = document.createElement("div");
		row.setAttribute("class", "row justify-content-start");
	}
	let newItem = document.createElement("a");
	newItem.setAttribute("class", "col-md-4 portfolio-img");
	newItem.setAttribute("href", e.deployedAt);
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

let reposDiv = document.createElement("h4");
reposDiv.textContent = "Repos:";
reposDiv.appendChild(repos);
jumbo.append(reposDiv);
