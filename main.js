const percents = document.getElementById("percents");
percents.innerHTML = percents.textContent.replace(/\S/g, "<span>$&</span>");
percents.style.setProperty("--animation", "pop");
percents.querySelectorAll("span").forEach((span, index) => {
  span.style.setProperty("--delay", `${index * 0.1}s`);
  span.classList.add("animate");
});
percents.classList.remove("animate");
void percents.offsetWidth;
percents.classList.add("animate");

function toggleRadioButton() {
  const radioButton = document.getElementById("rad");
  radioButton.checked = !radioButton.checked;
}

function pop() {
  percents.style.setProperty("--animation", "pop");

  percents.classList.remove("animate");
  void percents.offsetWidth;
  percents.classList.add("animate");
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  Object.entries(Object.fromEntries(formData)).forEach(([key, value]) => {
    localStorage.setItem(key, value);
  });
  const form = document.querySelector(".form-container");
  const iframe = document.querySelector("iframe");
  form.style.display = "none";
  iframe.style.position = "static";
  iframe.style.zIndex = 1;
  iframe.style.visibility = "visible";
  let gameWindow = window.frames.game;
  gameWindow.postMessage(JSON.stringify(Object.fromEntries(formData)), "*");
  return false;
}

function openGame() {
  const banner = document.getElementById("banner");
  const gameContainer = document.getElementById("game-container");
  banner.style.display = "none";
  gameContainer.style.display = "flex";
  const form = document.querySelector(".form-container");
  form.style.display = "flex";
}

function sendEmail(name, surname, email, discount) {
  return fetch("https://160.153.250.68:1889/api/sendmail", {
    method: "PUT",
    body: JSON.stringify({
      e: email,
      n: name,
      s: surname,
      dp: discount,
    }),
  }).then((res) => {
    return res.json();
  });
}

window.addEventListener("message", function (event) {
  if (event.data !== "END_GAME") return;
  const iframe = document.querySelector("iframe");
  const resetButton = document.getElementById("reset");
  resetButton.click();
  iframe.style.position = "absolute";
  iframe.style.zIndex = -1;
  iframe.style.visibility = "hidden";
  const banner = document.getElementById("banner");
  const gameContainer = document.getElementById("game-container");
  gameContainer.style.display = "none";
  banner.style.display = "flex";
});

const circle = document.getElementById("circle");

circle.addEventListener("animationiteration", () => {
  circle.classList.remove("start");
  circle.classList.add("stop");
  setTimeout(() => {
    circle.classList.remove("stop");
    circle.classList.add("start");
  }, 1000);
});
