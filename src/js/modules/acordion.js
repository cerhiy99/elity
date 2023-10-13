function getStyle(elem, style) {
  return window.getComputedStyle(elem, null).getPropertyValue(style);
}

if (document.querySelector(".accordion-list")) {
  let acordions = document.querySelectorAll(".accordion-list");

  function interactAcc(e) {
    if (e.target.classList.contains("accordion-list")) {
      let content = e.target.childNodes[3];

      console.log(content);
      if (getStyle(content, "display") === "none") {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
      setTimeout(() => {
        e.target.classList.toggle("accordion-list-active");
      }, 10);
    }
  }

  acordions.forEach((e) => e.addEventListener("click", interactAcc));
}

if (document.querySelector(".acordion")) {
  let accordions = document.querySelectorAll(".acordion");

  function interactAcc(e) {
    if (!window.matchMedia("(hover: hover)").matches) {
      e.preventDefault();
      let item = e.target;
      if (!item.classList.contains("acordion")) {
        item = item.parentElement;
      }
      let menunav = item.parentElement;
      for (let i = 0; i < 5; i++) {
        menunav = menunav.parentElement;
        if (menunav.classList.contains("menu__nav")) {
          item = item.childNodes[3];

          if (getStyle(item.childNodes[3], "visibility") === "hidden") {
            item.style.visibility = "visible";
            item.style.opacity = "1";
            item.style.width = "100%";
            item.style.justifyContent = "start";
            item.style.paddingTop = "20px";
            item.style.height =
              window.screen.height - item.getBoundingClientRect().top + "px";
            item.style.border = "1px solid var(--color-separator)";
            item.style.zIndex = "2";
            break;
          } else {
            item.style.border = "none";
            item.style.visibility = "hidden";
            item.style.opacity = "0";

            setTimeout(() => {
              item.style.width = "initial";
              item.style.height = "initial";
              item.style.justifyContent = "initial";
              item.style.paddingTop = "initial";
            }, 200);
            break;
          }
        }
      }
      item = item.childNodes[3];
      if (getStyle(item, "visibility") === "hidden") {
        item.style.visibility = "visible";
        item.style.opacity = "1";
      } else {
        item.style.visibility = "hidden";
        item.style.opacity = "0";
        item.style.width = "initial";
        item.style.height = "initial";
        item.style.justifyContent = "initial";
        item.style.paddingTop = "initial";
        item.style.border = "none";
      }
    } else if (window.screen.width < 992) {
      let item = e.target;
      if (item.id.length < 1) {
        if (!item.classList.contains("acordion")) {
          item = item.parentElement;
        }
        let menunav = item.parentElement;
        for (let i = 0; i < 3; i++) {
          menunav = menunav.parentElement;
          if (menunav.classList.contains("menu__nav")) {
            item = item.childNodes[3];
            e.preventDefault();
            console.log(item);
            if (getStyle(item, "visibility") === "hidden") {
              item.style.visibility = "visible";
              item.style.opacity = "1";
              item.style.width = "100%";
              item.style.justifyContent = "start";
              item.style.paddingTop = "20px";
              item.style.height =
                window.screen.height - item.getBoundingClientRect().top + "px";
              item.style.border = "1px solid var(--color-separator)";
              item.style.zIndex = "2";
              break;
            } else {
              item.style.border = "none";
              item.style.visibility = "hidden";
              item.style.opacity = "0";

              setTimeout(() => {
                item.style.width = "initial";
                item.style.height = "initial";
                item.style.justifyContent = "initial";
                item.style.paddingTop = "initial";
              }, 200);
              break;
            }
          }
        }
      } else {
      }
    }
  }

  accordions.forEach((e) => e.addEventListener("click", interactAcc));
}
