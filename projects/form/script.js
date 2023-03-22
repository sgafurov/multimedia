function storeWeight() {
  const weight = document.getElementById("weight").value;
  localStorage.setItem("weight", weight);
  alert(`Your weight ${weight} has been stored in local storage.`);
}

function clearLocalStorage() {
  localStorage.clear();
}

function clickSun() {
  alert("Your weight on the sun is " + 27.01 * localStorage.getItem("weight"));
  // Multiple of Earth’s Gravity = 27.01
}

function clickMercury() {
  alert("Your weight on mercury is " + 0.38 * localStorage.getItem("weight"));
  //0.38
}

function clickVenus() {
  alert("Your weight on venus is " + 0.91 * localStorage.getItem("weight"));
  //0.91
}

function clickMars() {
  alert("Your weight on mars is " + 0.38 * localStorage.getItem("weight"));
  //0.38
}

function clickJupiter() {
  alert("Your weight on jupiter is " + 2.34 * localStorage.getItem("weight"));
  //2.34
}

function clickSaturn() {
  alert("Your weight on saturn is " + 1.06 * localStorage.getItem("weight"));
  //1.06
}

function clickUranus() {
  alert("Your weight on uranus is " + 0.92 * localStorage.getItem("weight"));
  //0.92
}

function clickNeptune() {
  alert("Your weight on neptune is " + 1.19 * localStorage.getItem("weight"));
  //1.19
}

function clickPluto() {
  alert("Your weight on pluto is " + 0.06 * localStorage.getItem("weight"));
  //0.06
}
