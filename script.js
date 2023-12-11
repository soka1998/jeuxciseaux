const contentComputerChoice= document.getElementById('computer-choice');
const contentUserChoice = document.getElementById("user-choice");
const contentResult = document.getElementById("result");


//Click Event on the Button 
const possibleChoices = document.querySelectorAll('button');
let userChoice
let result 
let computerChoice
 
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e)=>{
    // recapitulate id of button clicked
    userChoice = e.target.id;
    //add image that correspond the choice 
    // contentUserChoice.innterHTML = `<img src ="${userChoice}.png">`

    genererate_choice_computer()
    verify();
    
}))

//function to generate computer choice 
function genererate_choice_computer(){
    random = Math.floor(Math.random() * 3)+1 
    //Genrate some numbers between 1 and 3
    if(random === 1){// if random = à 1:
        computerChoice  ='rock'
    }
    if(random === 2){// if random = à 1:
        computerChoice  ='paper'
    }
    if(random === 3){// if random = à 1:
        computerChoice  ='scissors'
    }
    console.log(computerChoice);
    contentUserChoice.innerHTML = `<img src="img/${userChoice}.png">`
    // add img correspond to the choicce
   contentComputerChoice.innerHTML=`<img src="img/${computerChoice}.png">`

    
}
//function verify if the user wins or not 
function verify(){
if(userChoice == computerChoice){
    result ="Draw";
    // cases where the user lost
  }
  if(userChoice == "rock" && computerChoice == "paper"){
    result = "lose !"
  }
  if(userChoice == "paper" && computerChoice == "scissors"){
    result = "lose !"
  }
  if(userChoice == "scissors" && computerChoice == "rock"){
    result = "lose !"
  }
  //cases where the user wins
  if(userChoice == "rock" && computerChoice == "scissors"){
    result = "wins !"
  }
  if(userChoice == "scissors" && computerChoice == "paper"){
    result = "wins !"
  }
  if(userChoice == "paper" && computerChoice == "rock"){
    result = "wins !"
  }
  contentResult.innerHTML=result;
}

