var a = document.getElementById("soa"); // để lấy thẻ HTML theo id = soa
var b = document.getElementById("sob");
var btncong = document.getElementById("cong");
var btntru = document.getElementById("tru");
var btnnhan = document.getElementById("nhan");
var btnchia = document.getElementById("chia");
var btnmu = document.getElementById("mu");
var btnbinh = document.getElementById("binh");
var ketqua = document.getElementById("kq");

btncong.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} + ${so_b} = ${so_a + so_b}`;
});
btntru.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} - ${so_b} = ${so_a - so_b}`;
});
btnnhan.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} * ${so_b} = ${so_a * so_b}`;
});
btnchia.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} / ${so_b} = ${so_a / so_b}`;
});
btnbinh.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} ^ 2 = ${so_a ** 2}`;
  ketqua.innerText = `${so_b} ^ 2 = ${so_b ** 2}`;
});
btnmu.addEventListener("click", function () {
  var so_a = Number(a.value);
  var so_b = Number(b.value);
  ketqua.innerText = `${so_a} ^ ${so_b} = ${Math.pow(so_a, so_b)}`;
});
