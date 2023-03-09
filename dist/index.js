"use strict";
let INDICE = 13;
let SOMA = 0;
let K = 0;
while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log("ex 1", SOMA);
let number = 12;
if (number <= 0) {
    console.log("O número deve ser maior que 0.");
}
else {
    let number1 = 0;
    let number2 = 1;
    for (let i = 0; i < number; i++) {
        console.log("Ex 2", number1);
        let next = number1 + number2;
        number1 = number2;
        number2 = next;
    }
}
let string = "João Jorge";
let reverseString = "";
for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
}
console.log("ex 5", reverseString);
