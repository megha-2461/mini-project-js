let random=(parseInt(Math.random()*100 + 1))

const submit=document.querySelector('#subt')
const userinput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultpara')

const p=document.createElement('p')


let numGuess=1

let playGame=true

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        // console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess){
   if (isNaN(guess)){
    alert('Please enter a valid number')
   }
   else if (guess<1){
    alert('Please enter a number greater than 1')
   }
   else if (guess>100){
    alert('Please enter a number less than 100')
   }
   else{
  
    if (numGuess===10){
        displayGuess(guess)
        displayMessage(`GAME OVER. Random number was ${random}`)
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}


function checkGuess(guess)
{
    if (guess===random){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess<random){
        displayMessage(`Number is TOOO low`);
    }
    else if(guess>random){
    displayMessage(`Number is TOOO high`);
    }
}

function displayGuess(guess){
    //valur guess
    //update values
    userinput.value='';
    guessSlot.innerHTML+=`${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message){
    //dom manipulatiom
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
}


function endGame(){
    userinput.value='';
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    p.style.border= '2px solid black';
    startOver.appendChild(p)
    playGame=false;
    newGame();
}

function newGame(){
const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
  random=(parseInt(Math.random()*100 + 1))
 
  numGuess=1
  guessSlot.innerHTML=''
  remaining.innerHTML=`${11-numGuess}`;
  userinput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
})
}


