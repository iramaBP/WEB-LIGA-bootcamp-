/*TABLA CLASIFICACIONES  */

let tbody = document.getElementById("tbody");
let clasi = clasificacion.standings[0].table;

for (let i = 0; i < clasi.length; i++) {
  let row = document.createElement("tr");
  row.innerHTML = `<td>${clasi[i].position}</td><td>${clasi[i].team.name}<img class="escudo" src="${clasi[i].team.crestUrl}"/></td><td>${clasi[i].playedGames}</td><td>${clasi[i].won}</td><td>${clasi[i].draw}</td><td>${clasi[i].lost}</td><td>${clasi[i].goalsAgainst}</td><td>${clasi[i].goalDifference}</td><td>${clasi[i].goalsFor}</td>`;
  tbody.appendChild(row);
}

/*FIN DE TABLA CLASIFICACIONES  */
