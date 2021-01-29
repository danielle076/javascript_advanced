function numbers(number1, number2){
    const subtract = number1 - number2;
    return subtract;
}

function magic(first, second) {
    return first + second;
}

const outcomeMagic = magic("abra", "cadabra");

console.log(outcomeMagic);

module.exports = {
    numbers: numbers,
    magic: magic
};
