const submit = document.querySelector("#submit");

async function getData() {
  try {
    let ceps = document.querySelector("#cep").valueAsNumber;
    const res = await fetch(`https://brasilapi.com.br/api/cep/v1/${ceps}`);
    if (res.status != 200) {
      return alert(
        "Adicione o cep correto ou a API está com problemas se você digitou o cep correto!"
      );
    } else {
      const data = await res.json();
      addHtml(data);
    }
  } catch (e) {
    console.log(e);
  }
}
function addHtml(data) {
  let result = document.querySelector("#result");
  result.textContent = `Endereço: ${data.street}
   - Seu Bairro: ${data.neighborhood}
   - Sua Cidade/Estado: ${data.city}/${data.state}
   - e seu cep é: ${data.cep}`;
}

submit.addEventListener("click", () => getData());
// address;
// district;
// city / state;
// cep;
