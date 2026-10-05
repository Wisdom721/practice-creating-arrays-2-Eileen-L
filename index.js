let helloArray = Array(7).fill("Hello");
console.log(helloArray);

helloArray.fill("Hi", 0, 3);
console.log(helloArray);

let numberArray = Array(5);

for (let i = 0; i < numberArray.length; i++) {
    numberArray[i] = i * 10;
}

console.log(numberArray);