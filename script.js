function validateForm() {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please enter both your name and message.");
        return false; 
    }

    alert("Message sent successfully!");
    return true; 
}

function calculateTrivia() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const resultElement = document.getElementById("trivia-result");

    if (input1 === "" || input2 === "") {
        resultElement.innerText = "Please enter both height and weight.";
        resultElement.style.color = "red";
        return;
    }

    const heightCm = parseFloat(input1);
    const weightKg = parseFloat(input2);

    if (heightCm <= 0 || weightKg <= 0) {
        resultElement.innerText = "Please enter valid numbers.";
        resultElement.style.color = "red";
        return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const roundedBmi = bmi.toFixed(1);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultElement.innerText = "Your BMI is " + roundedBmi + ". Category: " + category;
    resultElement.style.color = "#333333";
}
