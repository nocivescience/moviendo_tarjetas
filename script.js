const btnsEl=document.querySelectorAll('.btn');
const elementEl=document.querySelector('.element');
const btns=Array.from(btnsEl);
btns[0].addEventListener('click',function(){
    elementEl.classList.add('move-up');
    setTimeout(function(){
        window.location.reload()
    },4000);
});
btns[1].addEventListener('click',function(){
    elementEl.classList.add('move-left');
    setTimeout(function(){
        window.location.reload()
    },4000);
});
btns[2].addEventListener('click',function(){
    elementEl.classList.add('move-down');
    setTimeout(function(){
        window.location.reload()
    },4000);
});
btns[3].addEventListener('click',function(){
    elementEl.classList.add('move-right');
    setTimeout(function(){
        window.location.reload()
    },4000);
});