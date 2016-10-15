"use strict";
//object main menu
var Main_menu = {

  //This array needs to track clicks
  array_menu: [],

  make: function() {
    //zero out an array
    Main_menu.array_menu = [];

    function create_menu_item(img, x, y, Obj_name) {
      var size_x = main_menu_item_size_x;
      var size_y = main_menu_item_size_y;
      //ctx.drawImage(img, x, y, size_x, size_y);
      var object_menu = new Main_menu.create_object(Obj_name, x, y, size_x, size_y, img);
      //Add in array
      Main_menu.array_menu.push(object_menu);
      if(Main_menu.array_menu.length == 4) {
        //responce on the task
        Model.responce("main menu complete");
      }
    }
    //Create main menu
    create_menu_item(Download_app.images_main_menu[0], main_menu_item_x, main_menu_on_garden_bed_y, "on_garden_bed");
    create_menu_item(Download_app.images_main_menu[1], main_menu_help_x, main_menu_help_y, "help");
    create_menu_item(Download_app.images_main_menu[2], main_menu_new_game_x, main_menu_new_game_y, "new_game");
    create_menu_item(Download_app.images_main_menu[3], main_menu_exit_x, main_menu_exit_y, "exit");
  },

  //Prototype main menu items
  create_object: function(Obj_name,x,y,size_x,size_y,img) {
   this.Obj_name = Obj_name;
   this.x = x;
   this.y = y;
   this.size_x = size_x;
   this.size_y = size_y;
   this.img = img;
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
    var decision = confirm("Вы уверены что хотите начать новую игру?");
    if(decision == true) {
      Model.reset_all();
      On_garden_bed.click_on_the_item();
    }
  }
}

//maim menu item - "Exit"
var Exit = {
  click_on_the_item: function() {
    alert('exit!');
  }
}
