
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

  var sexe = document.getElementById("sexe").value
  var m = document.getElementById("poids").value
  var jeun = document.getElementById("jeun").value 
  var V = document.getElementById("quantite").value
  var p = document.getElementById("degre").value

  if(sexe == 'h'){
    var K = 0.7;
  }
  else {
    var K = 0.6
  }
  var T = ((V * p * 0.8) / (K * m)) / 10
  T = Math.round(T*100)/100;
  
  document.getElementById("number-result").innerHTML = T
  console.log(T);
})