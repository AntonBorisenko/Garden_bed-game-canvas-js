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
    create_menu_item(Download_app.images_game_menu[0], 770, 10, 120, 50, "Menu");//shovel
    create_menu_item(Download_app.images_game_menu[1], 770, 80, 50, 50, "Bailer");//bailer
    create_menu_item(Download_app.images_game_menu[2], 830, 80, 50, 50, "Sprayer");//sprayer
    create_menu_item(Download_app.images_game_menu[3], 770, 140, 50, 50, "Shovel");//shovel
    create_menu_item(Download_app.images_game_menu[4], 830, 140, 50, 50, "Bag");//bag
    create_menu_item(Download_app.images_game_menu[5], 770, 200, 120, 50, "Stock");//stock
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
    create_menu_item(Download_app.images_plants_icons[0], 760, 150, 40, 40, Potatoes);//potatoes
    create_menu_item(Download_app.images_plants_icons[1], 805, 150, 40, 40, Tomato);//tomato
    create_menu_item(Download_app.images_plants_icons[2], 850, 150, 40, 40, Cabbage);//cabbage
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
    create_menu_item(Download_app.images_plants_icons[0], 620, 220, 40, 40, "potatoes", 0);//potatoes
    create_menu_item(Download_app.images_plants_icons[1], 670, 220, 40, 40, "tomato", 1);//tomato
    create_menu_item(Download_app.images_plants_icons[2], 720, 220, 40, 40, "cabbage", 2);//cabbage

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
    create_stock_count_plants(0, "potatoes", 660, 220, 0);
    create_stock_count_plants(1, "tomato", 710, 220, 0);
    create_stock_count_plants(2, "cabbage", 760, 220, 0);
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
  x:750,
  y:140,
  size_x:150,
  size_y:240,

  click_on_the_icon: function() {
    window.bag = true;
    window.location_now = "bag";
    if(Game_menu.array_for_bag.length == 0) {
      Game_menu.create_bag();
    }
  }
}

//Create object Stock
var Stock = new Stock();
//Constructor Stock
function Stock() {
  //public properties
  this.x = 600;
  this.y = 200;
  this.size_x = 300;
  this.size_y = 200;

  //plants
  this.plants = Game_menu.array_for_stock_count_plants;

  //public methods
  this.click_on_the_icon = function() {
    window.stock = true;
     window.location_now = "stock";
     if(Game_menu.array_for_stock.length == 0) {
       Game_menu.create_stock();
    }
  }

  this.selection = function(id_plant) {
    alert(id_plant);
  }

  this.restocking = function(id_plant) {
    this.plants[id_plant].count++;
  }

}
