const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const tinggi = parseInt(document.querySelector('#tinggi').value);
    const berat = parseInt(document.querySelector('#berat').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');
    if ((tinggi === '') || (tinggi < 0) || (isNaN(tinggi))) {
        //NaN !== NaN
        results.innerHTML = "Masukkan angka tinggi badan yang benar";
    } else if (berat === '' || berat < 0 || isNaN(berat)) {
        results.innerHTML = "Masukkan angka berat badan yang benar";
    } else {
        // Hitung BMI
        const bmi = (berat / ((tinggi * tinggi) / 10000)).toFixed(2);
        // Menampilkan hasil BMI
        results.innerHTML = `<span>${bmi}</span>`
        // Menampilkan status hasil perhitungan bmi
        if (bmi < 18.5) {
            message.innerHTML = "kekurangan berat badan";
        } else if (bmi > 18.5 && bmi < 24.9) {
            message.innerHTML = "Normal";
        } else if (bmi > 24.9) {
            message.innerHTML = "kelebihan berat badan";
        } else if(bmi > 30.0){
            message.innerHTML = "obesitas";
        }
    }
});