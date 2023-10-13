if (document.querySelector(".ipost ")) {
  let posts = document.querySelectorAll(".content__galery .galery__item");
  let page = 14;
  let content__galery = document.querySelector(".content__galery");
  let lastpage = 1;

  function postsfilter() {
    if (
      localStorage.getItem("tags").length > 0 ||
      localStorage.getItem("tags") === ""
    ) {
      let tagssplit = localStorage.getItem("tags").split(", ");
      posts = document.querySelectorAll(".content__galery .galery__item");
      let res = [];
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

      posts = res;
      paginationpages();
      pagefilter();
      pagesshow();
    }
  }

  function postsfilterundo(e) {
    let item = e.target;

    if (
      localStorage.getItem("tags").split(", ").indexOf(item.innerText) === -1
    ) {
      item = item.innerText.split(" ").join("-");
    } else {
      item = item.innerText;
    }

    if (
      localStorage.getItem("tags").split(", ").indexOf(item) === 0 ||
      localStorage.getItem("tags").split(", ").indexOf(item) ===
        localStorage.getItem("tags").split(", ").length
    ) {
      localStorage.setItem(
        "tags",
        localStorage
          .getItem("tags")
          .split(", ")
          .slice(0, localStorage.getItem("tags").split(", ").indexOf(item)) +
          localStorage
            .getItem("tags")
            .split(", ")
            .slice(
              1 + localStorage.getItem("tags").split(", ").indexOf(item),
              localStorage.getItem("tags").split(", ").length
            )
      );
    } else {
      localStorage.setItem(
        "tags",
        localStorage
          .getItem("tags")
          .split(", ")
          .slice(0, localStorage.getItem("tags").split(", ").indexOf(item)) +
          "," +
          localStorage
            .getItem("tags")
            .split(", ")
            .slice(
              1 + localStorage.getItem("tags").split(", ").indexOf(item),
              localStorage.getItem("tags").split(", ").length
            )
      );
      if (localStorage.getItem("tags").endsWith(",")) {
        localStorage.setItem(
          "tags",
          localStorage
            .getItem("tags")
            .substring(0, localStorage.getItem("tags").length - 1)
        );
      }
    }

    localStorage.setItem(
      "tags",
      localStorage.getItem("tags").split(",").join(", ")
    );

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
  }

  document.querySelector(".search__tags").addEventListener("click", (e) => {
    if (e.target.classList.contains("swiper-slide")) {
      setTimeout(postsfilter, 10);
    }
  });

  document.querySelector(".menu__options").addEventListener("click", (e) => {
    let item = e.target;

    setTimeout((e) => {
      if (item.classList.contains("content-item")) {
        if (item.classList.contains("active-tag-menu")) {
          postsfilterundo(e);
        } else {
          postsfilter();
        }
      } else {
        item = item.parentElement;
        if (item.classList.contains("content-item")) {
          if (item.classList.contains("active-tag-menu")) {
            postsfilter();
          } else {
            postsfilterundo(e);
          }
        } else {
          item = item.parentElement;
          if (item.classList.contains("content-item")) {
            if (item.classList.contains("active-tag-menu")) {
              postsfilterundo(e);
            } else {
              postsfilter();
            }
          }
        }
      }
    });

    function postsfilterundo(e) {
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
    }
  });

  document.querySelector(".options__tags").addEventListener("click", (e) => {
    setTimeout((e) => {
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
    }, 5);
  });

  document
    .querySelector(".path__tags")
    .addEventListener("click", postsfilterundo);

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
        document.querySelector(".pagination__item-right").style.display =
          "none";
      }
    }
  }

  function pagesshow() {
    pagefilter.currentPage = 1;
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

  paginationpages();
  document.querySelector(".pagination__item-left").style.display = "none";
  let paginations = document.querySelectorAll(".pagination__item");
  paginations.forEach((e) => e.addEventListener("click", pagination));

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
            [pagefilter.currentPage - 1].classList.add(
              "pagination__item-active"
            );
          if (pagefilter.currentPage === 1) {
            e.target.style.display = "none";
          }
        }
      }
    } else if (classLists.includes("pagination__item-right")) {
      if (
        pagefilter.currentPage !== lastpage &&
        document.querySelectorAll(".pagination__items .pagination__item")
          .length > 1
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

  pagefilter();
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
}
