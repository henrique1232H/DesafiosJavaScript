

const calculo = (comprimento, largura) => {
    const area = comprimento * largura;
    const perimetro = 2 * (comprimento + largura);

    return [area, perimetro]
}

const text = (result) => {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    body.appendChild(div)
    const pArea = document.createElement("p")
    const pPerimetro = document.createElement("p")
    pArea.innerHTML += `A área é ${result[0]}`
    pPerimetro.innerHTML += `O perimetro é ${result[1]}`
    div.appendChild(pArea)
    div.appendChild(pPerimetro)

}

const criarVerficacao = () => {
    const comprimento = document.querySelector(".comprimento");
    const largura = document.querySelector(".largura");
    const button = document.querySelector(".button")
    
    button.addEventListener("click", () => {
        const numberComprimento = Number(comprimento.value);
        const numberLargura = Number(largura.value);

        if(isNaN(numberComprimento) || isNaN(numberLargura)) {
            console.log("Não é um número")
            return;

        }

       let result = calculo(numberComprimento, numberLargura);
       text(result)
    })
}

criarVerficacao()