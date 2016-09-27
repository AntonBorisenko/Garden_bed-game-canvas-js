//with the functions of the file

//FUNCTIONS FOR "Click.js"

//findPosX(for canvas)
function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (1) {
            curleft+=obj.offsetLeft;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.x) {
        curleft+=obj.x;
    }
    return curleft;
}

//findPosY(for canvas)
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (1) {
            curtop+=obj.offsetTop;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.y) {
        curtop+=obj.y;
    }
    return curtop;
}

//FUNCTIONS FOR Game_mune.js

function Create_object(x, y, size_x ,size_y, img, Obj_name) {
  this.x = x;
  this.y = y;
  this.size_x = size_x;
  this.size_y = size_y;
  this.img = img;
  this.Obj_name = Obj_name;
}

//constructor for menu stock and bag(positions)
function Create_object_position(x, y, size_x, size_y, count_x, count_y) {
  Create_object.call(this, x, y, size_x, size_y);
  this.count_x = count_x;
  this.count_y = count_y;
}

function Create_plant(Obj_name, id_plant, count, price) {
  this.Obj_name = Obj_name;
  this.id_plant = id_plant;
  this.count = count;
  this.price = price;
}
