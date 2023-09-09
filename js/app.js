let PUT = document.getElementById("PUT");
let VIEW = document.getElementById("VIEW");
let svg = document.getElementById("svg");

PUT.addEventListener("click", function () {
  VIEW.style.marginTop = "-100vh";
});

svg.addEventListener("click", function () {
  VIEW.style.marginTop = "0vh";
});
