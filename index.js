
function moves(box){
    if (document.winner != null) {
        setmessage(document.turn + "Won Already!")
    }else if (box.innerText=='') {
        
        
        box.innerText = document.turn;
        switchplayer();
        
    }else{
        setmessage("Choose Box")
    }
    
};

function gamestart(){

    document.winner=null;
    document.turn = "X";
    for(var i=1;i<10;i++){
        reset(i);
    }
    setmessage(document.turn + "'s "+ "   get to start the game");

};

function reset(number){
    document.getElementById("id"+number).innerText="";
}

function switchplayer(){
    if (winner(document.turn)) {
        setmessage("Welldone, "+document.turn + "'s  You WON!!");
        document.winner=document.turn;
        
    }else if (document.turn=="X") {
        document.turn="O";
        setmessage(document.turn + "'s"+ "   Turn");
        
    }
    else{
        document.turn="X";
        setmessage(document.turn + "'s"+ "   Turn");
    }
};
 
function setmessage(msg){
    document.getElementById('messagebox').innerText = msg;


}

function winner(move){
    var result=false;
    if(checkrow(1,2,3,move) ||checkrow(4,5,6,move) ||checkrow(7,8,9,move) ||checkrow(1,4,7,move) ||checkrow(2,5,8,move) ||checkrow(3,6,9,move) ||checkrow(1,5,9,move) ||checkrow(3,5,7,move)){
        result= true;
    }
    return result;

}

function checkrow(a,b,c,move){
    var result = false;
    if(getbox(a)==move && getbox(b)==move && getbox(c)==move){
        result=true
    }
    return result;

}

function getbox(number){
    return document.getElementById("id"+number).innerText;

}