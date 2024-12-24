// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.getElementById("splashScreen");
    const mainScreen = document.getElementById("mainScreen");
    const resultScreen = document.getElementById("resultScreen");
    const calculateBtn = document.getElementById("calculateBtn");
    const recalculateBtn = document.getElementById("recalculateBtn");
    const maleBtn = document.getElementById("maleBtn");
    const femaleBtn = document.getElementById("femaleBtn");
    const heightInput = document.getElementById("heightInput");
    const weightInput = document.getElementById("weightInput");
    const ageInput = document.getElementById("ageInput");
    const bmiResult = document.getElementById("bmiResult");
    const bmiCategory = document.getElementById("bmiCategory");
    const bmiAdvice = document.getElementById("bmiAdvice");
  
    // Show splash screen for 2 seconds, then show main screen
    setTimeout(() => {
      splashScreen.classList.add("hidden");
      mainScreen.classList.remove("hidden");
    }, 1000);
  
    // Toggle gender selection
    maleBtn.addEventListener("click", () => {
      maleBtn.classList.remove("bg-zinc-800");
      maleBtn.classList.add("bg-lime-800/45");
      femaleBtn.classList.remove("bg-lime-800/45");
      maleBtn
        .querySelector("svg")
        .classList.replace("text-white", "text-[#9ACD32]");
      maleBtn
        .querySelector("span")
        .classList.replace("text-white", "text-[#9ACD32]");
      femaleBtn
        .querySelector("svg")
        .classList.replace("text-[#9ACD32]", "text-white");
      femaleBtn
        .querySelector("span")
        .classList.replace("text-[#9ACD32]", "text-white");
    });
  
    femaleBtn.addEventListener("click", () => {
      femaleBtn.classList.remove("bg-zinc-800");
      femaleBtn.classList.add("bg-lime-800/45");
      maleBtn.classList.remove("bg-lime-800/45");
      femaleBtn
        .querySelector("svg")
        .classList.replace("text-white", "text-[#9ACD32]");
      femaleBtn
        .querySelector("span")
        .classList.replace("text-white", "text-[#9ACD32]");
      femaleBtn.ClassList.add("bg-lime-100");
      maleBtn
        .querySelector("svg")
        .classList.replace("text-[#9ACD32]", "text-white");
      maleBtn
        .querySelector("span")
        .classList.replace("text-[#9ACD32]", "text-white");
    });
  
    // Increment and decrement buttons for weight and age
    document.getElementById("weightDecrease").addEventListener("click", () => {
      weightInput.value = Math.max(0, parseInt(weightInput.value) - 1);
    });
    document.getElementById("weightIncrease").addEventListener("click", () => {
      weightInput.value = parseInt(weightInput.value) + 1;
    });
    document.getElementById("ageDecrease").addEventListener("click", () => {
      ageInput.value = Math.max(0, parseInt(ageInput.value) - 1);
    });
    document.getElementById("ageIncrease").addEventListener("click", () => {
      ageInput.value = parseInt(ageInput.value) + 1;
    });
  
    // Calculate BMI and show result screen
    calculateBtn.addEventListener("click", () => {
      const height = parseFloat(heightInput.value) / 100; // convert cm to m
      const weight = parseFloat(weightInput.value);
      const bmi = weight / (height * height);
      bmiResult.textContent = bmi.toFixed(1);
  
      let category, advice;
      if (bmi < 18.5) {
        category = "Underweight";
        advice = `
                  <h4 class="text-white font-bold mb-2">Underweight</h4>
                  <h5 class="text-[#9ACD32] font-bold mb-2">Diet and Nutrition</h5>
                  <p class="text-white">It's important to gain weight in a healthy manner. Consider including more calories in your diet through nutritious foods.</p>
              `;
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
        advice = `
                  <h4 class="text-white font-bold mb-2">Normal weight</h4>
                  <h5 class="text-[#9ACD32] font-bold mb-2">Maintain a Healthy Lifestyle</h5>
                  <p class="text-white">Great job! Keep up with a balanced diet and regular exercise to maintain your weight.</p>
              `;
      } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        advice = `
                  <h4 class="text-white font-bold mb-2">Overweight</h4>
                  <h5 class="text-[#9ACD32] font-bold mb-2">Focus on Healthy Weight Loss</h5>
                  <p class="text-white">Consider a balanced diet and regular physical activity to help reduce weight healthily.</p>
              `;
      } else {
        category = "Obesity";
        advice = `
                  <h4 class="text-white font-bold mb-2">Obesity</h4>
                  <h5 class="text-[#9ACD32] font-bold mb-2">Seek Guidance</h5>
                  <p class="text-white">It's recommended to consult a healthcare provider for personalized advice and support for weight management.</p>
              `;
      }
  
      bmiCategory.textContent = category;
      bmiAdvice.innerHTML = advice;
  
      // Show the result screen
      mainScreen.classList.add("hidden");
      resultScreen.classList.remove("hidden");
    });
  
    // Recalculate button
    recalculateBtn.addEventListener("click", () => {
      resultScreen.classList.add("hidden");
      mainScreen.classList.remove("hidden");
    });
  });
  