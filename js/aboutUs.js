window.onload= function () {
let plusBtn = document.querySelector('.plus');
let minusBtn = document.querySelector('.minus');
let text = document.querySelector('.content');
let count = 15;
plusBtn.addEventListener('click', function(){
    count++;
    text.style.fontSize = count + "px";
    console.log(count)
})
minusBtn.addEventListener('click', function(){
    count--;
    text.style.fontSize = count + "px";
    console.log(count)
})
minusBtn
};