// vraagt naar benodige info
const username = prompt("Please enter your name");
const age = prompt("Please enter your age");
if (age < 18){
  document.getElementById("advice-text").innerHTML = "Sorry " + username + ", you are not old enough to get a proper advice from us";
  document.getElementById('advice-card').className = "box has-background-grey-light";
  document.getElementById("age").innerHTML = age;
} else {
  const height = prompt("Please enter your height (in m, ie. 1.96)");
  const weight = prompt("Please enter your weight (in kg, ie. 89.3)");

  // berekenen BMI
  const bmi = weight / (height * height);

  // standaard invullen
  document.getElementById("username").innerHTML = username;   
  document.getElementById("age").innerHTML = age;
  document.getElementById("height").innerHTML = height;
  document.getElementById("weight").innerHTML = weight;
  
  // geeft advies weer
  if (bmi <= 18.5){
    document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You are under weight" + "<br> Start with a personal trainer";
    document.getElementById("advice-card").className = "box has-background-warning";
  } else if(bmi > 18.5 && bmi < 25){
    document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You have a normal weight" + "<br> Start with any programme";
    document.getElementById("advice-card").className = "box has-background-success";
  } else if(bmi > 25 && bmi < 30){
    document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You are slighty over weight" + "<br> Start with cardio training";
    document.getElementById("advice-card").className = "box has-background-warning";
  } else if(bmi > 30){
    document.getElementById("advice-text").innerHTML = "Your BMI is: " + bmi + "<br> You are obese" + "<br> Start with a personal trainer";
    document.getElementById("advice-card").className = "box has-background-danger";
  }
}