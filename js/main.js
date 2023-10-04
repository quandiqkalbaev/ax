import { Viewer } from "@photo-sphere-viewer/core";

let modal = document.querySelector(".modal__wrapper");
let closeBtn = document.querySelector(".modal__close");
let modals = document.querySelectorAll(".modal__item");
let viewer;

modals.forEach((e, index) => {
  e.addEventListener("click", function () {
    modal.style.display = "block";

    if (viewer) {
      viewer.destroy();
    }

    viewer = new Viewer({
      container: "viewer",
      panorama: `../images/${index + 1}.jpg`,
      mousewheelCtrlKey: true,
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
