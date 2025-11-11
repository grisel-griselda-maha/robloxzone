function toggleMenu() {
  document.getElementById("menuList").classList.toggle("hidden")
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" })
}

function goToGenre(genre) {
  window.location.href = `genre.html?genre=${genre}`
}

function generateRandom() {
  const games = ["Brookhaven", "Blox Fruits", "Adopt Me!", "Tower of Hell", "Doors"]
  const random = games[Math.floor(Math.random() * games.length)]
  document.getElementById("randomResult").innerText = `Game pilihanmu: ${random}`
}

/* Fungsi scroll kiri-kanan untuk rekomendasi genre */
function scrollLeft() {
  const genres = document.querySelector('.genres')
  genres.scrollBy({ left: -200, behavior: 'smooth' })
}

function scrollRight() {
  const genres = document.querySelector('.genres')
  genres.scrollBy({ left: 200, behavior: 'smooth' })
}
