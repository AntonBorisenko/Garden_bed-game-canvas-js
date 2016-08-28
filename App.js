"use strict";
//Main js file
window.onload = function() {
  //Init canvas
  window.canvas = document.getElementById("canvas");
  window.ctx = canvas.getContext("2d");
  //Download an application
  Controller.start();
}
