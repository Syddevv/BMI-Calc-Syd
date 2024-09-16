document.querySelector(".btn").addEventListener("click", () => {
  const compute = () => {
    const heightInput = document.querySelector(".height").value / 100;

    let heightResult = heightInput * heightInput;

    const weightInput = document.querySelector(".weight").value;
    let finalResult = weightInput / heightResult;

    let roundedResult = finalResult.toFixed(2);

    let displayResult = document.querySelector(".result");
    displayResult.value = isNaN(roundedResult) ? "" : roundedResult;

    const weightCondition = document.querySelector(".condition");

    if (roundedResult < 18.5) {
      weightCondition.innerHTML = "Weight Condition: Underweight";
    } else if (roundedResult >= 18.5 && roundedResult <= 24.9) {
      weightCondition.innerHTML = "Weight Condition: Normal";
    } else if (roundedResult >= 25.0 && roundedResult <= 29.9) {
      weightCondition.innerHTML = "Weight Condition: Overweight";
    } else if (roundedResult >= 30.0 && roundedResult <= 34.9) {
      weightCondition.innerHTML = "Weight Condition: Obesity (Class 1)";
    } else if (roundedResult >= 35.0 && roundedResult <= 39.9) {
      weightCondition.innerHTML = "Weight Condition: Obesity (Class 2)";
    } else if (roundedResult >= 40.0) {
      weightCondition.innerHTML = "Weight Condition: Severe Obesity";
    }
  };
  compute();
});
