const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".primeiro-select")
const currencySelect = document.querySelector(".currency-select-value")
function convertValues() {
    const inputNumberValue = document.querySelector(".input-number").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueToConverted = document.querySelector(".currency-value") // Outras moedas
    const dolarToday = 5.44
    const euroToday = 6.08
    const libraToday = 7.30
    const realToday = 0.18

    if (currencySelectFrom.value === currencySelect.value) {
        alert("A moeda de origem e a moeda de destino não podem ser a mesma.");
        return;
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputNumberValue)

    if (currencySelectFrom.value == "real") { // Se for real é aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputNumberValue / realToday)
    }

    if (currencySelectFrom.value == "dolar") { // Se for dolar é aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputNumberValue / dolarToday)
    }

    if (currencySelectFrom.value == "euro") { // Se for em euro é aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputNumberValue / euroToday)
    }

    if (currencySelectFrom.value == "libra") { // Se for em libra é aqui
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputNumberValue / libraToday)
    }

    // Separando o código

    if (currencySelect.value == "real") { // Se for real é aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputNumberValue / realToday)
    }

    if (currencySelect.value == "dolar") { // Se for dolar é aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputNumberValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // Se for em euro é aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputNumberValue / euroToday)
    }

    if (currencySelect.value == "libra") { // Se for em libra é aqui
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputNumberValue / libraToday)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyValueToConverted = document.querySelector(".currency-value")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"
        currencyValueToConverted.textContent = "$ 0.00"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/dolar.png"
        currencyValueToConverted.textContent = "$ 0.00"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        currencyValueToConverted.textContent = "€ 0.00"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
        currencyValueToConverted.textContent = "£ 0.00"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
        currencyValueToConverted.textContent = "R$ 0.00"
    }

    convertValues()
}

function changeCurrencyFrom() {
    const currencyName = document.getElementById("currency-name-one")
    const currencyImage = document.querySelector(".currency-img-second")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    document.querySelector(".input-number").value = "";
    currencyValueToConvert.textContent = "0.00";


    if (currencySelectFrom.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"
        currencyValueToConvert.textContent = "$ 0.00"

    }

    if (currencySelectFrom.value === "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
        currencyValueToConvert.textContent = "R$ 0.00"

    }

    if (currencySelectFrom.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        currencyValueToConvert.textContent = "€ 0.00"
    }

    if (currencySelectFrom.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
        currencyValueToConvert.textContent = "£ 0.00"
    }

    convertValues()
}



currencySelectFrom.addEventListener("change", changeCurrencyFrom)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)