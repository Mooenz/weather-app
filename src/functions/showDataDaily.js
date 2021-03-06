// Utils
import { MAIN_RESULT_DAILY } from '../utils/DOMElements.js';

// Functions
import { convertDate } from './convertDate.js';

const showDaily = (dailyData) => {
  try {
    MAIN_RESULT_DAILY.innerHTML = '';

    for (const property in dailyData) {
      const { dt, temp } = dailyData[property];
      const { max, min } = temp;
      const { day, dayNumber, month } = convertDate(dt);

      MAIN_RESULT_DAILY.innerHTML += `
        <div class="item">
          <p class="date"><span>${day}</span>, ${dayNumber} ${month}</p>
          <p  class="temp">${Math.round(max)}° / <span>${Math.round(
        min
      )}°</span></p>
        </div>
      `;
    }
  } catch (error) {
    console.error(`Existe un error al mostrar los datos por dias: ${error}`);
  }
};

export { showDaily };
