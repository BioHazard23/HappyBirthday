// ----------------------------
//   Control de música
// ----------------------------
const playBtn = document.getElementById("playMusic");
const audio = document.getElementById("birthdaySong");

audio.volume = 0.3;

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.querySelector(".music-icon").classList.add("animate");
  } else {
    audio.pause();
    playBtn.querySelector(".music-icon").classList.remove("animate");
  }
});

// ----------------------------
//   Confeti animado
// ----------------------------
const confettiContainer = document.createElement("div");
confettiContainer.id = "confetti-container";
document.body.appendChild(confettiContainer);

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = (8 + Math.random() * 4) + "s";
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 12000);
}

setInterval(createConfetti, 500);
