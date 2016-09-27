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
    } else if(location_now == "stock") {
        View.paintStock();
    } else if(location_now == "shop") {
        View.paintShop();
    } else {
        View.draw_game();
    }
  },

  //PAINT MAIN MENU
  draw_main_menu: function () {
    //Draw fone
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(main_menu_fon_x,main_menu_fon_y,main_menu_fon_size_x,main_menu_fon_size_y);
    for(var i = 0; i < 4;/*then change to the length of the array*/i++) {
      ctx.drawImage(Main_menu.array_menu[i].img, Main_menu.array_menu[i].x, Main_menu.array_menu[i].y, Main_menu.array_menu[i].size_x, Main_menu.array_menu[i].size_y);
    }
  },

  //PAINT STOCK(pause)
  paintStock: function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(Stock.x, Stock.y, Stock.size_x, Stock.size_y);
    //draw plate stock
    ctx.drawImage(Download_app.images_stock[0], plate_stock_x, plate_stock_y, plate_stock_size_x, plate_stock_size_y);
    //draw plate exit in game
    ctx.drawImage(Download_app.images_stock[1], stock_exit_in_game_x, stock_exit_in_game_y, stock_exit_in_game_size_x, stock_exit_in_game_size_y);
    //paint user money
    ctx.fillStyle = "black";
    ctx.font = stock_money_user_text;
    ctx.fillText("Бабосы: " + User.money, stock_money_user_x, stock_money_user_y);
    //paint plants
    ctx.font = stock_count_text;
    var plants = Game_menu.array_plants;
    var j = 0;
    for(var i = 0; i < plants.length; i++) {
      if(plants[i].count > 0) {
        ctx.drawImage(Download_app.images_plants[plants[i].id_plant], Stock.positions[j].x, Stock.positions[j].y, Stock.positions[j].size_x, Stock.positions[j].size_y);
        ctx.fillText(plants[i].count, Stock.positions[j].count_x, Stock.positions[j].count_y);
        j++;
      }
    }

  },

  paintShop: function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(Shop.x, Shop.y, Shop.size_x, Shop.size_y);
    //draw plate stock
    ctx.drawImage(Download_app.images_stock[0], plate_stock_x, plate_stock_y, plate_stock_size_x, plate_stock_size_y);
    //draw plate exit in game
    ctx.drawImage(Download_app.images_stock[1], shop_exit_in_game_x, shop_exit_in_game_y, shop_exit_in_game_size_x, shop_exit_in_game_size_y);
    //paint user money
    ctx.fillStyle = "black";
    ctx.font = shop_money_user_text;
    ctx.fillText("Бабосы: " + User.money, shop_money_user_x, shop_money_user_y);
    //paint plants
    ctx.font = stock_count_text;
    var plants = Game_menu.array_plants;
    var j = 0;
    for(var i = 0; i < plants.length; i++) {
      if(plants[i].count > 0) {
        ctx.drawImage(Download_app.images_plants[plants[i].id_plant], Stock.positions[j].x, Stock.positions[j].y, Stock.positions[j].size_x, Stock.positions[j].size_y);
        ctx.fillText(plants[i].count, Stock.positions[j].count_x, Stock.positions[j].count_y);
        j++;
      }
    }
  },

  //PAINTING GAME
  draw_game: function() {
    //CLEAR CANVAS
    ctx.clearRect(0,0,canvas.width,canvas.height);
    //paint garden
    ctx.drawImage(Download_app.images_for_game[0], garden_padding_left, garden_padding_top, garden_width, garden_height);
    //paint game menu
    View.paintGameMenu();
    //if there are plants
    if(Garden_bed.plants.length > 0)  View.paint_plants();
    //paint user money
    ctx.fillStyle = "yellow";
    ctx.font = money_user_text;
    ctx.fillText("Бабосы: " + User.money, money_user_x, money_user_y);
    //if bag == true
    if(bag)  View.paintBag();
    //if planting == true
    if(planting)  View.paint_places_for_plant();
  },

  //paint game menu
  paintGameMenu: function() {
    var game_menu = Game_menu.array_menu;
    for(var i = 0; i < 7;/*then change to the length of the array*/i++) {
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
        ctx.drawImage(Download_app.images_for_game[2], (plants[i].x + plants[i].size), plants[i].y, hurvest_img_size, hurvest_img_size);
      }
      //IF PLANT DED
      if(plants[i].status == "ded") {
        //paint ded plant
        ctx.drawImage(Download_app.images_for_game[1], plants[i].x, plants[i].y, plants[i].size, plants[i].size);
      }
    }
  },

  paintBag: function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(Bag.x, Bag.y, Bag.size_x, Bag.size_y);
    //paint plants icons
    ctx.fillStyle = "black";
    ctx.font = bag_count_text;
    var plants = Game_menu.array_plants;
    var j = 0;
    for(var i = 0; i < plants.length; i++) {
      if(plants[i].count > 0) {
        ctx.drawImage(Download_app.images_plants[plants[i].id_plant], Bag.positions[j].x, Bag.positions[j].y, Bag.positions[j].size_x, Bag.positions[j].size_y);
        ctx.fillText(plants[i].count, Bag.positions[j].count_x, Bag.positions[j].count_y);
        j++;
      }
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
