function setup() {
  createCanvas(1980, 720);
 background(255, 100, 100);
}

function draw()

 {


  if (mouseIsPressed) {
    fill(0,0,255);
  } else {
    fill(random(255,200,90));
  }
  ellipse(mouseX, mouseY,random(10,90));
noStroke();

}
