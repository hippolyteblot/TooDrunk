
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
  }
  else {
    var K = 0.6;
  }
  var T = ((V * p * 0.8) / (K * m)) / 10;
  T = Math.round(T*100)/100;
  
  document.getElementById("number-result").innerHTML = T;
  const lab = ["1 heure", "2 heures", "3 heures", "4 heures", "5 heures"]
  const data = {
    data: {
      datasets: [{
          type: 'line',
          label: "Gramme d'alcool par Litre de sang",
          data: [T-0.125, T-0.125*2, T-0.125*3, T-0.125*4, T-0.125*5]
      }, {
          type: 'line',
          label: 'Conduire',
          data: [0.5,0.5,0.5,0.5,0.5],
      }],
      labels: ['January', 'February', 'March', 'April']
  },


    labels: lab,
    datasets: [{
      label: "Gramme d'alcool par Litre de sang",
      fill: false,
      borderColor: '#6C4DB4',
      borderWidth: "4",
      tension: 0.3
    }]
  };

  const graph = document.getElementById("graph").getContext('2d');
  const myChart = new Chart(graph, {
    type: 'line',
    data: {
      datasets: [{
        type: 'line',
        label: "Gramme d'alcool par Litre de sang",
        data: [T-0.125, T-0.125*2, T-0.125*3, T-0.125*4, T-0.125*5],
        borderColor: '#6C4DB4',
        borderWidth: "4",
        tension: 0.3
    }, {
        type: 'line',
        label: "Limie légale pour conduire",
        data: [0.5,0.5,0.5,0.5,0.5],
        borderColor: 'rgb(0,0,0)',
        borderWidth: "4",
    }],
    labels: ['1 heure', '2 heures', '3 heures', '4 heures']
    },
    options: {
      plugins: {
          legend: {
              labels: {
                  // This more specific font property overrides the global property
                  font: {
                      size: 24
                  }
              }
            
          }
      }
    }


  });
})


