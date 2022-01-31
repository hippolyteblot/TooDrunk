
const element = document.getElementById("ajt-alcool");
element.addEventListener("click",() => {
  document.querySelector(".topast").insertAdjacentHTML("beforeend",  `
    <div class="copie">
    <p>Quel volume as-tu bus ?</p>
    <div class="rep">
      <label><input type="number"> cL</label>
    </div>

    <p>A quel degrés d'alcool était cette boisson ?</p>
    <div class="rep">
      <label><input type="number"> ° d'alcool</label>
    </div>
  </div>`)
})

const btn_result = document.getElementById("last");
btn_result.addEventListener("click",() => {

  var sexe = document.getElementById("sexe").value;
  var m = document.getElementById("poids").value;
  var jeun = document.getElementById("jeun").value; 
  var V = document.getElementById("quantite").value;
  var p = document.getElementById("degre").value;

  if(sexe == 'h'){
    var K = 0.7;
    var elim = 0.125;
  }
  else {
    var K = 0.6;
    var elim = 0.925;
  }
  var T = ((V * p * 0.8) / (K * m)) / 10;
  T = Math.round(T*100)/100;

  document.querySelector("#result").style.display = "flex";
  
  document.getElementById("number-result").innerHTML = T;

  const graph = document.getElementById("graph").getContext('2d');
  const myChart = new Chart(graph, {
    type: 'line',
    data: {
      datasets: [{
        type: 'line',
        label: "Gramme d'alcool par Litre de sang",
        data: [T-elim,
          T-elim*0.5+(elim*0.5*jeun),
          T-(elim*0.5*jeun),
          T-elim*0.5-(elim*0.5*jeun),
          T-elim-(elim*0.5*jeun),
          T-elim*1.5-(elim*0.5*jeun),
          T-elim*2-(elim*0.5*jeun),
          T-elim*2.5-(elim*0.5*jeun),
          T-elim*3-(elim*0.5*jeun),
          T-elim*3.5-(elim*0.5*jeun),
          T-elim*4-(elim*0.5*jeun),
          T-elim*4.5-(elim*0.5*jeun),
          T-elim*5-(elim*0.5*jeun)],
        borderColor: '#6C4DB4',
        borderWidth: "4",
        tension: 0.3
    }, {
        type: 'line',
        label: "Limite légale pour conduire",
        data: [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],
        pointBorderWidth: 0,
        borderColor: 'rgb(0,0,0)',
        borderWidth: "4",
    }],
    labels: ["Ingestion de l'alcool", "",'1 heure',"", '2 heures', "", '3 heures', 
    "", '4 heures', "", '5 heures', "", '6 heures']
    },
    options: {
      scales: {
        y: {
            beginAtZero: true
        }
    },
      plugins: {
          legend: {
              labels: {
                  font: {
                      size: 24
                  }
              }
            
          }
      }
    }


  });
})


