const btnsEl=document.querySelectorAll('.btn');
const elementEl=document.querySelector('.element');
const btns=Array.from(btnsEl);
const scoreEl=document.querySelector('.puntaje');
let score=0;
function addScore(score){
    score=JSON.parse(localStorage.getItem('score'));
    scoreEl.innerHTML=`tu puntaje: ${score}`;
}
btns[0].addEventListener('click',function(){
    elementEl.classList.add('move-up');
    setTimeout(function(){
        window.location.reload()
    },4000);
    score++;
    addScore(score);
    localStorage.setItem('score',score);
});
btns[1].addEventListener('click',function(){
    elementEl.classList.add('move-left');
    setTimeout(function(){
        window.location.reload()
    },4000);
    score++;
    addScore(score);
    localStorage.setItem('score',score);
});
btns[2].addEventListener('click',function(){
    elementEl.classList.add('move-down');
    setTimeout(function(){
        window.location.reload()
    },4000);
    score++;
    addScore(score);
    localStorage.setItem('score',score);
});
btns[3].addEventListener('click',function(){
    elementEl.classList.add('move-right');
    setTimeout(function(){
        window.location.reload()
    },4000);
    score++;
    addScore(score);
    localStorage.setItem('score',score);
});