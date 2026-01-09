function convertTemp() {
    const tempInput = document.getElementById("temperature").value;
    const type = document.getElementById("type").value;
    const output = document.getElementById("output");

    // Validation
    if (tempInput === "" || isNaN(tempInput)) {
        output.innerText = "❌ Please enter a valid number";
        output.style.color = "red";
        return;
    }

    const temp = parseFloat(tempInput);
    let result = "";

    if (type === "celsius") {
        const f = (temp * 9 / 5) + 32;
        const k = temp + 273.15;
        result = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
    }
    else if (type === "fahrenheit") {
        const c = (temp - 32) * 5 / 9;
        const k = c + 273.15;
        result = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
    }
    else if (type === "kelvin") {
        const c = temp - 273.15;
        const f = (c * 9 / 5) + 32;
        result = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
    }

    output.innerText = result;
    output.style.color = "#22c55e";
}
