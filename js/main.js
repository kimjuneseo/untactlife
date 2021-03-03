window.onload = function() {
    const sign  = document.querySelector('.sign');
    const cancelBtn = document.querySelectorAll('.cancel');
    const slideUl = document.querySelector('.slide ul');
    const slideCansl = document.querySelector('.slideCansle');
    const slideGo = document.querySelector('.slideGo');
    const nextBtn = document.querySelector('.next');
    const backBtn = document.querySelector('.backWards');
    const loginPopUp = document.querySelector('.popup');
    const signUpPopUp = document.querySelector('.popup2');
    let loginPopupForm = document.querySelector(".popup form");
    let signPopupForm = document.querySelector(".popup2 form");
    
    
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
    
    // slide
    let count = 1
    function slide() {
        if(count > slideUl.children.length - 1) count = 0;

        for (let i = 0; i < slideUl.children.length - 1; i++) {
            slideUl.children[i].style.marginTop = -300 * count + "px";
            slideUl.children[i].style.transition = 0.7 + "s";
            count++;
            return;
        };
    };
    let set = setInterval(slide, 3000);
    
    function stop() {
        clearInterval(set);
    };
    function go() {
        setInterval(slide, 3000);
    };

    slideCansl.addEventListener('click', stop);
    slideGo.addEventListener('click', go);
    nextBtn.addEventListener('click', function(){
        count++;
    });
    backBtn.addEventListener('click', function(){
        count--;
    });
};