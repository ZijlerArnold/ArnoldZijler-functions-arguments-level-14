const log = console.log;
log('hallo');
//=========================

let sideWall = 'north'; 
let colorToPaint = "yellow";

const paintingTheWall = function (sideWall,color) {
    log("The " + sideWall + ' wall has been painted ' + color);
};
paintingTheWall(sideWall, colorToPaint);

