const keys = document.querySelectorAll(".drum-pad");

window.addEventListener("keydown", (e) => {
  playAudio(`${e.key.toUpperCase()}`);
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    playAudio(`${key.id.toUpperCase()}`);
  });
});

const playAudio = (id) => {
  try {
    const audio = document.getElementById(id);
    const display = document.getElementById("display");
    display.innerText = audio.dataset.name;
    const key = document.getElementById(`${id.toLowerCase()}`);
    key.classList.add("pressed");
    key.addEventListener("transitionend", () => {
      key.classList.remove("pressed");
    });
    audio.currentTime = 0;
    audio.play();
  } catch (e) {
    return;
  }
};
