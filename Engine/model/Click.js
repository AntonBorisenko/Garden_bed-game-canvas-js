"use strict";
//Object click
var Click = {

  onclick: function(event) {
    //We get the coordinates of the canvas on the page
    var el = document.getElementById('canvas');
    var x_canvas = findPosX(el);//functions.js
    var y_canvas = findPosY(el);//functions.js
    //We get the coordinates of the click in the canvas
    var x = event.pageX - x_canvas;
    var y = event.pageY - y_canvas;

    //determine the place where there was a click
    switch(location_now) {
      case "main menu":
        Click.main_menu(x,y);
      break;

      case "game":
        Click.game(x,y);
      break;

      case "bag":
        Click.bag(x,y);
      break;

      case "stock":
        Click.stock(x,y);
      break;

      case "shop":
        Click.shop(x,y);
      break;

      case "planting":
        Click.planting(x,y);
      break;

      case "bailer":
        Click.bailer(x,y);
      break;

      case "shovel":
        Click.shovel(x,y);
      break;
    }

  },

  //Check whether a click on the main menu
  main_menu: function(x,y) {
    var menu = Main_menu.array_menu;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].size_x) ) && (y > menu[i].y && y < (menu[i].y + menu[i].size_y)) )  {
        Model.main_menu_click(menu[i].Obj_name);
      }
    }
  },

  //Check whether a click on the menu item
  game: function(x,y) {
    var menu = Game_menu.array_menu;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].size_x) ) && (y > menu[i].y && y < (menu[i].y + menu[i].size_y)) ) {
        Model.game_menu_click(menu[i].Obj_name);
      }
    }
    //check on the harvest
    if(Garden_bed.images_for_hurvest.length > 0) {
      var hurvest = Garden_bed.images_for_hurvest;
      for(var i = 0; i < hurvest.length; i++) {
        if((x > hurvest[i].x && x < (hurvest[i].x + hurvest[i].size) ) && (y > hurvest[i].y && y < (hurvest[i].y + hurvest[i].size)) ) {
          //define number place in array Garden_bed.plants
          for(var n = 0; n < Garden_bed.plants.length; n++) {
            if(Garden_bed.plants[n].place == hurvest[i].place) {
              var number_plant = n;
              var id_plant = Garden_bed.plants[n].id;
            }
          }
          Model.hurvesting(hurvest[i].place, number_plant, i, id_plant);//hurvesting
        }
      }
    }
  },

  //if the open bag for plant selection
  bag: function(x,y) {
    if((x > Bag.x && x < (Bag.x + Bag.size_x)) && (y > Bag.y && y < (Bag.y + Bag.size_y)) ) {
       var selection = Bag.positions;
       var j = 0;
       for(var i = 0; i < Game_menu.array_plants.length; i++) {
         if(Game_menu.array_plants[i].count > 0) {
           if((x > selection[j].x && x < (selection[j].x + selection[j].size_x)) && (y > selection[j].y && y < (selection[j].y + selection[j].size_y)) ) {
              Model.bag(i);
           }
           j++;
         }
       }
     } else {
        Model.bag(false);
     }
  },

  //if the open stock for plant selection
  stock: function(x,y) {
    //exit in game
    if((x > stock_exit_in_game_x && x < (stock_exit_in_game_x + stock_exit_in_game_size_x)) && (y > stock_exit_in_game_y && y < (stock_exit_in_game_y + stock_exit_in_game_size_y)) ) {
      Model.stock(false);
    }
   //selection plants
    var selection = Stock.positions;
    var j = 0;
    for(var i = 0; i < Game_menu.array_plants.length; i++) {
      if(Game_menu.array_plants[i].count > 0) {
        if((x > selection[j].x && x < (selection[j].x + selection[j].size_x)) && (y > selection[j].y && y < (selection[j].y + selection[j].size_y)) ) {
          Model.stock(i);
        }
        j++;
      }
    }

  },

  shop: function(x,y) {
    //exit in game
    if((x > shop_exit_in_game_x && x < (shop_exit_in_game_x + shop_exit_in_game_size_x)) && (y > shop_exit_in_game_y && y < (shop_exit_in_game_y + shop_exit_in_game_size_y)) ) {
      Model.shop(false);
    }

  },

  //Planting plant in the place
  planting(x,y) {
    var places = Garden_bed.places_for_planting;
    var size = 100;
    for(var i = 0; i < places.length; i++) {
      if((x > places[i].x && x < (places[i].x + size)) && (y > places[i].y && y < (places[i].y + size)) ) {
        if(places[i].plant == false) {
          //give place number
          Model.planting(i);
        }
      }
    }
  },

  //function for watering plant
  bailer: function(x,y) {
    var plants = Garden_bed.plants;
    var bailer_icon = Game_menu.array_menu[1];
    for(var i = 0; i < plants.length; i++) {
      if((x > plants[i].x && x < (plants[i].x + plants[i].size)) && (y > plants[i].y && y < (plants[i].y + plants[i].size)) ) {
        Model.watering(plants[i]);
        Model.cansel_use_item();
      }
    }
    //or cansel
    if((x > bailer_icon.x && x < (bailer_icon.x + bailer_icon.size_x)) && (y >  bailer_icon.y && y < ( bailer_icon.y +  bailer_icon.size_y)) ) {
      Model.cansel_use_item();
    }
  },

  //function for digging up plants
  shovel: function(x,y) {
    var plants = Garden_bed.plants;
    var shovel_icon = Game_menu.array_menu[3];
    for(var i = 0; i < plants.length; i++) {
      if((x > plants[i].x && x < (plants[i].x + plants[i].size)) && (y > plants[i].y && y < (plants[i].y + plants[i].size)) ) {
        if(plants[i].status != "grown") {
          Model.digging(plants[i].place, i);//digging
        }
      }
    }
    //or cansel
    if((x > shovel_icon.x && x < (shovel_icon.x + shovel_icon.size_x)) && (y >  shovel_icon.y && y < ( shovel_icon.y +  shovel_icon.size_y)) ) {
      Model.cansel_use_item();
    }
  }

}
