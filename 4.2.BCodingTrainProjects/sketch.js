var offset = 0;
function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  strokeWeight(1);
  stroke(255);
     
  for (var x = 0; x <= width; x += 25) {
    for (var y = 0; y <= height; y += 25) {  
     fill(random(255), 0, random(255));
     ellipse(x, y, 25, 25);
    }
  }
} 