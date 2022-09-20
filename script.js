const submit = document.querySelector("#submit");

async function getData(cep) {
  try {
    const BASE_URL = `https://cep.awesomeapi.com.br/${cep}`;
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(cep);
  } catch (e) {
    console.log(e);
  }
  //   let cep = document.querySelector("#cep").valueAsNumber;
  //   console.log(cep);
}

submit.addEventListener("click", () => getData(cep));
