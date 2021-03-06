"use strict";
//VARIABLES

var Global = {

  initialization: function(canvas) {
    Global.define_download_app(canvas);
    Global.define_status_variables();
    Global.define_main_menu(canvas);
    Global.define_garden_bed(canvas);
    Global.define_game_menu_icons(canvas);
    Global.define_plants_values(canvas);
    Global.define_bag(canvas);
    Global.define_stock(canvas);
    Global.define_shop(canvas);
    Global.define_variables_for_game_effects(canvas);
  },

  define_download_app: function(canvas) {
    var stock_size_px = canvas.width/24;
    window.download_app_text = "italic " + stock_size_px + "px Arial";
    window.download_app_x = canvas.width/10;
    window.download_app_y = canvas.height/2;
  },

  define_status_variables: function() {
    window.location_now;                  //location
    window.bag = false;                   //the state of the bag
    window.bailer = false;                //drag and drop
    window.sprayer = false;               //drag and drop
    window.shovel = false;                //drag and drop
    window.stock = false;                 //the state of the stock
    window.shop = false;
    window.planting = false;              //the state of the planting
    window.plant_for_planting = false;    //Choose plants for planting
    window.stock_selection = false;
    window.sell_now = false;              //effects
    window.buy_now = false;              //effects
    window.hurvest_experience = false;    //effects
    window.rain = true; //effects
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
    window.main_menu_help_x = canvas.width/2.9;
    window.main_menu_new_game_x = canvas.width/2.8;
    window.main_menu_exit_x = canvas.width/2.8;
    window.main_menu_on_garden_bed_y = main_menu_item_distance*1.5;
    window.main_menu_help_y = main_menu_item_size_y+(main_menu_item_distance*1.8);
    window.main_menu_new_game_y = (main_menu_item_size_y*2) + (main_menu_item_distance*2.1);
    window.main_menu_exit_y = (main_menu_item_size_y*3) + (main_menu_item_distance*2.4);
  },

  define_garden_bed: function(canvas) {
    //garden bed
    window.garden_padding_left = window.garden_padding_right =
    window.garden_padding_top = window.garden_padding_bottom = canvas.height/50;
    window.garden_height = canvas.height - (window.garden_padding_left + window.garden_padding_top);
    window.garden_width = window.garden_height * 1.5;
    //money User
    var money_user_size_px = canvas.width/40;
    window.money_user_text = "italic " + money_user_size_px + "px Arial";
    window.money_user_x = garden_padding_left*2;
    window.money_user_y = garden_padding_top*3.5;
    //level User
    window.level_user_size_px = money_user_size_px;
    window.level_user_text = "italic " + level_user_size_px + "px Arial";
    window.level_user_x = money_user_x + canvas.width/6.2;
    window.level_user_y = money_user_y;
    //experience User
    window.experience_user_size_px = money_user_size_px;
    window.experience_user_text = "italic " + experience_user_size_px + "px Arial";
    window.experience_user_x = money_user_x + canvas.width/3.16;
    window.experience_user_y = money_user_y;
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
    //for drag and drop
    window.last_move_x = false;
    window.last_move_y = false;
  },

  define_game_menu_icons: function(canvas) {
    //PROPORTIONS GAME MENU ICONS
    var size_small_icons = window.game_menu_small_icons_size = canvas.height/9;
    var distance_icons = canvas.width/60;
    //size x bailer, sprayer, shovel, bag
    var size_smal_icons_x = window.game_menu_icon_bailer_size_x = window.game_menu_icon_sprayer_size_x =
    window.game_menu_icon_shovel_size_x = window.game_menu_icon_bag_size_x = size_small_icons;
    //size y bailer, sprayer, shovel, bag
    window.game_menu_icon_bailer_size_y = window.game_menu_icon_sprayer_size_y =
    window.game_menu_icon_shovel_size_y = window.game_menu_icon_bag_size_y = size_small_icons;
    //size x menu, bag
    window.game_menu_icon_menu_size_x = window.game_menu_icon_stock_size_x =
    window.game_menu_icon_shop_size_x =(size_smal_icons_x*2) + distance_icons;
    //size y menu, bag
    window.game_menu_icon_menu_size_y = window.game_menu_icon_stock_size_y =
    window.game_menu_icon_shop_size_y = size_small_icons;

    //LOCATION GAME MENU ICONS
    //x menu, bailer, shovel, stock
    var position_left_icons_x = window.game_menu_icon_menu_x = window.game_menu_icon_bailer_x =
    window.game_menu_icon_shovel_x = window.game_menu_icon_stock_x = window.game_menu_icon_shop_x =
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
    window.game_menu_icon_shop_y = window.game_menu_icon_stock_y + size_smal_icons_x + distance_icons;

  },

  define_plants_values: function(canvas) {
    //values for progress of plant growth
    window.width_plant_progress = canvas.width / 21.33;
    window.height_plant_progress = width_plant_progress / 3.75;
    window.radius_plant_progress = height_plant_progress / 2;
    //text_progress
    var size_px = canvas.width/60;
    window.plant_font_progress = size_px + "px Georgia";
    window.plant_progress_text_indent_x = canvas.width / 150;
    window.plant_progress_text_indent_y = canvas.width / 30;
    //prices
    window.potatoes_price = 6;
    window.potatoes_experience = 12;
    window.tomato_price = 10;
    window.tomato_experience = 18;
    window.cabbage_price = 8;
    window.cabbage_experience = 17;
    //grown time
    window.potatoes_grown_time = 14000;
    window.tomato_grown_time = 190000;
    window.cabbage_grown_time = 12000;
  },

  //define bag location and proportions, and bag items
  define_bag: function(canvas) {
    //define bag coordinates and bag size_x
    window.bag_size_x = canvas.width - garden_width - garden_padding_left;
    window.bag_size_y = canvas.height/2;
    window.bag_x = garden_width + garden_padding_left;
    window.bag_y = game_menu_icon_bag_y;
    //////////////////////////////////////////
    //define proportion and location bag items
    var distance_icon = canvas.width/80;
    window.size_bag_icon_x = canvas.height/13;
    window.size_bag_icon_y = size_bag_icon_x*8/5;
    //size_x and size_y
    window.bag_first_position_icon_size_x = window.bag_first_position_icon_size_y =
    window.bag_second_position_icon_size_x = window.bag_second_position_icon_size_y =
    window.bag_third_position_icon_size_x = window.bag_third_position_icon_size_y = size_bag_icon_x;
    //x
    window.bag_first_position_icon_x = bag_x + distance_icon;
    window.bag_second_position_icon_x = bag_x + size_bag_icon_x + (distance_icon*2);
    window.bag_third_position_icon_x = bag_x + (size_bag_icon_x*2) + (distance_icon*3);
    //y
    var first_three_icon = window.bag_first_position_icon_y = window.bag_second_position_icon_y =
    window.bag_third_position_icon_y = bag_y + distance_icon;
    //bag count
    var bag_size_px = canvas.width/71.1;
    window.bag_count_text = bag_size_px + "px Georgia";
    //x
    window.bag_count_first_x = bag_first_position_icon_x  + size_bag_icon_x;
    window.bag_count_second_x = bag_second_position_icon_x + size_bag_icon_x;
    window.bag_count_third_x = bag_third_position_icon_x + size_bag_icon_x;
    //y
    window.bag_count_first_y = window.bag_count_second_y =
    window.bag_count_third_y = first_three_icon;
    //////////////////////////////////////////////////
    //BAG IN SHOP
    //icon stock
    window.plate_bag_size_x = canvas.height/9;
    window.plate_bag_size_y = plate_bag_size_x;
    window.plate_bag_x = garden_padding_left*6;
    window.plate_bag_y = garden_padding_top*2;
    //money User
    var bag_money_user_size_px = canvas.width/50;
    window.bag_money_user_text = "italic " + bag_money_user_size_px + "px Arial";
    window.bag_money_user_x = garden_padding_left*4;
    window.bag_money_user_y = (garden_padding_top*5) + plate_bag_size_y;
    //Define proportion and location bag in SHOP items
    window.bag_in_shop_x = garden_padding_left;
    window.bag_in_shop_y = garden_padding_top;
    var distance_icon = canvas.width/80;
    window.size_bag_in_shop_icon_x = canvas.height/13;
    window.size_bag_in_shop_icon_y = size_bag_icon_x*8/5;
    //size_x
    window.bag_in_shop_first_position_icon_size_x = window.bag_in_shop_second_position_icon_size_x =
    window.bag_in_shop_third_position_icon_size_x = size_bag_in_shop_icon_x;
    //size_y
    window.bag_in_shop_first_position_icon_size_y = window.bag_in_shop_second_position_icon_size_y =
    window.bag_in_shop_third_position_icon_size_y = size_bag_in_shop_icon_y;
    //x
    window.bag_in_shop_first_position_icon_x = bag_in_shop_x + distance_icon;
    window.bag_in_shop_second_position_icon_x = bag_in_shop_x + size_bag_in_shop_icon_x + (distance_icon*2);
    window.bag_in_shop_third_position_icon_x = bag_in_shop_x + (size_bag_in_shop_icon_x*2) + (distance_icon*3);
    //y
    var first_three_icon = window.bag_in_shop_first_position_icon_y = window.bag_in_shop_second_position_icon_y =
    window.bag_in_shop_third_position_icon_y = bag_in_shop_y + (distance_icon*11);
    //bag in shop count
    var bag_in_shop_size_px = canvas.width/71.1;
    window.bag_in_shop_count_text = bag_in_shop_size_px + "px Georgia";
    //x
    window.bag_in_shop_count_first_x = bag_in_shop_first_position_icon_x  + size_bag_in_shop_icon_x;
    window.bag_in_shop_count_second_x = bag_in_shop_second_position_icon_x + size_bag_in_shop_icon_x;
    window.bag_in_shop_count_third_x = bag_in_shop_third_position_icon_x + size_bag_in_shop_icon_x;
    //y
    window.bag_in_shop_count_first_y = window.bag_in_shop_count_second_y =
    window.bag_in_shop_count_third_y = first_three_icon;
  },

  define_stock: function(canvas) {
    //define stock coordinates and bag size_x
    window.stock_size_x = canvas.width - (garden_padding_left + garden_padding_right);
    window.stock_size_y = canvas.height - (garden_padding_top + garden_padding_bottom);
    window.stock_x = garden_padding_left;
    window.stock_y = garden_padding_top;
    //icon exit in game
    window.stock_exit_in_game_size_x = canvas.width/8;
    window.stock_exit_in_game_size_y = stock_exit_in_game_size_x/2;
    window.stock_exit_in_game_x = canvas.width - canvas.width/7;
    window.stock_exit_in_game_y = garden_padding_top*2;
    //icon stock
    window.plate_stock_size_x = canvas.width/6;
    window.plate_stock_size_y = plate_stock_size_x/2;
    window.plate_stock_x = garden_padding_left*2;
    window.plate_stock_y = garden_padding_top*2;
    //money User
    var stock_money_user_size_px = canvas.width/50;
    window.stock_money_user_text = "italic " + stock_money_user_size_px + "px Arial";
    window.stock_money_user_x = garden_padding_left*4;
    window.stock_money_user_y = (garden_padding_top*5) + plate_stock_size_y;
    //define proportion and location stock items
    var distance_icon = canvas.width/80;
    window.size_stock_icon = canvas.height/13;
    //size_x and size_y
    window.stock_first_position_icon_size_x = window.stock_first_position_icon_size_y =
    window.stock_second_position_icon_size_x = window.stock_second_position_icon_size_y =
    window.stock_third_position_icon_size_x = window.stock_third_position_icon_size_y = size_stock_icon;
    //x
    window.stock_first_position_icon_x = stock_x + distance_icon;
    window.stock_second_position_icon_x = stock_x + size_stock_icon + (distance_icon*2);
    window.stock_third_position_icon_x = stock_x + (size_stock_icon*2) + (distance_icon*3);
    //y
    var first_three_icon = window.stock_first_position_icon_y = window.stock_second_position_icon_y =
    window.stock_third_position_icon_y = stock_y + (distance_icon*13);
    //stock count
    var stock_size_px = canvas.width/71.1;
    window.stock_count_text = stock_size_px + "px Georgia";
    //x
    window.stock_count_first_x = stock_first_position_icon_x  + size_stock_icon;
    window.stock_count_second_x = stock_second_position_icon_x + size_stock_icon;
    window.stock_count_third_x = stock_third_position_icon_x + size_stock_icon;
    //y
    window.stock_count_first_y = window.stock_count_second_y =
    window.stock_count_third_y = first_three_icon;
  },

  define_shop: function(canvas) {
    //define stock coordinates and bag size_x
    window.shop_size_x = canvas.width - (garden_padding_left + garden_padding_right);
    window.shop_size_y = canvas.height - (garden_padding_top + garden_padding_bottom);
    window.shop_x = garden_padding_left;
    window.shop_y = garden_padding_top;
    //icon exit in game
    window.shop_exit_in_game_size_x = canvas.width/8;
    window.shop_exit_in_game_size_y = shop_exit_in_game_size_x/2;
    window.shop_exit_in_game_x = canvas.width - canvas.width/7;
    window.shop_exit_in_game_y = garden_padding_top*2;
    //MAIN MENU
    var main_distance_icon = canvas.height/16;
    //size main menu icons
    window.shop_icons_size_x = canvas.width/4;
    window.shop_icons_size_y = shop_icons_size_x/3.7;
    //x main menu icons
    window.all_for_garden_x =  window.fertilizers_x =
    window.seed_x = canvas.width/6;
    window.all_for_billets_x = all_for_garden_x + shop_icons_size_x + main_distance_icon*1.5;
    //y main menu icons
    window.all_for_garden_y = window.all_for_billets_y = main_distance_icon*0.85;
    window.fertilizers_y = main_distance_icon*4.1;
    window.seed_y = main_distance_icon*7.3;

    //SEED
    //money User
    var shop_money_user_size_px = canvas.width/50;
    window.shop_money_user_text = "italic " + shop_money_user_size_px + "px Arial";
    window.shop_money_user_x = garden_padding_left*4;
    window.shop_money_user_y = (garden_padding_top*5) + plate_stock_size_y;
    //shop plate
    window.shop_plate_size_x = canvas.width/6;
    window.shop_plate_size_y = shop_plate_size_x/2;
    window.shop_plate_x = canvas.width - canvas.width/1.7;
    window.shop_plate_y = garden_padding_top*2;
    //define proportion and location shop items
    var distance_icon = canvas.width/80;
    window.size_shop_icon_x = canvas.height/13;
    window.size_shop_icon_y = size_bag_icon_x*8/5;
    //x
    window.shop_first_position_icon_x = window.shop_third_position_icon_x = shop_plate_x - distance_icon*2;
    window.shop_second_position_icon_x = shop_plate_x + shop_plate_size_x - distance_icon;
    //y
    window.shop_first_position_icon_y = shop_plate_size_y + (distance_icon*3);
    window.shop_third_position_icon_y = shop_first_position_icon_y + size_shop_icon_x + distance_icon*4;
    window.shop_second_position_icon_y = shop_first_position_icon_y;
    //location price for position
    var shop_price_size_px = canvas.width/60;
    window.shop_price_text = "italic " + shop_price_size_px + "px Arial";
    window.shop_first_price_x = window.shop_third_price_x = shop_first_position_icon_x + size_shop_icon_x + distance_icon;
    window.shop_second_price_x = shop_second_position_icon_x + size_shop_icon_x + distance_icon;
    window.shop_first_price_y = shop_first_position_icon_y + (size_shop_icon_y/1.6);
    window.shop_third_price_y = shop_third_position_icon_y + (size_shop_icon_y/1.6);
    window.shop_second_price_y = shop_second_position_icon_y + (size_shop_icon_y/1.6);

  },

  define_variables_for_game_effects: function(canvas) {
    //HINT FOR RAIN
    window.hint_rain_size_x = canvas.height/5;
    window.hint_rain_size_y = canvas.height/5;
  }

}
