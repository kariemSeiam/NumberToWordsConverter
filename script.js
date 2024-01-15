document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');

    numberInput.addEventListener('input', function () {
        const inputValue = parseInt(numberInput.value);

        if (!isNaN(inputValue)) {
            const result = numberToWords(inputValue);
            resultDiv.textContent = `Result: ${result}`;
        } else {
            resultDiv.textContent = 'Please enter a valid number.';
        }
    });

});


function numberToWords(num, result = "") {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num === 0 && result === "") {
        return "Zero"; // base case
    } else if (num === 0) {
        return result.trim(); // final result
    } else if (num >= 1000000000) {
        return numberToWords(num % 1000000000, result + numberToWords(Math.floor(num / 1000000000)) + " Billion ");
    } else if (num >= 1000000) {
        return numberToWords(num % 1000000, result + numberToWords(Math.floor(num / 1000000)) + " Million ");
    } else if (num >= 1000) {
        return numberToWords(num % 1000, result + numberToWords(Math.floor(num / 1000)) + " Thousand ");
    } else if (num >= 100) {
        return numberToWords(num % 100, result + numberToWords(Math.floor(num / 100)) + " Hundred ");
    } else if (num >= 20) {
        return result + tens[Math.floor(num / 10)] + " " + numberToWords(num % 10);
    } else {
        return result + ones[num];
    }
}