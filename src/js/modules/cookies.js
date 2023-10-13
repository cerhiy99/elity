if (localStorage.getItem("cookies") != "cooldown") {
  setTimeout(() => {
    document.querySelector(".cookies").style.transform = "translate(-50%, 0%)";
  }, 2500);
}

document
  .querySelector(".cookies__btn .button-gold")
  .addEventListener("click", btnAction);

function btnAction(e) {
  e.preventDefault();
  localStorage.setItem("cookies", "cooldown");
  document.querySelector(".cookies").style.transform = "translate(-50%, 200%)";
}
