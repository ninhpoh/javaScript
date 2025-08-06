
function processString(input: string): string {
    let output = input.slice(0, 3);
    return output;
}

let test1: string = "banana";
console.log(processString(test1));

let test2:string = "hello world";
console.log(processString(test2));