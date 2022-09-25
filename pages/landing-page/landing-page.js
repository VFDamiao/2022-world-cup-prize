function loadTimer() {
  var countDownDate = new Date();
  countDownDate.setSeconds(new Date().getSeconds() + 6);
  countDownDate.getTime();

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(countDownDate, now, distance, seconds);

    document.getElementById("demo").innerHTML = seconds + " segundos";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("btn-sorteio").style.display = "block";
      document.getElementById("demo").innerHTML = "0 segundos";
    }
  }, 1000);
}

loadTimer();

function seeResultsButton() {
  sorteado = null;
  dados = JSON.parse(window.localStorage.getItem("dados"));
  sorteado = JSON.parse(window.localStorage.getItem("sorteado"));
  sorteadoNovo = null;
  if (dados) {
    sorteadoNovo = dados[Math.floor(Math.random() * dados.length - 1) + 1];
    window.localStorage.setItem("sorteado", JSON.stringify({ sorteado }));
  }

  if (sorteado) {
    sorteado = sorteado.sorteado;
  } else {
    sorteado = sorteadoNovo;
  }
  document.querySelector("#result-sorteio").innerHTML = sorteado ? "O resultado do sorteado foi: " + sorteado[0] + " " + sorteado[1] : "AINDA SEM PARTICIPANTES";
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.show();
}
