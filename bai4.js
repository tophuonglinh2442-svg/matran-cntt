var year = parseInt(prompt("Nhập vào năm:"));
var month = parseInt(prompt("Nhập vào tháng:"));

var nhuan = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
if (nhuan) {
  console.log("Là năm nhuận");
} else {
  console.log("Năm không nhuận");
}
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Tháng " + month + " năm " + year + " có 31 ngày.");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tháng " + month + " năm " + year + " có 30 ngày.");
    break;

  case 2:
    if (nhuan) {
      console.log("Tháng 2 năm " + year + " có 29 ngày .");
    } else {
      console.log("Tháng 2 năm " + year + " có 28 ngày.");
    }
    break;

  default:
    console.log("Tháng nhập vào không hợp lệ!");
}
