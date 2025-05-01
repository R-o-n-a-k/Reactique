import React, { useState } from "react";
import "./BMICalculator.css";
import BackToHome from "../../components/BackToHome/BackToHome";
import male from "../../assets/bmi-calculator/man.png";
import female from "../../assets/bmi-calculator/woman.png";

const BMICalculator = () => {
  const [calculate, setCalculate] = useState(true);
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState(160);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  const [bmi, setBmi] = useState(null);
  const [bmiResult, setBmiResult] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!gender || !age || !weight) {
      alert("Please fill out all the details");
    } else {
      setCalculate(false);
      bmiCalculate();
    }
  };

  // const bmiCalculate = () => {
  //   const bmiValue = weight / Math.pow(height / 100, 2);
  //   setBmi(bmiValue);

  //   if (bmiValue < 18.5) {
  //     setBmiResult("Underweight");
  //     setBmiMessage(
  //       "You are underweight. It's important to have a balanced diet."
  //     );
  //   } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
  //     setBmiResult("Normal");
  //     setBmiMessage("You have a normal weight. Keep up the good work!");
  //   } else if (bmiValue >= 25 && bmiValue < 29.9) {
  //     setBmiResult("Overweight");
  //     setBmiMessage(
  //       "You are overweight. Consider adopting a healthier lifestyle."
  //     );
  //   } else {
  //     setBmiResult("Obese");
  //     setBmiMessage(
  //       "You are obese. It's important to consult a healthcare professional."
  //     );
  //   }
  // };

  const bmiCalculate = () => {
    const bmiValue = weight / Math.pow(height / 100, 2);
    setBmi(bmiValue);

    let result = "";
    let message = "";

    if (age < 18) {
      if (bmiValue < 18.5) {
        result = "Underweight";
        message =
          "You are underweight for your age. Balanced nutrition is essential.";
      } else if (bmiValue < 25) {
        result = "Normal";
        message = "You have a normal weight. Stay active and eat well.";
      } else if (bmiValue < 30) {
        result = "Overweight";
        message = "You are overweight. Stay mindful of your habits.";
      } else {
        result = "Obese";
        message =
          "You are obese. It's important to consult a healthcare provider.";
      }
    } else if (age >= 65) {
      if (bmiValue < 22) {
        result = "Underweight";
        message =
          "You are underweight for your age. Please eat well and monitor your health.";
      } else if (bmiValue < 27) {
        result = "Normal";
        message = "You have a healthy weight for your age.";
      } else if (bmiValue < 30) {
        result = "Overweight";
        message = "You are slightly overweight. Gentle activity may help.";
      } else {
        result = "Obese";
        message = "You are obese. A health check is recommended.";
      }
    } else {
      if (gender === "male") {
        if (bmiValue < 18.5) {
          result = "Underweight";
          message = "You are underweight. Consider a nutritious diet.";
        } else if (bmiValue < 25) {
          result = "Normal";
          message = "Your weight is normal. Keep it up!";
        } else if (bmiValue < 30) {
          result = "Overweight";
          message = "You are overweight. Stay active and eat well.";
        } else {
          result = "Obese";
          message = "You are obese. A medical consultation is advised.";
        }
      } else if (gender === "female") {
        if (bmiValue < 18.5) {
          result = "Underweight";
          message = "You are underweight. Ensure you're eating enough.";
        } else if (bmiValue < 24) {
          result = "Normal";
          message = "You have a normal weight. Great job!";
        } else if (bmiValue < 29) {
          result = "Overweight";
          message = "You are overweight. Stay mindful of your health.";
        } else {
          result = "Obese";
          message =
            "You are obese. It's best to consult a healthcare provider.";
        }
      }
    }

    setBmiResult(result);
    setBmiMessage(message);
  };

  const handleRecalculate = () => {
    setCalculate(true);
    setGender("");
    setBmi(null);
    setAge(0);
    setHeight(160);
    setWeight(0);
    setBmiCategory("");
    setBmiMessage("");
  };

  return (
    <>
      <div className="bmi-calc-project">
        <h2>BMI Calculator</h2>
        <div className="bmi-calc">
          {calculate ? (
            <form action="" className="bmi-form" onSubmit={handleCalculate}>
              <div className="bmi-gender">
                <div
                  className={`gender-box bmi-card-box ${
                    gender === "male" ? "selected" : ""
                  }`}
                  onClick={() => setGender("male")}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    readOnly
                  />
                  <img src={male} alt="male" className="gender-img" />
                  <p className="bmi-label">Male</p>
                </div>
                <div
                  className={`gender-box bmi-card-box ${
                    gender === "female" ? "selected" : ""
                  }`}
                  onClick={() => setGender("female")}
                >
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    readOnly
                  />
                  <img src={female} alt="female" className="gender-img" />
                  <p className="bmi-label">Female</p>
                </div>
              </div>
              <div className="bmi-height bmi-card-box">
                <p className="bmi-label">Height</p>
                <p className="bmi-value">
                  {height}
                  <span className="bmi-span"> cm</span>
                </p>
                <input
                  type="range"
                  id="height"
                  min="100"
                  max="220"
                  step="1"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="bmi-weight-age">
                <div className="bmi-weight bmi-card-box">
                  <p className="bmi-label">Weight</p>
                  <input
                    type="number"
                    min="0"
                    value={weight}
                    className="bmi-input"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <span className="bmi-span"> kg</span>
                </div>
                <div className="bmi-age bmi-card-box">
                  <p className="bmi-label">Age</p>
                  <input
                    type="number"
                    min="0"
                    value={age}
                    className="bmi-input"
                    onChange={(e) => setAge(e.target.value)}
                  />
                  <span className="bmi-span"> yrs</span>
                </div>
              </div>
              <button type="submit" className="bmi-btn">
                Calculate
              </button>
            </form>
          ) : (
            <div className="bm-result">
              <h3>Your Result:</h3>
              <div className="your-result">
                <div className="result-number">
                  {bmi.toFixed(2).split(".")[0]}
                  <span>.{bmi.toFixed(2).split(".")[1]}</span>
                </div>
                <div className="result-text">
                  <h4>{bmiResult}</h4>
                  <p>{bmiMessage}</p>
                </div>
                <button onClick={handleRecalculate} className="bmi-btn">
                  Recalculate
                </button>
              </div>
            </div>
          )}
        </div>
        <BackToHome bgColor="#ff7f50" bottom="5%" />
      </div>
    </>
  );
};

export default BMICalculator;
