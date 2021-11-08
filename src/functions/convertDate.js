// Utils
import convertToDays from '../utils/convertToDays.js';
import convertToMonth from '../utils/convertToMonth.js';

const convertDate = (timeStamp) => {
  const date = new Date(timeStamp * 1000);

  const day = date.getDay();
  const dayNumber = date.getDate();
  const month = date.getMonth();

  const dayConvert = convertToDays(day);
  const monthConvert = convertToMonth(month);

  return {
    day: dayConvert.getDay(),
    dayNumber: dayNumber,
    month: monthConvert.getMonth(),
  };
};
export { convertDate };
