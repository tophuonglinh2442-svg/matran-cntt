var down = document.getElementById("giam");
var up = document.getElementById("tang");
var number = document.getElementById("num");
var price = document.getElementById("gia");
var a = 20000;
let current = Number(number.innerHTML);

down.addEventListener("click", function () {
  let current = Number(number.innerHTML);
  if (current > 0) {
    number.innerHTML = current - 1;

    price.innerHTML = `${Number(number.innerHTML) * a}`;
  } else {
    price.innerHTML = "nhập lại";
  }
});
up.addEventListener("click", function () {
  number.innerHTML = Number(number.innerHTML) + 1;
  price.innerHTML = `${number.innerHTML * a}`;
});
