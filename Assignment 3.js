var x;
var y;
var move = false;
var color='black';
var shape='dot';
var obj;

function Mclick() {
    x = event.clientX;
    y = event.clientY;
    if(event.x<820 && event.y<535 && event.x>325 && event.y>60) {
        paint();
    }
    move = true;
}

function Mmove(event) {
    if(move && event.x<820 && event.y<535 && event.x>325 && event.y>60) {
        paint();
           }
}
var body = document.getElementById('body');
body.addEventListener("mouseup", function() {move=false});

function paint()  {
    obj = document.createElement('div');
    var spot = document.getElementById('spot');
    spot.appendChild(obj);
    obj.style.left = event.x -325 + 'px';
    obj.style.top = event.y -60 + 'px';
    obj.style.backgroundColor=color;
    obj.className = shape;
    spot.addEventListener("mouseup", function() {move=false});
}

var cell=0;
var cell=document.getElementsByTagName('th');

function changeColor()    {
   color=this.id;
}

for(let i=0; i<7; i++){
    cell[i].addEventListener('click',changeColor);
}

function changeShape()  {
    shape=this.id;
}

for(let i=7; i<13; i++){
    cell[i].addEventListener('click',changeShape);
}

function clearAll()  {
    spot.innerHTML = '';
}
cell[13].addEventListener('click',clearAll);