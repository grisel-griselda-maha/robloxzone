const urlParams = new URLSearchParams(window.location.search)
let currentGenre = urlParams.get("genre") || "lifestyle"

const genres = ["lifestyle", "horror", "adventure", "simulator", "sports", "action"]

const genreGames = {
  lifestyle: [
    { name: "Adopt Me!", desc: "Rawat dan pelihara hewan lucu." },
    { name: "Brookhaven", desc: "Simulasi kehidupan di kota kecil." },
    { name: "MeepCity", desc: "Sosialisasi dan hias rumahmu." },
    { name: "Royale High", desc: "Sekolah fantasi untuk para peri." },
    { name: "Toca City", desc: "Kehidupan bebas di dunia virtual." }
  ],
  horror: [
    { name: "Doors", desc: "Jelajahi hotel misterius." },
    { name: "The Mimic", desc: "Legenda Jepang yang menyeramkan." },
    { name: "Apeirophobia", desc: "Kabur dari dunia liminal." },
    { name: "Identity Fraud", desc: "Temukan siapa pembunuh di antara kalian." },
    { name: "Dead Silence", desc: "Adaptasi dari film horor klasik." }
  ],
  adventure: [
    { name: "Shindo Life", desc: "Petualangan ninja dan jurus keren." },
    { name: "Blox Fruits", desc: "Berlayar dan bertarung seperti bajak laut." },
    { name: "Dragon Adventures", desc: "Pelihara naga dan jelajahi dunia baru." },
    { name: "Bee Swarm Simulator", desc: "Kumpulkan madu dan lawan musuh." },
    { name: "Adventure Story", desc: "Petualangan klasik RPG." }
  ],
  simulator: [
    { name: "Pet Simulator X", desc: "Kumpulkan hewan dan koin." },
    { name: "Strongman Simulator", desc: "Uji kekuatan dan angkat beban." },
    { name: "Driving Simulator", desc: "Kendarai mobil impianmu." },
    { name: "Cooking Simulator", desc: "Masak makanan virtual." },
    { name: "Theme Park Tycoon 2", desc: "Bangun taman hiburan sendiri." }
  ],
  sports: [
    { name: "Goal Kick Simulator", desc: "Latih tendanganmu!" },
    { name: "Basketball Legends", desc: "Main basket seru bareng teman." },
    { name: "Soccer Stars", desc: "Tanding sepak bola epik." },
    { name: "Ultimate Football", desc: "Rasakan pengalaman pertandingan." },
    { name: "Skate Park", desc: "Tunjukkan trik skateboardmu." }
  ],
  action: [
    { name: "BedWars", desc: "Hancurkan markas musuh!" },
    { name: "Arsenal", desc: "Aksi tembak cepat." },
    { name: "Murder Mystery 2", desc: "Cari tahu siapa pembunuhnya." },
    { name: "Tower Defense Simulator", desc: "Pertahankan markasmu." },
    { name: "Phantom Forces", desc: "FPS realistis di Roblox." }
  ]
}

function displayGenre() {
  document.getElementById("genreTitle").innerText = currentGenre.toUpperCase()
  const container = document.getElementById("genreList")
  container.innerHTML = ""
  genreGames[currentGenre].forEach(game => {
    const div = document.createElement("div")
    div.className = "game-card"
    div.innerHTML = `<h3>${game.name}</h3><p>${game.desc}</p>`
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

displayGenre()
