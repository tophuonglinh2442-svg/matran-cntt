var year = parseInt(prompt("Nhập vào năm:"));

var nhuan = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
if (nhuan) {
  document.write("Là năm nhuận");
} else {
  document.write("Năm không nhuận");
}
