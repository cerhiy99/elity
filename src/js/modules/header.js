function getStyle(elem, style) {
  return window.getComputedStyle(elem, null).getPropertyValue(style);
}

localStorage.setItem("headersticky", "else");

function headerFixed() {
  if (window.pageYOffset >= document.querySelector("header").offsetTop) {
    document.querySelector("header").classList.add("sticky");
    localStorage.setItem("headersticky", "true");
    authSizing();
  } else {
    document.querySelector("header").classList.remove(".sticky");
    localStorage.setItem("headersticky", "else");
  }
}

function authSizing() {
  if (
    window.innerWidth < 576 &&
    localStorage.getItem("headersticky") === "true" &&
    getStyle(document.querySelector(".menu__nav"), "visibility") != "hidden"
  ) {
    console.log(getStyle(document.querySelector(".menu__nav"), "visibility"));
    document.querySelector(".header__auth").style.bottom = `-${
      window.innerHeight - 60
    }px `;
  } else {
    if (window.innerWidth < 576) {
      document.querySelector(".header__auth").style.bottom = `-${
        window.innerHeight - 60
      }px `;
      document.querySelector(".header__auth").style.visibility = "hidden";
      document.querySelector(".header__auth").style.transform = "translate(0%)";
    } else if (
      document.querySelector(".menu__nav").style.visibility !== "hidden" &&
      window.innerWidth > 576 &&
      window.innerWidth < 992
    ) {
      document.querySelector(".header__auth").style.bottom = "initial";
      document.querySelector(".header__auth").style.visibility = "visible";
      document.querySelector(".header__auth").style.transform = "translate(0%)";
    }
  }
}

window.addEventListener("resize", authSizing);
window.addEventListener("scroll", headerFixed);
window.addEventListener("resize", headerFixed);

//window.addEventListener("resize", menuAuth);
//window.addEventListener("scrool", menuAuth);
//window.addEventListener("wheel", menuAuth);
// window.addEventListener("touchstart", menuAuth);
// window.addEventListener("touchend", menuAuth);
