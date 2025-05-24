const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const category = document.querySelector("#category");

  let bmi;

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please provide the Valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please provide the Valid weight";
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }

  if (bmi < 18.6) {
    category.innerHTML = "Under Weight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category.innerHTML = "Normal Range";
  } else {
    category.innerHTML = "Over Weight";
  }
});
