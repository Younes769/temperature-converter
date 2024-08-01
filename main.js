document.getElementById("celsius").addEventListener("input", function(e) {
    let celsius = e.target.value;
    document.getElementById("fahrenheit").value = celsiusToFahrenheit(celsius);
});

document.getElementById("fahrenheit").addEventListener("input", function(e) {
    let fahrenheit = e.target.value;
    document.getElementById("celsius").value = fahrenheitToCelsius(fahrenheit);
});

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convert() {
    let celsius = document.getElementById("celsius").value;
    let fahrenheit = document.getElementById("fahrenheit").value;
     if (celsius !== "") {
        document.getElementById("fahrenheit").value = celsiusToFahrenheit(celsius);
     } else if (fahrenheit !== "") {
        document.getElementById("celsius").value = fahrenheitToCelsius(fahrenheit);
     }
}
