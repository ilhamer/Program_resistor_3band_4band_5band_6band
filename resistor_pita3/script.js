function calculateResistor() {
    // Ambil nilai dari setiap band
    const band1 = document.getElementById('band1').value;
    const band2 = document.getElementById('band2').value;
    const multiplier = document.getElementById('multiplier').value;

    // Hitung nilai resistor
    const significantDigits = parseInt(band1.toString() + band2.toString());
    const resistanceValue = significantDigits * parseFloat(multiplier);

    // Tampilkan hasil
    document.getElementById('resistorValue').innerText = `Resistor Value: ${resistanceValue} Ω`;
}