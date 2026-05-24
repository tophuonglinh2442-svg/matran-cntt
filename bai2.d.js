var nam = document.getElementById("ten");
var mail = document.getElementById("ma");
var pass = document.getElementById("mat");
var num = document.getElementById("so");
var send = document.getElementById("gui");
var ta = document.getElementById("bang");
send.addEventListener("click", function () {
  ta.innerHTML += `
  <tr>
  <td>Họ tên</td>
  <td>Email</td>
  <td>Mật khẩu</td>
  <td>Số điện thoại</td>
    <tr>
      <td>${nam.value}</td>
      <td>${mail.value}</td>
      <td>${pass.value}</td>
      <td>${num.value}</td>
    </tr>
  `;
  nam.value = "";
  mail.value = "";
  pass.value = "";
  num.value = "";
});
