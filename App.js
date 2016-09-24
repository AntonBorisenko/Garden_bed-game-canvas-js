"use strict";
//Main js file
window.onload = function() {
  //Init canvas
  window.canvas = document.getElementById("canvas");
  //Define size canvas. This global settings.
  window.canvas.height = window.screen.height;
  window.canvas.width = canvas.height*1.777;
  if(canvas.height > 720) {
    window.canvas.height = 720;
    window.canvas.width = 1280;
  }
  //Create context
  window.ctx = canvas.getContext("2d");
  //Download an application
  Controller.start(canvas);
}
