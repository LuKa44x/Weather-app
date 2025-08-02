//Api Manager
import { createTable } from "./domManager.js";

export function getWeatherData(){
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Illertisen?unitGroup=metric&key=3LME86FB7QN4FEL5SN6GLAAJM&contentType=json", { mode: 'cors' })
.then(response => {
    return response.json();
})
.then(function (response){
    createTable(response.days);
    console.log(response);
});
}