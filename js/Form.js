class Form{
     constructor(){
          
     }

     hide(){
          gretting.hide();
          button.hide();
          input.hide();
     }

     display(){
          var title = createElement('h2');
          title.html("Car Racing Game");
          title.position(130,10);

          var input = createInput("name");
          var button = createButton("play");
          var gretting = createElement('h3');

          input.position(300,200);
          button.position(500,200);

          button.mousePressed(function(){
               input.hide();
               button.hide();
               player.name = input.value();
               playerCount = playerCount+1;
               player.index = playerCount;
               player.update(name);
               player.updateCount(playerCount);
               gretting.html("Hello"+name);
               //text("hello"+name);
               gretting.position(200,200);
          })

     }
}