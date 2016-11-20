//Game_menu
"use strict";
//Menu(top and right)
var Game_menu = {

  //This array for game menu(on garden bed)
  array_menu: [],

  make: function() {
    //zero out an array
    Game_menu.array_menu = [];

    function create_menu_item(img, x, y, size_x, size_y, Obj_name) {
      //Create Object_menu_item
      var menu_icon = new Create_object(x, y, size_x ,size_y, img, Obj_name);//functions.js
      //Add in array
      Game_menu.array_menu.push(menu_icon);
      if(Game_menu.array_menu.length == 7) {
        if(Bag.seeds.length == 0) {
          Game_menu.create_array_plants_and_seeds();
          Game_menu.create_bag();
          Game_menu.create_stock();
          Game_menu.create_shop();
        }
        //responce on the task
        Model.responce("game menu complete");
      }
    }
    create_menu_item(Download_app.images_game_menu[0], game_menu_icon_menu_x, game_menu_icon_menu_y, game_menu_icon_menu_size_x, game_menu_icon_menu_size_y, "Menu");//menu
    create_menu_item(Download_app.images_game_menu[1], game_menu_icon_bailer_x, game_menu_icon_bailer_y, game_menu_icon_bailer_size_x, game_menu_icon_bailer_size_y, "Bailer");//bailer
    create_menu_item(Download_app.images_game_menu[2], game_menu_icon_sprayer_x, game_menu_icon_sprayer_y, game_menu_icon_sprayer_size_x, game_menu_icon_sprayer_size_y, "Sprayer");//sprayer
    create_menu_item(Download_app.images_game_menu[3], game_menu_icon_shovel_x, game_menu_icon_shovel_y, game_menu_icon_shovel_size_x, game_menu_icon_shovel_size_y, "Shovel");//shovel
    create_menu_item(Download_app.images_game_menu[4], game_menu_icon_bag_x, game_menu_icon_bag_y, game_menu_icon_bag_size_x, game_menu_icon_bag_size_y, "Bag");//bag
    create_menu_item(Download_app.images_game_menu[5], game_menu_icon_stock_x, game_menu_icon_stock_y, game_menu_icon_stock_size_x, game_menu_icon_stock_size_y, "Stock");//stock
    create_menu_item(Download_app.images_game_menu[6], game_menu_icon_shop_x, game_menu_icon_shop_y, game_menu_icon_shop_size_x, game_menu_icon_shop_size_y, "Shop");//shop
  },

  create_array_plants_and_seeds: function() {
    //array plants for stock
    function create_plants(Obj_name, id_plant, count, price, experience, img_number) {
      var plant = new Create_plant(Obj_name, id_plant, count, price, experience, img_number);//functions.js
      Stock.plants.push(plant);
    }
    //array seeds for bag in game menu and bag for shop
    function create_seeds(Obj_name, id_plant, count, price, experience, img_number) {
      var plant = new Create_plant(Obj_name, id_plant, count, price, experience, img_number);//functions.js
      Bag.seeds.push(plant);
    }
    //plants for stock
    create_plants(Potatoes, 1, 0, potatoes_price, potatoes_experience, 1);
    create_plants(Tomato, 2, 0, tomato_price, tomato_experience, 4);
    create_plants(Cabbage, 3, 0, cabbage_price, cabbage_experience, 7);
    //seeds for bag
    create_seeds(Potatoes, 1, 4, potatoes_price, potatoes_experience, 1);
    create_seeds(Tomato, 2, 2, tomato_price, tomato_experience, 2);
    create_seeds(Cabbage, 3, 6, cabbage_price, cabbage_experience, 3);
  },

  create_bag: function() {
    //create positions plants(menu)
    Game_menu.create_position_menu_item(bag_first_position_icon_x, bag_first_position_icon_y, size_bag_icon_x, size_bag_icon_y, bag_count_first_x, bag_count_first_y, Bag.positions);//first position
    Game_menu.create_position_menu_item(bag_second_position_icon_x, bag_second_position_icon_y, size_bag_icon_x, size_bag_icon_y, bag_count_second_x, bag_count_second_y, Bag.positions);//second position
    Game_menu.create_position_menu_item(bag_third_position_icon_x, bag_third_position_icon_y, size_bag_icon_x, size_bag_icon_y, bag_count_third_x, bag_count_third_y, Bag.positions);//third position
    //create positions plants
    Game_menu.create_position_menu_item(bag_in_shop_first_position_icon_x, bag_in_shop_first_position_icon_y, size_bag_in_shop_icon_x, size_bag_in_shop_icon_y, bag_in_shop_count_first_x, bag_in_shop_count_first_y, Bag.positions_in_shop);//first position
    Game_menu.create_position_menu_item(bag_in_shop_second_position_icon_x, bag_in_shop_second_position_icon_y, size_bag_in_shop_icon_x, size_bag_in_shop_icon_y, bag_in_shop_count_second_x, bag_in_shop_count_second_y, Bag.positions_in_shop);//second position
    Game_menu.create_position_menu_item(bag_in_shop_third_position_icon_x, bag_in_shop_third_position_icon_y, size_bag_in_shop_icon_x, size_bag_in_shop_icon_y, bag_in_shop_count_third_x, bag_in_shop_count_third_y, Bag.positions_in_shop);//third position
  },

  create_stock: function() {
    //create positions plants
    Game_menu.create_position_menu_item(stock_first_position_icon_x, stock_first_position_icon_y, size_stock_icon, size_stock_icon, stock_count_first_x, stock_count_first_y, Stock.positions);//first position
    Game_menu.create_position_menu_item(stock_second_position_icon_x, stock_second_position_icon_y, size_stock_icon, size_stock_icon, stock_count_second_x, stock_count_second_y, Stock.positions);//second position
    Game_menu.create_position_menu_item(stock_third_position_icon_x, stock_third_position_icon_y, size_stock_icon, size_stock_icon, stock_count_third_x, stock_count_third_y, Stock.positions);//third position
  },

  create_shop: function() {
    //create positions plants
    Game_menu.create_position_menu_item(shop_first_position_icon_x, shop_first_position_icon_y, size_shop_icon_x, size_shop_icon_y, shop_first_price_x, shop_first_price_y, Shop.positions);//first position
    Game_menu.create_position_menu_item(shop_second_position_icon_x, shop_second_position_icon_y, size_shop_icon_x, size_shop_icon_y, shop_second_price_x, shop_second_price_y, Shop.positions);//second position
    Game_menu.create_position_menu_item(shop_third_position_icon_x, shop_third_position_icon_y, size_shop_icon_x, size_shop_icon_y, shop_third_price_x, shop_third_price_y, Shop.positions);//third position
  },

  //create positions plants(menu)
  create_position_menu_item: function(x, y, size_x, size_y, count_x, count_y, array_for_push) {
    var menu_icon = new Create_object_position(x, y, size_x, size_y, count_x, count_y);//functions.js
    //Add in array
    array_for_push.push(menu_icon);
  },

  click_on_the_item: function(item) {
    switch(item) {
      case "Menu":
        Model.responce("exit in menu");
        break;
      case "Bailer":
        Bailer.click_on_the_icon();
        break;
      case "Sprayer":
        Sprayer.click_on_the_icon();
        break;
      case "Shovel":
        Shovel.click_on_the_icon();
        break;
      case "Bag":
        Bag.click_on_the_icon();
        break;
      case "Stock":
        Stock.click_on_the_icon();
        break;
      case "Shop":
        Shop.click_on_the_icon();
        break;
     }
  }

}


//OBJECTS MENU ICONS

//bailer
var Bailer = {
  click_on_the_icon: function() {
    window.location_now = "bailer";
    document.body.style.cursor = "url('img/Icons/bailer.png'), auto";
  }
}

//sprayer
var Sprayer = {
  click_on_the_icon: function() {
    alert('Sprayer clik!');
  }
}

//shovel
var Shovel = {
  click_on_the_icon: function() {
    window.location_now = "shovel";
    document.body.style.cursor = "url('img/Icons/shovel.png'), auto";
  }
}

//bag
var Bag = {

  //coordinates in bag
  x:0,
  y:0,
  size_x:0,
  size_y:0,
  positions: [],
  positions_in_shop: [],
  seeds: [],

  click_on_the_icon: function() {
    if(!Bag.x||!Bag.y||!Bag.size_x||Bag.size_y) {
      Bag.init_proportions();
    }
    window.bag = true;
    window.location_now = "bag";
  },

  init_proportions: function() {
    //in bag
      Bag.x = bag_x;
      Bag.y = bag_y;
      Bag.size_x = bag_size_x;
      Bag.size_y = bag_size_y;
  }

}


//Constructor Stock
var Stock = {

  //public properties
  x: 0,
  y: 0,
  size_x: 0,
  size_y: 0,
  positions: [],
  plants: [],

  //public methods
  click_on_the_icon: function() {
    if(!this.x||!this.y||!this.size_x||this.size_y) {
      Stock.init_proportions();
    }
    window.stock = true;
    window.location_now = "stock";
  },

  init_proportions: function() {
      Stock.x = stock_x;
      Stock.y = stock_y;
      Stock.size_x = stock_size_x;
      Stock.size_y = stock_size_y;
  }

}

var Shop = {
  //public properties
  x: 0,
  y: 0,
  size_x: 0,
  size_y: 0,

  positions: [],

  //public methods
  click_on_the_icon: function() {
    if(!this.x||!this.y||!this.size_x||this.size_y) {
      Shop.init_proportions();
    }
    window.shop = "main";
    window.location_now = "shop";
  },

  init_proportions: function() {
      Shop.x = shop_x;
      Shop.y = shop_y;
      Shop.size_x = shop_size_x;
      Shop.size_y = shop_size_y;
  }

}
