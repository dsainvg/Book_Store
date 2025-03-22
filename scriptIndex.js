let Books = [];
localStorage.setItem("Books", JSON.stringify(Books));
let cart = [];
localStorage.setItem("cart", JSON.stringify(cart));

document.getElementById("theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.getElementById("theme").innerHTML = document.body.classList.contains("dark") ? "🌞" : "🌙";
});