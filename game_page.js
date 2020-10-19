player_1_name=localStorage.getItem("player_1_name");
player_2_name=localStorage.getItem("player_2_name");
document.getElementById("player_1_name").innerHTML=player_1_name+":";
document.getElementById("player_2_name").innerHTML=player_2_name+":";
player1score=0;
player2score=0;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("Playerquestion").innerHTML="questionturn-"+player_1_name;
document.getElementById("Playeranswer").innerHTML="answerturn-"+player_2_name;
function send(){
getWord=document.getElementById("word").value;
word=getWord.toLowerCase();
console.log(word);
charAt1=word.charAt(1);
console.log(charAt1);
len=Math.floor(word.length/2);
charAt2=word.charAt(len);
console.log(charAt2)
charAt3=word.charAt(word.length-1);
console.log(charAt3);
remove1=word.replace(charAt1,"_");
remove2=remove1.replace(charAt2,"_");
remove3=remove2.replace(charAt3,"_");
console.log(remove3);
questionword="<h4 id='worddisplay'>q:"+remove3+"</h4>";
input_box="<br>answer:<input type='text' id='inputcheckbox'>";
checkbutton="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
row=questionword+input_box+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check(){
answer=document.getElementById("inputcheckbox").value;
getAnswer=answer.toLowerCase();
console.log(getAnswer);
if(getAnswer==word){
    if (answerturn=="player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
        
    }
    else{
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("Playerquestion").innerHTML="questionturn-"+player_2_name;
    }
    else{
        questionturn="player1";
    document.getElementById("Playerquestion").innerHTML="questionturn-"+player_1_name;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("Playeranswer").innerHTML="answerturn-"+player_2_name;
    }
    else{
        answerturn="player1";
    document.getElementById("Playeranswer").innerHTML="answerturn-"+player_1_name;
    }
    document.getElementById("output").innerHTML="";
}
}
