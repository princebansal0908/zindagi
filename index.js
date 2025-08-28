// Add a surprise effect: message color keeps changing
const message = document.getElementById("message");
const colors = ["#ffffff", "#ffebcd", "#ffe4e1", "#f0fff0", "#e6e6fa"];

let i = 0;
setInterval(() => {
  message.style.color = colors[i % colors.length];
  i++;
}, 1000);
