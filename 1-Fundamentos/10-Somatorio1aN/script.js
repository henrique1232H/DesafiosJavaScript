const som = (value) => {

    console.log("Somatorio 1 a N")
    
    const N = 44
    for(let i = 0; i <= N; i++) {
         value += i
    }
    console.log(`A soma dos números de 1 a ${N} é ${value}`)

}

let result = som(77)