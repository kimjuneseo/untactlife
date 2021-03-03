window.onload = function () {
    const delBtn = document.querySelectorAll('button');

    const content = document.querySelector(".content");
    content.addEventListener("click", ({ target }) => {
        if (target.tagName.toLowerCase() === "button") {
            let Boolean = confirm('삭제 하시겠습니까?')
            if (Boolean === true) {
                target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)
            }

        };
    });
};

 //popup
 function loginPop(){
    loginPopUp.classList.toggle('display-none');
};  
function signUpPop(){
    signUpPopUp.classList.toggle('display-none');
};
sign.children[0].addEventListener('click',loginPop);
sign.children[1].addEventListener('click',signUpPop);
cancelBtn[0].addEventListener('click', loginPop);
cancelBtn[1].addEventListener('click', signUpPop);


//inputReset
cancelBtn[0].addEventListener('click',function(){
    loginPopupForm.reset();
    
})
cancelBtn[1].addEventListener('click',function(){
    signPopupForm.reset();

})

//inspection
function inspection(){
    const reg = new RegExp(/[a-zA-Z0-9]*@[a-zA-z]*\.[a-zA-Z]{2,3}/);
    const reg2 = new RegExp(/[a-zA-Z0-9]*@[a-zA-z]*\.[a-zA-Z]{2,3}/);
    if(loginPopupForm.children[2].value.match(reg) === null){
        alert("이메일형식 틀렸습니다.");       
        return false;
    };
    alert('회원가입이 완료되었습니다.');
    return true
};

loginPopupForm.addEventListener("submit", inspection)