
//Const
const basePrice = 0.05;
const extraFee = 1.2;
const translations = {
    en: basePrice,
    fr: basePrice,
    hy: basePrice * 3
}

// Selectors from HTML
const wordsInput = document.getElementById('words');
const languageSelector = document.querySelector('#language');
const checkBox = document.getElementById('sprint');


let total = 0;



// Main Functions
getTotal = (quantity, rate) => {
    let total = Number(
        parseFloat(
            quantity * rate * (checkBox.checked ? extraFee : 1)
        ).toFixed(2)
    );
    if (Number.isNaN(total)) {
        return Number(0);
    }
    return total;
};


printTotal = (total) => {
    document.querySelector(
        "#js-calculate-total"
    ).innerHTML = total.toLocaleString("es", {
        minimumFractionDigits: 2,
    });
};

 // Listeners
wordsInput.addEventListener("input", function (event) {
    total = getTotal(
        event.target.value,
        translations[languageSelector.value]
    );
    printTotal(total);
});

languageSelector.addEventListener("input", (event) => {
    total = getTotal(
        wordsInput.value,
        translations[event.target.value]
    );
    printTotal(total);
});

checkBox.addEventListener("input", (event) => {
    total = getTotal(
        wordsInput.value,
        translations[languageSelector.value]
    );
    printTotal(total);
});

// Print Button
document.querySelector('button').addEventListener('click', () => { window.print() })
