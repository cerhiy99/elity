let login = document.querySelector(".login");
let signup = document.querySelector(".signup");

let eye = document.querySelectorAll(".pass__eye");

let elements = ["header", "main", "footer"];

function passwordToggle(e) {
  console.log(e.target.parentElement);
  if (passwordToggle.state || passwordToggle.state === undefined) {
    if (e.target === document.querySelector("#login")) {
      document
        .querySelector("#passwordInputlogin")
        .setAttribute("type", "text");
      e.target.parentElement.innerHTML = `<i class="fa fa-eye-slash" aria-hidden="true" id="eye"></i>`;
      passwordToggle.state = false;
    } else {
      document.querySelector("#passwordInputreg").setAttribute("type", "text");
      e.target.parentElement.innerHTML = `<i class="fa fa-eye-slash" aria-hidden="true" id="eye"></i>`;
      passwordToggle.state = false;
    }
  } else {
    if (e.target === document.querySelector("#login")) {
      document
        .querySelector("#passwordInputlogin")
        .setAttribute("type", "text");
      e.target.parentElement.innerHTML = `<i class="fa fa-eye" aria-hidden="true" id="eye"></i>`;
      passwordToggle.state = true;
    } else {
      document.querySelector("#passwordInputreg").setAttribute("type", "text");
      e.target.parentElement.innerHTML = `<i class="fa fa-eye" aria-hidden="true" id="eye"></i>`;
      passwordToggle.state = true;
    }
  }
}

eye.forEach((e) => e.addEventListener("click", passwordToggle));

function signupPopUp(event) {
  event.preventDefault();

  let popup = document.querySelector(".popup-signup");
  closepopups("signup");

  popup.style.visibility = "visible";
  popup.style.filter = "opacity(1)";
  popup.style.opacity = "1";
  popup.style.transform = "translate(-50%, -50%) scale(1.05)";
  document.querySelector(".popup__container").style.background = "black";
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    popup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);
  signupPopUp.visibility = true;
  setTimeout(() => {
    document
      .querySelector(".popup__container")
      .addEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "15";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "none";
    });
  });

  document
    .querySelector(".popup-signup .popup__button")
    .addEventListener("click", check);

  function check() {
    if (
      document
        .querySelector(".popup-signup .popup__email input")
        .value.includes("@") &&
      document
        .querySelector(".popup-signup .popup__email input")
        .value.includes(".") &&
      document.querySelector(".popup-signup .popup__email input").value.length >
        4
    ) {
      document.querySelector(".popup-signup .popup__email input").style.border =
        "inherit";
      document.querySelector(".popup-signup .popup__email label").style.color =
        "inherit";
    } else {
      document.querySelector(".popup-signup .popup__email input").focus();
      document.querySelector(".popup-signup .popup__email input").style.border =
        "2px solid #C73D12";
      document.querySelector(".popup-signup .popup__email label").style.color =
        "#C73D12";
    }
    document.querySelector(".popup-signup .popup__email label");
    if (document.querySelector("#passwordInputreg").value.length > 6) {
      document.querySelector("#passwordInputreg").style.border = "inherit";
      document.querySelector(".popup-signup .popup__pass label").style.color =
        "inherit";
    } else {
      document.querySelector("#passwordInputreg").focus();
      document.querySelector("#passwordInputreg").style.border =
        "2px solid #C73D12";
      document.querySelector(".popup-signup .popup__pass label").style.color =
        "#C73D12";
    }
  }
  signupPopUp.close = close;

  function close() {
    document.body.style.overflow = "initial";
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.8)";
    document.querySelector(".popup__container").style.background =
      "transparent";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "all";
    });
    document
      .querySelector(".popup__container")
      .removeEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "-1";
  }
}

function loginPopUp(event) {
  event.preventDefault();

  let popup = document.querySelector(".popup-login");
  closepopups("login");

  popup.style.visibility = "visible";
  document.querySelector(".popup__container").style.background = "black";
  popup.style.filter = "opacity(1)";
  popup.style.opacity = "1";
  popup.style.transform = "translate(-50%, -50%) scale(1.05)";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    popup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);
  setTimeout(() => {
    document
      .querySelector(".popup__container")
      .addEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "15";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "none";
    });
  });

  document
    .querySelector(".popup-login .popup__button")
    .addEventListener("click", check);

  loginPopUp.close = close;

  function check() {
    if (
      document
        .querySelector(".popup-login .popup__email input")
        .value.includes("@") &&
      document
        .querySelector(".popup-login .popup__email input")
        .value.includes(".") &&
      document.querySelector(".popup-login .popup__email input").value.length >
        4
    ) {
      document.querySelector(".popup-login .popup__email input").style.border =
        "inherit";
      document.querySelector(".popup-login .popup__email label").style.color =
        "inherit";
    } else {
      document.querySelector(".popup-login .popup__email input").focus();
      document.querySelector(".popup-login .popup__email input").style.border =
        "2px solid #C73D12";
      document.querySelector(".popup-login .popup__email label").style.color =
        "#C73D12";
    }
    document.querySelector(".popup-login .popup__email label");
    if (document.querySelector("#passwordInputlogin").value.length > 6) {
      document.querySelector("#passwordInputlogin").style.border = "inherit";
      document.querySelector(".popup-login .popup__pass label").style.color =
        "inherit";
    } else {
      document.querySelector("#passwordInputlogin").focus();
      document.querySelector("#passwordInputlogin").style.border =
        "2px solid #C73D12";
      document.querySelector(".popup-login .popup__pass label").style.color =
        "#C73D12";
    }
  }

  function close() {
    document.body.style.overflow = "initial";
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.8)";
    document.querySelector(".popup__container").style.background =
      "transparent";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "all";
    });
    document
      .querySelector(".popup__container")
      .removeEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "-1";
  }
}

function forgetPopUp(event) {
  event.preventDefault();

  let popup = document.querySelector(".popup__forgot");

  closepopups("forget");

  popup.style.visibility = "visible";
  document.querySelector(".popup__container").style.background = "black";
  popup.style.filter = "opacity(1)";
  popup.style.opacity = "1";
  popup.style.transform = "translate(-50%, -50%) scale(1.05)";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    popup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);
  setTimeout(() => {
    document
      .querySelector(".popup__container")
      .addEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "15";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "none";
    });
  });

  console.log(document.querySelector(".popup__forgot .forgot__submit"));
  document
    .querySelector(".popup__forgot .forgot__submit")
    .addEventListener("click", check);

  forgetPopUp.close = close;
  forgetPopUp.check = check;

  function check() {
    document
      .querySelector(".popup__forgot .forgot__submit")
      .addEventListener("click", codePopUp);
    if (
      document
        .querySelector(".popup__forgot .popup__email input")
        .value.includes("@") &&
      document
        .querySelector(".popup__forgot .popup__email input")
        .value.includes(".") &&
      document.querySelector(".popup__forgot .popup__email input").value
        .length > 4
    ) {
      document.querySelector(".popup-login .popup__email input").style.border =
        "inherit";
      document.querySelector(".popup-login .popup__email label").style.color =
        "inherit";
      document.querySelector(".popup__forgot .forgot__submit");
    } else {
      document.querySelector(".popup__forgot .popup__email input").focus();
      document.querySelector(
        ".popup__forgot .popup__email input"
      ).style.border = "2px solid #C73D12";
      document.querySelector(".popup__forgot .popup__email label").style.color =
        "#C73D12";
      document
        .querySelector(".popup__forgot .forgot__submit")
        .removeEventListener("click", codePopUp);
    }
  }

  function close() {
    document.body.style.overflow = "initial";
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.8)";
    document.querySelector(".popup__container").style.background =
      "transparent";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "all";
    });
    document
      .querySelector(".popup__container")
      .removeEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "-1";
  }
}

function codePopUp(event) {
  event.preventDefault();

  let popup = document.querySelector(".popup__code");
  closepopups("code");

  popup.style.visibility = "visible";
  document.querySelector(".popup__container").style.background = "black";
  popup.style.filter = "opacity(1)";
  popup.style.opacity = "1";
  popup.style.transform = "translate(-50%, -50%) scale(1.05)";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    popup.style.transform = "translate(-50%, -50%) scale(1)";
  }, 200);
  setTimeout(() => {
    document
      .querySelector(".popup__container")
      .addEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "15";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "none";
    });
  });

  codePopUp.close = close;

  function close() {
    document.body.style.overflow = "initial";
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
    popup.style.transform = "translate(-50%, -50%) scale(0.8)";
    document.querySelector(".popup__container").style.background =
      "transparent";
    document.querySelectorAll(elements).forEach((e) => {
      e.style.pointerEvents = "all";
    });
    document
      .querySelector(".popup__container")
      .removeEventListener("click", close);
    document.querySelector(".popup__container").style.zIndex = "-1";
  }
}

function closepopups(popup) {
  if (signupPopUp.close && popup != "signup") signupPopUp.close();
  if (loginPopUp.close && popup != "login") loginPopUp.close();
  if (forgetPopUp.close && popup != "forget") forgetPopUp.close();
  if (codePopUp.close && popup != "code") codePopUp.close();
}

login.addEventListener("click", loginPopUp);
document
  .querySelector(".popup__login-signup")
  .addEventListener("click", signupPopUp);
document
  .querySelectorAll(".popup__login-login")
  .forEach((e) => e.addEventListener("click", loginPopUp));

document
  .querySelectorAll(".popup__close")
  .forEach((e) => e.addEventListener("click", closepopups));
document
  .querySelector(".popup__forgot .forgot__submit")
  .addEventListener("click", codePopUp);
signup.addEventListener("click", signupPopUp);
signup.addEventListener("click", signupPopUp);
document
  .querySelector(".forget__pasword-login")
  .addEventListener("click", forgetPopUp);
