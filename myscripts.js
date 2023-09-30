let computer_result;
player = 0;
computer = 0;

const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    const myArray = ['rock','paper','scissor'];  
    const computer_result = myArray[Math.floor(Math.random() * myArray.length)];  
    return computer_result;
};

function playerSelection(){
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            player_result = button.innerHTML;
            console.log('player',player_result);
            playRound(player_result,computer_result);
            if (player === 5 || computer === 5){
                winner();
            };
        });
      });
};

playerSelection();



function playRound(player_result,computer_result) {
        
    computer_result = getComputerChoice()
    console.log('saved player result',player_result)
    console.log('saved computer result',computer_result)
    
    if (player_result === "paper" && computer_result === "rock"){
        player+=1;
    } 
    else if (player_result === "scissor" && computer_result === "paper"){
        player+=1;
    } 
    else if (player_result === "rock" && computer_result === "scissor"){
        player+=1;
    } 
    else if (player_result === computer_result){
        console.log('tie')
    }else{
        computer+=1;
    }
  };


function winner(){
    console.log('You = ',player)
    console.log('Computer = ',computer)
    if (player>computer){
        print= "you are the winner";
        document.querySelector('h2').innerHTML = print;
        console.log("you are the winner");
    }
    else if (player===computer){
        console.log('draw')
    }else{
        print= "you lose";
        document.querySelector('h2').innerHTML = print;
        console.log('You lose')
    }
    player = 0;
    computer = 0;

    // var x = document.createElement("BUTTON");
    // var t = document.createTextNode("TRY AGAIN");
    // x.appendChild(t);
    // document.body.appendChild(x);
    // t.addEventListener('click',()=>{
        
    // })
};