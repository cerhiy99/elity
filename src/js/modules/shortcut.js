if (document.querySelector(".ipost")) {
  let text = document.querySelectorAll(
    ".content__galery .galery__item .item__text"
  );

  let images = document.querySelectorAll(".content__galery .galery__item img");

  for (let i = 0; i < text.length; i++) {
    let width = images[i].width;
    text[i].style.width = width + "px";
  }

  let filter = document.querySelector(".ipost__container .menu__filters");

  function showmenu(e) {
    let menu = document.querySelector(".ipost__container .menu__options");
    if (showmenu.visibility === true || showmenu.visibility === undefined) {
      if (window.screen.width < 768) {
        menu.style.visibility = "visible";
        menu.style.transform = "translate(0%, 0%)";
        showmenu.visibility = false;
        document.querySelector("header").style.zIndex = "7";
        document.querySelector(".popup__container").style.background = "black";
        document.querySelector(".popup__container").style.zIndex = "5";
        document
          .querySelector(".popup__container")
          .addEventListener("click", close);
        document
          .querySelector(".menu__options .options__close")
          .addEventListener("click", close);
      } else {
        menu.style.transform = "translate(-200%, 0)";
        setTimeout(() => {
          menu.style.transform = "translate(-20000%, 0)";
        }, 200);
        showmenu.visibility = false;
        document.querySelector(".ipost__content").style.marginLeft = "-180px";
        document.querySelector(".ipost__content").style.width =
          "calc(100% + 180px)";
        swiperSize("content");
      }
    } else {
      close();
    }

    function close() {
      if (window.screen.width < 768) {
        menu.style.visibility = "hidden";
        menu.style.transform = "translate(100%, 0%)";
        showmenu.visibility = true;
        document.querySelector("header").style.zIndex = "initial";
        document.querySelector(".popup__container").style.background =
          "transparent";
        document.querySelector(".popup__container").style.zIndex = "-1";
        document
          .querySelector(".popup__container")
          .removeEventListener("click", close);
        document
          .querySelector(".menu__options .options__close")
          .removeEventListener("click", close);
      } else {
        menu.style.transform = "translate(0%, 0)";
        menu.style.visibility = "visible";
        showmenu.visibility = true;
        document.querySelector(".ipost__content").style.marginLeft = "initial";
        document.querySelector(".ipost__content").style.width = "initial";
        swiperSize("default");
      }
    }
  }

  function swiperSize(target) {
    swiperSize.mode = target;
    if (target === "default" || swiperSize.mode === "default") {
      document.querySelector(".search__tags .swiper").style.width =
        document.querySelector(".menu__search label").clientWidth - 60 + "px";
    } else {
      document.querySelector(".search__tags .swiper").style.width =
        document.querySelector(".ipost__content").clientWidth - 60 + "px";
    }
  }

  window.addEventListener("resize", swiperSize);

  swiperSize();

  filter.addEventListener("click", showmenu);
}
