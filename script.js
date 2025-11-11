const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');

// "No" kabur acak
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// "Yes" klik → tampilkan pesan & animasi hati
yesBtn.addEventListener("click", () => {
  message.classList.remove("hidden");
  for (let i = 0; i < 20; i++) createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  heart.innerText = "💖";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 4000);
}
