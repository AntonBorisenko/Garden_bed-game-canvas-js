"use strict";
//VARIABLES

var Global = {

  initialization: function(canvas) {
    Global.define_download_app(canvas);
    Global.define_status_variables();
    Global.define_main_menu(canvas);
    Global.define_garden_bed(canvas);
    Global.define_game_menu_icons(canvas);
    Global.define_bag(canvas);
    Global.define_stock(canvas);
  },

  define_download_app: function(canvas) {
    var stock_size_px = canvas.width/24;
    window.download_app_text = "italic " + stock_size_px + "px Arial";
    window.download_app_x = canvas.width/10;
    window.download_app_y = canvas.height/2;
  },

  define_status_variables: function(canvas) {
    window.location_now;       //location
    window.bag = false;       //the state of the bag
    window.stock = false;     //the state of the stock
    window.planting = false;  //the state of the planting
    window.plant_for_planting = false;  //Choose plants for planting
    window.stock_selection = false;
  },

  define_main_menu: function(canvas) {
    //fon
    window.main_menu_fon_x = window.main_menu_fon_y = 0;
    window.main_menu_fon_size_x = canvas.width;
    window.main_menu_fon_size_y = canvas.height;
    //main menu items
    window.main_menu_item_size_x = canvas.width/3;
    window.main_menu_item_size_y = canvas.height/7;
    window.main_menu_item_distance = canvas.height/12;
    window.main_menu_item_x = canvas.width/3;
    window.main_menu_on_garden_bed_y = main_menu_item_distance;
    window.main_menu_help_y = main_menu_item_size_y+(main_menu_item_distance*2);
    window.main_menu_new_game_bed_y = (main_menu_item_size_y*2) + (main_menu_item_distance*3);
    window.main_menu_exit_bed_y = (main_menu_item_size_y*3) + (main_menu_item_distance*4);
  },

  define_garden_bed: function(canvas) {
    //garden bed
    window.garden_padding_left = window.garden_padding_right =
    window.garden_padding_top = window.garden_padding_bottom = canvas.height/50;
    window.garden_height = canvas.height - (window.garden_padding_left + window.garden_padding_top);
    window.garden_width = window.garden_height * 1.5;
    //hurvest_img_size
    window.hurvest_img_size = canvas.width/22.5;
    //garden bed places for planting and SIZE PLANT
    var plants_distance = canvas.width/25;
    window.place_for_plant_size = window.plant_size = canvas.width/9;
    //x
    window.first_three_x = canvas.width/10;
    window.second_three_x = first_three_x + (plants_distance*1.5) + plant_size;
    window.third_three_x =  second_three_x + (plants_distance*1.5) + plant_size;
    window.fourth_three_x =  third_three_x + (plants_distance*1.5) + plant_size;
    //y
    window.first_for_y = canvas.width/13;
    window.second_for_y = first_for_y + plants_distance + plant_size;
    window.third_for_y = second_for_y + plants_distance + plant_size;
  },

  define_game_menu_icons: function(canvas) {
    //PROPORTIONS GAME MENU ICONS
    var size_small_icons = canvas.height/9;
    var distance_icons = canvas.width/60;
    //size x bailer, sprayer, shovel, bag
    var size_smal_icons_x = window.game_menu_icon_bailer_size_x = window.game_menu_icon_sprayer_size_x =
    window.game_menu_icon_shovel_size_x = window.game_menu_icon_bag_size_x = size_small_icons;
    //size y bailer, sprayer, shovel, bag
    window.game_menu_icon_bailer_size_y = window.game_menu_icon_sprayer_size_y =
    window.game_menu_icon_shovel_size_y = window.game_menu_icon_bag_size_y = size_small_icons;
    //size x menu, bag
    window.game_menu_icon_menu_size_x = window.game_menu_icon_stock_size_x = (size_smal_icons_x*2) + distance_icons;
    //size y menu, bag
    window.game_menu_icon_menu_size_y = window.game_menu_icon_stock_size_y = size_small_icons;

    //LOCATION GAME MENU ICONS
    //x menu, bailer, shovel, stock
    var position_left_icons_x = window.game_menu_icon_menu_x = window.game_menu_icon_bailer_x =
    window.game_menu_icon_shovel_x = window.game_menu_icon_stock_x =
    garden_width + garden_padding_left + distance_icons;
    //x sprayer, bag
    window.game_menu_icon_sprayer_x = window.game_menu_icon_bag_x =
    position_left_icons_x + size_smal_icons_x + distance_icons;
    //y menu, bailer, sprayer, shovel, bag, stock
    window.game_menu_icon_menu_y = window.garden_padding_top;
    window.game_menu_icon_bailer_y = window.game_menu_icon_sprayer_y =
    game_menu_icon_menu_y + game_menu_icon_menu_size_y + distance_icons;
    window.game_menu_icon_shovel_y = window.game_menu_icon_bag_y =
    game_menu_icon_bailer_y + size_smal_icons_x + distance_icons;
    window.game_menu_icon_stock_y = game_menu_icon_shovel_y + size_smal_icons_x + distance_icons;
  },

  //define bag location and proportions, and bag items
  define_bag: function(canvas) {
    //define bag coordinates and bag size_x
    window.bag_size_x = canvas.width - garden_width - garden_padding_left;
    window.bag_size_y = canvas.height/2;
    window.bag_x = garden_width + garden_padding_left;
    window.bag_y = game_menu_icon_bag_y;
    //define proportion and location bag items
    var distance_icon = canvas.width/80;
    window.size_bag_icon = canvas.height/13;
    //size_x and size_y
    window.bag_potatoes_icon_size_x = window.bag_potatoes_icon_size_y =
    window.bag_tomato_icon_size_x = window.bag_tomato_icon_size_y =
    window.bag_cabbage_icon_size_x = window.bag_cabbage_icon_size_y = size_bag_icon;
    //x
    window.bag_potatoes_icon_x = bag_x + distance_icon;
    window.bag_tomato_icon_x = bag_x + size_bag_icon + (distance_icon*2);
    window.bag_cabbage_icon_x = bag_x + (size_bag_icon*2) + (distance_icon*3);
    //y
    window.bag_potatoes_icon_y = window.bag_tomato_icon_y =
    window.bag_cabbage_icon_y = bag_y + distance_icon;
  },

  define_stock: function(canvas) {
    //define stock coordinates and bag size_x
    window.stock_size_x = canvas.width - (garden_padding_left + garden_padding_right);
    window.stock_size_y = canvas.height - (garden_padding_top + garden_padding_bottom);
    window.stock_x = garden_padding_left;
    window.stock_y = garden_padding_top;
    //icon exit in game
    window.plate_exit_in_game_size_x = canvas.width/6;
    window.plate_exit_in_game_size_y = plate_exit_in_game_size_x/2;
    window.plate_exit_in_game_x = canvas.width - canvas.width/5;
    window.plate_exit_in_game_y = garden_padding_top*2;
    //icon stock
    window.plate_stock_size_x = canvas.width/6;
    window.plate_stock_size_y = plate_stock_size_x/2;
    window.plate_stock_x = garden_padding_left*2;
    window.plate_stock_y = garden_padding_top*2;
    //define proportion and location stock items
    var distance_icon = canvas.width/80;
    window.size_stock_icon = canvas.height/13;
    //size_x and size_y
    window.first_position_icon_size_x = window.first_position_icon_size_y =
    window.second_position_icon_size_x = window.second_position_icon_size_y =
    window.third_position_icon_size_x = window.third_position_icon_size_y = size_stock_icon;
    //x
    window.first_position_icon_x = stock_x + distance_icon;
    window.second_position_icon_x = stock_x + size_stock_icon + (distance_icon*2);
    window.third_position_icon_x = stock_x + (size_stock_icon*2) + (distance_icon*3);
    //y
    var first_three_icon = window.first_position_icon_y = window.second_position_icon_y =
    window.third_position_icon_y = stock_y + (distance_icon*10);
    //stock count
    var stock_size_px = canvas.width/71.1;
    window.stock_count_text = stock_size_px + "px Georgia";
    //x
    window.stock_count_first_x = first_position_icon_x  + size_stock_icon;
    window.stock_count_second_x = second_position_icon_x + size_stock_icon;
    window.stock_count_third_x = third_position_icon_x + size_stock_icon;
    //y
    window.stock_count_first_y = window.stock_count_second_y =
    window.stock_count_third_y = first_three_icon;
  }

}
