const calc = (age) => {
    let tariff = 2.50

    if (age < 6 ) {
        return "Gratis"
    } else if (age >= 6 && age <= 18) {
        const calc1 = 50 * tariff;
        const desc = calc1 / 100;
 
        return tariff - desc

    } else if (age > 60) {
        const calc1 = 30 * tariff;
        const desc = calc1 / 100;
        return tariff - desc

    } else {
        return "normal"
    }

}

console.log(calc(88))
