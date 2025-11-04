const urlParams = new URLSearchParams(window.location.search)
let currentGenre = urlParams.get("genre") || "lifestyle"

const genres = ["lifestyle", "horror", "adventure", "simulator", "sports", "action"]

const genreGames = {
  lifestyle: [
    { name: "Adopt Me!", link: "https://www.roblox.com/games/920587237/Adopt-Me" },
    { name: "Brookhaven 🏡RP", link: "https://www.roblox.com/games/4924922222/Brookhaven-RP" },
    { name: "MeepCity", link: "https://www.roblox.com/games/370731277/MeepCity" },
    { name: "Royale High", link: "https://www.roblox.com/games/735030788/Royale-High" },
    { name: "Toca City", link: "#" }
  ],
  horror: [
    { name: "Doors", link: "https://www.roblox.com/games/6516141723/DOORS" },
    { name: "The Mimic", link: "https://www.roblox.com/games/6243699076/The-Mimic" },
    { name: "Apeirophobia", link: "https://www.roblox.com/games/10204712304/Apeirophobia" },
    { name: "Identity Fraud", link: "https://www.roblox.com/games/126689785/Identity-Fraud" },
    { name: "Dead Silence", link: "https://www.roblox.com/games/1424237/Dead-Silence" }
  ],
  adventure: [
    { name: "Shindo Life", link: "https://www.roblox.com/games/4616652839/Shindo-Life" },
    { name: "Blox Fruits", link: "https://www.roblox.com/games/2753915549/Blox-Fruits" },
    { name: "Dragon Adventures", link: "https://www.roblox.com/games/3475397644/Dragon-Adventures" },
    { name: "Bee Swarm Simulator", link: "https://www.roblox.com/games/1537690962/Bee-Swarm-Simulator" },
    { name: "Adventure Story", link: "#" }
  ],
  simulator: [
    { name: "Pet Simulator X", link: "https://www.roblox.com/games/6284583030/Pet-Simulator-X" },
    { name: "Strongman Simulator", link: "https://www.roblox.com/games/6766156863/Strongman-Simulator" },
    { name: "Driving Simulator", link: "https://www.roblox.com/games/8304191830/Driving-Simulator" },
    { name: "Cooking Simulator", link: "#" },
    { name: "Theme Park Tycoon 2", link: "https://www.roblox.com/games/69184822/Theme-Park-Tycoon-2" }
  ],
  sports: [
    { name: "Goal Kick Simulator", link: "https://www.roblox.com/games/9281034295/Goal-Kick-Simulator" },
    { name: "Basketball Legends", link: "#" },
    { name: "Soccer Stars", link: "#" },
    { name: "Ultimate Football", link: "#" },
    { name: "Skate Park", link: "https://www.roblox.com/games/47324/Skate-Park" }
  ],
  action: [
    { name: "BedWars", link: "https://www.roblox.com/games/6872265039/BedWars" },
    { name: "Arsenal", link: "https://www.roblox.com/games/286090429/Arsenal" },
    { name: "Murder Mystery 2", link: "https://www.roblox.com/games/142823291/Murder-Mystery-2" },
    { name: "Tower Defense Simulator", link: "https://www.roblox.com/games/3260590327/Tower-Defense-Simulator" },
    { name: "Phantom Forces", link: "https://www.roblox.com/games/292439477/Phantom-Forces" }
  ]
}

function displayGenre() {
  document.getElementById("genreTitle").innerText = currentGenre.toUpperCase()
  const container = document.getElementById("genreList")
  container.innerHTML = ""
  genreGames[currentGenre].forEach(game => {
    const div = document.createElement("a")
    div.href = game.link
    div.target = "_blank"
    div.className = "game-card"
    div.innerHTML = `<h3>${game.name}</h3>`
    container.appendChild(div)
  })
}

function nextGenre() {
  const idx = genres.indexOf(currentGenre)
  currentGenre = genres[(idx + 1) % genres.length]
  displayGenre()
}

function prevGenre() {
  const idx = genres.indexOf(currentGenre)
  currentGenre = genres[(idx - 1 + genres.length) % genres.length]
  displayGenre()
}

function goBack() {
  window.location.href = "index.html"
}

displayGenre()
