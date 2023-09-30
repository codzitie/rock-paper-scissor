function getComputerChoice(){
    const myArray = ['rock','paper','scissor'];  
    const computer_result = myArray[Math.floor(Math.random() * myArray.length)];  
    // console.log(computer_result);  
    return computer_result;
};

function playerSelection(){
    const myArray = ['rock','paper','scissor'];  
    const player_result = myArray[Math.floor(Math.random() * myArray.length)];  
    // console.log(player_result);  
    return player_result;

};

player = 0;
computer = 0;

function playRound() {
        
    player_result = playerSelection()
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
        playRound();
    }else{
        computer+=1;
    }
  };


function game(){
    for (i=0; i<100; i++){
        playRound();
        if (player === 5 || computer === 5){
            break;
        };
    };

    console.log('You = ',player)
    console.log('Computer = ',computer)
    if (player>computer){
        console.log("you are the winner")
    }
    else if (player===computer){
        console.log('draw')
    }else{
        console.log('You lose')
    }


};

game();