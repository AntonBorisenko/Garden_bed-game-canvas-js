"use strict";
//object main menu
var Main_menu = {

  //This array needs to track clicks
  array_menu: [],

  make: function() {
    //zero out an array
    Main_menu.array_menu = [];
    //Draw fone
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(0,0,900,600);

    function create_menu_item(img, x, y, Obj_name) {
      var size_x = 290;
      var size_y = 70;
      ctx.drawImage(img, x, y, size_x, size_y);
      var object_menu = new Main_menu.create_object(Obj_name, x, x+size_x, y, y+size_y);
      //Add in array
      Main_menu.array_menu.push(object_menu);
      if(Main_menu.array_menu.length == 4) {
        //responce on the task
        Model.responce("main menu complete");
      }
    }
    //Create main menu
    create_menu_item(Download_app.images_main_menu[0], 310, 80, "on_garden_bed");
    create_menu_item(Download_app.images_main_menu[1], 310, 200, "help");
    create_menu_item(Download_app.images_main_menu[2], 310, 320, "new_game");
    create_menu_item(Download_app.images_main_menu[3], 310, 440, "exit");
  },

  //Prototype main menu items
  create_object: function(Obj_name,x1,x2,y1,y2) {
   this.Obj_name = Obj_name;
   this.x1 = x1;
   this.x2 = x2;
   this.y1 = y1;
   this.y2 = y2;
  },

  click_on_the_item: function(item) {
    switch(item) {
      case "on_garden_bed":
        On_garden_bed.click_on_the_item();
        break;
      case "help":
        Help.click_on_the_item();
        break;
      case "new_game":
        New_game.click_on_the_item();
        break;
      case "exit":
        Exit.click_on_the_item();
        break;
     }
  }


}


//maim menu item - "On garden bed"
var On_garden_bed = {
  click_on_the_item: function() {
    Model.responce("start game");
  }
}

//maim menu item - "Help"
var Help = {
  click_on_the_item: function() {
    alert("help!");
  }
}

//maim menu item - "New game"
var New_game = {
  click_on_the_item: function() {
    alert("new game!");
  }
}

//maim menu item - "Exit"
var Exit = {
  click_on_the_item: function() {
    alert('exit!');
  }
}
