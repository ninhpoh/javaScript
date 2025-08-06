function convertAndCalculate(input: string): number | string {
    let numberValue = parseFloat(input);

    if (isNaN(numberValue)) {
        return "Invalid input";
    }

    let num2 = 5;
    let sum = numberValue + num2;
    let difference = numberValue - num2;
    let product = numberValue * num2;
    let quotient = numberValue / num2;

    return product;
}

let test1:string = "10";
console.log(convertAndCalculate(test1));

let test2:string = "abc";
console.log(convertAndCalculate(test2));

let test3:string = "5.5";
console.log(convertAndCalculate(test3));