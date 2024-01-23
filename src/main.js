import "./scss/style.scss";

const navbar = document.querySelector("nav");

navbar.addEventListener("click", (e) => {
  const targetElement = e.target;

  if (targetElement.tagName.toLowerCase() === "button") {
    if (document.querySelector("button.clicked")) {
      document.querySelector("button.clicked").classList.remove("clicked");
    }
    targetElement.classList.add("clicked");

    if (document.querySelector(".dropdown-content.show")) {
      document.querySelector(".dropdown-content.show").classList.remove("show");
    }

    const dropdownContainer = targetElement.parentElement;
    const dropdownContent =
      dropdownContainer.querySelector(".dropdown-content");
    dropdownContent.classList.add("show");
  }
});

// hide dropdowns when clicked outside
document.querySelector("body").addEventListener("click", (e) => {
  const targetElement = e.target;

  console.log(targetElement);

  if (targetElement.classList.contains("clicked")) {
    return;
  }

  if (targetElement.parentElement.classList.contains("dropdown-content")) {
    return;
  }

  if (document.querySelector(".dropdown-content.show")) {
    document.querySelector(".dropdown-content.show").classList.remove("show");
  }

  if (document.querySelector("button.clicked")) {
    document.querySelector("button.clicked").classList.remove("clicked");
  }
});
