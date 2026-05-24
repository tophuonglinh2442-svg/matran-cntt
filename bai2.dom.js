var btnthaydoi = document.getElementById("nd");
var btnkhoiphuc = document.getElementById("bd");
var theimg = document.getElementById("anh");
var tieude = document.getElementById("de");
var noidung = document.getElementById("noi");
btnthaydoi.addEventListener("click", function () {
  tieude.innerText = "Nội dung tiêu đề đã thay đổi";
  tieude.style.color = "red";
  noidung.innerText = "Hình ảnh và màu sắc chữ đã thay đổi";
  noidung.style.color = "blue";
  theimg.src = "khoi.jpg";
});
btnkhoiphuc.addEventListener("click", function () {
  tieude.innerText = "TRANG NỘI DUNG BAN ĐẦU";
  noidung.innerText = "Chào mừng đến với HTML DOM";
  theimg.src = "okdi.jpg";
});
