var month = Number(prompt("nhập tháng"));
document.write("var thang" + month);
switch (month) {
  case 1:
  case 2:
  case 3:
    document.write("thang" + month + "thuoc quy 1");
    break;
  case 4:
  case 5:
  case 6:
    document.write("thang" + month + "thuoc quy 2");
    break;
  case 7:
  case 8:
  case 9:
    document.write("thang" + month + "thuoc quy 3");
    break;
  case 10:
  case 11:
  case 12:
    document.write("thang" + month + "thuoc quy 4");
    break;
  default:
    document.write("thang k hop le!");
}
