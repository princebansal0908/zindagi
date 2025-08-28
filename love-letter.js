// Floating Hearts Animation
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
