async function sendData() {
  const nome = document.querySelector("#inputNome").value;
  const sobrenome = document.querySelector("#inputSobrenome").value;
  if (nome && nome.length > 0 && sobrenome && sobrenome.length > 0) {
    response = null;

    dados = JSON.parse(window.localStorage.getItem("dados"));
    lista = dados && dados.values ? dados.values : [];
    lista.push([nome, sobrenome]);

    window.localStorage.setItem("dados", JSON.stringify(lista));
  }
}
