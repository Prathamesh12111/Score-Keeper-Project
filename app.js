const p1Display=document.querySelector('#p1Display');
const p2Display=document.querySelector('#p2Display');
const btn1=document.querySelector('#b1');
const btn2=document.querySelector('#b2');
const resetButton=document.querySelector('#b3');
const winningScoreSelect=document.querySelector('#aside');

let p1Score=0;
let winningScore=winningScoreSelect.value;
let isGameOver=false;

btn1.addEventListener('click',function(){
    if(!isGameOver){
        p1Score=p1Score+1;
       if(p1Score==winningScore){
         isGameOver=true;
         p1Display.style.color='green';
       }
       p1Display.innerText=p1Score;
    }
}) 

let p2Score=0;
btn2.addEventListener('click',function(){
    if(!isGameOver){
        p2Score=p2Score+1;
       if(p2Score==winningScore){
         isGameOver=true;
         p2Display.style.color='green';
       }
       p2Display.innerText=p2Score;
    }
}) 

winningScoreSelect.addEventListener('change',()=>{
  winningScore=parseInt(winningScoreSelect.value);
  reset();
})

resetButton.addEventListener('click',reset)

function reset(){
  isGameOver=false;
  p1Score=0;
  p2Score=0;
  p1Display.innerText=0;
  p2Display.innerText=0;
  p1Display.style.color='black';
  p2Display.style.color='black';
}
