const body = document.querySelector("body");


fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Illertisen?unitGroup=metric&key=3LME86FB7QN4FEL5SN6GLAAJM&contentType=json", { mode: 'cors' })
.then(response => {
    return response.json();
})
.then(function (response){
    const div = document.createElement("div");
    div.innerHTML = `<p>${response.resolvedAddress}</p>
                     <p>${response.currentConditions.datetime}</p>
                     <p>${response.currentConditions.preciptype}</p>
                     <p>${response.currentConditions.icon}</p>
                     <p>${response.currentConditions.temp} degrees</p>
                     <p>${response.description}</p>`;
    body.appendChild(div);
    console.log(response);
});

