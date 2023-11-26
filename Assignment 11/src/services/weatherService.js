import { DateTime } from "luxon";

const API_KEY = "55e02cb68bdf2b48e2406d831e6634ed";
const BASE_URL = "https://api.openweathermap.org/data/2.5";
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=55e02cb68bdf2b48e2406d831e6634ed
// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  console.log(data);
  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

// const formatForecastWeather = (data) => {
//   let { list } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

const formatForecastWeather = (data) => {
  let { city, list } = data;
  console.log(list);
  const formattedForecast = list.slice(0, 40).map((item) => {
    console.log(item.dt, city.timezone);
    return {
      title: formatToLocalTime(item.dt, city.timezone, "hh:mm a"),
      dt:item.dt_txt,
      temp: item.main.temp,
      icon: item.weather[0].icon,
      
    };
  });

  return { timezone: city.timezone, forecast: formattedForecast };
};


const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  
    const formattedactualCurrentWeather = await getWeatherData(
      "weather",{lat,lon,units: searchParams.units,
      
      }).then(formatCurrentWeather); 

  const formattedForecastWeather = await getWeatherData("forecast", {
    lat,lon,units: searchParams.units,
  }).then(formatForecastWeather);

  return { ...formattedactualCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
)=>DateTime.fromSeconds(secs, { zone: zone }).toFormat(format);
const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
