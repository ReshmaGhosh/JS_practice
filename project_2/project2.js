const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  //   const results = document.querySelector("#results").value;

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let bmiMsg = "";

    if (bmi < 18.5) {
      bmiMessage = "You are underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiMessage = "Your weight is normal";
    } else if (bmi > 24.9) {
      bmiMessage = "You are overweight";
    }

    results.innerHTML = `Your BMI is: <span>${bmi}</span><br><span>${bmiMessage}</span>`;
  }
});
