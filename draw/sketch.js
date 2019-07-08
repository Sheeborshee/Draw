function setup() {
  createCanvas(1980, 720);
 background(255, 100, 100);
}

function draw()

 {


  if (mouseIsPressed) {
    fill(200,30,20);
  } else {
    fill(random(255,200,90));
  }
  ellipse(mouseX, mouseY, random(10, 80));
noStroke();

}
