(function () {
  console.log("hola");
  let navbar = document.querySelector("#navbar");
  let main = document.querySelector("main");
  let navbarHeight = navbar.getBoundingClientRect().height;
  let breakpoint = main.offsetTop - navbarHeight;
  console.log(breakpoint);

  let windowPosition;
  let isFixed = false;
  function updatePosition() {
    windowPosition = window.scrollY;
  }

  function onScroll() {
    updatePosition();

    if (windowPosition >= breakpoint && !isFixed) {
      navbar.classList.remove("open");

      navbar.classList.add("navbar-fixed");
      main.style.cssText = "margin-top: " + navbarHeight + "px;";
      isFixed = true;
    } else if (windowPosition < breakpoint && isFixed) {
      navbar.classList.remove("navbar-fixed");
      main.style.cssText = "margin-top: " + 0;
      isFixed = false;
    }
  }

  document.addEventListener("scroll", onScroll);
})();
