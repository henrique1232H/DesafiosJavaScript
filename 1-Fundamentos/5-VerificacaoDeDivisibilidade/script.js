const checkVerification = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log("Foi")
    } else {
        console.log("Não foi")
    }
}

checkVerification(10, 5)