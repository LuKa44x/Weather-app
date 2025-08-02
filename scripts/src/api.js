//Api Manager
import { createTable } from "./domManager.js";

export async function getWeatherData() {
    try {
        const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Illerstisen?unitGroup=metric&key=3LME86FB7QN4FEL5SN6GLAAJM&contentType=json");
        const data = await response.json();
        createTable(data.days);
        console.log(data);
    } catch (err) {
        alert("Fetch error: ", err);
    }
}