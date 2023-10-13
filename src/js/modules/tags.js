let tags = document.querySelectorAll(".ipost .search__tags .swiper-slide");
let area = document.querySelector(".content__path .path__tags");
let posts = document.querySelectorAll(".content__galery .galery__item");
let page = 14;
let lastpage = 1;

import "./pagination.js";

localStorage.setItem("tags", "undefined");

function addTag(e) {
  let item = e.target;
  if (e.target.classList.contains("swiper-slide")) {
    if (
      localStorage.getItem("tags") === "undefined" ||
      localStorage.getItem("tags") === "" ||
      localStorage.getItem("tags") === ", "
    ) {
      if (e.target.innerHTML.split(" ").length > 1) {
        localStorage.setItem("tags", [e.target.innerHTML.split(" ").join("-")]);
      } else {
        localStorage.setItem("tags", [e.target.innerHTML]);
      }
    } else {
      if (e.target.innerHTML.split(" ").length > 1) {
        localStorage.setItem(
          "tags",
          localStorage.getItem("tags") +
            ", " +
            e.target.innerHTML.split(" ").join("-")
        );
      } else {
        localStorage.setItem(
          "tags",
          localStorage.getItem("tags") + ", " + e.target.innerHTML
        );
      }
    }

    item.classList.add("active-tag");
    area.append(item);
  }
}

//tags.forEach((e) => e.addEventListener("click", addTag));
if (document.querySelector(".search__tags")) {
  document
    .querySelector(".search__tags .swiper")
    .addEventListener("click", addTag);
  document.querySelectorAll(".menu__options .content-item").forEach((e) =>
    e.addEventListener("click", (e) => {
      let item = e.target;
      if (item.classList.contains("content-item")) {
        if (
          item.classList.contains("content-item") &&
          !item.classList.contains("active-tag-menu")
        ) {
          addClass();
        } else {
          item = item.parentElement;
          if (!item.classList.contains("content-item")) {
            item = item.parentElement;
          }
          addClass();
        }
      } else {
        item = item.parentElement;
        if (
          item.classList.contains("content-item") &&
          !item.classList.contains("active-tag-menu")
        ) {
          addClass();
        }
        if (!item.classList.contains("content-item")) {
          item = item.parentElement;

          if (!item.classList.contains("active-tag-menu")) {
            addClass();
          }
        }
      }
      item.addEventListener("click", removeClass);

      function addClass() {
        if (
          localStorage.getItem("tags") === "undefined" ||
          localStorage.getItem("tags") === "" ||
          localStorage.getItem("tags") === ", "
        ) {
          console.log(item);
          if (item.childNodes[3].innerText.split(" ").length > 1) {
            localStorage.setItem(
              "tags",
              item.childNodes[3].innerText.split(" ").join("-")
            );
          } else {
            localStorage.setItem("tags", [item.childNodes[3].innerText]);
          }
        } else {
          if (item.childNodes[3].innerText.split(" ").length > 1) {
            localStorage.setItem(
              "tags",
              localStorage.getItem("tags") +
                ", " +
                item.childNodes[3].innerText.split(" ").join("-")
            );
          } else {
            localStorage.setItem(
              "tags",
              localStorage.getItem("tags") + ", " + item.childNodes[3].innerText
            );
          }
        }
        item.classList.add("active-tag-menu");
        if (item.classList.contains("content-item")) {
          document.querySelector(".options__tags").append(item.cloneNode(true));
          document.querySelector(".options__tags").childNodes.forEach((e) => {
            e.addEventListener("click", removeClassTags);
          });
        }
      }
    })
  );
}
if (document.querySelector(".path__tags")) {
  document.querySelector(".path__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("swiper-slide")) {
      e.target.remove();
      e.target.classList.remove("active-tag");
      document
        .querySelector(".ipost .search__tags .swiper-wrapper")
        .append(e.target);
    }
  });
  // document
  //   .querySelectorAll(".menu__options .content-item")
  //   .forEach((e) => e.addEventListener("click", (e) => {}));
}

function removeClass(e) {
  let item = e.target;

  if (item.classList.contains("active-tag-menu")) {
    if (item.classList.contains("active-tag-menu")) {
      item.classList.remove("active-tag-menu");
    } else {
      item = item.parentElement;
      if (!item.classList.contains("active-tag-menu")) {
        item = item.parentElement;
      }
      item.classList.remove("active-tag-menu");
    }
  } else {
    item = item.parentElement;
    if (item.classList.contains("active-tag-menu")) {
      item.classList.remove("active-tag-menu");
    } else {
      item = item.parentElement;
      if (!item.classList.contains("active-tag-menu")) {
        item = item.parentElement;
      }

      item.classList.remove("active-tag-menu");
    }
  }
  item.removeEventListener("click", removeClass);
  document.querySelector(".options__tags").childNodes.forEach((e) => {
    if (e.innerHTML === item.innerHTML) {
      let target = e;
      if (
        localStorage.getItem("tags").split(", ").indexOf(e.innerText) === -1
      ) {
        target = e.childNodes[3].innerText.split(" ").join("-");
      } else {
        e.childNodes[3].innerText;
      }

      e.remove();

      if (localStorage.getItem("tags").split(", ").length === 1) {
        console.log("1");
        localStorage.setItem("tags", "");
      } else {
        console.log("target", target);
        console.log(localStorage.getItem("tags").split(", ").indexOf(target));

        if (localStorage.getItem("tags").split(", ").length > 1) {
          if (localStorage.getItem("tags").split(", ").indexOf(target) === 0) {
            console.log("1");
            console.log(
              localStorage.getItem("tags").split(", ").indexOf(target),
              localStorage.getItem("tags").split(", ").length
            );
            localStorage.setItem(
              "tags",
              localStorage
                .getItem("tags")
                .split(", ")
                .slice(
                  localStorage.getItem("tags").split(", ").indexOf(target) + 1,
                  localStorage.getItem("tags").split(", ").length - 1
                )
            );
          } else if (
            localStorage.getItem("tags").split(", ").indexOf(target) ===
            localStorage.getItem("tags").split(", ").length - 1
          ) {
            console.log("2");
            localStorage.setItem(
              "tags",
              localStorage
                .getItem("tags")
                .split(", ")
                .slice(
                  0,
                  localStorage.getItem("tags").split(", ").indexOf(target)
                )
            );
          } else {
            console.log(target);
            localStorage.setItem(
              "tags",
              localStorage
                .getItem("tags")
                .split(", ")
                .slice(
                  0,
                  localStorage.getItem("tags").split(", ").indexOf(target)
                ) +
                "," +
                localStorage
                  .getItem("tags")
                  .split(", ")
                  .slice(
                    localStorage.getItem("tags").split(", ").indexOf(target) +
                      1,
                    localStorage.getItem("tags").split(", ").length - 1
                  )
            );
            console.log(localStorage.getItem("tags"));
            if (localStorage.getItem("tags").endsWith(",")) {
              localStorage.setItem(
                "tags",
                localStorage
                  .getItem("tags")
                  .substring(0, localStorage.getItem("tags").length - 1)
              );
            }

            console.log("strected", localStorage.getItem("tags"));
          }
        } else {
          localStorage.setItem("tags", "");
        }
      }

      localStorage.setItem(
        "tags",
        localStorage.getItem("tags").split(",").join(", ")
      );
    }
  });
  let tagssplit = localStorage.getItem("tags").split(", ");
  posts = document.querySelectorAll(".content__galery .galery__item");
  let res = [];

  if (localStorage.getItem("tags").length > 3) {
    console.log("true");
    console.log(posts);

    for (let key of posts) {
      let item;
      console.log(tagssplit);

      for (let tag of tagssplit) {
        console.log(tag);

        if (key.classList.contains(tag)) {
          item = key;
        } else {
          item = undefined;
          break;
        }
      }
      console.log(item);
      if (item !== undefined) {
        res.push(item);
      }
    }
  } else {
    res = document.querySelectorAll(".content__galery .galery__item");
  }
  posts = res;
  setTimeout(() => {
    pagesshow();
    pagefilter();
    paginationpages();
  }, 15);
}

function removeClassTags(e) {
  let item = e.target;
  if (item.classList.contains("active-tag-menu")) {
    setTimeout(() => {
      item.remove();
    }, 5);
  } else {
    item = item.parentElement;
    if (item.classList.contains("active-tag-menu")) {
      setTimeout(() => {
        item.remove();
      }, 5);
    } else {
      item = item.parentElement;
      if (item.classList.contains("active-tag-menu")) {
        setTimeout(() => {
          item.remove();
        }, 5);
      }
    }
  }

  document.querySelector(".menu__options").childNodes.forEach((e) => {
    if (e === item) {
    }
    e.childNodes.forEach((e) => {
      let counter = 0;
      if (e.classList) {
        e.childNodes.forEach((e) => {
          if (
            e.innerHTML === item.innerHTML &&
            counter !== 1 &&
            e.classList.contains("active-tag-menu")
          ) {
            e.classList.remove("active-tag-menu");
            e.removeEventListener("click", removeClass);

            counter++;
          }
        });
      }
    });
  });

  let target = e.target;
  console.log(target);

  if (
    localStorage.getItem("tags").split(", ").indexOf(target.innerHTML) === -1
  ) {
    target = e.target.innerText.split(" ").join("-");
  }
  console.log(target);
  if (localStorage.getItem("tags").split(", ").length === 1) {
    console.log("true");
    localStorage.setItem("tags", "");
  } else {
    if (localStorage.getItem("tags").split(", ").length > 1) {
      if (localStorage.getItem("tags").split(", ").indexOf(target) === 0) {
        console.log("1");

        localStorage.setItem(
          "tags",
          localStorage
            .getItem("tags")
            .split(", ")
            .slice(
              localStorage.getItem("tags").split(", ").indexOf(target) + 1,
              localStorage.getItem("tags").split(", ").length
            )
        );
      } else if (
        localStorage.getItem("tags").split(", ").indexOf(target) ===
        localStorage.getItem("tags").split(", ").length - 1
      ) {
        console.log("2");

        localStorage.setItem(
          "tags",
          localStorage
            .getItem("tags")
            .split(", ")
            .slice(0, localStorage.getItem("tags").split(", ").indexOf(target))
        );
      } else {
        localStorage.setItem(
          "tags",
          localStorage
            .getItem("tags")
            .split(", ")
            .slice(
              0,
              localStorage.getItem("tags").split(", ").indexOf(target)
            ) +
            "," +
            localStorage
              .getItem("tags")
              .split(", ")
              .slice(
                localStorage.getItem("tags").split(", ").indexOf(target) + 1,
                localStorage.getItem("tags").split(", ").length
              )
        );
      }
    } else {
      localStorage.setItem("tags", "");
    }

    localStorage.setItem(
      "tags",
      localStorage.getItem("tags").split(",").join(", ")
    );

    setTimeout(() => {
      let tagssplit = localStorage.getItem("tags").split(", ");
      posts = document.querySelectorAll(".content__galery .galery__item");

      let res = [];

      if (localStorage.getItem("tags").length > 3) {
        for (let key of posts) {
          let item;
          for (let tag of tagssplit) {
            if (key.classList.contains(tag)) {
              item = key;
            } else {
              item = undefined;
              break;
            }
          }
          if (item !== undefined) {
            res.push(item);
          }
        }
      } else {
        res = document.querySelectorAll(".content__galery .galery__item");
      }

      posts = res;

      pagesshow();
      pagefilter();
      paginationpages();
    }, 15);
  }
}

//===================================================//

function pagesshow() {
  pagefilter.currentPage = 1;
  console.log(posts);
  if (posts.length > 1) {
    let postsitems = Array.from(
      document.querySelectorAll(".content__galery .galery__item")
    );
    for (let key of posts) {
      for (let item of postsitems) {
        if (item === key) {
          item.style.display = "flex";
        } else {
          if (item.style.display !== "initial") {
          } else {
            item.style.display = "none";
          }
        }
      }
    }
  } else {
    document
      .querySelectorAll(".content__galery .galery__item")
      .forEach((e) => (e.style.display = "none"));
    document.querySelector(".content__galery .galery__item").style.display =
      "flex";
  }
}

function pagefilter() {
  let currentPage = document.querySelector(
    ".pagination__item-active"
  ).innerHTML;
  pagefilter.currentPage = currentPage;
  for (let i = 0; i < posts.length; i++) {
    if (i <= currentPage * page && i >= (currentPage - 1) * page) {
      posts[i].style.display = "initial";
    } else {
      posts[i].style.display = "none";
    }
  }
}

function paginationpages() {
  document.querySelector(".pagination__items").innerHTML = "";
  document.querySelector(".pagination__item-right").style.display = "initial";
  document.querySelector(".pagination__item-left").style.display = "initial";

  if (posts.length === 0) {
    let item = document.createElement("div");
    item.classList.add("pagination__item");
    item.classList.add("pagination__item-active");
    item.innerHTML = 1;
    item.addEventListener("click", pagination);
    document.querySelector(".pagination__item-left").style.display = "none";
    document.querySelector(".pagination__item-right").style.display = "none";
    document.querySelector(".pagination__items").append(item);
  } else {
    for (let i = 1; i <= Math.ceil(posts.length / page); i++) {
      let item = document.createElement("div");
      item.classList.add("pagination__item");
      item.innerHTML = i;
      item.addEventListener("click", pagination);
      if (i === 1) {
        item.classList.add("pagination__item-active");
      }
      document.querySelector(".pagination__items").append(item);
      lastpage = i;
    }
    document.querySelector(".pagination__item-left").style.display = "none";
    if (Math.ceil(posts.length / page) <= 1) {
      document.querySelector(".pagination__item-right").style.display = "none";
    }
  }
}

function pagination(e) {
  let classLists = Array.from(e.target.classList);

  if (classLists.includes("pagination__item-left")) {
    if (pagefilter.currentPage !== 1) {
      removeClasses();
      if (pagefilter.currentPage == 1) {
        e.target.style.display = "none";
      } else {
        pagefilter.currentPage--;
        e.target.style.display = "initial";
        document.querySelector(".pagination__item-right").style.display =
          "initial";
        document
          .querySelectorAll(".pagination__items .pagination__item")
          [pagefilter.currentPage - 1].classList.add("pagination__item-active");
        if (pagefilter.currentPage === 1) {
          e.target.style.display = "none";
        }
      }
    }
  } else if (classLists.includes("pagination__item-right")) {
    if (
      pagefilter.currentPage !== lastpage &&
      document.querySelectorAll(".pagination__items .pagination__item").length >
        1
    ) {
      removeClasses();
      pagefilter.currentPage++;
      e.target.style.display = "initial";
      document.querySelector(".pagination__item-left").style.display =
        "initial";
      document
        .querySelectorAll(".pagination__items .pagination__item")
        [pagefilter.currentPage - 1].classList.add("pagination__item-active");
      if (pagefilter.currentPage === lastpage) {
        e.target.style.display = "none";
      }
    } else {
      e.target.style.display = "none";
    }
  } else {
    removeClasses();
    e.target.classList.add("pagination__item-active");
  }

  function removeClasses() {
    paginations.forEach((element) => {
      element.classList.remove("pagination__item-active");
    });
    document.querySelectorAll(".pagination__item").forEach((element) => {
      element.classList.remove("pagination__item-active");
    });
  }
  pagefilter();
}
