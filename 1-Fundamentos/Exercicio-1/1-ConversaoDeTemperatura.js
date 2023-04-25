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
    const calFahrenheit = (temperature - 32) * 5 / 9
    return [calCelsius, calFahrenheit]
}


const CreateVerification = () => {
    const elements = createElements()
    console.log(elements)
    
    elements[1].addEventListener("click", () => {
        
        const NumberInput = Number(elements[0].value)
        console.log(NumberInput)
        
        if (isNaN(NumberInput)) {
            window.confirm("Não é um número");
            return;
        }
        
        Conversion(NumberInput)
        showResult()
        
        
    })  
    
}


function showResult() {
    let Conversion = Conversion();
    console.log(Conversion);
}

CreateVerification()