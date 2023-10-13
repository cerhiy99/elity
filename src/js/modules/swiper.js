import Swiper from "../swiper.js";

if (document.querySelector(".tags__tags")) {
  let tags = document.querySelectorAll(".tag");
  let galeries = document.querySelectorAll(".tags__galery");
  let tagActive = document.querySelector(".tag-active");
  let galeryActive = document.querySelector(
    ".tags__galery-" + tagActive.classList[0]
  );

  function selectTag(e) {
    tags.forEach((e) => e.classList.remove("tag-active"));
    galeries.forEach((e) => (e.style.display = "none"));
    e.target.classList.add("tag-active");
    tagActive = document.querySelector(".tag-active");
    galeryActive = document.querySelector(
      ".tags__galery-" + tagActive.classList[0]
    );
    galeryActive.style.display = "flex";
  }

  tags.forEach((e) => e.addEventListener("click", selectTag));
  galeryActive.style.display = "flex";
}

//===================================================//
if (document.querySelector(".swiper-tags")) {
  const swipertags = new Swiper(".swiper-tags", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    spaceBetween: 10,
    breakpoints: {
      238: {
        slidesPerView: 1,
      },
      338: {
        slidesPerView: 1.5,
      },
      438: {
        slidesPerView: 2,
      },
      538: {
        slidesPerView: 2.5,
      },
      638: {
        slidesPerView: 3,
      },
      738: {
        slidesPerView: 3.5,
      },
      838: {
        slidesPerView: 4,
      },
      1038: {
        slidesPerView: 5,
      },
      1238: {
        slidesPerView: 6,
      },
      1438: {
        slidesPerView: 7,
      },
      1638: {
        slidesPerView: 8,
      },
      1838: {
        slidesPerView: 9,
      },
    },
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.querySelector(".search__tags")) {
  const swipertagstemp = new Swiper(".search__tags .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 10,
    slidesPerGroup: 3,
    slidesPerView: 12,
    breakpoints: {
      200: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 4,
      },
      738: {
        slidesPerView: 6,
      },
      968: {
        slidesPerView: 8,
      },
      1130: {
        slidesPerView: 10,
      },
      1288: {
        slidesPerView: 12,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
