// ============================
//   - CONTROL MÚSICA
// ============================
const playBtn = document.getElementById("play-btn");
const playIcon = document.querySelector("#play-btn i");
const bgMusic = document.getElementById("bg-music");

bgMusic.volume = 0.3;

playBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.classList.remove("fa-play");
        playIcon.classList.add("fa-pause");
    } else {
        bgMusic.pause();
        playIcon.classList.remove("fa-pause");
        playIcon.classList.add("fa-play");
    }
});

// ============================
//   - CONFETI
// ============================
function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
    confetti.style.opacity = Math.random();
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 6000); // duración más larga para caída lenta
}

setInterval(createConfetti, 150); // más espaciado, más natural

// ============================
//   - MOVIMIENTO DE GLOBOS
// ============================
const balloons = document.querySelectorAll(".balloon");

balloons.forEach((balloon, index) => {
    let direction = 1;
    let pos = 0;

    setInterval(() => {
        if (pos >= 20 || pos <= -20) direction *= -1;
        pos += direction;
        balloon.style.transform = `translateY(${pos}px)`;
    }, 100 + index * 20); // tiempos distintos para variación
});
