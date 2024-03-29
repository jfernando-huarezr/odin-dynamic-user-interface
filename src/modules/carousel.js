/* eslint-disable no-plusplus */
export default function eventCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselPictures = document.querySelectorAll(".carousel-picture");
  const carouselControl = carousel.querySelector(".carousel-control");

  carouselPictures.forEach((element, index) => {
    const control = document.createElement("div");
    control.classList.add("carousel-control__item");

    if (index === 0) control.classList.add("selected");
    carouselControl.appendChild(control);
  });

  const carouselControlItems = carouselControl.querySelectorAll(
    ".carousel-control__item"
  );

  function advancePicture() {
    let autoAdvance = Array.from(carouselPictures).findIndex((picture) =>
      picture.classList.contains("current-picture")
    );
    // Remove the 'current-picture' class from the current picture
    carouselPictures[autoAdvance].classList.remove("current-picture");
    carouselControlItems[autoAdvance].classList.remove("selected");

    // Calculate the next picture index
    autoAdvance = (autoAdvance + 1) % carouselPictures.length;

    // Add the 'current-picture' class to the next picture
    carouselPictures[autoAdvance].classList.add("current-picture");
    carouselControlItems[autoAdvance].classList.add("selected");
  }

  // Set the interval to advance the picture every 3 seconds (3000 milliseconds)
  let timer = setInterval(advancePicture, 3000);

  carousel.addEventListener("click", (e) => {
    const targetElement = e.target;

    if (targetElement.tagName.toLowerCase() === "button") {
      clearInterval(timer);

      const currentPictureIndex = Array.from(carouselPictures).findIndex(
        (picture) => picture.classList.contains("current-picture")
      );
      carouselPictures[currentPictureIndex].classList.remove("current-picture");
      carouselControlItems[currentPictureIndex].classList.remove("selected");
      let nextPictureIndex = 0;

      if (targetElement.classList.contains("advance")) {
        nextPictureIndex = (currentPictureIndex + 1) % carouselPictures.length;
      } else {
        nextPictureIndex =
          (currentPictureIndex - 1 + carouselPictures.length) %
          carouselPictures.length;
      }
      carouselPictures[nextPictureIndex].classList.add("current-picture");
      carouselControlItems[nextPictureIndex].classList.add("selected");

      timer = setInterval(advancePicture, 3000);
    }

    if (targetElement.classList.contains("carousel-control__item")) {
      clearInterval(timer);

      const clickedElementIndex =
        Array.from(carouselControlItems).indexOf(targetElement);
      console.log(clickedElementIndex);

      carousel
        .querySelector(".current-picture")
        .classList.remove("current-picture");
      carousel.querySelector(".selected").classList.remove("selected");

      carouselPictures[clickedElementIndex].classList.add("current-picture");
      carouselControlItems[clickedElementIndex].classList.add("selected");

      timer = setInterval(advancePicture, 3000);
    }
  });

  function setHeightFrame() {
    const frame = document.querySelector(".carousel-frame");
    const pictures = document.querySelectorAll(".carousel-picture");
    let maxHeight = 0;

    for (let i = 0; i < pictures.length; i++) {
      const pictureHeight = pictures[i].offsetHeight;
      maxHeight = Math.max(maxHeight, pictureHeight);
    }

    frame.style.height = `${maxHeight}px`;
  }

  window.addEventListener("resize", setHeightFrame);

  window.addEventListener("load", setHeightFrame);
}
