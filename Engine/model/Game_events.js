'use strict';

var Game_events = {

  rain: {

    //for rain effects
    status: false,
    load: 3000,
    duration: 0,

    raining: function() {
      //if it is not raining
      if(!this.status) {
        this.load += Math.round(Math.random() * 10);
        if(this.load > 4000) {
          this.status = true;
          this.load = 0;
        }
      //raining!
      } else {
        this.duration += Math.round(Math.random() * 10);
        if(this.duration > 1000) {
          this.status = false;
          this.duration = false;
        }
      }
    },

    //for new game
    reset_all: function() {
      this.status = false;
      this.load = 0;
      this.duration = 0;
    }


  }

}
