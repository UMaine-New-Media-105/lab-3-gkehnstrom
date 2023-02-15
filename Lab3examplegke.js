function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  Griffin(100,100,1,"black")
  

}

function Griffin(x,y,size,ifColor){
  
   if(mouseX<100){
    fill('blue');
 
  } else if(mouseX>=100&mouseX<200){
    fill('orange')
  }
    
    else if(mouseX>=100&mouseX<300){
      fill('purple')
    }
    else if(mouseX>=100&mouseX<400){
      fill(ifColor)
    }
  
  //shape
  ellipse(100,100,100)
  ellipse(150,100,90)
  ellipse(50,100,90)
  
  
  
  
  
  
  
}
  
  
  
  
  
