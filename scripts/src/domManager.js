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
           <td>${days.precipprob, days.preciptype}</td>
           <td>${days.temp}</td>
           <td>${days.tempmin}</td>
           <td>${days.tempmax}</td>
           <td>${days.sunrise}</td>
           <td>${days.sunset}</td>
           <td><button class="hourInfo">See Hour Info</button></td>`
           tbody.appendChild(row);
        });
        table.appendChild(tbody);
        document.querySelector("body").appendChild(table)
}

