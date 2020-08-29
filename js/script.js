let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let spock = document.querySelector('#spock')
let lizard = document.querySelector('#lizard')
let scoreBoard = document.querySelector('#score')
let outcomeDiv = document.querySelector('#outcomeDiv')

let itemsArray = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

let cpuChoice =(items)=>{
    let randomNumber = Math.floor(Math.random()*5);
    return (items[randomNumber]);
}

rock.addEventListener('click',()=>{
    let playerOption = rock.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    displayOutcome();
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
        // let details = document.querySelector('#resultDetails')
        //     details.classList.toggle('hide');
    }, 1000);
});

paper.addEventListener('click',()=>{
    let playerOption = paper.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    displayOutcome();
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

scissors.addEventListener('click',()=>{
    let playerOption = scissors.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    displayOutcome();
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

lizard.addEventListener('click',()=>{
    let playerOption = lizard.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    displayOutcome();
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

spock.addEventListener('click',()=>{
    let playerOption = spock.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    displayOutcome();
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

let displayOutcome =()=>{
    let playerDiv = document.createElement('div')
        playerDiv.className = 'col';
        playerDiv.innerText = 'player icon'

    let cpuDiv = document.createElement('div');
        cpuDiv.className = 'col'
        cpuDiv.innerText = 'cpu icon'

    let resultDetailsDiv = document.createElement('div')
        resultDetailsDiv.className = 'col'
        resultDetailsDiv.id = 'resultDetails'
        // resultDetailsDiv.setAttribute('style', "display:none")
        // resultDetailsDiv.innerText = 'winner text'

    outcomeDiv.innerText = '';
    outcomeDiv.appendChild(playerDiv)
    outcomeDiv.appendChild(resultDetailsDiv)
    outcomeDiv.appendChild(cpuDiv)
}

let checkWinner=(player, cpu)=>{
    if(player === cpu){
        console.log('its a draw', player, cpu)
        displayWinner('draw')
    }

    else if((player === 'rock') && ((cpu === 'scissors') || (cpu === 'lizard'))){
        console.log('player wins', player, cpu)
        addPoint();
    }
    else if((player === 'rock') && ((cpu === 'paper') || (cpu === 'spock'))){
        console.log('cpu wins', player, cpu);
        subtractPoint();
    }

    else if((player === 'paper') && ((cpu === 'rock') || (cpu === 'spock'))){
        console.log('player wins', player, cpu)
        addPoint();
    }
    else if((player === 'paper') && ((cpu === 'scissors') || (cpu === 'lizard'))){
        console.log('cpu wins', player, cpu)
        subtractPoint();
    }

    else if((player === 'scissors') && ((cpu === 'paper') || (cpu === 'lizard'))){
        console.log('player wins', player, cpu)
        addPoint();
    }
    else if((player === 'scissors') && ((cpu === 'rock') || (cpu === 'spock'))){
        console.log('cpu wins', player, cpu)
        subtractPoint();
    }

    else if((player === 'lizard') && ((cpu === 'paper') || (cpu === 'spock'))){
        console.log('player wins', player, cpu)
        addPoint();
    }

    else if((player === 'lizard') && ((cpu === 'rock') || (cpu === 'scissors'))){
        console.log('cpu wins', player, cpu)
        subtractPoint();
    }

    else if((player === 'spock') && ((cpu === 'rock') || (cpu === 'scissors'))){
        console.log('player wins', player, cpu)
        addPoint();
    }

    else if((player === 'spock') && ((cpu === 'paper') || (cpu === 'lizard'))){
        console.log('cpu wins', player, cpu)
        subtractPoint();
    }
};

let addPoint=()=>{
    let value = parseInt(scoreBoard.textContent);
        scoreBoard.innerText = ++value;
        displayWinner('Player')
}
let subtractPoint=()=>{
    displayWinner('CPU')
    let value = parseInt(scoreBoard.textContent);
        if(value === 0){
            console.log('score is zero')
            return scoreBoard.innerText = '0'
        }
        scoreBoard.innerText = --value;
}
let displayWinner=(winner)=>{
    let winnerDiv = document.querySelector('#resultDetails')
    if(winner === 'draw'){
        winnerDiv.innerText = `It's a draw`
    }
    else{
        winnerDiv.innerText = `${winner} wins`
    }
}
