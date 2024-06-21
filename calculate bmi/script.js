const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")
    const bmi_weight_guide = document.querySelector("#bmi_weight_guide")


    if (height < 0 || height === '' || isNaN(height)) {
        result.innerHTML = 'Height is invalid';
    }
    else if (weight < 0 || weight === '' || isNaN(weight)) {
        result.innerHTML = 'weight is invalid';
    }
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2);

        result.innerHTML = `<span>${bmi}</span>`
    
    if (bmi < 18.6) {
        bmi_weight_guide.innerHTML = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        bmi_weight_guide.innerHTML = "Normal Range";
    } else {
        bmi_weight_guide.innerHTML = "Over Weight";
    }
}
})