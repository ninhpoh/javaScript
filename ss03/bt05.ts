function createFullName(first: string, last: string): string {

    let formattedFirst = first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
    let formattedLast = last.charAt(0).toUpperCase() + last.slice(1).toLowerCase();

    let fullName = formattedFirst + " " + formattedLast;

    return fullName;
}

let firstName = "john";
let lastName = "doe";
let result = createFullName(firstName, lastName);
console.log(result);
