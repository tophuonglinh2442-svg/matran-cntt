var number = document.getElementById("num");
var down = document.getElementById("giam");
var lai = document.getElementById("mo");
var up = document.getElementById("tang");
down.addEventListener("click", function () {
  number.innerHTML = Number(number.innerHTML) - 1;
  number.style.color = "red";
  down.style.backgroundColor = "red";
  down.style.borderRadius = "20px";
});
lai.addEventListener("click", function () {
  number.innerHTML = "0";
  number.style.color = "black";
  lai.style.color = "white";
  lai.style.backgroundColor = "black";
  lai.style.borderRadius = "20px";
});
up.addEventListener("click", function () {
  number.innerHTML = Number(number.innerHTML) + 1;
  number.style.color = "green";
  up.style.backgroundColor = "green";
  up.style.borderRadius = "20px";
});
