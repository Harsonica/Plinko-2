var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var ground;
var b;
var division1, divison2, division3, division4, division5, division6, division7;
var score=0; 
var particle;
var turn = 0; 

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(30, 40, 70, 80); 
  division1 = new  Division(20, 30, 20, 100);
  division2 = new  Division(40, 60, 20, 100);
  division3 = new  Division(60, 90, 20, 100);
  division4 = new  Division(80, 120, 20, 100);
  division5 = new  Division(100, 180, 20, 100);
  division6 = new  Division(120, 210, 20, 100);
  division7 = new  Division(140, 240, 20, 100);
  plinkos = new Plinko(40,20,10);
  particles = new Particle(40, 20, 10);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(frameCount%60===0){
     particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));

     for (var k=0; k<=width; k=k + 80){
     divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));

     }

     for (var k=0; k<=width; k=k + 160){
      divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
 
      }


      for (var k=0; k<=width; k=k + 240){
        divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
   
        }

        for (var k=0; k<=width; k=k + 320){
          divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
     
          }

          for (var k=0; k<=width; k=k + 400){
            divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
       
            }

            for (var k=0; k<=width; k=k + 480){
              divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
         
              }

              for (var k=0; k<=width; k=k + 560){
                divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
           
                }

                for (var j = 0; j< particles.length; j++){

                  particles[j].display();
                }
                for (var k = 0; k< divisions.length; k++){

                  divisions[k].display();
                }

                for (var a = 0; a< plinkos.length; a++){

                  plinkos[a].display();
                }

                for (var j = 40; j<=width; j = j+50)
                {
                  plinkos.push(new Plinko(j,75));
                }
                for (var j = 15; j<= width-10; j=j+50)
                {
                  plinkos.push(new Plinko(j,175));
                }

                for (var b = 50; b<=width; b = b+60)
                {
                  plinkos.push(new Plinko(j,85));
                }
                for (var b = 25; b<= width-10; b=b+60)
                {
                  plinkos.push(new Plinko(b,185));
                }

                if(particle!=null)
                {
                  particle.display();

                  if(particle.body.position.y>760)
                  {
                    if(particle.body.position.x<300)
                    {
                      score = score+50;                    }
                      particle=null;
                      if(count>=5)gameState="end";
                    }
                }

  }
     ground.display();
     division1.display();
     division2.display();
     division3.display();
     division4.display();
     division5.display();
     division6.display();
     division7.display();
     plinkos.display();

}

function mousePressed()
{
    if(gameState!=="end")
    {
      count++;
      particle=new Particle(mouseX,10,10,19);
    }


}