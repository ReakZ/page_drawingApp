var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
let size = 10;
let isPressed = false;
let color = "black";
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let sizePanel = document.getElementById("sizePanel");
let colorChange = document.getElementById("color");
let btnClear = document.getElementById("clear");

//Listeners
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
});

btnPlus.addEventListener("click", () => {
  if (size <= 50) {
    size += 5;
    updateSize();
  }
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    let x = e.offsetX;
    let y = e.offsetY;
    drawCircle(x, y);
  }
});

btnMinus.addEventListener("click", () => {
  if (size >= 10) {
    size -= 5;
    updateSize();
  }
});

colorChange.addEventListener("change", (e) => {
  color = e.target.value;
});

btnClear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

//Functions
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function updateSize() {
  sizePanel.innerHTML = size;
}
