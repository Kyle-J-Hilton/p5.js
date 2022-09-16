function setup() {
   createCanvas(1200, 1700);
  ellipseMode(CENTER)
  rectMode(CENTER)
  angleMode(DEGREES)
  //noLoop()
  //pixelDensity(3)
  
  
}

function draw() {
  background(87,83,144);
   let xoffset = 200
  let yoffset = 200
  for (let i = 0; i < 15; i++){
    for (let j = 0; j < 15; j++){
      for (let k = 0; k < 15; k++){
    
     motif1(i*xoffset,j*yoffset)   
      }
    }
   }  
}
function motif1(xpos,ypos){

  strokeWeight(1)
  let rcolor = random(20,200)
  let gcolor = random(30,200)
  let bcolor = random(40,100)
  stroke(rcolor,gcolor,bcolor)
  line(xpos+10,ypos-100,xpos+100,ypos+100)
  line(xpos+25,ypos-100,xpos+100,ypos+100)
  line(xpos+35,ypos-100,xpos+100,ypos+100)
  line(xpos+45,ypos-100,xpos+100,ypos+100)
  line(xpos+55,ypos-100,xpos+100,ypos+100)
  line(xpos+65,ypos-100,xpos+100,ypos+100)
  line(xpos+75,ypos-100,xpos+100,ypos+100)
  line(xpos+85,ypos-100,xpos+100,ypos+100)
  line(xpos+95,ypos-100,xpos+100,ypos+100)
  line(xpos+105,ypos-100,xpos+100,ypos+100)
  line(xpos+115,ypos-100,xpos+100,ypos+100)
  line(xpos+125,ypos-100,xpos+100,ypos+100)
  line(xpos+135,ypos-100,xpos+100,ypos+100)
  line(xpos+145,ypos-100,xpos+100,ypos+100)
  line(xpos+155,ypos-100,xpos+100,ypos+100)
  line(xpos+165,ypos-100,xpos+100,ypos+100)
  line(xpos+175,ypos-100,xpos+100,ypos+100)
  line(xpos+185,ypos-100,xpos+100,ypos+100)
  line(xpos+200,ypos-100,xpos+100,ypos+100)
  
  let r2color = random(100,200)
  let g2color = random(90,200)
  let b2color = random(40,100)
  stroke(r2color,g2color,b2color)
line(xpos-195,ypos-100,xpos-110,ypos+100)
  line(xpos-195,ypos-100,xpos-125,ypos+100)
  line(xpos-195,ypos-100,xpos-135,ypos+100)
  line(xpos-195,ypos-100,xpos-145,ypos+100)
  line(xpos-195,ypos-100,xpos-155,ypos+100)
  line(xpos-195,ypos-100,xpos-165,ypos+100)
  line(xpos-195,ypos-100,xpos-175,ypos+100)
  line(xpos-195,ypos-100,xpos-185,ypos+100)
  line(xpos-195,ypos-100,xpos-195,ypos+100)
  line(xpos-195,ypos-100,xpos-205,ypos+100)
  line(xpos-195,ypos-100,xpos-215,ypos+100)
  line(xpos-195,ypos-100,xpos-225,ypos+100)
  line(xpos-195,ypos-100,xpos-235,ypos+100)
  line(xpos-195,ypos-100,xpos-245,ypos+100)
  line(xpos-195,ypos-100,xpos-255,ypos+100)
  line(xpos-195,ypos-100,xpos-265,ypos+100)
  line(xpos-195,ypos-100,xpos-275,ypos+100)
 line(xpos-195,ypos-100,xpos-285,ypos+100)
  line(xpos-195,ypos-100,xpos-295,ypos+100)
}


function keyPressed() {
save('lightshow.png')
}
