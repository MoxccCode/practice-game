const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "C:\Users\Valencia\Desktop\Kummitus.png";

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(x, 50, 100, 100);
    //ctx.drawImage(Image, sx, sy, sw, sh, dx, dy, dw, dh); cuts smaller piece of big image, like motion chart
    ctx.drawImage(playerImage, 0, 0); // image, x, y, size width, size height
    requestAnimationFrame(animate);
}
animate();
