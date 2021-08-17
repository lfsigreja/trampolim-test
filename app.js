const metro = 5;
const km = metro * 1000;

console.log(`${metro}m é equivalente a ${km}km`);

function temperature(celsius) {
    console.log(`${celsius}°C é equivalente a ${(celsius * 9 / 5) + 32}°F`);
}

function scaleConverterFunction(valTemp, fromTemp, toTemp) {
    let K = 273.15
    valTemp = parseFloat(valTemp)
    console.log(valTemp)
    if (fromTemp == 'C' && toTemp == 'C') {
        resultado = valTemp
        return resultado
    } else if (fromTemp == 'C' && toTemp == 'K') {
        resultado = valTemp + K;
        console.log(resultado)
        return resultado
    } else if (fromTemp == 'C' && toTemp == 'F') {
        resultado = (valTemp * 1.8) + 32;
        console.log(resultado)
        return resultado
    } else if (fromTemp == 'K' && toTemp == 'C') {
        resultado = valTemp - K;
        return resultado
    } else if (fromTemp == 'K' && toTemp == 'K') {
        resultado = valTemp
        return resultado
    } else if (fromTemp == 'K' && toTemp == 'F') {
        resultado = ((valTemp - K) * 1.8) + 32;
        return resultado
    } else if (fromTemp == 'F' && toTemp == 'C') {
        resultado = ((valTemp - 32) * 1.8)
        return resultado
    } else if (fromTemp == 'F' && toTemp == 'K') {
        resultado = ((valTemp - 32) * 1.8) + K;
        return resultado
    } else {
        resultado = valTemp
        return resultado
    }
}

let showResultTemp = document.getElementById("scaleConversao")

function temperatureConverter(event) {
    event.preventDefault();
    let valTemp = document.getElementById('temp').value;
    let toTemp = document.getElementById("toScale").value;
    let fromTemp = document.getElementById("scaleSelected").value;
    console.log(valTemp, toTemp, fromTemp)
    resultado = scaleConverterFunction(valTemp, fromTemp, toTemp);
    console.log(resultado);
    showResultTemp.innerHTML = resultado.toFixed(2);
}

let temperature_Convert = document.getElementById("scaleConverter");
temperature_Convert.addEventListener("click", temperatureConverter);