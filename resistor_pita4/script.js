function calculateResistor() {
    const band1 = document.getElementById('band1').value;
    const band2 = document.getElementById('band2').value;
    const multiplier = document.getElementById('multiplier').value;
    const tolerance = document.getElementById('tolerance').value;

    const significantDigits = parseInt(band1.toString() + band2.toString());
    const resistanceValue = significantDigits * parseFloat(multiplier);

    document.getElementById('resistorValue').innerText = `Resistor Value: ${resistanceValue} Ω ±${tolerance}%`;
}