var nam = document.getElementById("ten");
var mail = document.getElementById("ma");
var num = document.getElementById("so");
var diachi = document.getElementById("dia");
var send = document.getElementById("gui");
var ta = document.getElementById("bang");
var date = document.getElementById("sinh");
var sex = document.getElementById("se");
var msv = document.getElementById("msv");
send.addEventListener("click", function () {
  let lastNumber = parseInt(msv.value.charAt(msv.value.length - 1));

  let row = `
    <tr>
      <td>${nam.value}</td>
      <td>${date.value}</td>
      <td>${sex.value}</td>
      <td>${num.value}</td>
      <td>${mail.value}</td>
      <td>${diachi.value}</td>
      <td>${msv.value}</td>
    </tr>
  `;

  if (lastNumber % 2 !== 0) {
    ta.innerHTML = row + ta.innerHTML;
  } else {
    ta.innerHTML += row;
  }

  nam.value = "";
  mail.value = "";
  num.value = "";
  date.value = "";
  diachi.value = "";
  sex.value = "";
  msv.value = "";
});
