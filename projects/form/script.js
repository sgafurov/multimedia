function storeWeight() {
  const weight = document.getElementById("weight").value;
  localStorage.setItem("weight", weight);
  alert(`Your weight ${weight} has been stored in local storage.`);
}

function clickSun() {
  alert("Your weight on the sun is " + 27.01 * localStorage.getItem("weight"));
  // Multiple of Earth’s Gravity = 27.01
}

function clickMercury() {
    alert(0.38 * localStorage.getItem("weight"));
  //0.38
}

function clickVenus() {
  alert("HI");
  //0.91
}

function clickMars() {
  alert("HI");
  //0.38
}

function clickJupiter() {
  alert("HI");
  //2.34
}

function clickSaturn() {
  alert("HI");
  //1.06
}

function clickUranus() {
  alert("HI");
  //0.92
}

function clickNeptune() {
  alert("HI");
  //1.19
}

function clickPluto() {
  alert("HI");
  //0.06
}
