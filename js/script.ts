const bmiResult = document.querySelector(`.result`) as HTMLTextAreaElement;
const weight = document.querySelector(`.weight-field`) as HTMLInputElement;
const height = document.querySelector(`.height-field`) as HTMLInputElement;
const calcBtn = document.querySelector(`.calculate-btn`) as HTMLButtonElement;
const rangeBtn = document.querySelector(`.range-btn`) as HTMLButtonElement;
const closeBtn = document.querySelector(`.close`) as HTMLButtonElement;
const bmiLevel = document.querySelector(`.bmi-level`) as HTMLDivElement;
const bmiMain = document.querySelector(`.bmi-main`) as HTMLDivElement;
const bmiScale = document.querySelector(`.scale`) as HTMLDivElement;
const arrowIcon = document.querySelector(`.arrow-icon`) as HTMLPictureElement;
const rangeInfo = document.querySelector(`.range-info`) as HTMLDivElement;

(() => {
  bmiScale.classList.add(`hidden`);
})();
const caclBMI = function (weight: number, height: number) {
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
