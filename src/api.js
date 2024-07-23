import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "944ab30d70606f95ac97b313820ed074",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = () => {
  const lat = "35.15748237986217";
  const lon = "129.06009747301636";
  return instance.get(`weather?lat=${lat}&lon=${lon}`).then((res) => res.data);
};
// get = 노출되도 되는 것 , post = 노출 안되야 하는것
