function convertToCelsius() {
  const celsiusInput = document.getElementById("celsius");
  const resultDiv = document.getElementById("result");

  if (celsiusInput.value === "") {
    resultDiv.textContent = "Please enter a temperature in Celsius.";
    return;
  }

  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;

  resultDiv.textContent = `${celsiusTemp} Celsius is equal to ${fahrenheitTemp.toFixed(
    2
  )} Fahrenheit.`;
}

function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius");
  const resultDiv = document.getElementById("result");

  if (celsiusInput.value === "") {
    resultDiv.textContent = "Please enter a temperature in Celsius.";
    return;
  }

  const fahrenheitTemp = parseFloat(celsiusInput.value);
  const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;

  resultDiv.textContent = `${fahrenheitTemp} Fahrenheit is equal to ${celsiusTemp.toFixed(
    2
  )} Celsius.`;
}
