'use strict';

var Game_events = {

  //for rain effects
  rain_status: false,
  rain_load: 1500,
  raining: 0,

  rain: function() {
    //if it is not raining
    if(!Game_events.rain_status) {
      Game_events.rain_load += Math.round(Math.random() * 10);
      if(Game_events.rain_load > 2000) {
        Game_events.rain_status = true;
        Game_events.rain_load = 0;
      }
    //raining!
    } else {
      Game_events.raining += Math.round(Math.random() * 10);
      if(Game_events.raining > 500) {
        Game_events.rain_status = false;
        Game_events.raining = false;
      }
    }
  },

  //for new game
  reset_all: function() {
    Game_events.rain_status = false;
    Game_events.rain_load = 0;
    Game_events.raining = 0;
  }


}
