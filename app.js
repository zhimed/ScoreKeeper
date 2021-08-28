const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const select = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

select.addEventListener('change',()=>{
    winningScore = parseInt(select.value);
    reset();
})

p1Button.addEventListener('click',()=>{
    if(isGameOver!=true){
        p1Score.textContent = parseInt(p1Score.textContent) + parseInt(1);
    }
    if(parseInt(p1Score.textContent) > winningScore/2){
        isGameOver = true;
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        p1Button.disabled =true;
        p2Button.disabled =true;
    }
})

p2Button.addEventListener('click',()=>{
    if(isGameOver!=true){
        p2Score.textContent = parseInt(p2Score.textContent) + parseInt(1);
    }
    if(parseInt(p2Score.textContent) > winningScore/2){
        isGameOver = true;
        p2Score.classList.add('has-text-success');
        p1Score.classList.add('has-text-danger');
        p1Button.disabled =true;
        p2Button.disabled =true;
    }

})

resetButton.addEventListener('click',reset)

function reset(){
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    isGameOver = false;
    p1Score.classList.remove('has-text-success','has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}