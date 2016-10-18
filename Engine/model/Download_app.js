"use strict";
//Object for download application
var Download_app = {

  images_for_game: [],
  //an array with downloaded plant pictures
  images_plants: [],
  //an array with downloaded main menu pictures
  images_main_menu: [],
  //an array with downloaded game menu pictures
  images_game_menu: [],
  //an array with downloaded icons plants
  images_plants_icons: [],
  //an array with downloaded images for stock
  images_shop: [],

  //Downloading images
  downloading: function() {

    //function for loading images
    function load_images(array_pictures, array_for_push, number) {
      var i = 0;
      load();
      function load() {
        var img = new Image();
        img.src =  array_pictures[i];
        img.onload = function() {
          array_for_push.push(img);
          i++;
          if(i == array_pictures.length) {
            //responce
            number++;
            create_arrays_whis_images(number);
          } else {
            load();
          }
        }
      }
    }

    //create arrays with images
    function create_arrays_whis_images(number) {
      if(number == 1) {
          load_images(images_for_game, Download_app.images_for_game, number);
      } else if(number == 2) {
          load_images(img_plants_for_download, Download_app.images_plants, number);
      } else if(number == 3) {
          load_images(img_main_menu_for_download, Download_app.images_main_menu, number);
      } else if(number == 4) {
          load_images(img_game_menu_for_download, Download_app.images_game_menu, number);
      } else if(number == 5) {
          load_images(img_plants_icons_for_download, Download_app.images_plants_icons, number);
      } else if(number == 6) {
          load_images(img_for_shop, Download_app.images_shop, number);
      } else {
        //responce on the task
        Model.responce("download complete");
      }
    }

    //start create arrays with images
    create_arrays_whis_images(1);

  }

}

var images_for_game =    ["img/Playing field/fone.jpg","img/Plants/ded.png","img/Icons/hurvest.png",
                          "img/Playing field/soil.jpg","img/Playing field/fone.jpg","img/Playing field/soil.jpg",
                          "img/Playing field/soil.jpg","img/Playing field/soil.jpg","img/Playing field/soil.jpg",
                          "img/Playing field/soil.jpg","img/Playing field/soil.jpg","img/Playing field/soil.jpg",
                          "img/Playing field/soil.jpg","img/Playing field/soil.jpg","img/Playing field/soil.jpg",
                          "img/Playing field/soil.jpg","img/Playing field/soil.jpg","img/Playing field/soil.jpg",
                          "img/Playing field/soil.jpg","img/Playing field/soil.jpg"];


//an array with plant pictures
var img_plants_for_download =     ["img/Plants/ded.png",
                                   "img/Plants/potatoes/potatoes.png", "img/Plants/potatoes/potatoes_2.png", "img/Plants/potatoes/potatoes_3.png",
                                   "img/Plants/tomato/tomato.png", "img/Plants/tomato/tomato_2.png", "img/Plants/tomato/tomato_3.png",
                                   "img/Plants/cabbage/cabbage.png", "img/Plants/cabbage/cabbage_2.png", "img/Plants/cabbage/cabbage_3.png"];


//an array with downloaded main menu pictures
var img_main_menu_for_download = ["img/Main menu/on_garden_bed.png","img/Main menu/help.png",
                                  "img/Main menu/new_game.png","img/Main menu/exit.png", "img/Main menu/main_fone.png"];


//an array with downloaded game menu pictures
var img_game_menu_for_download = ["img/Game menu/exit_in_menu.png", "img/Game menu/bailer.png",
                                  "img/Game menu/sprayer.png", "img/Game menu/shovel.png",
                                  "img/Game menu/bag.png", "img/Game menu/stock.png",
                                  "img/Game menu/shop.png"];

//an array with downloaded icons plants
var img_plants_icons_for_download = ["img/Plants/ded.png","img/Plants icons/potatoes.jpg", "img/Plants icons/tomato.png",
                                     "img/Plants icons/cabbage.png"];

var img_for_shop = ["img/Shop/all_for_billets.png", "img/Shop/all_for_garden.png",
                    "img/Shop/fertilizers.png", "img/Shop/hurvest_and_seed.png",
                    "img/Shop/exit_in_game.jpg"];
