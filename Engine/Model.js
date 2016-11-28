"use strict";
//Model
var Model = {

  //responce on the task
  responce: function(message, responce) {
    //define further actions
    switch(message) {
      case "download complete":
        ctx.clearRect(0,0,canvas.width,canvas.height);
        Controller.complete(message);
      break;

      case "main menu complete":
        window.location_now = "main menu";
        Model.create_event();
        Controller.complete(message);
      break;

      case "start game":
        if(Game_menu.array_menu_click.length != 4 || Game_menu.array_menu_drag_and_drop.length != 3) {
          window.location_now = "game menu";
          Game_menu.make();
        } else {
          window.location_now = "game";
        }
      break;

      case "game menu complete":
        window.location_now = "game";
      break;

      case "exit in menu":
        Controller.complete(message);
      break;
    }

  },

  initialization: function(canvas) {
    Global.initialization(canvas);
    Garden_bed.init();
  },

  //Downloading images
  download: function() {
    ctx.font = download_app_text;
    ctx.fillText("Подождите, идёт загрузка приложения", download_app_x, download_app_y);
    Download_app.downloading();
  },

  //start new game
  reset_all: function() {
    User.level = 1;
    User.money = 40;
    User.experience = 0;
    Garden_bed.plants = [];
    Garden_bed.images_for_hurvest = [];
    Stock.plants = [];
    Bag.seeds = [];
    Game_menu.array_menu_drag_and_drop = [];
    Game_menu.array_menu_click = [];
    Garden_bed.init();
    Game_events.rain.reset_all();
  },

  //creating main menu
  create_main_menu: function() {
    Main_menu.make();
  },

  //hanging listener
  create_event: function() {
    canvas.onclick = function(event) {
      Click.onclick(event);
    }
    canvas.onmousedown = function(event) {
      Drag_and_drop.onmousedown(event);
    }
    canvas.onmouseup = function(event) {
      Drag_and_drop.onmouseup(event);
    }
  	canvas.addEventListener('touchstart', function(event) {
  	  Drag_and_drop.touchstart(event);
  	}, false);
  	canvas.addEventListener('touchend', function(event) {
  		Drag_and_drop.touchend(event);
  	}, false);
  },

  //Check whether a click on the main menu
  main_menu_click: function(item) {
    Main_menu.click_on_the_item(item);
  },

  //click on the game menu item
  game_menu_click: function(item) {
    Game_menu.click_on_the_item(item);
  },

  game_munu_onmouseup: function() {
    bailer = false;
    sprayer = false;
    shovel = false;
  },

  //drag and drop on the game menu item
  game_menu_d_a_d: function(item) {
    switch(item) {
      case "Bailer":
        bailer = true;
      break;
      case "Sprayer":
        sprayer = true;
      break
      case "Shovel":
        shovel = true;
      break;
    }
  },

  //cansel use item(game menu icon)
  cansel_use_item: function() {
    document.body.style.cursor = "url('img/Icons/cursor.png'), auto";
    window.location_now = "game";
  },

  //if the open bag for plant selection
  bag: function(selection) {
    //Define variables
    if(selection === 0 || selection > 0) {
      window.plant_for_planting = Bag.seeds[selection].Obj_name;
      window.planting = true;
      window.location_now = "planting";
      Bag.seeds[selection].count--;
    } else {
      window.bag = false;
      window.location_now = "game";
      window.plant_for_planting = false;
    }
  },

  //if the open stock for plant selection
  stock: function(selection) {
    //Define variables
    if(selection === 0 || selection > 0) {
      Stock.plants[selection].count--;
      Model.sell_plant(Stock.plants[selection].price);
    } else if(selection == "shop") {
      if(!this.x||!this.y||!this.size_x||this.size_y) {
        Shop.init_proportions();
      }
      window.location_now = "shop";
      window.shop = "seed";
    } else {
      window.stock = false;
      window.location_now = "game";
    }
  },

  shop: function(status) {
    if(status === false) {
      window.shop = false;
      window.location_now = "game";
    } else if(status == "stock") {
      Stock.click_on_the_icon();
    } else if(status == "seed") {
      window.shop = "seed";
    } else if(status == "main") {
      window.shop = "main";
    }
  },

  buy_plant: function(i) {
    if((User.money = User.money - Bag.seeds[i].price) >= 0 ) {
      Bag.seeds[i].count++;
      window.buy_now = true;   //effects
    } else {
      User.money = User.money + Bag.seeds[i].price;
      alert("Бабосов-то нема");
    }
  },

  sell_plant: function(price) {
    User.money = User.money + price;
    window.sell_now = true;   //effects
  },

  //planting plant
  planting: function(number_place) {
    window.planting = false;
    window.bag = false;
    document.body.style.cursor = "url('img/Icons/cursor.png'), auto";
    window.location_now = "game";
    Garden_bed.planting(number_place);
  },

  digging: function(number_place, number_plant) {
    document.body.style.cursor = "url('img/Icons/cursor.png'), auto";
    window.location_now = "game";
    Garden_bed.digging(number_place);
    //delete this plant
    Garden_bed.plants.splice(number_plant,1);
  },

  watering: function(plant) {
    if(plant.status == "grow") {
      plant.watering("bailer");//watering
    }
  },

  plant_has_groun: function(number_place,img_x,img_y,img_size) {
    //create object images hurvest
    var harvest_img = {
      place: number_place,
      x: img_x,
      y: img_y,
      size: img_size
    }
    //add this object in array
    Garden_bed.images_for_hurvest.push(harvest_img);
  },

  hurvesting: function(number_place,number_plant,number_image_hurvest, id_plant) {
    var plants = Stock.plants;
    for(var i = 0; i < plants.length; i++ ) {
      if(plants[i].id_plant === id_plant) {
        if(plants[i].experience > 0) {
          User.experience += plants[i].experience;
          window.hurvest_experience = true; //effects
          User.level_up();
        }
        var hurvest = Math.round(Math.random() * 10);
        if(hurvest > 4) {
          hurvest = 3;
        } else if(hurvest == 0) {
          hurvest = 1;
        }
        plants[i].count = plants[i].count + hurvest;
      }
    }
    Garden_bed.digging(number_place);//digging
    //and clear arrays
    Garden_bed.plants.splice(number_plant,1);
    Garden_bed.images_for_hurvest.splice(number_image_hurvest,1);
  }

}
