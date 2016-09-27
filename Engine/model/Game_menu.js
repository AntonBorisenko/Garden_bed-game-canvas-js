//Game_menu
"use strict";
//Menu(top and right)
var Game_menu = {

  //This arrays needs to track clicks
  array_menu: [],
  array_for_bag: [],
  array_for_stock: [],
  array_for_stock_count_plants: [],
  array_plants: [],

  make: function() {
    //zero out an array
    Game_menu.array_menu = [];

    function create_menu_item(img, x, y, size_x, size_y, Obj_name) {
      //Create Object_menu_item
      var menu_icon = new Create_object(x, y, size_x ,size_y, img, Obj_name);//functions.js
      //Add in array
      Game_menu.array_menu.push(menu_icon);
      if(Game_menu.array_menu.length == 7) {
        if(Game_menu.array_plants.length == 0) {
          Game_menu.create_array_plants();
          Game_menu.create_bag();
          Game_menu.create_stock();
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

  create_array_plants: function() {
    //array plants for stock and bag
    function create_plants(Obj_name, id_plant, count, price) {
      var plant = new Create_plant(Obj_name, id_plant, count, price);//functions.js
      Game_menu.array_plants.push(plant);
    }
    create_plants(Potatoes, 1, 4, potatoes_price);
    create_plants(Tomato, 2, 2, tomato_price);
    create_plants(Cabbage, 3, 6, cabbage_price);

  },


  create_bag: function() {
    //create positions plants
    function create_position_menu_item(x, y, size_x, size_y, count_x, count_y) {
      var menu_icon = new Create_object_position(x, y, size_x, size_y, count_x, count_y);//functions.js
      //Add in array
      Game_menu.array_for_bag.push(menu_icon);
    }

    create_position_menu_item(bag_first_position_icon_x, bag_first_position_icon_y, size_bag_icon, size_bag_icon, bag_count_first_x, bag_count_first_y);//first position
    create_position_menu_item(bag_second_position_icon_x, bag_second_position_icon_y, size_bag_icon, size_bag_icon, bag_count_second_x, bag_count_second_y);//second position
    create_position_menu_item(bag_third_position_icon_x, bag_third_position_icon_y, size_bag_icon, size_bag_icon, bag_count_third_x, bag_count_third_y);//third position

    Bag.positions = Game_menu.array_for_bag;

  },

  //create objects menu for stock
  create_stock: function() {
    //create positions plants
    function create_position_menu_item(x, y, size_x, size_y, count_x, count_y) {
      var menu_icon = new Create_object_position(x, y, size_x, size_y, count_x, count_y);//functions.js
      //Add in array
      Game_menu.array_for_stock.push(menu_icon);
    }
    create_position_menu_item(stock_first_position_icon_x, stock_first_position_icon_y, size_stock_icon, size_stock_icon, stock_count_first_x, stock_count_first_y);//first position
    create_position_menu_item(stock_second_position_icon_x, stock_second_position_icon_y, size_stock_icon, size_stock_icon, stock_count_second_x, stock_count_second_y);//second position
    create_position_menu_item(stock_third_position_icon_x, stock_third_position_icon_y, size_stock_icon, size_stock_icon, stock_count_third_x, stock_count_third_y);//third position

    Stock.positions = Game_menu.array_for_stock;

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

  //coordinates
  x:0,
  y:0,
  size_x:0,
  size_y:0,
  positions: null,

  click_on_the_icon: function() {
    if(!Bag.x||!Bag.y||!Bag.size_x||Bag.size_y) {
      Bag.init_proportions();
    }
    window.bag = true;
    window.location_now = "bag";
  },

  init_proportions: function() {
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

  positions: null,

  //public methods
  click_on_the_icon: function() {
    if(!this.x||!this.y||!this.size_x||this.size_y) {
      Shop.init_proportions();
    }
    window.shop = true;
    window.location_now = "shop";
  },

  init_proportions: function() {
      Shop.x = shop_x;
      Shop.y = shop_y;
      Shop.size_x = shop_size_x;
      Shop.size_y = shop_size_y;
  }

}
