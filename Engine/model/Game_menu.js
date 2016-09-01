//Game_menu
"use strict";
//Menu(top and right)
var Game_menu = {

  //This arrays needs to track clicks
  array_menu: [],
  array_for_bag: [],
  array_for_stock: [],
  array_for_stock_count_plants: [],

  make: function() {
    //zero out an array
    Game_menu.array_menu = [];

    function create_menu_item(img, x, y, size_x, size_y, Obj_name) {
      //Create Object_menu_item
      var menu_icon = new Game_menu.create_object(img, Obj_name, x, y, size_x ,size_y);
      //Add in array
      Game_menu.array_menu.push(menu_icon);
      if(Game_menu.array_menu.length == 6) {
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
  },

  //create objects menu for bag
  create_bag: function() {

    function create_menu_item(img, x, y, size_x, size_y, Obj_name) {
      //Create Object_menu_item
      var menu_icon = new Game_menu.create_object(img, Obj_name, x, y, size_x ,size_y);
      //Add in array
      Game_menu.array_for_bag.push(menu_icon);
      if(Game_menu.array_for_bag.length == 3) {
        //bag menu completed
      }
    }
    create_menu_item(Download_app.images_plants_icons[0], bag_potatoes_icon_x, bag_potatoes_icon_y, size_bag_icon, size_bag_icon, Potatoes);//potatoes
    create_menu_item(Download_app.images_plants_icons[1], bag_tomato_icon_x, bag_tomato_icon_y, size_bag_icon, size_bag_icon, Tomato);//tomato
    create_menu_item(Download_app.images_plants_icons[2], bag_cabbage_icon_x, bag_cabbage_icon_y, size_bag_icon, size_bag_icon, Cabbage);//cabbage
  },

  //create objects menu for stock
  create_stock: function() {

    function create_menu_item(img, x, y, size_x, size_y, Obj_name, id_plant) {
      //Create Object_menu_item
      var menu_icon = new Game_menu.create_object(img, Obj_name, x, y, size_x ,size_y, id_plant);
      //Add in array
      Game_menu.array_for_stock.push(menu_icon);
      if(Game_menu.array_for_stock.length == 3) {
        //bag menu completed
      }
    }
    create_menu_item(Download_app.images_plants_icons[0], stock_potatoes_icon_x, stock_potatoes_icon_y, size_stock_icon, size_stock_icon, "potatoes", 0);//potatoes
    create_menu_item(Download_app.images_plants_icons[1], stock_tomato_icon_x, stock_potatoes_icon_y, size_stock_icon, size_stock_icon, "tomato", 1);//tomato
    create_menu_item(Download_app.images_plants_icons[2], stock_cabbage_icon_x, stock_potatoes_icon_y, size_stock_icon, size_stock_icon, "cabbage", 2);//cabbage

    function create_stock_count_plants(id_plant, name, x, y, count) {
      function create_object_count_plants(id_plant, name, x, y, count) {
        this.id_plant = id_plant;
        this.name = name;
        this.x = x;
        this.y = y;
        this.count = 0;
      }
      var obj_count = new create_object_count_plants(id_plant, name, x, y, count);
      //Add in array
      Game_menu.array_for_stock_count_plants.push(obj_count);
    }
    //array for storage, which contains a number of plants and coordinates output
    create_stock_count_plants(0, "potatoes", stock_count_potatoes_x, stock_count_potatoes_y, 0);
    create_stock_count_plants(1, "tomato", stock_count_tomato_x, stock_count_tomato_y, 0);
    create_stock_count_plants(2, "cabbage", stock_count_cabbage_x, stock_count_cabbage_y, 0);
  },

  //Protoype menu icons and menu items
  create_object: function(img,Obj_name,x,y,size_x,size_y, id_plant) {
    this.img = img;
    this.Obj_name = Obj_name;
    this.x = x;
    this.y = y;
    this.size_x = size_x;
    this.size_y = size_y;
    if(id_plant == 0 || id_plant > 0) {
      this.id_plant = id_plant;
    }
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

  click_on_the_icon: function() {
    if(!Bag.x||!Bag.y||!Bag.size_x||Bag.size_y) {
      Bag.init_proportions();
    }
    window.bag = true;
    window.location_now = "bag";
    if(Game_menu.array_for_bag.length == 0) {
      Game_menu.create_bag();
    }
  },

  init_proportions: function() {
      Bag.x = bag_x;
      Bag.y = bag_y;
      Bag.size_x = bag_size_x;
      Bag.size_y = bag_size_y;
  }

}

//Create object Stock
var Stock = new Stock();
//Constructor Stock
function Stock() {
  //public properties
  this.x = 0;
  this.y = 0;
  this.size_x = 0;
  this.size_y = 0;

  //plants
  this.plants = Game_menu.array_for_stock_count_plants;

  //public methods
  this.click_on_the_icon = function() {
    if(!this.x||!this.y||!this.size_x||this.size_y) {
      this.init_proportions();
    }
    window.stock = true;
     window.location_now = "stock";
     if(Game_menu.array_for_stock.length == 0) {
       Game_menu.create_stock();
    }
  }

  this.init_proportions = function() {
      this.x = stock_x;
      this.y = stock_y;
      this.size_x = stock_size_x;
      this.size_y = stock_size_y;
  }

  this.selection = function(id_plant) {
    alert(id_plant);
  }

  this.restocking = function(id_plant) {
    this.plants[id_plant].count++;
  }

}
