"use strict";
//Controller
var Controller = {

  //Download an application
  start: function() {
    Model.download();
  },

  //a function of receiving responce
  complete: function(message) {
    switch(message) {

      case "download complete":
        Model.create_main_menu(); //creating main menu
      break;

      case "main menu complete":
        //Sleep
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
