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
        window.location_now = "game menu";
        Game_menu.make();
      break;

      case "game menu complete":
        window.location_now = "game";
        Controller.start_game();
      break;

      case "exit in menu":
        Controller.complete(message);
      break;
    }

  },

  //Downloading images
  download: function() {
    ctx.font = "italic 36px Arial";
    ctx.fillText("Подождите, идёт загрузка приложения", 100, 300);
    Download_app.downloading();
  },

  //creating main menu
  create_main_menu: function() {
    Main_menu.make();
  },

  //hanging listener
  create_event: function () {
    canvas.onclick = function(event) {
      Click.onclick(event);
    }
  },

  //Check whether a click on the main menu
  main_menu_click: function(item) {
    Main_menu.click_on_the_item(item);
  },

  //click on the game menu item
  game_menu_click: function(item) {
    Game_menu.click_on_the_item(item);
  },

  //cansel use item(game menu icon)
  cansel_use_item: function() {
    document.body.style.cursor = "url('img/Icons/cursor.png'), auto";
    window.location_now = "game";
  },

  watering: function(plant) {
    if(plant.status == "grow") {
      plant.watering("bailer");//watering
    }
  },

  //if the open bag for plant selection
  bag: function(selection) {
    //Define variables
    if(selection) {
      window.plant_for_planting = selection.Obj_name;
      window.planting = true;
      window.location_now = "planting";
    } else {
      window.bag = false;
      window.location_now = "game";
      window.plant_for_planting = false;
    }
  },

  //if the open stock for plant selection
  stock: function(selection) {
    //Define variables
    if(selection) {
      Stock.selection(selection.id_plant);
      window.stock = false;
      window.location_now = "game";
    } else {
      window.stock = false;
      window.location_now = "game";
    }
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

  hurvesting: function(number_place,number_plant,number_image_hurvest) {
    //create stock
    if(Game_menu.array_for_stock.length == 0) {
      Game_menu.create_stock();
    }
    //add the amount of the crop in stock
    Stock.restocking(Garden_bed.plants[number_plant].id);
    Garden_bed.digging(number_place);//digging
    //and clear arrays
    Garden_bed.plants.splice(number_plant,1);
    Garden_bed.images_for_hurvest.splice(number_image_hurvest,1);
  }

}
