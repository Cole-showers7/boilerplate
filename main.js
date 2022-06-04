  //diagonal of a square
  function diagonalAssignment(){
    let eachSide=9;
        var Diagonal=eachSide * Math.sqrt(2);
        console.log(Diagonal);      
    
}
diagonalAssignment();


function areaOfTriangle(){
    var a= 5;
    var b= 6;
    var c=7;
    let sP= (a + b + c)/2;
    var Area=Math.sqrt(sP *(sP-a) *(sP-b) *(sP-c));
    console.log(Area);
}

areaOfTriangle();

function circumference(){
    const PI=3.142;
    var r= 4;
    var circumferenceOfCircle= 2 * PI * r;
    console.log (circumferenceOfCircle);
}

circumference();

function surfaceArea(){
    const PI=3.142;
    var r=4;
    var surface= PI *r *r;
    console.log(surface);
}
surfaceArea();

function integer(a,b) {

    if (a > 0 && b > 0 && a > b) {
      console.log("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      console.log("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      console.log("Both numbers are equal")
    } else {
        console.log("Please add an integer!");
  
    }
    
  }
  
  integer(10,9);

  const number = prompt("Enter any  numberof your choice: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

//Main Js Assignment
let computerChoice= ["rock","paper","scissors"];
function computerPlay(computerChoice){

  
return computerChoice=computerChoice[Math.floor(Math.random() *computerChoice.length)];
}

  
   let playerSelection = prompt("Rock, Paper or Scissors?");

  function game1(playerSelection,computerChoice){
    if (playerSelection==computerChoice){
       console.log("It was a tie");
    }
    if(playerSelection== "rock" && computerChoice== "paper") {
          console.log("You loose, Paper beats rock.");
      }
      if(playerSelection== "paper" && computerChoice== "scissors") {
          console.log("You loose, Scissors beats paper.");
      }
      if(playerSelection== "scissors" && computerChoice== "srock") {
          console.log("You loose, Rock beats scissors.");
      }
      else {
          console.log("You win.");
      }

  }
  game1(playerSelection,computerChoice);
  console.log(playerSelection);
  console.log(computerChoice);
 