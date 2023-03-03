document.addEventListener("DOMContentLoaded", draw);

function draw() {
  var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" },
  ];

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 3;

  let ypos = 50;
  let length = 30;
  let textYPos = 80;

  for (let i = 0; i < fruit.length; i++) {
    //get attributes for each fruit
    let name = fruit[i].name;
    let color = fruit[i].color;
    let quantity = fruit[i].quantity;

    //draw a bar with its length = quantity of fruit * the size for one unit (length=30)
    ctx.beginPath();
    ctx.rect(5, ypos, quantity * length, 90);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText(name, 10, textYPos);
    ctx.fillText(quantity, 10, textYPos+50);

    ypos += 100;
    textYPos += 100;
  }
}
