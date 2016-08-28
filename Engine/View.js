//View
var View = {

  drawGame: "",

  interval: 50,

  //setInterval start
  start_game: function() {
    View.drawGame = setInterval(View.draw_game, View.interval);
  },

  //setInterval start
  stop_game: function() {
    clearInterval(View.drawGame);
  },

  //PAINTING
  draw_game: function() {
    //CLEAR CANVAS
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //paint fone
    ctx.drawImage(Download_app.images_plants[7], 10,10, 740, 580);
    //paint game menu
    View.paintGameMenu();
    //if there are plants
    if(Garden_bed.plants.length > 0)  View.paint_plants();
    //if bag == true
    if(bag)  View.paintBag();
    //if stock == true
    if(stock)  View.paintStock();
    //if planting == true
    if(planting)  View.paint_places_for_plant();
  },

  //paint game menu
  paintGameMenu: function() {
    ctx.fillStyle = "green";
    ctx.font = "bold 30px Arial";
    var game_menu = Game_menu.array_menu;
    for(var i = 0; i < 6;/*then change to the length of the array*/i++) {
      ctx.drawImage(game_menu[i].img, game_menu[i].x, game_menu[i].y, game_menu[i].size_x, game_menu[i].size_y);
    }
  },

  paint_plants: function() {
    var plants = Garden_bed.plants;
    for(var i = 0; i < plants.length; i++) {
      //IF PLANT GROW
      if(plants[i].status == "grow") {
        //paint plant
        ctx.drawImage(Download_app.images_plants[plants[i].img_number], plants[i].x, plants[i].y, plants[i].size, plants[i].size);
        //over time the plant dries
        plants[i].watering(); // water--;
        //growing plant
        plants[i].growing(); // grow++;
      }
      //IF PLANT GROWN
      if(plants[i].status == "grown") {
        //paint plant
        ctx.drawImage(Download_app.images_plants[plants[i].img_number], plants[i].x, plants[i].y, plants[i].size, plants[i].size);
        //draw the icon for harvest
        ctx.drawImage(Download_app.images_plants[5], (plants[i].x + plants[i].size), plants[i].y, 40, 40);
      }
      //IF PLANT DED
      if(plants[i].status == "ded") {
        //paint ded plant
        ctx.drawImage(Download_app.images_plants[4], plants[i].x, plants[i].y, plants[i].size, plants[i].size);
      }
    }
  },

  paintBag: function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(Bag.x, Bag.y, Bag.size_x, Bag.size_y);
    //paint plants icons
    var bag_menu = Game_menu.array_for_bag;
    for(var i = 0; i < bag_menu.length; i++) {
      ctx.drawImage(bag_menu[i].img, bag_menu[i].x, bag_menu[i].y, bag_menu[i].size_x, bag_menu[i].size_y);
    }
  },

  paintStock: function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(Stock.x, Stock.y, Stock.size_x, Stock.size_y);
    //paint plants icons
    var stock_menu = Game_menu.array_for_stock;
    var count_plants = Game_menu.array_for_stock_count_plants;
    ctx.fillStyle = "black";
    ctx.font= "14px Georgia";
    for(var i = 0; i < stock_menu.length; i++) {
      ctx.drawImage(stock_menu[i].img, stock_menu[i].x, stock_menu[i].y, stock_menu[i].size_x, stock_menu[i].size_y);
      ctx.fillText(count_plants[i].count,count_plants[i].x,count_plants[i].y);
    }
  },

  paint_places_for_plant: function() {
    var size = 100;
    ctx.fillStyle = "lightgreen";
    document.body.style.cursor = "url('img/Icons/grain.png'), auto";
    var places = Garden_bed.places_for_planting;
    for(var i = 0; i < places.length; i++) {
      if(places[i].plant == false) {
        ctx.fillRect(places[i].x, places[i].y, size, size);
      }
    }
  }

}
