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
    let playerIcon = 'rock'
    displayOutcome(playerIcon, cpuOption);
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
});

paper.addEventListener('click',()=>{
    let playerOption = paper.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    let playerIcon = 'paper'
    displayOutcome(playerIcon, cpuOption);
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

scissors.addEventListener('click',()=>{
    let playerOption = scissors.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    let playerIcon = 'scissors'
    displayOutcome(playerIcon, cpuOption);
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

lizard.addEventListener('click',()=>{
    let playerOption = lizard.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    let playerIcon = 'lizard'
    displayOutcome(playerIcon, cpuOption);
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

spock.addEventListener('click',()=>{
    let playerOption = spock.getAttribute('id');
    let cpuOption = cpuChoice(itemsArray);
    let playerIcon = 'spock'
    displayOutcome(playerIcon, cpuOption);
    setTimeout(() => {
        checkWinner(playerOption, cpuOption);
    }, 1000);
})

let displayOutcome =(playerIcon, cpuOption)=>{

    let playerDiv = document.createElement('div');
        playerDiv.className = 'col';
    
    let playerChoice = document.createElement('p')
        playerChoice.classList = 'choice'
        playerChoice.innerText = `YOU PICKED:\n${playerIcon}`

    let playerImage = document.createElement('img');
        playerImage.classList = `${playerIcon} playerIcon`
        playerImage.setAttribute('alt', `${playerIcon}`)
        playerImage.setAttribute('src', `./assets/images/icon-${playerIcon}.svg`)
    
    playerDiv.appendChild(playerChoice)
    playerDiv.appendChild(playerImage)

    
    let resultDetailsDiv = document.createElement('div')
        resultDetailsDiv.className = 'col'
        resultDetailsDiv.id = 'resultSection'
    
    let result = document.createElement('p')
        result.id = 'resultDetails'
        result.innerText = `...loading...`;
    

    let playBtn = document.createElement('button')
        playBtn.classList = 'btn'
        playBtn.setAttribute('data-dismiss', 'modal')
        playBtn.innerText = 'Play Again'


    resultDetailsDiv.appendChild(result);
    resultDetailsDiv.appendChild(playBtn)


    let cpuDiv = document.createElement('div');
        cpuDiv.className = 'col'
    
    let cpuChoice = document.createElement('p')
        cpuChoice.classList = 'choice'
        cpuChoice.innerText = `THE HOUSE PICKED:\n${cpuOption}`
    
    let cpuIcon = document.createElement('img');
        cpuIcon.classList = `${cpuOption} cpuIcon`
        cpuIcon.setAttribute('alt', `${cpuOption}`)
        cpuIcon.setAttribute('src', `./assets/images/icon-${cpuOption}.svg`);

    cpuDiv.appendChild(cpuChoice)
    cpuDiv.appendChild(cpuIcon)
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
let animateWinner=(winner)=>{
    if(winner === 'Player'){
        let player = document.querySelector('.playerIcon')
            player.classList.add('grow')
    }
    else{
        // alert('cpu')
        let cpu = document.querySelector('.cpuIcon')
        cpu.classList.add('grow')

    }
}
let displayWinner=(winner)=>{
    let winnerDiv = document.querySelector('#resultDetails')
    if(winner === 'draw'){
        winnerDiv.innerText = `It's a draw`
    }
    else{
        winnerDiv.innerText = `${winner} wins`
        animateWinner(winner)
    }
}
