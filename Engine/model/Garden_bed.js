"use strict";
//Garden_bed
var Garden_bed = {

  //12 places for plant
  places_for_planting: [{x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null},
                        {x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null},
                        {x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null}, {x:null,y:null,plant:null}],

  //here are plant objects are now planted in the garden
  plants:[],
  //images for hurvest
  images_for_hurvest:[],

  init: function() {
    //create array places for planting
    var array = Garden_bed.places_for_planting;
    array[0].x = first_three_x; array[0].y = first_for_y; array[0].plant = false;
    array[1].x = second_three_x; array[1].y = first_for_y; array[1].plant = false;
    array[2].x = third_three_x; array[2].y = first_for_y; array[2].plant = false;
    array[3].x = fourth_three_x; array[3].y = first_for_y; array[3].plant = false;
    array[4].x = first_three_x; array[4].y = second_for_y; array[4].plant = false;
    array[5].x = second_three_x; array[5].y = second_for_y; array[5].plant = false;
    array[6].x = third_three_x; array[6].y = second_for_y; array[6].plant = false;
    array[7].x = fourth_three_x; array[7].y = second_for_y; array[7].plant = false;
    array[8].x = first_three_x; array[8].y = third_for_y; array[8].plant = false;
    array[9].x = second_three_x; array[9].y = third_for_y; array[9].plant = false;
    array[10].x = third_three_x; array[10].y = third_for_y; array[10].plant = false;
    array[11].x = fourth_three_x; array[11].y = third_for_y; array[11].plant = false;
  },

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
