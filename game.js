function rpsGame(yourChoice)
{
    var humanChoice,botChoice;
    humanChoice=yourChoice.id;
  botChoice= botnumber(rand());

  results=decideWinner(humanChoice,botChoice);
message=finalMessage(results);
rpsfront(yourChoice.id,botChoice,message);

}
function decideWinner(yourchoice,compchoice)
{
var datab={
    'rock':{'paper':0,'scissor':1,'rock':0.5},
    'paper':{'paper':0.5,'rock':1,'scissor':0},
    'scissor':{'paper':1,'rock':0,'scissor':0.5}
}
yourchoice=datab[yourchoice][compchoice];
compchoice=datab[compchoice][yourchoice];
return [yourchoice,compchoice];

}
function rand()
{
    return Math.floor(Math.random()*3);
}
function botnumber(number)
{
    return ['rock','paper','scissor'][number];
}
function finalMessage([yourscore,computerscore])
{
if(yourscore==1)
{
return {'message':'You Won','color':'green'};
}
else if(yourscore==0)
{
return {'message':'You Lost','color':'red'};
}
else{
    return {'message':'Draw','color':'blue'};
}
}
function rpsfront(x,y,z)
{
var imagedatabase={
    'rock': document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src,
}
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var humdiv=document.createElement('div');
var messdiv=document.createElement('div');
var botdiv=document.createElement('div');

humdiv.innerHTML="<img src='"+imagedatabase[x] + "'  text-align: centre height=150 width=150 style='box-shadow:  0px 10px 50px rgba(37,50,233,1);'>"
messdiv.innerHTML="<h1 style='color:" + z['color']+"; font-size:40px; padding:30px;'>"+ z['message']+ "</h1>"
botdiv.innerHTML="<img src='"+imagedatabase[y] + "'  text-align: centre height=150 width=150 style='box-shadow:  0px 10px 50px rgba(37,50,233,1);'>"

document.getElementById('flexbox').appendChild(humdiv);
document.getElementById('flexbox').appendChild(messdiv);
document.getElementById('flexbox').appendChild(botdiv);



}