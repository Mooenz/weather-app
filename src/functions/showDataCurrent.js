// Utils
import { MAIN_RESULT_CURRENT } from '../utils/DOMElements.js';

// Functions
import { convertTime } from './convertTime.js';

function showCurrent({ city, current }) {
  try {
    MAIN_RESULT_CURRENT.innerHTML = `
      <article class="card">
      <div>
        <h2 class="card__title">${city.name}, ${city.country}</h2>
        <p class="card__temp">${Math.round(current.temp)}°</p>
        <p class="card__like-temp">Feels Like ${Math.round(
          current.feels_like
        )}°</p>
      </div>
      <div>
        <p><span>Sunrise </span>${convertTime(current.sunrise)}</p>
        <p><span>Sunset </span>${convertTime(current.sunset)}</p>
        <p><span>Pressure </span>${current.pressure} hPa</p>
        <p><span>Humidity </span>${current.humidity}%</p>
        <p><span>UV </span>${current.uvi}</p>
        <p><span>Wind </span>${current.wind_speed} M/h</p>
      </div>
      </article>
    `;
  } catch (error) {
    console.error(`Existe un error al mostrar los datos completos: ${error}`);
  }
}

export { showCurrent };
