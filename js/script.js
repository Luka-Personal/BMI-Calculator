const bmiResult = document.querySelector(`.result`);
const weight = document.querySelector(`.weight-field`);
const height = document.querySelector(`.height-field`);
const calcBtn = document.querySelector(`.calculate-btn`);
const rangeBtn = document.querySelector(`.range-btn`);
const closeBtn = document.querySelector(`.close`);
const bmiLevel = document.querySelector(`.bmi-level`);
const bmiMain = document.querySelector(`.bmi-main`);
const bmiScale = document.querySelector(`.scale`);
const arrowIcon = document.querySelector(`.arrow-icon`);
const rangeInfo = document.querySelector(`.range-info`);
(() => {
  bmiScale.classList.add(`hidden`);
})();
const caclBMI = function (weight, height) {
  return weight / (height / 100) ** 2;
};
const removeRange = function () {
  rangeInfo.style.display = `none`;
  bmiMain.classList.remove(`filter`);
};
const calcFunction = function () {
  if (!weight.value || !height.value) return;
  const BMI = Math.round(caclBMI(+weight.value, +height.value));
  bmiResult.textContent = BMI.toString();
  bmiScale.classList.remove(`hidden`);
  BMI <= 100 ? (bmiLevel.style.left = `${BMI}%`) : (bmiLevel.style.left = `100%`);
};
calcBtn.addEventListener(`click`, calcFunction);
rangeBtn.addEventListener(`click`, function () {
  rangeInfo.style.display = `flex`;
  bmiMain.classList.add(`filter`);
});
closeBtn.addEventListener(`click`, removeRange);
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) removeRange();
});
