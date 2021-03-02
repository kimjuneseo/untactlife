window.onload = function() {
    const sign  = document.querySelector('.sign');
    const cancelBtn = document.querySelectorAll('.cancel');
    const slideUl = document.querySelector('.slide li');
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
    function loginReset() {
        loginPopupForm.reset();
    }
    function signReset() {
        signPopupForm.reset();
    }
    cancelBtn[0].addEventListener('click',loginReset)
    cancelBtn[1].addEventListener('click',signReset)
    
    //inspection
    function inspection(){
        const reg = new RegExp(/[a-zA-Z0-9]*@[a-zA-z]*\.[a-zA-Z]{2,3}/);
        const rrt = new RegExp(/[])
        if(loginPopupForm.children[2].value.match(reg) === null){
            alert("이메일형식 틀렸습니다.");       
            return false;
        };
        alert('회원가입이 완료되었습니다.');
        
    };
    
    loginPopupForm.addEventListener("submit", inspection)
    
    // slide
    let count = 1
    function slide() {
        for (let i = 0; i < count, count < 3; i++) {
            slideUl.style.marginTop = -300 * count + "px";
            slideUl.style.transition = 0.7 + "s";
            count++;
            return;
        };
        count = 0;
    };
    let set = setInterval(slide, 1500);
    
    function stop() {
        clearInterval(set);
    };
    function go() {
        setInterval(slide, 1500);
    };
    function next() {
        count++;
    };
    function backWards() {
        count--;
    };

    slideCansl.addEventListener('click', stop);
    slideGo.addEventListener('click', go);
    nextBtn.addEventListener('click', next);
    backBtn.addEventListener('click', backWards);
};