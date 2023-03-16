document.addEventListener("DOMContentLoaded", draw);

function draw() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var car1 = new Image();
  car1.src = './green-car.png';
  car1.onload = animate;

  var car2 = new Image();
  car2.src = './blue-car.png';
  car2.onload = animate;

  var text_bubble = new Image();
  text_bubble.src = './text-bubble.png';
  text_bubble.onload = animate;

  x_pos_car1 = 0;
  x_pos_car2 = canvas.width;
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

    ctx.drawImage(car2, x_pos_car2, 350, 350, 200); // draw image in the back
    ctx.drawImage(text_bubble, x_pos_car2-50, 280, 200, 100); // draw image in the back
    ctx.font = "italic 30px Helvetica";
    ctx.fillStyle = "blue";
    ctx.fillText("beep beep", x_pos_car2-30, 320);

    ctx.drawImage(car1, x_pos_car1, 410, 450, 300); // draw front image to overlap the image in the back
    ctx.drawImage(text_bubble, x_pos_car1+300, 380, 200, 100); // draw front image to overlap the image in the back

    ctx.font = "30px Helvetica";
    ctx.fillStyle = "red";
    ctx.fillText("Hey Dan", x_pos_car1+330, 420);

    x_pos_car1 += 4;
    x_pos_car2 -= 4;
    if (x_pos_car1 < canvas.width) {
      requestAnimationFrame(animate); // loop
    }
    if (x_pos_car1 >= canvas.width) {
      // reached end of canvas
      x_pos_car1 = 0; // reset position
      x_pos_car2 = canvas.width;
      requestAnimationFrame(animate);
    }
  }
}
