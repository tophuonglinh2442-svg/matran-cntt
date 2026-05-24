let kg = Number(prompt("Cân nặng là"));
let cc = Number(prompt("Chiều cao là"));
let bmi = parseFloat(kg / ((cc / 100) * (cc / 100)));
console.log(`bmi la` + bmi);
if (bmi < 15) {
  console.log("thân hình quá gầy");
} else if (bmi >= 15 && bmi < 16) {
  console.log("thân hình gầy");
} else if (bmi >= 15 && bmi < 16) {
  console.log("thân hình gầy");
} else if (bmi >= 16 && bmi < 18.5) {
  console.log("thân hình hơi gầy");
} else if (bmi >= 18.5 && bmi < 25) {
  console.log("thân hình bình thường");
} else if (bmi >= 25 && bmi < 30) {
  console.log("thân hình hơi béo");
} else {
  console.log("thân hình quá béo");
}
