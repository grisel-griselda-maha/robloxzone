const db = {
    "Fashion": {
        games: [
            { name: "Dress To Impress", img: "DRESS TO IMPRESS.webp", desc: "Show your best fashion style on the runway!", link: "https://www.roblox.com/games/15101393044/WICKED-Dress-To-Impress" },
            { name: "Adopt Me", img: "ADOPT ME.webp", desc: "Raise cute pets, dress them up, and trade.", link: "https://www.roblox.com/games/920587237/Adopt-Me" },
            { name: "Fashion Famous", img: "FASHION FAMOUS.webp", desc: "Compete to become the most famous top model.", link: "https://www.roblox.com/games/568350650/Fashion-Famous" },
            { name: "Brookhaven", img: "BROOKHAVEN.webp", desc: "Roleplay, buy houses, and drive cool cars.", link: "https://www.roblox.com/games/4924922222/Brookhaven-RP" },
            { name: "Royalloween", img: "ROYALLOWEEN.webp", desc: "A magical school experience with a spooky twist.", link: "https://www.roblox.com/games/735030788/Royalloween" }
        ]
    },
    "Horror": {
        games: [
            { name: "DOORS", img: "DOORS.webp", desc: "Navigate 100 doors without getting caught.", link: "https://www.roblox.com/games/6516141723/DOORS" },
            { name: "Silent Mansion", img: "SILENT MANSION.webp", desc: "Uncover the dark secrets of the mansion.", link: "https://www.roblox.com/games/18636608512/Silent-Mansion" },
            { name: "3008", img: "3008.webp", desc: "Survive in the infinite furniture store.", link: "https://www.roblox.com/games/2768379856/3008" },
            { name: "The Mimic", img: "THE MIMIC.webp", desc: "Experience horror based on Japanese folklore.", link: "https://www.roblox.com/games/6243699076/The-Mimic" },
            { name: "99 Nights in The Forest", img: "99 NIGHTS IN THE FOREST.webp", desc: "Survive the terrifying nights in the woods.", link: "https://www.roblox.com/games/79546208627805/99-Nights-in-the-Forest" }
        ]
    },
    "Simulator": {
        games: [
            { name: "Work At A Pizza Place", img: "WORK AT A PIZZA PLACE.webp", desc: "Cook pizzas, deliver orders, and manage the shop.", link: "https://www.roblox.com/games/192800/Work-at-a-Pizza-Place" },
            { name: "Be Fish", img: "BE FISH.webp", desc: "Explore the ocean life as a fish.", link: "https://www.roblox.com/games/94503612388426/Be-Fish" },
            { name: "Supermarket Simulator", img: "SUPERMARKET SIMULATOR.webp", desc: "Build and manage your own grocery empire.", link: "https://www.roblox.com/games/96462622512177/Supermarket-Simulator" },
            { name: "Bubble Gum Simulator", img: "BUBBLE GUM SIMULATOR.webp", desc: "Blow bubbles and collect rare pets.", link: "https://www.roblox.com/games/85896571713843/OG-Bubble-Gum-Simulator" },
            { name: "Pet Simulator X", img: "PET SIMULATOR X.webp", desc: "Collect coins and unlock legendary pets.", link: "https://www.roblox.com/games/6284583030/Pet-Simulator-X" }
        ]
    },
    "Adventure": {
        games: [
            { name: "Mount Daun", img: "MOUNT DAUN.webp", desc: "Climb the mountain and enjoy the scenery.", link: "https://www.roblox.com/games/102234703920418/Mount-Daun" },
            { name: "Backpacking", img: "BACKPACKING.webp", desc: "Set up camp and explore the open world.", link: "https://www.roblox.com/games/1997193809/Backpacking" },
            { name: "Expedition Antartica", img: "EXPEDITION ANTARTICA.webp", desc: "Survive the freezing expedition with friends.", link: "https://www.roblox.com/games/2693023319/Expedition-Antarctica" },
            { name: "Mount Sumbing", img: "MOUNT SUMBING.webp", desc: "Realistic hiking simulation in Indonesia.", link: "https://www.roblox.com/games/14963184269/Mount-Sumbing" },
            { name: "A Dusty Trip", img: "A DUSTY TRIP.webp", desc: "A long and challenging road trip adventure.", link: "https://www.roblox.com/games/16389395869/a-dusty-trip" }
        ]
    },
    "Sport": {
        games: [
            { name: "Racket Rivals", img: "RACKET RIVALS.webp", desc: "Intense competitive tennis matches.", link: "https://www.roblox.com/games/90906407195271/UPD-Racket-Rivals" },
            { name: "Super League Soccer", img: "SUPER LEAGUE SOCCER.webp", desc: "Play realistic 7v7 soccer matches.", link: "https://www.roblox.com/games/12177325772/FIFA-Super-League-Soccer" },
            { name: "Swim League", img: "SWIM LEAGUE.webp", desc: "Race in professional swimming competitions.", link: "https://www.roblox.com/games/132495346586140/2X-Swim-League" },
            { name: "Neo Tennis", img: "NEO TENNIS.webp", desc: "Futuristic tennis with special abilities.", link: "https://www.roblox.com/games/85056532479796/UPD-Neo-Tennis" },
            { name: "Volleyball Legends", img: "VOLLEYBALL LEGENDS.webp", desc: "Bump, set, and spike your way to victory.", link: "https://www.roblox.com/games/73956553001240/Volleyball-Legends" }
        ]
    },
    "Special Pick": {
        games: [
            { name: "Fish It", img: "FISH IT.webp", desc: "Relaxing fishing game with rare catches.", link: "https://www.roblox.com/games/121864768012064/Fish-It" },
            { name: "Grow A Garden", img: "GROW A GARDEN.webp", desc: "Plant seeds and cultivate your own garden.", link: "https://www.roblox.com/games/126884695634066/Grow-a-Garden" },
            { name: "The Apocalypse", img: "THE APOCALYPSE.webp", desc: "Survive the end of the world with friends.", link: "https://www.roblox.com/games/75519253084635/The-Apocalypse" },
            { name: "Forsaken", img: "FORSAKEN.webp", desc: "Explore a dark, abandoned world.", link: "https://www.roblox.com/games/18687417158/Forsaken" },
            { name: "Raise Animals", img: "RAISE ANIMALS.webp", desc: "Take care of various adorable animals.", link: "https://www.roblox.com/games/122826953758426/Raise-Animals" }
        ]
    }
};

// --- AUDIO ASSETS ---
const audioTick = new Audio('https://cdn.pixabay.com/audio/2023/05/23/audio_4763d52c35.mp3'); 
const audioWin = new Audio('https://cdn.pixabay.com/audio/2022/03/24/audio_1e6b78989b.mp3');  
const audioOof = new Audio('https://www.myinstants.com/media/sounds/roblox-death-sound_1.mp3'); 

// --- CUSTOM CURSOR LOGIC ---
const cursor = document.getElementById('customCursor');
let lastTrailTime = 0;

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    createTrail(e.clientX, e.clientY);
});

function createTrail(x, y) {
    const now = Date.now();
    if (now - lastTrailTime < 30) return; 
    lastTrailTime = now;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
}

const clickables = document.querySelectorAll('a, button, .top-card, .genre-btn, .small-card, .secret-hint, .team-card, .card-yellow-small, .card-cyan-small, .modal-close-btn, .nav-arrow');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
});

// --- LOGIKA REKOMENDASI ---
let currentGenreKeys = Object.keys(db);
let currentGenreIndex = 0;
let activeBigGame = null;
let activeSmallGames = [];
const genreContentWrapper = document.getElementById('genreContentWrapper');

function toggleMenu() { document.getElementById('menuPopup').classList.toggle('active'); }

document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.add('bouncing');
        setTimeout(() => { this.classList.remove('bouncing'); }, 300);
 
        const genreName = this.dataset.genre;
        setTimeout(() => {
            openGenre(genreName);
        }, 150); 
    });
});


function openGenre(genreName) {
    currentGenreIndex = currentGenreKeys.indexOf(genreName);
    // Panggil renderView untuk pertama kali
    renderView(genreName, null, false); // isSwap = false
    const page = document.getElementById('genrePage');
    page.classList.add('active'); 
    setTimeout(() => { 
        page.classList.add('show'); 
        // Atur posisi awal untuk animasi 'open'
        genreContentWrapper.style.transition = 'none';
        genreContentWrapper.style.transform = 'translateY(-50px)';
        genreContentWrapper.style.opacity = '0';
        
        // Memicu animasi 'open'
        setTimeout(() => {
            genreContentWrapper.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s';
            genreContentWrapper.style.transform = 'translateY(0)';
            genreContentWrapper.style.opacity = '1';

            // Animasikan small cards masuk
            document.querySelectorAll('#genrePage .small-card').forEach((c, i) => {
                c.style.transition = all 0.7s ${i*0.1}s cubic-bezier(0.16, 1, 0.3, 1);
                c.style.transform = 'translateX(0)';
                c.style.opacity = '1';
            });
        }, 20);
    }, 10);
}

function closeGenre() {
    const page = document.getElementById('genrePage');
    page.classList.remove('show');
    // Memicu animasi 'close'
    genreContentWrapper.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s';
    genreContentWrapper.style.transform = 'translateY(-50px)';
    genreContentWrapper.style.opacity = '0';
    document.querySelectorAll('#genrePage .small-card').forEach(c => {
            c.style.transition = 'all 0.3s ease'; 
            c.style.transform = 'translateX(150%)';
            c.style.opacity = '0';
        });

    setTimeout(() => { page.classList.remove('active'); }, 700);
}

function nextGenre() {
    currentGenreIndex = (currentGenreIndex + 1) % currentGenreKeys.length;
    let name = currentGenreKeys[currentGenreIndex];
    renderView(name, 'next', false); // isSwap = false
}

function prevGenre() {
    currentGenreIndex = (currentGenreIndex - 1 + currentGenreKeys.length) % currentGenreKeys.length;
    let name = currentGenreKeys[currentGenreIndex];
    renderView(name, 'prev', false); // isSwap = false
}

function initGenreData(name) {
    const data = db[name];
    let allGames = [...data.games];
    activeBigGame = allGames[0];
    activeSmallGames = allGames.slice(1, 5);
}

// renderView diperbarui dengan parameter isSwap
// isSwap = true HANYA jika dipanggil oleh swapCards
function renderView(genreName, direction, isSwap = false) {
    let slideOutDir = '0px';
    let slideInDir = '0px';

    if (direction === 'next') {
        slideOutDir = '-100px';
        slideInDir = '100px';
    } else if (direction === 'prev') {
        slideOutDir = '100px';
        slideInDir = '-100px';
    }

    const doRender = () => {
        // Jika BUKAN swap, kita harus inisialisasi ulang datanya
        if (!isSwap) {
            initGenreData(genreName);
        }
        
        const data = db[genreName];
        
        document.getElementById('genreTitleText').innerText = genreName;
        document.getElementById('dynamicBg').style.backgroundImage = url('${activeBigGame.img}');
        
        document.getElementById('bigCardContent').style.backgroundImage = url('${activeBigGame.img}');
        document.getElementById('bigTitle').innerText = activeBigGame.name;
        document.getElementById('bigDesc').innerText = activeBigGame.desc;
        document.getElementById('bigPlayLink').href = activeBigGame.link;

        const smallGrid = document.getElementById('smallGrid');
        smallGrid.innerHTML = ''; 
        activeSmallGames.forEach((game, index) => {
            const el = document.createElement('div');
            el.className = 'small-card';
            el.innerHTML = <img src="${game.img}" alt="${game.name}">;
            el.onclick = () => swapCards(index); // Selalu panggil swapCards
            
            if (isSwap) {
                // JIKA INI SWAP, buat kartu langsung terlihat.
                el.style.transform = 'translateX(0)';
                el.style.opacity = '1';
                el.style.transition = 'none'; // Hapus transisi agar instan
            }
            // Jika bukan swap (geser atau buka), biarkan CSS default (hidden)
            
            smallGrid.appendChild(el); 
        });

        // Jika ini animasi geser, siapkan posisi 'slide in'
        if (direction) {
            genreContentWrapper.style.transition = 'none'; 
            genreContentWrapper.style.transform = translateX(${slideInDir});
        }
        
        // Memicu animasi 'slide in' (HANYA jika bergeser, BUKAN swap)
        if (direction) {
            setTimeout(() => {
                genreContentWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
                genreContentWrapper.style.transform = 'translateX(0)';
                genreContentWrapper.style.opacity = '1';
                
                // Animasikan small cards masuk
                document.querySelectorAll('#genrePage .small-card').forEach((c, i) => {
                     c.style.transition = all 0.7s ${i*0.1}s cubic-bezier(0.16, 1, 0.3, 1);
                    c.style.transform = 'translateX(0)';
                    c.style.opacity = '1';
                });
            }, 20); 
        }
    };

    if (direction) { // Geser KIRI/KANAN
        genreContentWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
        genreContentWrapper.style.transform = translateX(${slideOutDir});
        genreContentWrapper.style.opacity = '0';
        setTimeout(doRender, 400); 
    } else { // 'open' atau 'swap'
        doRender();
    }
}

// FUNGSI swapCards DIPERBAIKI
function swapCards(smallIndex) {
    // 1. Tukar data di dalam array
    const tempBig = activeBigGame;
    activeBigGame = activeSmallGames[smallIndex];
    activeSmallGames[smallIndex] = tempBig;
    
    // 2. Panggil renderView lagi, tapi tandai sebagai 'swap'
    // 'null' untuk direction, 'true' untuk isSwap
    // Ini akan me-render ulang konten secara instan tanpa animasi geser
    renderView(currentGenreKeys[currentGenreIndex], null, true); 
}


// --- LOGIKA GACHA ---
const CARD_WIDTH = 180; 
const CARD_GAP = 20;    
const TOTAL_ITEM_WIDTH = CARD_WIDTH + CARD_GAP;
 
let allGamesList = [];
Object.keys(db).forEach(key => {
    allGamesList = allGamesList.concat(db[key].games);
});

function startGacha() {
    const rouletteContainer = document.querySelector('.roulette-container');
    const VISIBLE_WIDTH = rouletteContainer.clientWidth; // Dinamis
    
    const strip = document.getElementById('rouletteStrip');
    const btn = document.getElementById('spinBtn');
    const modal = document.getElementById('resultModal');

    btn.disabled = true; 
    modal.classList.remove('active'); 
    strip.style.transition = 'none'; 
    strip.style.transform = 'translateX(0px)';
    strip.innerHTML = ''; 

    let tickInterval = setInterval(() => {
        audioTick.currentTime = 0; audioTick.volume = 0.5; audioTick.play();
    }, 60); 

    const winnerIndexRaw = Math.floor(Math.random() * allGamesList.length);
    const winnerGame = allGamesList[winnerIndexRaw];
    const TARGET_INDEX = 60; 
    const TOTAL_CARDS = 70; 

    let fillerGames = allGamesList.filter(game => game.name !== winnerGame.name);
    for (let i = fillerGames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [fillerGames[i], fillerGames[j]] = [fillerGames[j], fillerGames[i]];
    }

    // Tentukan ukuran kartu berdasarkan lebar layar
    const isMobile = window.innerWidth <= 800;
    const cardWidthForCalc = isMobile ? 140 : CARD_WIDTH;
    const totalItemWidthForCalc = cardWidthForCalc + CARD_GAP;

    let fillerIndex = 0;
    for (let i = 0; i < TOTAL_CARDS; i++) {
        let gameData;
        if (i === TARGET_INDEX) {
            gameData = winnerGame; 
        } else {
            gameData = fillerGames[fillerIndex % fillerGames.length];
            fillerIndex++;
        }
        const card = document.createElement('div');
        card.className = 'roulette-card';
        // Terapkan style dinamis
        card.style.width = cardWidthForCalc + 'px';
        card.style.height = cardWidthForCalc + 'px';
         
        card.innerHTML = <img src="${gameData.img}" alt="game">;
        strip.appendChild(card);
    }

    const targetPosition = -(TARGET_INDEX * totalItemWidthForCalc) + (VISIBLE_WIDTH / 2) - (cardWidthForCalc / 2);

    setTimeout(() => {
        strip.style.transition = 'transform 4s cubic-bezier(0.1, 0.7, 0.1, 1)';
        strip.style.transform = translateX(${targetPosition}px);
    }, 50);

    setTimeout(() => {
        clearInterval(tickInterval);
        audioWin.currentTime = 0; audioWin.volume = 1.0; audioWin.play();
        createRainEffect(winnerGame.img);

        document.getElementById('modalImg').src = winnerGame.img;
        document.getElementById('modalTitle').innerText = winnerGame.name;
        document.getElementById('modalDesc').innerText = winnerGame.desc;
        document.getElementById('modalLink').href = winnerGame.link;
        modal.classList.add('active');
        btn.disabled = false;
    }, 4100); 
}

function resetAndSpin() {
    document.getElementById('resultModal').classList.remove('active');
    startGacha();
}

function closeModalOutside(event) {
    if (event.target === document.getElementById('resultModal')) {
        document.getElementById('resultModal').classList.remove('active');
    }
}


// --- Logika Pop-up 'About Us' ---
const teamData = {
    "Navisa": { 
        role: "Developer",
        img: "PLACEHOLDER.webp", 
        roblox: "https://www.roblox.com/users/12345/profile" 
    },
    "Griselda": { 
        role: "Product Manager",
        img: "PLACEHOLDER.webp", 
        roblox: "https://www.roblox.com/users/12345/profile" 
    },
    "Rafny": { 
        role: "Developer",
        img: "PLACEHOLDER.webp", 
        roblox: "https://www.roblox.com/users/12345/profile" 
    },
    "Anastasya": { 
        role: "Developer",
        img: "PLACEHOLDER.webp", 
        roblox: "https://www.roblox.com/users/12345/profile" 
    },
    "Alifah": { 
        role: "Developer",
        img: "PLACEHOLDER.webp", 
        roblox: "https://www.roblox.com/users/12345/profile" 
    }
};

const teamOrder = ["Navisa", "Griselda", "Rafny", "Anastasya", "Alifah"];
let currentTeamIndex = 0;
const teamModalWrapper = document.getElementById('teamModalContentWrapper');

document.querySelectorAll('.team-card, .card-yellow-small, .card-cyan-small').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.dataset.name;
        currentTeamIndex = teamOrder.indexOf(name);
        updateTeamModal(currentTeamIndex, null); 
        document.getElementById('teamModal').classList.add('active');
    });
});

function closeTeamModal() {
    document.getElementById('teamModal').classList.remove('active');
}

function nextTeamMember() {
    currentTeamIndex = (currentTeamIndex + 1) % teamOrder.length;
    updateTeamModal(currentTeamIndex, 'next');
}

function prevTeamMember() {
    currentTeamIndex = (currentTeamIndex - 1 + teamOrder.length) % teamOrder.length;
    updateTeamModal(currentTeamIndex, 'prev');
}

function updateTeamModal(index, direction) {
    const name = teamOrder[index];
    const data = teamData[name];

    if (!data) return;

    let slideOutDir = '0px';
    let slideInDir = '0px';

    if (direction === 'next') {
        slideOutDir = '-50px';
        slideInDir = '50px';
    } else if (direction === 'prev') {
        slideOutDir = '50px';
        slideInDir = '-50px';
    }

    const doRender = () => {
        document.getElementById('teamModalImg').src = data.img;
        document.getElementById('teamModalName').innerText = name;
        document.getElementById('teamModalRole').innerText = data.role;
        document.getElementById('teamModalLink').href = data.roblox;

        if(direction) {
            teamModalWrapper.style.transition = 'none'; 
            teamModalWrapper.style.transform = translateX(${slideInDir});
        }
        
        setTimeout(() => {
            teamModalWrapper.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease';
            teamModalWrapper.style.transform = 'translateX(0)';
            teamModalWrapper.style.opacity = '1';
        }, 20);
    };

    if (direction) {
        teamModalWrapper.style.transform = translateX(${slideOutDir});
        teamModalWrapper.style.opacity = '0';
        setTimeout(doRender, 400); 
    } else {
        teamModalWrapper.style.opacity = '0'; 
        doRender(); 
    }
}


// --- RAIN EFFECT ---
function createRainEffect(imgSrc) {
    for(let i=0; i<40; i++) { 
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = imgSrc; 
            img.className = 'rain-drop';
            if(imgSrc.includes("OOF")) img.classList.add('oof-drop'); 
            
            img.style.left = Math.random() * 95 + "vw";
            img.style.width = (Math.random() * 50 + 40) + "px"; 
            img.style.animationDuration = (Math.random() * 2 + 2) + "s"; 
            document.body.appendChild(img);

            setTimeout(() => img.remove(), 5000); 
        }, i * 50);
    }
}

// --- SECRET OOF ---
document.addEventListener('keydown', (e) => {
    if(e.key.toLowerCase() === 'o') {
        triggerOofSecret();
    }
});

function triggerOofSecret() {
    audioOof.currentTime = 0;
    audioOof.play();
    createRainEffect("OOF.webp");
}
