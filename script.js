const inputVal = document.getElementById('input');
const outputVal = document.getElementById('output');
const inUnit = document.getElementById('unit-in');
const outUnit = document.getElementById('unit-out');

inputVal.addEventListener('input', convert)
inUnit.addEventListener('change', convert);
outUnit.addEventListener('change', convert);

function convert() {
    const value = parseFloat(inputVal.value);

    if (isNaN(value)) {
        outputVal.value = "";
        return;
    }

    const factorIn = parseFloat(inUnit.value);
    const factorOut = parseFloat(outUnit.value);

    const result = (value * factorIn) / factorOut;

    outputVal.value = Number(result.toFixed(4));
}