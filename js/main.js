
import { Viewer } from "@photo-sphere-viewer/core";


let modal = document.querySelector(".modal__wrapper"),
  closeBtn = document.querySelector(".modal__close"),
  modals = document.querySelectorAll(".modal__item"),
  viewer;

modals.forEach((e, index) => {
  e.addEventListener("click", function () {
    modal.style.display = "block";

    if (viewer) {
      viewer.destroy();
    }

    viewer = new Viewer({
      container: "viewer",
      panorama: `../images/${index + 1}.webp`,
      mousewheelCtrlKey: true,
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

let popup = document.querySelector(".popup__wrapper"),
  openPoP = document.querySelector(".popup__btn"),
  closePoP = document.querySelector(".popup__close");

openPoP.addEventListener("click", function () {
  popup.style.display = "block";
});
closePoP.addEventListener("click", function () {
  popup.style.display = "none";
});
