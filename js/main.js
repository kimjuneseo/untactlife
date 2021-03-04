window.onload = function () {
    const sign = document.querySelector('.sign');
    const cancelBtn = document.querySelectorAll('.cancel');
    const slideUl = document.querySelector('.slide ul');
    const slideCansl = document.querySelector('.slideCansle');
    const slideGo = document.querySelector('.slideGo');
    const nextBtn = document.querySelector('.next');
    const backBtn = document.querySelector('.backWards');
    const loginPopUp = document.querySelector('.popup');
    const signUpPopUp = document.querySelector('.popup2');
    // const loginButton = document.querySelector('.signUpBtn');


    //popup
    function loginPop() {
        loginPopUp.classList.toggle('display-none');
    };
    function signUpPop() {
        signUpPopUp.classList.toggle('display-none');
    };
    sign.children[0].addEventListener('click', loginPop);
    sign.children[1].addEventListener('click', signUpPop);
    cancelBtn[0].addEventListener('click', loginPop);
    cancelBtn[1].addEventListener('click', signUpPop);
    // loginButton.addEventListener('click',signUpPop)

    //inputReset
    cancelBtn[0].addEventListener('click', function () {
        loginPopupForm.reset();

    })
    // cancelBtn[1].addEventListener('click', function () {
    //     signPopupForm.reset();

    // })

    //inspection
    // function inspection() {
    //     const reg = new RegExp(/[a-zA-Z0-9]*@[a-zA-z]*\.[a-zA-Z]{2,3}/);
    //     if (loginPopupForm.children[2].value.match(reg) === null) {
    //         alert("이메일형식 틀렸습니다.");
    //         return false;
    //     };
    //     alert('회원가입이 완료되었습니다.');
    //     return true
    // };

    // loginPopupForm.addEventListener("submit", inspection)
    // signPopupForm.addEventListener("submit", console.log(2))

    const joinForm = document.querySelector(".popup2 form");
    const joinInput = document.querySelector('.form2 input')
    joinForm.addEventListener("submit", event => {
        event.preventDefault();
        console.log(joinInput.children[1])
        if (joinForm.children[2].value === "") {
            alert("이름을 입력해주세요");

            return false;
        };

        const regExp = new RegExp(/[A-Za-z0-9]*@[A-Za-z]*\.[a-zA-Z]{2,3}/);
        if (joinForm.children[4].value.match(regExp) === null) {
            alert("이메일 형식이 일치하지 않습니다");

            return false;
        };

        const regExp2 = new RegExp(/[~!@#$%^&*()_+|<>?:{}]/g);
        if (joinForm.children[6].value.match(regExp2)) {
            alert("비밀번호에 특수문자는 입력할 수 없습니다");

            return false;
        };
        if (joinForm.children[6].value.match(new RegExp(/[A-Z]/g)) === null) {
            alert("비밀번호에 대문자를 한개 이상 포함해주세요");

            return false;
        };
        if (joinForm.children[6].value.match(new RegExp(/[0-9]/g)) === null) {
            alert("비밀번호에 숫자를 한개 이상 포함해주세요");

            return false;
        };

        if (joinForm.children[8].value !== joinForm.children[3].value) {
            alert("비밀번호가 다릅니다.")

            return false;
        }

        alert("회원가입 되었습니다");
        joinForm.children.reset();
    });

    // slide
    let count = 1
    function slide() {
        if (count > slideUl.children.length - 1) count = 0;

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
    nextBtn.addEventListener('click', function () {
        count++;
    });
    backBtn.addEventListener('click', function () {
        count--;
    });
};