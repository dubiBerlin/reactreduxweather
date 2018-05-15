import API_KEY from "../secret/secret";
import axios from "axios";

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

// Der ActionCreator erstellt eine Action die ein http request durchführt und ein Action-Objekt zurück
// was den Action Type und das response objekt vom request enthält.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},de`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
