//View
var View = {

  drawGame: "",

  interval: 100,

  //setInterval start
  start_game: function() {
    View.drawGame = setInterval(View.draw, View.interval);
  },

  //setInterval start
  stop_game: function() {
    clearInterval(View.drawGame);
  },

  //define location
  draw: function() {
    if(location_now == "main menu") {
        View.draw_main_menu();
    } else {
        View.draw_game();
    }
  },

  //paint main menu
  draw_main_menu: function () {
    //Draw fone
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(main_menu_fon_x,main_menu_fon_y,main_menu_fon_size_x,main_menu_fon_size_y);
    for(var i = 0; i < 4;/*then change to the length of the array*/i++) {
      ctx.drawImage(Main_menu.array_menu[i].img, Main_menu.array_menu[i].x, Main_menu.array_menu[i].y, Main_menu.array_menu[i].size_x, Main_menu.array_menu[i].size_y);
    }
  },

  //PAINTING GAME
  draw_game: function() {
    //CLEAR CANVAS
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //paint garden
    ctx.drawImage(Download_app.images_plants[7], garden_padding_left, garden_padding_top, garden_width, garden_height);
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
        ctx.drawImage(Download_app.images_plants[5], (plants[i].x + plants[i].size), plants[i].y, hurvest_img_size, hurvest_img_size);
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
    ctx.font = stock_count_text;
    for(var i = 0; i < stock_menu.length; i++) {
      ctx.drawImage(stock_menu[i].img, stock_menu[i].x, stock_menu[i].y, stock_menu[i].size_x, stock_menu[i].size_y);
      ctx.fillText(count_plants[i].count,count_plants[i].x,count_plants[i].y);
    }
  },

  paint_places_for_plant: function() {
    var size = place_for_plant_size;
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
