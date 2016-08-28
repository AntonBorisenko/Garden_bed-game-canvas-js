"use strict";
//Garden_bed
var Garden_bed = {

  //12 places for plant
  places_for_planting: [{x:100,y:90,plant:false}, {x:250,y:90,plant:false}, {x:400,y:90,plant:false}, {x:550,y:90,plant:false},
                        {x:100,y:240,plant:false}, {x:250,y:240,plant:false}, {x:400,y:240,plant:false}, {x:550,y:240,plant:false},
                        {x:100,y:390,plant:false}, {x:250,y:390,plant:false}, {x:400,y:390,plant:false}, {x:550,y:390,plant:false}],

  //here are plant objects are now planted in the garden
  plants:[],
  //images for hurvest
  images_for_hurvest:[],

  planting: function(number_place) {
    //We determine the coordinates of the plant planting
    var x = Garden_bed.places_for_planting[number_place].x;
    var y = Garden_bed.places_for_planting[number_place].y;
    //Create object plant
    var obj_plant  = new plant_for_planting(x,y,number_place);
    //add it to the array of plants
    Garden_bed.plants.push(obj_plant);
    //change state of the plant
    Garden_bed.places_for_planting[number_place].plant = true;
  },

  digging: function(number_place) {
    //now, in this place again to plant
    Garden_bed.places_for_planting[number_place].plant = false;
  }

}
