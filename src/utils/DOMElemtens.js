// Select element
const INPUT_SEARCH = document.querySelector('.input');
const ICON_SEARCH = document.querySelector('.icon');
const MAIN_HISTORY_CONTAINER = document.querySelector(
  '.main__history-container'
);
const MAIN_RESULT = document.querySelector('.main__result-content');
const MAIN_RESULT_HOURLY = document.querySelector('.main__result-hourly-content');
const MAIN_RESULT_DAILY = document.querySelector('.main__result-daily-content');

// Create element
const RESULT = document.createElement('div');

export {
  INPUT_SEARCH,
  ICON_SEARCH,
  MAIN_RESULT,
  MAIN_HISTORY_CONTAINER,
  RESULT,
  MAIN_RESULT_HOURLY,
  MAIN_RESULT_DAILY,
};
