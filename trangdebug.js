var bug1 = document.getElementById("debug1");
var bug2 = document.getElementById("debug2");
var l = document.getElementById("loi");
var s = document.getElementById("sua");
l.addEventListener("click", function () {
  bug1.innerHTML = `<h2>Lỗi</h2>
      <br />
      function addCourse(newCourse, list) { <br />
      if (mssv % 2 !== 0) { <br />
      <span style="color:red"
        >list.push(newCourse);</span> //Vì msv lẻ phải chèn bản ghi vào đầu
        bảng-unshift chứ không phải cuối bảng-push
      
      <br />
      } else { <br />
      <span style="color:red"
        >list.unshift(newCourse);</span
      > //Vì msv chẵn phải chèn bản ghi vào cuối
        bảng-push chứ không phải đầu bảng-unshift
      <br />
      } <br />
      renderTable(list); <br />
      } <br />`;
  bug2.src = "saiai.jpg";
  bug2.style.position = "relative";
  bug2.style.top = "70px";
  l.style.backgroundColor = "red";
});
s.addEventListener("click", function () {
  bug1.innerHTML = ` <h2>Code đã sửa</h2>
      <br />
      function addCourse(newCourse, list) { <br />
      if (mssv % 2 !== 0) { <br />
      list.unshift(newCourse); <br />
      } else { <br />
      list.push(newCourse); <br />
      } <br />
      renderTable(list); <br />
      } <br />
       `;
  bug2.src = "dung.jpg";
  bug2.style.position = "relative";
  bug2.style.top = "70px";
  s.style.backgroundColor = "green";
});
