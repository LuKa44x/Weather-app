//Api Manager
import { createTable } from "./domManager.js";

export async function getWeatherData() {
    const city = document.querySelector('#city').value;
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=3LME86FB7QN4FEL5SN6GLAAJM&contentType=json`);
        const data = await response.json();
        createTable(data.days);
        console.log(data);
    } catch (err) {
        alert("Fetch error: ", err);
    }
}