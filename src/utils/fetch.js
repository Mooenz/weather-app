const URL_MAIN_CITY = 'https://api.openweathermap.org/data/2.5/weather?q=';
const URL_MAIN_COORDINATE = 'https://api.openweathermap.org/data/2.5/onecall?';
const KEY = '2f81942faa2d0ec2be12e9588c65121d';

const URL_CITY = (city) => `${URL_MAIN_CITY}${city}&units=metric&appid=${KEY}`;

const URL_COORDINATE = (latitude, longitude) =>
  `${URL_MAIN_COORDINATE}lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${KEY}`;

const showError = (error) => console.error(`This is error: ${error}`);

async function fetchSearchCity(city) {
  try {
    const RESPONSE = await fetch(URL_CITY(city));
    const RESPONSE_JSON = await RESPONSE.json();

    return RESPONSE_JSON;
  } catch (error) {
    showError(error);
  }
}

async function fetchSearchCoordinate(latitude, longitude) {
  try {
    const RESPONSE = await fetch(URL_COORDINATE(latitude, longitude));
    const RESPONSE_JSON = await RESPONSE.json();

    return RESPONSE_JSON;
  } catch (error) {
    showError(error);
  }
}

export { fetchSearchCity, fetchSearchCoordinate };
