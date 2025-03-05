function calculateResistor() {
    // Ambil nilai dari setiap band
    const band1 = document.getElementById('band1').value;
    const band2 = document.getElementById('band2').value;
    const band3 = document.getElementById('band3').value;
    const multiplier = document.getElementById('multiplier').value;
    const tolerance = document.getElementById('tolerance').value;
    const temperatureCoefficient = document.getElementById('temperatureCoefficient').value;

    // Hitung nilai resistor
    const significantDigits = parseInt(band1.toString() + band2.toString() + band3.toString());
    const resistanceValue = significantDigits * parseFloat(multiplier);

    // Tampilkan hasil
    document.getElementById('resistorValue').innerText = `Resistor Value: ${resistanceValue} Ω ±${tolerance}%`;
    document.getElementById('temperatureCoefficientValue').innerText = `Temperature Coefficient: ${temperatureCoefficient} ppm/°C`;
}