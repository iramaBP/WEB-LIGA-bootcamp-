/*TABLA CLASIFICACIONES  */

let tbody = document.getElementById("tbody");
/* let clasi = clasificacion.standings[0].table; */

/* for (let i = 0; i < clasi.length; i++) {
  let row = document.createElement("tr");
  row.innerHTML = `<td>${clasi[i].position}</td><td>${clasi[i].team.name}<img class="escudo" src="${clasi[i].team.crestUrl}"/></td><td>${clasi[i].playedGames}</td><td>${clasi[i].won}</td><td>${clasi[i].draw}</td><td>${clasi[i].lost}</td><td>${clasi[i].goalsAgainst}</td><td>${clasi[i].goalDifference}</td><td>${clasi[i].goalsFor}</td>`;
  tbody.appendChild(row);
} */

/*FIN DE TABLA CLASIFICACIONES  */

/* FETCH + THEN + CATCH */
/*then : es un metodo para gestionar las promesas (resolve) */
/*catch : es un metodo que captura las (reject) de las promesas  */

let url =
  "https://api.football-data.org/v2/competitions/2014/standings?season=2021";

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
    /* resolvemos la promesa que nos devuelve el j.son */
    let clasi = promesa2.standings[0].table;
    for (let i = 0; i < clasi.length; i++) {
      /* lo recorremos y lo pintamos */
      let row = document.createElement("tr");
      row.innerHTML = `<td>${clasi[i].position}</td><td>${clasi[i].team.name}<img class="escudo" src="${clasi[i].team.crestUrl}"/></td><td>${clasi[i].playedGames}</td><td>${clasi[i].won}</td><td>${clasi[i].draw}</td><td>${clasi[i].lost}</td><td>${clasi[i].goalsAgainst}</td><td>${clasi[i].goalDifference}</td><td>${clasi[i].goalsFor}</td>`;
      tbody.appendChild(row);
    }
  })
  .catch(function (error) {
    /*  */
  });
