function draw() {
  var canvas = document.getElementById("mycanvas");
  var ctx = canvas.getContext("2d");

  //sky
  ctx.fillStyle = "#1b78c4";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //sun
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();

  //clouds with for-loop
  let xpos = 250;
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = "white";
    ctx.lineWidth = -1;
    ctx.beginPath();
    ctx.arc(xpos, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 20;
    ctx.beginPath();
    ctx.arc(xpos, 70, 55, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 20;
    ctx.beginPath();
    ctx.arc(xpos, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    xpos += 120;
  }

  //ground
  ctx.fillStyle = "#305e07";
  ctx.fillRect(0, 350, canvas.width, canvas.height);

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
  ctx.moveTo(700, 200); // Move pen to bottom-left corner
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

  //base window
  ctx.beginPath();
  ctx.rect(515, 250, 70, 60);
  ctx.stroke();
  ctx.fillStyle = "white";
  ctx.fill();

  //door
  ctx.beginPath();
  ctx.rect(600, 250, 70, 100);
  ctx.stroke();
  ctx.fillStyle = "grey";
  ctx.fill();

  //trees for loop

  //pond

  //garden for loop

  ctx.font = "48px serif";
  ctx.strokeText("House", 50, 400);
}
