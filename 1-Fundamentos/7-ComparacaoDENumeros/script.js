const numberComparator = (num1,num2) => {
    if (num1 > num2) {
        return `O ${num1} é maior que ${num2} `
    } else if (num1 === num2) {
        return `Os dois números são iguais`
    }
    else {
        return `O ${num2} é maior que ${num1}`
    }
}

console.log(numberComparator(2,2))