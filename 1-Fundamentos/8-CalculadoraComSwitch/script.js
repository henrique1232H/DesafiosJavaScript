const calc = (num1,num2,exp) => {
    switch (exp) {
        case "*":
            return num1 * num2;
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
    }
}

console.log(calc(2,2,"/"))