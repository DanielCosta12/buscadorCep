const submit = document.querySelector("#submit");

async function getData() {
  try {
    let ceps = document.querySelector("#cep").valueAsNumber;
    const res = await fetch(`https://cep.awesomeapi.com.br/${ceps}`);
    if (res.status != 200) {
      return alert("Adicione o cep correto ou a API está com problemas se você digitou o cep correto!");
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
  result.textContent = `Endereço: ${data.address}
   - Seu Bairro: ${data.district}
   - Sua Cidade/Estado: ${data.city}/${data.state}
   - e seu cep é: ${data.cep}`;
}

submit.addEventListener("click", () => getData());
// address;
// district;
// city / state;
// cep;
