"use strict";

// preloader
const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();
