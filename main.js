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

// Navbar
const header = document.querySelector(".header");
const navbar = document.querySelector(".header__nav_wrapper");
var scrollableElement = document.body; //document.getElementById('scrollableElement');

scrollableElement.addEventListener("wheel", checkScrollDirection);

function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event) && window.scrollY > header.clientHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}

scrollableElement.addEventListener("keydown", function (e) {
  if (e.keyCode == 38) {
    // up arrow
    if (window.scrollY > header.clientHeight) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});

scrollableElement.addEventListener("keydown", function (e) {
  if (e.keyCode == 40) {
    // down arrow
    navbar.classList.remove("sticky");
  }
});

var lastScrollTop = 0;

// Menu button for small screen < 700px
const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector("body");
const headerNavLinks = document.querySelectorAll(".header__nav--link");

menuBtn.addEventListener("click", function (e) {
  toggleVisible(headerNav, body, menuBtn);
});

headerNavLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    toggleVisible(headerNav, body, menuBtn);
  })
);

body.addEventListener("click", (e) => {
  if (e.target.classList.contains("visible")) {
    toggleVisible(headerNav, body, menuBtn);
  }
});

const toggleVisible = function (headerNav, body, menuBtn) {
  headerNav.classList.toggle("visible");
  body.classList.toggle("visible");
  menuBtn.classList.toggle("active");
};

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop || st < header.clientHeight) {
      navbar.classList.remove("sticky");
    } else if (st < lastScrollTop) {
      navbar.classList.add("sticky");
    } // else was horizontal scroll
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);

// Work section screensize < 800px
const workProjectDetailsDivs = document.querySelectorAll(
  ".work__project__details"
);
const workProjectDetailsTitle = document.querySelectorAll(
  ".work__project__details--title"
);

if (window.innerWidth < 800) {
  workProjectDetailsDivs.forEach((div, index) =>
    div.addEventListener("click", (e) => {
      if (e.target.tagName !== "svg") {
        window.open(workProjectDetailsTitle[index]);
      }
    })
  );
}

// Reload the page
const logo = document.querySelector(".brand");

logo.addEventListener("click", function (e) {
  window.location.reload();
});
