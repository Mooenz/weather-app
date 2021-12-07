const $ = (selector) => document.querySelector(selector);
// Select element
const INPUT_SEARCH = $('.input');
const ICON_SEARCH = $('.icon');
const MAIN_HISTORY_CONTAINER = $('.main__history-container');
const MAIN_RESULT_CURRENT = $('.main__result-current');
const MAIN_RESULT_HOURLY = $('.main__result-hourly-content');
const MAIN_RESULT_DAILY = $('.main__result-daily-content');
const MAIN_SEARCH_CONTAINER = $('.main__search-container');
const MAIN_SEARCH = $('.main__search');

export {
  INPUT_SEARCH,
  ICON_SEARCH,
  MAIN_RESULT_CURRENT,
  MAIN_HISTORY_CONTAINER,
  MAIN_RESULT_HOURLY,
  MAIN_RESULT_DAILY,
  MAIN_SEARCH_CONTAINER,
  MAIN_SEARCH,
};
