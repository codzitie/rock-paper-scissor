function getComputerChoice(){
    const myArray = ['rock','paper','scissor'];  
    const computer_result = myArray[Math.floor(Math.random() * myArray.length)];  
    console.log(computer_result);  
    return computer_result;
};
// getComputerChoice();

function playerSelection(){
    const myArray = ['rock','paper','scissor'];  
    const player_result = myArray[Math.floor(Math.random() * myArray.length)];  
    console.log(player_result);  
    return player_result;

};
// playerSelection();

function playRound() {
    player_result = playerSelection()
    computer_result = getComputerChoice()
    globalThis.player = []
    globalThis.computer = []
    if (player_result === "paper" && computer_result === "rock"){
        player+=1;
    }else {
        computer+=1;
    }; 
    if (player_result === "scissor" && computer_result === "paper"){
        player+=1;
    }else {
        computer+=1;
    }; 
    if (player_result === "rock" && computer_result === "scissor"){
        player+=1;
    }else {
        computer+=1;
    }; 
    if (player_result === computer_result){
        console.log('tie')
    };
    
  };

function game(){
    playRound();
    for (let i = 0; i<5; i++){
        playRound();
    };
    console.log('You = ',player)
    console.log('Computer = ',computer)
    if (player>computer){
        console.log("you are the winner")
    }else{
        console.log('You lose')
    }
};

game();

