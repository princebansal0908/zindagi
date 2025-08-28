const quotes = [
  "“Namjoon teaches us that it’s okay to not have all the answers.”",
  "“Your worth is not measured by your productivity.”",
  "“Healing begins the moment you accept yourself.”",
  "“In the silence of chaos, you will find your own voice.”"
];

const quoteText = document.getElementById("quote-text");
const loveBtn = document.getElementById("love-btn");
let currentIndex = 0;

// Show quotes with smooth fade/slide
function showQuote(index) {
  quoteText.classList.remove("show");
  setTimeout(() => {
    quoteText.textContent = quotes[index];
    quoteText.classList.add("show");
  }, 600);
}

// Rotate quotes every 6s
let interval = setInterval(() => {
  currentIndex++;
  if (currentIndex < quotes.length) {
    showQuote(currentIndex);
  } else {
    clearInterval(interval);
    setTimeout(() => {
      loveBtn.classList.add("show");
    }, 1800);
  }
}, 6000);

// Initial quote
showQuote(currentIndex);

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 5 + 4 + "s";

  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}
setInterval(createHeart, 700);
