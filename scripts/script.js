import { getWeatherData } from "./src/api.js";

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", () => {
    getWeatherData();
})






