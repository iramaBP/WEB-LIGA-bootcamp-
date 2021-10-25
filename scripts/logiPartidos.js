/*TABLA CLASIFICACIONES (partidos) */
let tbody = document.getElementById("tbody");
let parti = partidos.matches;

for (let i = 0; i < parti.length; i++) {
  if (parti[i].status === "FINISHED") {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>${parti[i].score.fullTime.homeTeam} - ${parti[i].score.fullTime.awayTeam}</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
    tbody.appendChild(row);
  } else {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>Pendiente</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
    tbody.appendChild(row);
  }
}
/*FIN TABLA CLASIFICACIONES PARTIDOS */

/*FILTROS PARTIDOS */
let inputFiltro = document.getElementById("input1");
let botonBuscar = document.getElementById("buscar");
let todos = document.getElementById("todos");
let ganar = document.getElementById("ganados");
let perder = document.getElementById("perdidos");
let empate = document.getElementById("empatados");

botonBuscar.addEventListener("click", function () {
  tbody.innerHTML = "";
  /*  console.log(ganar.checked)
    console.log(inputFiltro.value)
    console.log(perder.checked)
    console.log(empate.checked)*/
  for (let i = 0; i < parti.length; i++) {
    if (
      (inputFiltro.value === parti[i].homeTeam.name ||
        inputFiltro.value === parti[i].awayTeam.name) &&
      todos.checked === true &&
      ganar.checked === false &&
      perder.checked === false &&
      empate.checked === false
    ) {
      // EMPIEZO A PINTAR TABLA Y CONDICIONALES  //
      if (parti[i].status === "FINISHED") {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>${parti[i].score.fullTime.homeTeam} - ${parti[i].score.fullTime.awayTeam}</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
        tbody.appendChild(row);
      } else {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>Pendiente</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
        tbody.appendChild(row);
      }
    } else if (
      ganar.checked === true &&
      ((inputFiltro.value === parti[i].homeTeam.name &&
        parti[i].score.winner === "HOME_TEAM") ||
        (inputFiltro.value === parti[i].awayTeam.name &&
          parti[i].score.winner === "AWAY_TEAM"))
    ) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>${parti[i].score.fullTime.homeTeam} - ${parti[i].score.fullTime.awayTeam}</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
      tbody.appendChild(row);
    } else if (
      perder.checked === true &&
      ((inputFiltro.value === parti[i].homeTeam.name &&
        parti[i].score.winner === "AWAY_TEAM") ||
        (inputFiltro.value === parti[i].awayTeam.name &&
          parti[i].score.winner === "HOME_TEAM"))
    ) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>${parti[i].score.fullTime.homeTeam} - ${parti[i].score.fullTime.awayTeam}</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
      tbody.appendChild(row);
    } else if (
      empate.checked === true &&
      ((inputFiltro.value === parti[i].homeTeam.name &&
        parti[i].score.winner === "DRAW") ||
        (inputFiltro.value === parti[i].awayTeam.name &&
          parti[i].score.winner === "DRAW"))
    ) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${parti[i].homeTeam.name}<img class="escudo" src="https://crests.football-data.org/${parti[i].homeTeam.id}.svg"/></td><td>${parti[i].score.fullTime.homeTeam} - ${parti[i].score.fullTime.awayTeam}</td><td><img class="escudo" src="https://crests.football-data.org/${parti[i].awayTeam.id}.svg"/>${parti[i].awayTeam.name}</td>`;
      tbody.appendChild(row);
      console.log(parti[i]);
    }
  }
});

/* FIN TABLA Y CONDICIONALES */


