function setup() {
  createCanvas(1000, 1000);
  background("Black")
}

function draw() {
  stroke("blue")
  fill("red")
  
  
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY,20,20);
  }
}