function leader(username,score){
  console.log("\nCurrent Leaderboard:\n");
  console.log("Name                    Points");
  console.log("Viven                   12");
  console.log("Deepak                  12");
  if(score<8){
  console.log("Surya                   8");}
  else{
        var len=username.length;
        for(i=0;i<24-len;i++){username+=" ";}
        console.log(username+score);
    }
}
function play(){
  arr=[1,{
    qst:"Inside which HTML element do we put the JavaScript?",
    sol:"b",
    op1:"a.<link>",op2:"b.<script>",op3:"c.<javascript>",op4:"d.<scripting>"
  },
  {
    qst:"In the JavaScript, which one of the following is not considered as an error?",
    sol:"c",
    op1:"a.Syntax error",op2:"b.Missing of semicolons",op3:"c.Division by zero",op4:"d.Missing of Bracket"
  },
  {
    qst:"Which one of the following is not a keyword?",
    sol:"d",
    op1:"a.with",op2:"b.if",op3:"c.debugger",op4:"d.use strict"
  },
  {
    qst:"A collection of elements of the same data type which may either in order or not, is called _____?",
    sol:"c",
    op1:"a.String",op2:"b.Serialized Object",op3:"c.Array",op4:"d.Object"
  }];
  for(var i=1;i<arr.length;i++){
    var q=arr[i];
    console.log("\n"+i+". "+q.qst);
    console.log(q.op1);
    console.log(q.op2);
    console.log(q.op3);
    console.log(q.op4);
    var ans=readlineSync.question("\nYour answer:");
    if(ans==q.sol){
        score+=3;
        console.log("woohoooo!!!! Right answer!");
      }
    else{
      score--;
      console.log("Sorry Incorrect:( Try Again!");
      }
    console.log("\n\t\t\t************************************************");
  }
}
var readlineSync=require('readline-sync');
var username=readlineSync.question('Please provide us your name:');
score=0;
console.log('\n\t\t\t\t\t\tWelcome to the Quiz '+username+'!!!\n');
console.log("\nRules: ");
console.log("1. There are total of 4 questions. All are compulsory.");
console.log("2. Each right answer will give you 3 points.");
console.log("3. 1 point will be deducted for each wrong answers.");
leader(username,score);
var start=readlineSync.question("Press 1 to start the quiz:");
if(start==1){
play();
console.log("Your score is:"+score+"\n");
leader(username,score);}
console.log("\n\t\t\t\t\t\tThankyou for participation.")