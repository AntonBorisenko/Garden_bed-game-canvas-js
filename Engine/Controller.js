"use strict";
//Controller
var Controller = {

  //Download an application
  start: function(canvas) {
    Model.initialization(canvas); //initialization global variables, proportions
    Model.download(); //download all images for game
  },

  //A function of receiving responce
  complete: function(message) {
    switch(message) {

      case "download complete":
        Model.create_main_menu(); //creating main menu
      break;

      case "main menu complete":
        View.start_game();
        break;

      case "exit in menu":
        View.stop_game();
        Model.create_main_menu();
      break;

    }
  },

  //start game
  start_game: function() {
    View.start_game();
  }

}
