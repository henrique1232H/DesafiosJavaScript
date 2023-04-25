const createElements = () => {
    const body = document.querySelector("body");
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.innerHTML = "Aperte";
    body.appendChild(input);
    body.appendChild(button);

    return [input, button]


}

const Conversion = (temperature) => {
    const calCelsius =  (temperature * 9/5 ) + 32;
    const calFahrenheit = (temperature - 32) * 5 / 9;
    console.log(calCelsius, calFahrenheit)

    return [calCelsius, calFahrenheit];
}


const CreateVerification = () => {
    const elements = createElements()
    console.log(elements)
    
    elements[1].addEventListener("click", () => {
        
        const NumberInput = Number(elements[0].value)
        
        if (isNaN(NumberInput)) {
            window.confirm("Não é um número");
            return;
        }
        
        let result = Conversion(NumberInput)
        console.log(result)
        showTemperature(result)

    })  
    
}


function showTemperature(result) {

    const body = document.querySelector("body")
    const div = document.createElement("div")
    body.appendChild(div)

    const pCelsius = document.createElement("p")
    const pFahrenheit = document.createElement("p")
    pCelsius.innerHTML = `De celsius para fahrenheit: ${result[0]}`
    pFahrenheit.innerHTML = `De fahrenheit para Celsius: ${result[1]}`

    div.appendChild(pCelsius)
    div.appendChild(pFahrenheit)
    
}


const showResult = () => CreateVerification()


showResult()