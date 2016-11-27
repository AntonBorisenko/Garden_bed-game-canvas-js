'use strict';

var Drag_and_drop = {

  onmousedown: function(event) {
    //We get the coordinates of the canvas on the page
    var el = document.getElementById('canvas');
    var x_canvas = findPosX(el);
    var y_canvas = findPosY(el);
    //We get the coordinates of the click in the canvas
    var x = event.pageX - x_canvas;
    var y = event.pageY - x_canvas;

    switch(location_now) {
      case('game'):
        Drag_and_drop.game(x, y);
      break;
    }

  },

  onmouseup: function() {
    //We get the coordinates of the canvas on the page
    var el = document.getElementById('canvas');
    var x_canvas = findPosX(el);
    var y_canvas = findPosY(el);
    //We get the coordinates of the click in the canvas
    var x = event.pageX - x_canvas;
    var y = event.pageY - x_canvas;

    if(bailer) {
      Drag_and_drop.bailer(x, y);
    } else if(sprayer) {
      Drag_and_drop.sprayer(x, y);
    } else if(shovel) {
      Drag_and_drop.shovel(x, y);
    }
    Model.game_munu_onmousedown();
  },

  game: function(x, y) {
    var menu = Game_menu.array_menu_drag_and_drop;
    for(var i = 0; i < menu.length; i++) {
      if((x > menu[i].x && x < (menu[i].x + menu[i].size_x) ) && (y > menu[i].y && y < (menu[i].y + menu[i].size_y)) ) {
        Model.game_menu_d_a_d(menu[i].Obj_name);
        return;
      }
    }
  },

  bailer: function(x, y) {
    var plants = Garden_bed.plants;
    var bailer_icon = Game_menu.array_menu_drag_and_drop[0];
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

  sprayer: function(x, y) {
    alert("sprayer");
  },

  shovel: function(x, y) {
    var plants = Garden_bed.plants;
    var shovel_icon = Game_menu.array_menu_drag_and_drop[2];
    for(var i = 0; i < plants.length; i++) {
      if((x > plants[i].x && x < (plants[i].x + plants[i].size)) && (y > plants[i].y && y < (plants[i].y + plants[i].size)) ) {
        if(plants[i].status != "grown") {
          Model.digging(plants[i].place, i);
        }
      }
    }
    //or cansel
    if((x > shovel_icon.x && x < (shovel_icon.x + shovel_icon.size_x)) && (y >  shovel_icon.y && y < ( shovel_icon.y +  shovel_icon.size_y)) ) {
      Model.cansel_use_item();
    }
  }

}
