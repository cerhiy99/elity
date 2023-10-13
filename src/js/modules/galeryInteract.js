function getStyle(elem, style) {
  return window.getComputedStyle(elem, null).getPropertyValue(style);
}

if (document.querySelector(".galery__slider")) {
  let widthslider = 0;
  let galery__slider = document.querySelector(".galery__slider");
  let galery__sliderAll = document.querySelectorAll(".galery__slider");

  let galery = document.querySelector(".templates__galery");

  let galerynext = document.querySelector(".galery__slider-next");
  let galeryprev = document.querySelector(".galery__slider-prev");

  for (let keys of galery__slider.children) {
    widthslider += keys.clientWidth + parseInt(getStyle(galery__slider, "gap"));
  }

  galery.style.width = "100%";

  galeryInteract.width = parseInt(
    (widthslider / galery.clientWidth) * 100 - 100
  );

  function galeryInteract(e) {
    if (galeryInteract.transform === undefined) {
      galeryInteract.transform = 0;
    }
    if (e.target === galerynext) {
      if (galeryInteract.transform - 20 < "-" + galeryInteract.width) {
        galeryInteract.transform = galeryInteract.width * -1;
        galerynext.style.visibility = "hidden";
        galerynext.style.opacity = "0";
      } else {
        galeryprev.style.visibility = "visible";
        galeryprev.style.opacity = "1";
        galeryInteract.transform -= 20;
        if (galeryInteract.transform == "-" + galeryInteract.width) {
          galerynext.style.visibility = "hidden";
          galerynext.style.opacity = "0";
        }
      }
      galery__sliderAll.forEach(
        (e) =>
          (e.style.transform = `translate(${galeryInteract.transform}%, 0%)`)
      );
    } else {
      if (galeryInteract.transform + 20 > 0) {
        galeryInteract.transform = 0;
        galeryprev.style.visibility = "hidden";
        galeryprev.style.opacity = "0";
      } else {
        galerynext.style.visibility = "visible";
        galerynext.style.opacity = "1";
        galeryInteract.transform += 20;
        if (galeryInteract.transform == 0) {
          galeryprev.style.visibility = "hidden";
          galeryprev.style.opacity = "0";
        }
      }
      galery__sliderAll.forEach(
        (e) =>
          (e.style.transform = `translate(${galeryInteract.transform}%, 0%)`)
      );
    }
  }

  galerynext.addEventListener("click", galeryInteract);
  galeryprev.addEventListener("click", galeryInteract);
}
