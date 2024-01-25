import "./scss/style.scss";
import eventCarousel from "./modules/carousel";

const dropdowns = document.querySelectorAll(".dropdown");

const onClickOutside = (element, callback) => {
  document.addEventListener("click", (e) => {
    if (!element.contains(e.target)) callback();
  });
};

dropdowns.forEach((dropdown) => {
  const dropdownContent = dropdown.querySelector(".dropdown-content");

  dropdown.addEventListener("click", (e) => {
    const targetElement = e.target;

    if (targetElement.tagName.toLowerCase() === "button") {
      dropdownContent.classList.add("show");
    }
  });

  onClickOutside(dropdown, () => {
    dropdownContent.classList.remove("show");
  });
});

eventCarousel();
