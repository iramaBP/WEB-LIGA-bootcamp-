/* FILTROS PARTIDOS */
let inputFiltro = document.getElementById("input1");
let botonBuscar = document.getElementById("buscar");
let todos = document.getElementById("todos");
let ganar = document.getElementById("ganados");
let perder = document.getElementById("perdidos");
let empate = document.getElementById("empatados");
let tbody = document.getElementById("tbody");

// FETCH ESTADISTICAS //
/* FETCH + THEN + CATCH */
/* Then : es un metodo para gestionar las promesas (resolve) */
/* Catch : es un metodo que captura las (reject) de las promesas  */

let url =
  "https://api.football-data.org/v2/competitions/2014/matches?season=2021";

fetch(url, {
  method: "GET" /* el method depende */,
  headers: {
    "X-Auth-Token":
      "928dd4e062654c76833a1d9ebc7eb435" /* me lo da la api de la liga */,
  },
})
  .then(function (promesa) {
    return promesa.json(); /* transformamos de j.son a js  */
  })
  .then(function (promesa2) {
    let parti = promesa2.matches;
    /* PRIMER PINTADO SIN FILTROS */
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
    botonBuscar.addEventListener("click", function () {
      tbody.innerHTML = "";
      /* SELECTORES DE FILTRO */
      for (let i = 0; i < parti.length; i++) {
        if (
          (inputFiltro.value === parti[i].homeTeam.name ||
            inputFiltro.value === parti[i].awayTeam.name) &&
          todos.checked === true &&
          ganar.checked === false &&
          perder.checked === false &&
          empate.checked === false
        ) {
          //  PINTAR TABLA + CONDICIONALES  //
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
  })
  .catch(function (error) {
    cargando.innerHTML = `Ha ocurrido el siguiente error:${error}`;
  });

//FIN  FETCH PARTIDOS //
