var readlineSync = require("readline-sync");
console.log("\t\tWelcome to the Quiz");
var userName = readlineSync.question("What is your Name?\n");
console.log("Welcome "+userName+" in the Quiz about Aditya \n")
var score = 0;


function play(question,answer) {
  var userAnswer  = readlineSync.question(question);
  if (userAnswer == answer){
    console.log("You are right!")
    score+=1;
  }else{
    console.log("You are wrong!")
  }
  console.log("current score "+score);
  console.log("------------");
}

var questions = [{
  question:"where do aditya study?\n",
  answer:"itm"
},
{
  question:"DO aditya loves ironman?\n",
  answer:"yes"
},
{
  question:"Do aditya lives in gwalior?\n",
  answer:"yes"
},
{
  question:"Do aditya loves food?\n",
  answer:"yes"
},
{
  question:"who is his best friend?\n",
  answer:"talib"
},]

for(var i=0; i<questions.length; i++){
  var correctQuestion = questions[i];
  play(correctQuestion.question,correctQuestion.answer);
}

console.log("YAYYYY!! You Scored "+score);