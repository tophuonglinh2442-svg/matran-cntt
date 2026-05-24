const btn = document.getElementById("gui");
const tbody = document.getElementById("studentTableBody");
const emptyBox = document.querySelector(".d");

let studentList = [];

function renderTable(list) {
  tbody.innerHTML = "";

  if (list.length === 0) {
    emptyBox.style.display = "block";
    return;
  }

  emptyBox.style.display = "none";

  list.forEach((student) => {
    const tong =
      Number(student.html) + Number(student.js) + Number(student.bootstrap);

    let soKyNangLon7 = 0;

    if (student.html > 7) soKyNangLon7++;
    if (student.js > 7) soKyNangLon7++;
    if (student.bootstrap > 7) soKyNangLon7++;

    let danhGia = "";

    if (tong > 15) {
      danhGia = "Hồ sơ năng lực rất ấn tượng";
    } else {
      danhGia = "Cần cải thiện";
    }

    tbody.innerHTML += `
      <tr>
        <td>${student.ma}</td>
        <td>${student.ten}</td>
        <td class="text-center">${student.html}</td>
        <td class="text-center">${student.js}</td>
        <td class="text-center">${student.bootstrap}</td>
        <td class="text-center fw-bold">${tong}</td>
        <td class="text-center">${soKyNangLon7}</td>
        <td class="text-center">${danhGia}</td>
      </tr>
    `;
  });
}

function addStudent(newStudent, list) {
  const lastNumber = Number(newStudent.ma.slice(-1));

  if (lastNumber % 2 !== 0) {
    list.unshift(newStudent);
  } else {
    list.push(newStudent);
  }

  renderTable(list);
}
btn.addEventListener("click", function () {
  const ma = document.getElementById("ma").value.trim();
  const ten = document.getElementById("na").value.trim();
  const html = Number(document.getElementById("ht").value);
  const js = Number(document.getElementById("j").value);
  const bootstrap = Number(document.getElementById("b").value);
  if (!ma || !ten || !html || !js || !bootstrap) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const newStudent = {
    ma: ma,
    ten: ten,
    html: html,
    js: js,
    bootstrap: bootstrap,
  };

  addStudent(newStudent, studentList);
  document.getElementById("ma").value = "";
  document.getElementById("na").value = "";
  document.getElementById("ht").value = "";
  document.getElementById("j").value = "";
  document.getElementById("b").value = "";
});
