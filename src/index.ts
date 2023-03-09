//Ex 1
let INDICE:number = 13;
let SOMA:number = 0;
let K:number = 0;

while(K < INDICE){
    K = K +1;
    SOMA = SOMA + K;
}
console.log("ex 1", SOMA);
//SOMA = 91;

//Ex 2
let number:number = 12

if(number <= 0){
    console.log("O número deve ser maior que 0.");
}else{
    let number1:number = 0;
    let number2:number = 1;

    for (let i = 0; i < number; i++) {
        console.log("Ex 2", number1);
        let next: number = number1 + number2;
        number1 = number2;
        number2 = next;
      }
}

//Ex 3
/*
a) 1, 3, 5, 7, 9; 
soma + 2 ao ultimo número;

b) 2, 4, 8, 16, 32, 64, 128;
 multiplica o ultimo número por 2, x * 2;

c) 0, 1, 4, 9, 16, 25, 36, 49; 
0² = 0,1² = 1, 2² = 4, 3² = 9, 4²=16, 5²= 25, 6²=36,  7²= 49;

d) 4, 16, 36, 64, 100; 
2²= 4, 4²=2+; 6² = 36; 8² = 64, 10²=100;

e) 1, 1, 2, 3, 5, 8, 13;
sequência de Fibonacci;

f) 2,10, 12, 16, 17, 18, 19, 200;
números naturais que começam com a letra D
*/

//Ex 4
/*Carro sai ribeirão preto 110km/h
Caminhão de franca  80km/h – 10 minutos parado no pedágio

Ribeirão até franca 100km

Carro 
110km – 60min
100km – 54,54 min

Cao 
80km – 60min
100km – 75min + 10min de pedágio 85min ou 1h25

Resposta: Considerando que o carro vai fazer o percusso mais rápido, depois de se cruzarem no caminho o caminhão vai estar mais perto de Ribeirão Preto do que o carro. Logo por serem direções opostas, depois desse evento o que seguir para a cidade vai estar mais perto
Se considerar o ato durante o cruzamento dos veiculos, a distância vai ser a mesma para os dois. Pois vão estar no mesmo lugar e vai ser a mesma distância para a Ribeirão Preto
*/

//Ex 5
let string:string = "João Jorge";
let reverseString:string = "";
for(let i = string.length - 1; i >= 0; i --){
    reverseString += string[i]
}
console.log("ex 5", reverseString);


