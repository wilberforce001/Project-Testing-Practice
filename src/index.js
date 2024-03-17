export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)

}

export  function reverseString(str) {
    return str.split('').reverse().join('');
}

export const calculator = {
    add: (a,b) => a+b,
    subtraction: (a,b) => a-b,
    multiplication: (a,b) => a*b,
    division: (a,b) => a/b
}