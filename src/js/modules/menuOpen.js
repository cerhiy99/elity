function menuAuth() {
  if (window.screen.width < 576) {
    if (
      parseInt(
        document.querySelector(".header__auth").getBoundingClientRect().top
      ) -
        parseInt(
          document.querySelector(".menu__nav ul").getBoundingClientRect()
            .bottom - 200
        ) <=
      0
    ) {
      document.querySelector(".header__auth").style.visibility = "hidden";
      document.querySelector(".header__auth").style.transform =
        "translate(0%, 100%)";
    } else {
      document.querySelector(".header__auth").style.visibility = "visible";
      document.querySelector(".header__auth").style.transform =
        "translate(0%, 0%)";
    }
  } else {
    document.querySelector(".header__auth").style.visibility = "visible";
    document.querySelector(".header__auth").style.transform = "translate(0%)";
  }
}

const menuBurger = document.querySelector(".menu__burger");
const nav = document.querySelector("nav");
const navAdditional = document.querySelector(".header__auth");

const menuLine1 = document.querySelector(".burger__line-1");
const menuLine2 = document.querySelector(".burger__line-2");
const menuLine3 = document.querySelector(".burger__line-3");

let menuActive = false;

function menuOpen() {
  menuLine1.style.transform = "translate(0px, 10.5px) rotate(45deg)";
  menuLine2.style.transform = "rotate(-45deg)";
  menuLine3.style.transform = "translate(0px, -14px) rotate(45deg)";
  menuLine3.style.opacity = "0";
  document.body.style.overflow = "hidden";
  nav.style.visibility = "initial";
  nav.style.transform = "translate(0%, 0%)";
  if (window.screen.availWidth <= 576) {
    navAdditional.style.visibility = "initial";
    navAdditional.style.transform = "translate(0px, 0%)";
  }
  window.addEventListener("resize", menuAuth);
  window.addEventListener("scrool", menuAuth);
  window.addEventListener("wheel", menuAuth);
  window.addEventListener("touchstart", menuAuth);
  window.addEventListener("touchend", menuAuth);
}

function menuClose() {
  menuLine1.style.transform = "translate(0px, 0px) rotate(0deg)";
  menuLine2.style.transform = "rotate(0deg)";
  menuLine3.style.transform = "translate(0px, 0px) rotate(0deg)";
  menuLine3.style.opacity = "1";
  document.body.style.overflow = "auto";
  nav.style.visibility = "hidden";
  nav.style.transform = "translate(0%, 100%)";
  if (window.screen.availWidth <= 576) {
    navAdditional.style.visibility = "hidden";
    navAdditional.style.transform = "translate(0px, 100%)";
  }
  window.removeEventListener("resize", menuAuth);
  window.removeEventListener("scrool", menuAuth);
  window.removeEventListener("wheel", menuAuth);
  window.removeEventListener("touchstart", menuAuth);
  window.removeEventListener("touchend", menuAuth);
}

menuBurger.addEventListener("click", () => {
  if (menuActive == false) {
    menuOpen();
    menuActive = true;
  } else {
    menuClose();
    menuActive = false;
  }
});
