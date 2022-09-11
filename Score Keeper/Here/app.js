const p1 = document.querySelector('#p1Button')
const p2 = document.querySelector('#p2Button')
const display1 = document.querySelector('.display1')
const display2 = document.querySelector('.display2')
const reset = document.querySelector('#reset')
let win = document.querySelector('#play')



let pl1 = 0;
let pl2 = 0;
let winScore = 5;
let gameOver = false;

p1.addEventListener('click', () =>{
if(!gameOver){

    pl1 += 1;

    if(pl1 === winScore){

        gameOver = true
        display1.classList.add('win')
        display2.classList.add('loser')
        p1.disabled = true;
        p2.disabled = true;

    }
    display1.textContent = pl1;

}

})


p2.addEventListener('click', () =>{
    if(!gameOver){
    
        pl2 += 1;
    
        if(pl2 === winScore){
    
            gameOver = true
            display2.classList.add('win')
        display1.classList.add('loser')
        p1.disabled = true;
        p2.disabled = true;
        }
        display2.textContent = pl2;
    
    }
    
    })

    reset.addEventListener('click', clear)

    function clear(){
        gameOver = false;
        pl1 = 0;
        pl2 = 0;
        display1.textContent = 0;
        display2.textContent = 0;                   
        p1.disabled = false;
        p2.disabled = false;

        display1.classList.remove('win', 'loser')
        display2.classList.remove('win', 'loser')
        
    }

 
    win.addEventListener('change', () =>{
        winScore = parseInt(win.value)


        clear();
   
    })