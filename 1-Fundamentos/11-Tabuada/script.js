const tabuada = (value) => {
    
    for (let i = 0; i <= 10; i++) {
        const result = value * i;
        console.log(`${value} x ${i} = ${result}`)
    }
}

tabuada(4)