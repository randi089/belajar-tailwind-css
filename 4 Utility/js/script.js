const checkbox = document.getElementById("toggle");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
