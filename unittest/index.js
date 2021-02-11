function numbers(number1, number2){
    const subtract = number1 - number2;
    return subtract;
}

function magic(first, second) {
    return first + second;
}

const outcomeMagic = magic("abra", "cadabra");

console.log(outcomeMagic);

// export index.test.js
module.exports = {
    numbers: numbers,
    magic: magic
};