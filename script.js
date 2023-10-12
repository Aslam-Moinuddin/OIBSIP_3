document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const resetBtn = document.getElementById("resetBtn");
    const input = document.getElementById("temperature");
    const unitSelect = document.getElementById("unitType");
    const convertedTemperature1 = document.getElementById("convertedTemperature1");
    const convertedTemperature2 = document.getElementById("convertedTemperature2");
    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(input.value);
        const unit = unitSelect.value;
        if (!isNaN(temperature)) {
            let result1 = 0;
            let result2 = 0;
            switch (unit) {
                case "celsius":
                    result1 = (temperature * 9/5) + 32;
                    result2 = temperature+273.15;
                    convertedTemperature1.textContent = `${temperature}°C is ${result1.toFixed(2)}°F`;
                    convertedTemperature2.textContent = `${temperature}°C is ${result2.toFixed(2)} K`;
                    break;
                case "fahrenheit":
                    result1 = (temperature - 32) * 5/9;
                    result2 = (temperature - 32) * 5 / 9 + 273.15;
                    convertedTemperature1.textContent = `${temperature}°F is ${result1.toFixed(2)}°C`;
                    convertedTemperature2.textContent = `${temperature}°F is ${result2.toFixed(2)} K`;                    break;
                case "kelvin":
                    result1 = temperature - 273.15;
                    result2 = (temperature - 273.15) * 1.8 + 32;
                    convertedTemperature1.textContent = `${temperature}K is ${result1.toFixed(2)}°C`;
                    convertedTemperature2.textContent = `${temperature}K is ${result2.toFixed(2)}°F`;                    break;
                default:
                    convertedValue1 = "Invalid Unit";
            }
        }
        else{
            convertedTemperature1.textContent = "Please enter a valid temperature!!";
            return;
        }
    });
    const reset = () =>{
        input.value='';
        convertedTemperature1.innerHTML='';
        convertedTemperature2.innerHTML='';
    }
    resetBtn.addEventListener('click', reset);
});
