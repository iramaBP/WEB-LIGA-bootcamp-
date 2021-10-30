// FETCH ESTADISTICAS //
/* FETCH + THEN + CATCH */
/* then : es un metodo para gestionar las promesas (resolve) */
/* catch : es un metodo que captura las (reject) de las promesas  */
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
    console.log(promesa2);
    cargando.innerHTML = "";
    /* resolvemos la promesa que nos devuelve el j.son */
    let parti = promesa2.matches;
    let equipos =  []
    console.log(parti);
    for (let i = 0; i < parti.length; i++) {
      // CREAR ARRAY CON 20 EQUIPOS   //
      if (parti[i].status === "FINISHED") {
        let repetidoCasa = false;
        let repetidoFuera = false;
        for (let j = 0; j < equipos.length; j++) {
          if (parti[i].homeTeam.name === equipos[j].name) {
            repetidoCasa = true;
          }
          if (parti[i].awayTeam.name === equipos[j].name) {
            repetidoFuera = true;
          }
        }
        if (repetidoCasa === false) {
          let equipoCasa = {
            id: parti[i].homeTeam.id,
            name: parti[i].homeTeam.name,
            goles: 0,
            partidos: 0,
            media: 0,
          };
          equipos.push(equipoCasa);
        }
        if (repetidoFuera === false) {
          let equipoFuera = {
            id: parti[i].awayTeam.id,
            name: parti[i].awayTeam.name,
            goles: 0,
            partidos: 0,
            media: 0,
          };
          equipos.push(equipoFuera);
        }
        // INCREMENTAR GOLES Y PARTIDOS JUGADOS //
        for (let j = 0; j < equipos.length; j++) {
          if (parti[i].homeTeam.name === equipos[j].name) {
            equipos[j].goles += parti[i].score.fullTime.homeTeam;
            equipos[j].partidos++;
          }
          if (parti[i].awayTeam.name === equipos[j].name) {
            equipos[j].goles += parti[i].score.fullTime.awayTeam;
            equipos[j].partidos++;
          }
        }
      }
    }

    // CALCULAR MEDIA //
    for (let j = 0; j < equipos.length; j++) {
      equipos[j].media = (equipos[j].goles / equipos[j].partidos).toFixed(2);
    }
    // MOSTAR LOS 5 PRIMEROS //
    equipos.sort(function (a, b) {
      return b.media - a.media;
    });
    let cincoPrimeros = equipos.splice(0, 5);

    // PINTAR TABLA //
    let tbody = document.getElementById("tbody");

    for (let i = 0; i < cincoPrimeros.length; i++) {
      let fila = document.createElement("tr");
      fila.innerHTML = `<td>${cincoPrimeros[i].name}<img class="escudo" src="https://crests.football-data.org/${cincoPrimeros[i].id}.svg"/><td>${cincoPrimeros[i].media}</td>`;
      tbody.appendChild(fila);
    }
  })
  .catch(function (error) {
    cargando.innerHTML = "";
    cargando.innerHTML = `Ha ocurrido el siguiente error:${error}`;
  
  });
 

