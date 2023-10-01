let computer_result;
player = 0;
computer = 0;

const play = document.getElementById('play'); 
const buttons = document.querySelectorAll('button');


function getComputerChoice(){
    const myArray = ['rock','paper','scissor'];  
    const computer_result = myArray[Math.floor(Math.random() * myArray.length)];  
    return computer_result;
};

function playerSelection(){
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            player_result = button.textContent;
            console.log('player',player_result);
            playRound(player_result,computer_result);
            if (player === 5 || computer === 5){
                winner();
            };
        });
      });
};

playerSelection();
const div = document.createElement('div');
action = document.createElement('h2');
action.textContent = ''
const body = document.querySelector('body');
// const img = 


function playRound(player_result,computer_result) {
    
    
    computer_result = getComputerChoice()
    console.log('saved player result',player_result)
    console.log('saved computer result',computer_result)
    
    
    if (player_result === "paper" && computer_result === "rock"){
        player+=1;
        document.body.style.backgroundImage = "url('blue.png')";
        // <img class="img" src="./cook.jpeg"></img>;
        text = 'paper holds the rock';
        action.textContent = text;
        body.appendChild(div);
        div.appendChild(action);


    } 
    else if (player_result === "scissor" && computer_result === "paper"){
        player+=1;
        document.body.style.backgroundImage = "url('blue.png')";
        const text = 'scissor cuts the paper';
        action.textContent = text;
        div.appendChild(action);
        body.appendChild(div);

    } 
    else if (player_result === "rock" && computer_result === "scissor"){
        player+=1;
        document.body.style.backgroundImage = "url('blue.png')";
        const text = 'rock breaks the scissor';
        action.textContent = text;
        div.appendChild(action);
        body.appendChild(div);

    } 
    else if (player_result === computer_result){
        console.log('tie')
        const text = 'tie';
        action.textContent = text;
        div.appendChild(action);
        body.appendChild(div);

    }else{
        computer+=1;
        document.body.style.backgroundImage = "url('red.png')";
        const text = `${computer_result} beats ${player_result}`;
        action.textContent = text;
        div.appendChild(action);
        body.appendChild(div);
    }
    const score = document.getElementById('you');
    const score2 = document.getElementById('comp');
    score.textContent = player;
    score2.textContent = computer;

  };


function winner(){
    console.log('You = ',player)
    console.log('Computer = ',computer)
    if (player>computer){
        print= "you are the winner";
        result = document.createElement('h1');
        result.textContent = print;
        body.appendChild(result);
        console.log("you are the winner");
    }
    else if (player===computer){
        console.log('draw')
    }else{
        print= "you lose";
        result = document.createElement('h1');
        result.textContent = print;
        body.appendChild(result);
        // buttons.remove();
        console.log('You lose')
    }
    player = 0;
    computer = 0;
    
    play.remove();

    // div.remove();
    const button2 = document.createElement("button");
    const retry = document.createTextNode("TRY AGAIN");
    button2.appendChild(retry);
    body.appendChild(button2);
    button2.addEventListener('click',()=>{
        location.reload();
    });
};