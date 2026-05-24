var off = document.getElementById("tat");
var on = document.getElementById("bat");
var den = document.getElementById("light");
off.addEventListener("click", function () {
  den.innerHTML = '<i class="bi bi-lightbulb"></i>';
  den.style.color = "white";
});
on.addEventListener("click", function () {
  den.innerHTML = '<i class="bi bi-lightbulb-fill"></i>';
  den.style.color = "yellow";
});
