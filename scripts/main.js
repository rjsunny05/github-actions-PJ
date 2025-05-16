const characters = [
    { name: "Eren Yeager", role: "Titan Shifter", img: "assets/eren.jpg" },
    { name: "Mikasa Ackerman", role: "Soldier", img: "assets/mikasa.jpg" },
    { name: "Levi Ackerman", role: "Captain", img: "assets/levi.jpg" }
];

const quotes = [
    "“If you win, you live. If you lose, you die. If you don’t fight, you can’t win!” — Eren Yeager",
    "“The world is cruel, but also very beautiful.” — Mikasa Ackerman",
    "“Give up on your dreams and die.” — Levi Ackerman"
];

// Display characters
const characterList = document.getElementById("character-list");
characters.forEach(char => {
    characterList.innerHTML += `
        <div class="character-card">
            <img src="${char.img}" alt="${char.name}">
            <h3>${char.name}</h3>
            <p>${char.role}</p>
        </div>
    `;
});

// Display random quote
const quoteContainer = document.getElementById("quote-container");
const newQuoteBtn = document.getElementById("new-quote-btn");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}

newQuoteBtn.addEventListener("click", getRandomQuote);
getRandomQuote(); // Load initial quote
