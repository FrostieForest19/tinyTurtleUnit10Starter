TinyTurtle.apply(window);
    stamp();

function square(){
    for(var i = 0; i<5; i = i+1){
        forward(50);
        right(90);
    }}
    
function triangle(){
    for(var i = 0; i<3; i = i+1){
        forward(50);
        right(120);
    }}

function house(){
    for(var i = 0; i<1; i = i+1){
        square();
        forward(50);
        right(180);
        triangle();
        
    }}


function pentagon(){
    for(var i = 0; i<6; i = i+1){
        forward(50);
        right(72);
    }}


function hexagon(){
    for(var i = 0; i<7; i = i+1){
        forward(50);
        right(60);
    }} 
    

function circle(){
    for(var i = 0; i<361; i = i+1){
        forward(1);
        right(1);
    }}


function fracart(){
    for(var i = 0; i<10; i=i+1){
        square();
        right(40);
    }}

function art(){
    for(var i = 0; i<1; i = i+1){
        
        for(var j=0; j<500; j=j+5){
            forward(j);
            right(90);
        }
        
    }
}
art();