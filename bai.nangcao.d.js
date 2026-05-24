var down = document.getElementById("giam");
var up = document.getElementById("tang");
var number = document.getElementById("num");
var price = document.querySelector(".gia");
var price2 = document.querySelector(".gia2");

var a = 15000;

let current = Number(number.innerHTML);

down.addEventListener("click", function () {
  let current = Number(number.innerHTML);
  if (current > 0) {
    number.innerHTML = current - 1;

    price.innerHTML = `${Number(number.innerHTML) * a}`;
    price2.innerHTML = `${Number(number.innerHTML) * a}`;
  } else {
    price.innerHTML = "nhập lại";
    price2.innerHTML = "nhập lại";
  }
  down.style.backgroundColor = "red";
});
up.addEventListener("click", function () {
  number.innerHTML = Number(number.innerHTML) + 1;
  price.innerHTML = `${number.innerHTML * a}`;
  price2.innerHTML = `${number.innerHTML * a}`;
  up.style.backgroundColor = "green";
});

var d = document.getElementById("g");
var u = document.getElementById("t");
var num = document.getElementById("n");
var p = document.querySelector(".pr");
var p2 = document.querySelector(".pr2");

var b = 10000;
let curr = Number(n.innerHTML);

d.addEventListener("click", function () {
  let curr = Number(n.innerHTML);
  if (curr > 0) {
    n.innerHTML = curr - 1;

    p.innerHTML = `${Number(n.innerHTML) * b}`;
    p2.innerHTML = `${Number(n.innerHTML) * b}`;
  } else {
    p.innerHTML = "nhập lại";
    p2.innerHTML = "nhập lại";
  }
  d.style.backgroundColor = "red";
});
u.addEventListener("click", function () {
  n.innerHTML = Number(n.innerHTML) + 1;
  p.innerHTML = `${n.innerHTML * b}`;
  p2.innerHTML = `${n.innerHTML * b}`;
  u.style.backgroundColor = "green";
});

var total = document.getElementById("tong");
total.addEventListener("click", function () {
  total.innerHTML = `${number.innerHTML * a + n.innerHTML * b}`;
  total.style.color = "red";
});
