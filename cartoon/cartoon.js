document.addEventListener("DOMContentLoaded", draw);

function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 3;

  //sky
  ctx.fillStyle = "#1b78c4";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //ground
  ctx.fillStyle = "#305e07";
  ctx.fillRect(0, 350, canvas.width, canvas.height);

  //sun
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.shadowColor = "yellow";
  ctx.shadowBlur = 50;
  ctx.fill();
  ctx.shadowBlur = 0;

  ctx.font = "30px Helvetica";
  ctx.strokeStyle = "red";
  ctx.strokeText("S", 90, 55);
  ctx.strokeText("U", 90, 85);
  ctx.strokeText("N", 90, 115);
  ctx.strokeStyle = "black";

  //clouds with for-loop
  let xpos = 250;
  ctx.strokeStyle = "white";
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = "white";
    ctx.lineWidth = -1;
    ctx.beginPath();
    ctx.arc(xpos, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 30;
    ctx.beginPath();
    ctx.arc(xpos, 70, 55, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 30;
    ctx.beginPath();
    ctx.arc(xpos, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 120;
  }

  ctx.strokeStyle = "black";
  ctx.font = "80px Helvetica";
  ctx.strokeText("C", 215, 90);
  ctx.strokeText("L", 315, 110);
  ctx.strokeText("O", 380, 95);
  ctx.strokeText("U", 460, 115);
  ctx.strokeText("D", 550, 90);
  ctx.strokeText("S", 650, 100);

  //back mountain for-loop
  xpos = 50;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(xpos, 350); // Move pen to bottom-left corner of triangle
    xpos += 150;
    ctx.lineTo(xpos, 150); // Line to top corner
    xpos += 150;
    ctx.lineTo(xpos, 350); // Line to bottom-right corner
    ctx.closePath(); // Line to bottom-left corner
    ctx.fillStyle = "#182745";
    //ctx.fillStyle = "#6c839e";
    ctx.fill();
    xpos -= 70;
  }

  ctx.font = "70px Helvetica";
  ctx.strokeStyle = "white";
  ctx.strokeText("tains", 210, 215);
  ctx.strokeStyle = "black";

  //front mountain for-loop
  xpos = 30;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(xpos, 350); // Move pen to bottom-left corner of triangle
    xpos += 150;
    ctx.lineTo(xpos, 150); // Line to top corner
    xpos += 150;
    ctx.lineTo(xpos, 350); // Line to bottom-right corner
    ctx.closePath(); // Line to bottom-left corner
    ctx.fillStyle = "#8ea5d4";
    ctx.fill();
    xpos -= 70;
  }

  //chimney smoke
  let ypos = 80;
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = "grey";
    ctx.lineWidth = -1;
    ctx.beginPath();
    ctx.arc(513, ypos, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "grey";
    ctx.lineWidth = -1;
    ctx.beginPath();
    ctx.arc(518, ypos, 15, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ypos += 20;
  }

  //chimney
  ctx.beginPath();
  ctx.rect(500, 150, 30, 100);
  ctx.stroke();
  ctx.fillStyle = "#361006";
  ctx.fill();

  //house base
  ctx.beginPath();
  ctx.rect(500, 200, 200, 150);
  ctx.stroke();
  ctx.fillStyle = "#dbd1ad";
  ctx.fill();

  //roof
  ctx.beginPath();
  ctx.moveTo(700, 200); // Move pen to bottom-left corner of triangle
  ctx.lineTo(600, 100); // Line to top corner
  ctx.lineTo(500, 200); // Line to bottom-right corner
  ctx.closePath(); // Line to bottom-left corner
  ctx.fillStyle = "#631502";
  ctx.fill();

  //attic window
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(600, 155, 25, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.beginPath(); //details
  ctx.moveTo(600, 130);
  ctx.lineTo(600, 180);
  ctx.stroke();
  ctx.moveTo(575, 155);
  ctx.lineTo(625, 155);
  ctx.stroke();

  //base window
  ctx.beginPath();
  ctx.rect(515, 250, 70, 60);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.beginPath(); //details
  ctx.moveTo(515, 280);
  ctx.lineTo(585, 280);
  ctx.stroke();
  ctx.moveTo(550, 250);
  ctx.lineTo(550, 310);
  ctx.stroke();

  //door
  ctx.beginPath();
  ctx.rect(600, 250, 70, 100);
  ctx.stroke();
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.beginPath(); //details
  ctx.fillStyle = "black";
  ctx.arc(660, 300, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  ctx.font = "48px Helvetica";
  ctx.strokeStyle = "#f25c5c";
  ctx.strokeText("House", 500, 400);

  ctx.strokeStyle = "white";
  ctx.font = "70px Helvetica";
  ctx.strokeText("Moun", 15, 215);

  ctx.font = "italic 30px Helvetica";
  ctx.strokeStyle = "black";
  ctx.strokeText("'Objects and their descriptions'", 15, 450);
}
