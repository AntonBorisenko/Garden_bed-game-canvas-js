"use strict";
//PROTOTYPE PLANTS
function Plant(id, name, img_number, x_cor, y_cor, place, water, grown, price, experience) {
  var plant_size = window.plant_size;
  this.id = id;
  this.name = name;
  this.status = "grow";
  this.img_number = img_number;
  this.price = price;
  this.experience = experience;
  this.x = x_cor;
  this.y = y_cor;
  this.size = plant_size;
  this.place = place;
  this.water = water;
  this.grown = grown;
  this.grow_now = 0;
  this.hurvest = false;
}
Plant.prototype.watering = function(bailer) {
  //watering
  if(bailer) {
    this.water = this.water + 100000;
  }
  //drying plant
  this.water = this.water - View.interval;
  if(this.water < 0) {
    this.status = "ded";
  }
}
Plant.prototype.growing = function() {
  this.grow_now = this.grow_now + View.interval;
  //time to harvest
  if(this.grow_now > this.grown && this.status == "grow") {
    this.status = "grown";
    //We ask the model to create a picture for the harvest
    var x = this.x + this.size;
    var y = this.y;
    var size = window.hurvest_img_size;
    Model.plant_has_groun(this.place,x,y,size);
  }
  //For drawing growth progress
  return this.grow_now;
}


//////////////////////////////PLANTS////////////////////////////////////////////////////////////


//Prototype POTATOES inherited from prototype plants
function Potatoes(x,y,place,grown) {
  var id = 1;
  var name = "potatoes";
  var grown = potatoes_grown_time;
  var img_number = 1;
  var price = potatoes_price;
  var experience = potatoes_experience;
  var water = 8000;
  var x_cor = x;
  var y_cor = y;
  Plant.call(this, id, name, img_number, x_cor, y_cor, place, water, grown, price, experience);
}
Potatoes.prototype = new Plant;
Potatoes.prototype.constructor = Potatoes;
Potatoes.prototype.watering = function(status) {
  //watering
  if(status == "bailer") {
    this.water = this.water + 100000;
  }
  if(status == "rain") {
    this.water = 100000;
  }
  //drying plant
  this.water = this.water - View.interval;
  if(this.water > 5000) {
      this.img_number = 1;
  } else if (this.water < 3000 && this.water > 1500) {
      this.img_number = 2;
  } else if(this.water < 1500 && this.water > 0) {
      this.img_number = 3;
  } else if(this.water < 0) {
      this.status = "ded";
  }

}



//Prototype TOMATO inherited from prototype plants
function Tomato(x,y,place,grown) {
  var id = 2;
  var name = "tomato";
  var grown = tomato_grown_time;
  var img_number = 4;
  var price = tomato_price;
  var experience = tomato_experience;
  var water = 6000;
  var x_cor = x;
  var y_cor = y;
  Plant.call(this, id, name, img_number, x_cor, y_cor, place, water, grown, price, experience);
}
Tomato.prototype = new Plant;
Tomato.prototype.constructor = Tomato;
Tomato.prototype.watering = function(status) {
  //watering
  if(status == "bailer") {
    this.water = this.water + 100000;
  }
  if(status == "rain") {
    this.water = 100000;
  }
  //drying plant
  this.water = this.water - View.interval;
  if(this.water > 5000) {
      this.img_number = 4;
  } else if (this.water < 3000 && this.water > 1500) {
      this.img_number = 5;
  } else if(this.water < 1500 && this.water > 0) {
      this.img_number = 6;
  } else if(this.water < 0) {
      this.status = "ded";
  }

}



//Prototype CABBAGE inherited from prototype plants
function Cabbage(x,y,place,grown) {
  var id = 3;
  var name = "cabbage";
  var grown = cabbage_grown_time;
  var img_number = 7;
  var price = cabbage_price;
  var experience = cabbage_experience;
  var water = 7000;
  var x_cor = x;
  var y_cor = y;
  Plant.call(this, id, name, img_number, x_cor, y_cor, place, water, grown, price, experience);
}
Cabbage.prototype = new Plant;
Cabbage.prototype.constructor = Cabbage;
Cabbage.prototype.watering = function(status) {
  //watering
  if(status == "bailer") {
    this.water = this.water + 100000;
  }
  if(status == "rain") {
    this.water = 100000;
  }
  //drying plant
  this.water = this.water - View.interval;
  if(this.water > 5000) {
      this.img_number = 7;
  } else if (this.water < 3000 && this.water > 1500) {
      this.img_number = 8;
  } else if(this.water < 1500 && this.water > 0) {
      this.img_number = 9;
  } else if(this.water < 0) {
      this.status = "ded";
  }

}
