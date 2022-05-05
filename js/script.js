`use strict`;
// consts
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
// ######################################################
// functions
const calcBMI = function (height, weight) {
  return weight / (height / 100) ** 2;
};
const removeRange = function () {
  rangeInfo.style.display = `none`;
  bmiMain.classList.remove(`filter`);
};
// class manipulation
bmiScale.classList.add(`hidden`);
// ######################################################
// event listener(calculate bmi)
calcBtn.addEventListener(`click`, function () {
  if (weight.value && height.value) {
    const BMI = calcBMI(height.value, weight.value);
    const bmiRound = Math.round(10 * BMI) / 10;
    bmiResult.textContent = bmiRound;
    bmiScale.classList.remove(`hidden`);
    if (bmiRound <= 96.5) {
      bmiLevel.style.left = `${bmiRound}%`;
    } else {
      bmiLevel.style.left = `96.5%`;
    }
  } else {
    bmiResult.textContent = `Empty`;
  }
});
// ######################################################
// event listener(open range window)
rangeBtn.addEventListener(`click`, function () {
  rangeInfo.style.display = `flex`;
  bmiMain.classList.add(`filter`);
});
// ######################################################
// event listener(close range window)
closeBtn.addEventListener(`click`, function () {
  removeRange();
});
// ######################################################
// event listener(close range window on keypress(esc))
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape`) {
    removeRange();
  }
});
// ######################################################
