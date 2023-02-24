function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(232, 218, 239);
}
// organic is used to store the list of instances of Organic objects that we will create
var organics = [];
// The variable change stores the rate of rotation and the y coordinate for noise later
var change, colorsPalette;

//set dynamic size for sketch
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0,255);
  change = 0;
  colorsPalette = [color(146, 67, 102,30),
            color(186, 116, 219,30),
            color(118, 135, 172,30),
            color(76, 41, 81,30),
            color(144, 62, 2,30),
            color(178, 93, 119,30),
            color(215, 118, 136,30),
            color(46, 156, 164,30),];
  
  // iti - creates one flower
  
  /* -iti
  value after height controls size of flower, i*random() changes the shape the flower takes during the anim
  last value makes more explicit vector shapes (for lower values); higher values cause errors (flowers not moving/showing)
  */
  for (var i=0;i<60;i++){
    organics.push(new Organic(0.1+0.5*i,width/4,height/3.2,i*5,i*random(150),colorsPalette[floor(random(3))]));
  }

  for (var i=0;i<60;i++){
    organics.push(new Organic(0.1+1*i,width/2,height/2,i*5,i*random(50),colorsPalette[floor(random(3))]));
  }

  for (var i=0;i<60;i++){
    organics.push(new Organic(0.1+1*i/2,width/1.5,height/2.5,i*4,i*random(130),colorsPalette[floor(random(6))]));
  }

}

function draw() {
  background(232, 218, 239);
  for(var i=0; i<organics.length;i++){
      organics[i].show(change);
  }

  change+=0.01;

}

function Organic(radius,xpos,ypos,roughness,angle,color){

  this.radius = radius; //radius of blob
  this.xpos = xpos; //x position of blob
  this.ypos = ypos; // y position of blob
  this.roughness = roughness; // magnitude of how much the circle is distorted
  this.angle = angle; //how much to rotate the circle by
  this.color = color; // color of the blob

  this.show = function(change){

    noStroke(); // no stroke for the circle
    // strokeWeight(0.1); //We can use this to set thickness of the stroke if necessary
    // stroke(200); //We can use this to set the color of the stroke if necessary
    fill(this.color); //color to fill the blob

    push(); //we enclose things between push and pop so that all transformations within only affect items within
    translate(xpos, ypos); //move to xpos, ypos
    rotate(this.angle+change); //rotate by this.angle+change
    beginShape(); //begin a shape based on the vertex points below
    //The lines below create our vertex points
    var off = 0;
    for (var i = 0; i < TWO_PI; i += 0.1) {
      var offset = map(noise(off, change), 0, 1, -this.roughness, this.roughness);
      var r = this.radius + offset;
      var x = r * cos(i/4.5); //iti - this changes the muddled look of the flower and periodically makes vector drawings for its petals 
      var y = r * sin(i*1.2);
      vertex(x, y);
      off += 0.1;
    }
    endShape(); //end and create the shape
    pop();

    }
}