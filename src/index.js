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


export function caesarCipher(str, shift) {
    return str
    .split('')
    .map(char => {
        // Check if character is a letter 
        if (char.match(/[a-z]/i)) {
            // Determine the ASCII code for the character
            const code = char.charCodeAt(0);
            // Adjust the ASCII code based on the shift
            let shiftedCode = code + shift;
            // Handle wrapping for lowercase letters
            if (char.match(/[a-z]/)) {
                if (shiftedCode > 122) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 97) {
                    shiftedCode += 26;
                }
            }
            else {
                if (shiftedCode > 90) {
                    shiftedCode -= 26;
                } else if (shiftedCode < 65) {
                    shiftedCode += 26;
                }
            }

            // Conver the shifted ASCII code back to a character
            return String.fromCharCode(shiftedCode);
        }

        // Return non-letter characters unchanged
        return char;
    })
    .join('');
}

export function analyzeArray(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    const average = sum/ arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {average, min, max, length}
}