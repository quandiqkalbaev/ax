import { Viewer } from "@photo-sphere-viewer/core";

let modal = document.querySelector(".modal__wrapper");
let closeBtn = document.querySelector(".modal__close");
let modalOpen = document.querySelector(".modal__item");

modalOpen.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

const viewer = new Viewer({
  container: "viewer",
  panorama: "../images/4.jpg",
  mousewheelCtrlKey: true,
});
