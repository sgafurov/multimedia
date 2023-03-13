document.addEventListener("DOMContentLoaded", draw);

function draw() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ghostCanvas = document.createElement("canvas"); //holds onto the original image
  ghostCtx = ghostCanvas.getContext("2d");
  ghostCanvas.width = canvas.width;
  ghostCanvas.height = canvas.height;

  //store bee's quotes in an array and display text while looping thru array

  bee1 = new Image();
  bee1.src = "./bee.png";

  bee1.onload = () => {
    ctx.drawImage(bee1, 0, 0, 400, 300); //initial draw of the image at coords (0, 100) and dimensions 400x300
    ghostCtx.drawImage(canvas, 0, 0, 400, 300);
    requestAnimationFrame(moveRight);
  };

  var x = 0;
  function moveRight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //resets canvas so the image doesn't create a streak
    ctx.drawImage(ghostCanvas, x, 100, canvas.width, canvas.height);
    requestAnimationFrame(moveRight);
    x += 2;
    if (x == canvas.width) {
      //loops the image once it has exited the canvas window
      x = 0;
    }
  }

}
