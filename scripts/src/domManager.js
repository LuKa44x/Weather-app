//DOM Manager

export function createTable(data){
    const table = document.createElement("table");

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Precipitation</th>
          <th>Temperature</th>
          <th>Temperature Min</th>
          <th>Temperature Max</th>
          <th>Sunrise</th>
          <th>Sunset</th>
          <th>Hours</th>
        </tr>
      `;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
        data.forEach(days => {
           const row = document.createElement("tr"); 
           row.innerHTML = `
           <td>${days.datetime}</td>
           <td>${days.description}</td>
           <td>${days.precipprob} ( ${days.preciptype} )</td>
           <td>${days.temp}</td>
           <td>${days.tempmin}</td>
           <td>${days.tempmax}</td>
           <td>${days.sunrise}</td>
           <td>${days.sunset}</td>
           <td><button class="hourInfo" id="${days.datetime}">See Hour Info</button></td>`;
           tbody.appendChild(row);
        });
        table.appendChild(tbody);
        document.querySelector("body").appendChild(table);


showHourInfo(data);
    //watch a day in details based on hours

    
}
function showHourInfo(data){
  const table = document.querySelector("table");
    const hourBtn = document.querySelectorAll(".hourInfo");
    


    hourBtn.forEach( (e)=>{

    
    e.addEventListener("click", ()=>{
      const idBtn = e.id;
        table.innerHTML = "";

        const thead = document.createElement("thead");
        thead.innerHTML = `
            <tr>
              <th>Hours</th>
              <th>Condition</th>
              <th>Precipitation</th>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Snow</th>
              <th>Wind</th>
              <th>Cloud Cover</th>
            </tr>
          `;
          table.appendChild(thead);
          const tbody = document.createElement("tbody");
        //return index for the correct day
      const index = data.findIndex( (e) =>{
        return e.datetime === idBtn;  
      });
        data[index].hours.forEach(hours => {
           const row = document.createElement("tr"); 
           row.innerHTML = `
           <td>${hours.datetime}</td>
           <td>${hours.conditions}</td>
           <td>${hours.precipprob} ( ${hours.preciptype} )</td>
           <td>${hours.temp}</td>
           <td>${hours.humidity}</td>
           <td>${hours.snow}</td>
           <td>${hours.windspeed}</td>
           <td>${hours.cloudcover}</td>`;
           tbody.appendChild(row);
        });
        table.appendChild(tbody);
        document.querySelector("body").appendChild(table);

        //go back button
        const exitBtn = document.createElement("button");
        exitBtn.textContent = "Exit";
        exitBtn.addEventListener("click", () =>{
          document.querySelector("body").innerHTML ='';
          createTable(data);
        })
        document.querySelector("body").appendChild(exitBtn);
    })
  
}) 
}