"use strict";

var User = {

  name: "",
  level: 1,
  level_up_now: false, //effects
  experience: 0,
  money: 40,

  level_up: function() {

    function up(level) {
      if(User.level < level) {
        User.level_up_now = true;
        User.level = level;
      }
    }

    if(this.experience > 30 && this.experience < 70) {
      up(2); // level 2
    } else if(this.experience > 70 && this.experience < 150) {
      up(3); // level 3
    } else if(this.experience > 150 && this.experience < 350) {
      up(4); // level 4
    } else if(this.experience > 350 && this.experience < 900) {
      up(5); // level 5
    } else if(this.experience > 900 && this.experience < 3500) {
      up(6); // level 6
    }
  }

}
