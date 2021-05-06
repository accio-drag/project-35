//Create variables here
var dogimg, dogimg1, dog;
var foodStock;
var database;
function preload()
{
  
  dogimg= loadImage("images/dogImg.png")
  dogimg1= loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1200, 500);
  dog = createSprite(800,200,150,150);
dog.addImage(dogimg1);
dog.scale=0.2;
database = firebase.database();
var ref = database.ref("food");
ref.on("value",readOP)
add = createButton("addFood");
add.position(700,95)
add.mousePressed(addBottle);


feed = createButton("feed");
feed.position(800,95)
feed.mousePressed(feedDog);
foodObj = new Food()
}

function readOP(data){
foodStock=data.val();




}
function draw() {  
background(46, 139, 87)


  foodObj.display()
  drawSprites()
  //add styles here
/*if (keyWentDown(UP_ARROW)){
writeStock(foodStock);
dog.addImage(dogimg);




}*/
}

/*function writeStock(x){
if(x<=0)
x=0;
else
x-=1;

database.ref("/").update({
food:x,
}
)
}
*/
function addBottle(){
foodStock++
database.ref("/").update({
  food: foodStock
})
}
function feedDog(){
dog.addImage(dogimg);
if(foodObj.getFoodStock()<=0){
foodObj.updateFoodStock(0)
}
else{
foodObj.updateFoodStock(foodObj.getFoodStock() - 1);
}
database.ref("/").update({
  food:foodObj.getFoodStock()
})


}












