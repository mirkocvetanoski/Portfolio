// Demo reload page
const logo = document.querySelector(".header__logo--text");
logo.addEventListener("click", (e) => {
  window.location.reload();
});

// Otherwork divs links fixing
const otherworkProjectDivs = document.querySelectorAll(".otherwork__project");
const svgIcon = document.querySelectorAll(".otherwork__project--icons");

otherworkProjectDivs.forEach((div, i) => {
  svgIcon.forEach((icon, j) => {
    if (i === j) {
      div.addEventListener("click", (e) => {
        if (e.target !== div.children[0].children[1].children[0]) {
          window.open(`${icon.children[2].href}`, "_blank");
        }
      });
    }
  });
});

// Show more btn
const showMoreBtn = document.querySelector(".otherwork__projects--btn");
const lastThreeDivs = document.querySelectorAll(
  ".otherwork__project:nth-last-child(-n + 3)"
);

showMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (showMoreBtn.textContent === "Show More") {
    lastThreeDivs.forEach((div, index) => {
      setTimeout(function () {
        div.style.display = "flex";
      }, parseInt(`${index}00`) + 50);
    });
    showMoreBtn.textContent = "Show Less";
  } else {
    lastThreeDivs.forEach((div) => {
      div.style.display = "none";
    });
    showMoreBtn.textContent = "Show More";
  }
});
